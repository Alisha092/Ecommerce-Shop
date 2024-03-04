const express = require('express');
const app = express();
const connectToDB = require('./db/db');
require('dotenv').config();

connectToDB();


app.get('/', (req, res) => {
    res.send('Home Page')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
})