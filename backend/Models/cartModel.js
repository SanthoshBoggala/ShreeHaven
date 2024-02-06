const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    items: [{
        product : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true,
            unique: true
        }
    }]
})

module.exports = mongoose.model("Carts", cartModel);