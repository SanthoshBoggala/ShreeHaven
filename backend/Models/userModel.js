const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "pls provide username"]
      },
    email: {
        type: String,
        required: [true, "pls provide unique email"],
        unique: [true, "pls provide unique email"]
      },
    address: {
        type: String,
        required: [true, "pls provide address"]
      },
    pincode: {
        type: String,
        required: [true, "pls provide pincode"]
      },
    password: {
        type: String,
        required: [true, "pls provide password"]
      },
})

module.exports = mongoose.model("Users", userModel);