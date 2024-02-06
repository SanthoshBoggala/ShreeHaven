const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user : {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Users',
        // required : [true, "pls provide userId"],
        default: "n"
    },
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,

    },
    size : {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status : {
        type: String,
        default: "Pending",
        enum: ['Pending', 'Failed', 'Delivered', 'Return Pending'], 
    },
    orderedDate: {
        type: Date,
        default: Date.now()
    },
    expectedDeliveryDate: {
        type: Date
    }
})

module.exports = mongoose.model("orders", orderSchema);