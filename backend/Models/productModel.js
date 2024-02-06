const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    productKey : {
        type : String,
        required : [true, "pls provide productKey"]
    },
    name : {
        type : String,
        required : [true, "pls provide productName"]
    },
    brand : {
        type : String,
        required : [true, "pls provide productBrand"]
    },
    category : {
        type : String,
        required : [true, "pls provide productcategory"]
    },
    price : {
        type : Number,
        required : [true, "pls provide price"]
    },
    newPrice : {
        type : Number,
        required : [true, "pls provide price"]
    },
    discount : {
        type : Number,
        default : 5
    },
    starRating : {
        type : Number,
        default: 3.5
    },
    ratings : {
        type : Number,
        default: 1288
    },
    reviews : {
        type : Number,
        default: 299
    },
    description : {
        type : String,
        required : [true, "pls provide description"]
    },
    image : {
        type : String,
        required : [true, "pls provide image"]
    }
});

module.exports = mongoose.model("Products", productModel);