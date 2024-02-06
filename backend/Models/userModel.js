const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "pls provide username"]
  },
  email: {
    type: String,
    required: [true, "pls provide unique email"],
    unique: [true, "pls provide unique email"]
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  area: {
    type: String,
    required: [true, "pls provide area"]
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
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

module.exports = mongoose.model("users", userSchema);