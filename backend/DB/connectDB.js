
const mongoose = require("mongoose");


const connectDB = async (connectUrl)=> {
    return mongoose.connect(connectUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;