// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected');
    } catch (error) {
        console.error('Connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};


module.exports = connectDB;
