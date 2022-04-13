const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.NODE_ENV === 'development' ? process.env.DB_URI : process.env.DB_TEST_URI;

const connectDB = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
 
    console.log(`MongoDB connected ...`);
};

module.exports = connectDB;