const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    starRating: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: new Date(Date.now()).toLocaleDateString('en-IN')
    }
});

module.exports = mongoose.model("reviews", reviewSchema);