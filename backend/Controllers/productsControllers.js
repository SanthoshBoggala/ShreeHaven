const asyncHandler = require("express-async-handler"); 
const Products = require('../Models/productModel');

const getAllProducts = asyncHandler(async (req, res) => {

    const products = await Products.find();

    res.json({products});
});

const getSingleProduct = asyncHandler(async (req, res) => {
    
    const product = await Products.findOne({ key: req.params.id });
    if(!product) {
        res.status(400);
        throw new Error('product not found');
    }
    res.json({product});
});

const postSingleProduct =  asyncHandler(async(req, res) => {
    const {
        name, brand, price, category, type ,discount = 0,
        starRating, ratings, description, reviews, inStock = true ,//images
    } = req.body;
    const { userId } = req.user;
    // if( type !== 'admin' ) {
    //     res.status(401);
    //     throw new Error('only admins can access');
    // }

    if(!name || !brand || !price || !category || !type || !description){
        res.status(400);
        throw new Error('provide all fields');
    }

    const key = name.split(' ').join('_');

    const productExists = await Products.findOne({ key });
    if(productExists) {
        res.json({msg : "product already exists"});
        return;
    }

    const modifiedPrice = (price, dis)=>{
        const nprice = (price * (100-dis))/100;
        return parseInt(nprice);
    }

    const newPrice = modifiedPrice(price, discount);

    const product = await Products.create({
        key, name, brand, price, category, type ,discount,
        starRating, ratings, description, reviews, inStock, newPrice
    });

    res.json({product});
});

const putSingleProduct = asyncHandler(async (req, res) => {
    const {price, discount} = req.body;
    const { userId, type } = req.user;
    // if( type !== 'admin' ) {
    //     res.status(401);
    //     throw new Error('only admins can access');
    // }

    const productExists = await Products.findOne({ key: req.params.id });
    if(!productExists) {
        res.status(400);
        throw new Error('product not found');
    }

    const modifiedPrice = (price, dis)=>{
        const nprice = (price * (100-dis))/100;
        return parseInt(nprice);
    }


    let newPrice = 0;
    if(price && discount){
        newPrice = modifiedPrice(parseInt(price), parseInt(discount));
    }
    else if(price) {
        newPrice = modifiedPrice(parseInt(price), productExists.discount);
    } 
    else if(discount) {
        newPrice = modifiedPrice(productExists.price, parseInt(discount));
    }   

    let product;
    if(newPrice != 0){
        product = await Products.findOneAndUpdate(
            {key: req.params.id},
            {...req.body, newPrice},
            {new: true}
        );
    }
    else{
        product = await Products.findOneAndUpdate(
            {key: req.params.id},
            {...req.body},
            {new: true}
        );
    }

    res.json({product});
});

const deleteSingleProduct = asyncHandler(async(req, res) => {
    const { userId, type } = req.user;
    // if( type !== 'admin' ) {
    //     res.status(401);
    //     throw new Error('only admins can access');
    // }
    const product = await Products.findOneAndDelete({ key: req.params.id });
    res.json({product});
});

module.exports = {
    getAllProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}