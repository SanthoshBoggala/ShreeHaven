const asyncHandler = require('express-async-handler')
const cart = require('../Models/cartModel');
const products = require('../Models/productModel');

const getCartItems = asyncHandler(async(req, res)=>{
    const {userId} = req.user;

    const cartItems = await cart.findOne({user : userId}).populate('items.product');

    res.json({cartItems});
})

const addToCartItems = asyncHandler(async(req, res)=>{
    const {userId} = req.user;
    const {productKey} = req.body;

    if(productKey) {
        
        const product = await products.findOne({productKey});

        if(!product){
            res.status(400);
            throw new Error("Product Invalid");
        }

        let userExists;
        
        userExists = await cart.findOne({user : userId})

        if(!userExists) {
            userExists = await cart.create({user : userId, items: []})
        }

        const userCartProducts  = userExists.items;
        const productAlreadyExists = userCartProducts.find( (x) => x.product.equals(product._id) );
        let cartItems;

        if(productAlreadyExists) {
            cartItems = userExists;
        }
        else{
            cartItems = await cart.findOneAndUpdate(
                {user : userId},
                {$push: {items: {product: product._id}}},
                {new: true}
            )
        }
        
        res.json({cartItems})
    }
    else {
        res.status(400);
        throw new Error("Product Key is not provided");
    }
})

const removeFromCartItems = asyncHandler(async(req, res)=>{
    const {userId} = req.user;
    const {productKey} = req.body;

    if(!productKey) {
        res.status(400); 
        throw new Error("Product Key is not provided");
    }
    const product = await products.findOne({productKey});
    
    if(!product){
        res.status(400);
        throw new Error("Product Invalid");
    }

    const newCart = await cart.findOneAndUpdate(
        {user : userId},
        {$pull: {items: {product : product._id}}},
        {new: true}
    );

    res.json({"cartItems" : newCart});
});

module.exports = {
    getCartItems,
    addToCartItems,
    removeFromCartItems
}
