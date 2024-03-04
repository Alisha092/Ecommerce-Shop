const express = require('express');
const app = express();
const connectToDB = require('./db/db');
const session = require('express-session');
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
require('dotenv').config();

const Product = require('./db/models/product');
const Purchase = require('./db/models/purchase');
const User = require('./db/models/user');
const Review = require('./db/models/review');

connectToDB();


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));


const sessionConfig = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/products', async(req, res) => {
    const products = await Product.find();
    res.render('products/index', {products});
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
})