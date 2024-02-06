const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'products'
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'users'
    // },
    starRating: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("reviews", reviewSchema);