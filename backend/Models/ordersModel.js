const mongoose = require('mongoose');

const ordersModel = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required : [true, "pls provide userId"],
        unique: true
    },
    orders: [{
        product : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true,

        },
        count : {
            type: Number,
            required: true
        },
        size : {
            type: String,
            enum : ['xs','s', 'm', 'l', 'xl', 'xxl','28', '30', '32', '34', '36', '38', '40']
        },
        color : {
            type: String,
            enum : ['red', 'white', 'green', 'Blue']
        },
        price : {
            type: Number,
            required: [true, "pls provide order price"]
        },
        status : {
            type: String,
            enum: ['Pending', 'Failed', 'Delivered', 'Return Pending'],
            default: 'Pending'
        },
        time: {
            type: Date,
            default: Date.now
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
})

module.exports = mongoose.model("Orders", ordersModel);