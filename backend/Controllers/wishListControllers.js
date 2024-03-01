const asyncHandler = require('express-async-handler')
const WishListItems = require('../Models/wishListModel')
const Products = require('../Models/productModel')

const getWishListItems = asyncHandler(async (req, res) => {
    const { type } = req.user
    if (type !== 'admin') {
        res.status(401)
        throw new Error('only admins can access')
    }
    const wishListItems = await WishListItems.find()

    res.json({ wishListItems })
})

const addToWishList = asyncHandler(async(req, res)=>{
    const {userId, type } = req.user
    if (type !== 'customer') {
        res.status(401)
        throw new Error('only customers can access')
    }

    const { key } = req.body

    if (!key) {
        res.status(400)
        throw new Error("Provide all fields")
    }
    const product = await Products.findOne({ key })

    if (!product) {
        res.status(400)
        throw new Error("Product not found")
    }

    let wishListItems = await WishListItems.findOneAndUpdate({ user : userId })
    if(!wishListItems){
        wishListItems = await WishListItems.create({
            user: userId,
            products: []
        })
    }

    wishListItems = await WishListItems.findOneAndUpdate(
        { user: userId }, 
        { $push: { products: {product : product._id} } }
    )
    
    res.json({ wishListItems })
})

const removeFromWishList = asyncHandler(async (req, res) => {
    const { userId, type } = req.user;
    if (type !== 'customer') {
        res.status(401);
        throw new Error('only customers can access')
    }
    const { key } = req.body

    if (!key) {
        res.status(400)
        throw new Error("Provide all fields")
    }
    const product = await Products.findOne({ key })

    if (!product) {
        res.status(400)
        throw new Error("Product not found")
    }

    const wishListItems = await WishListItems.findOneAndUpdate(
        { user: userId },
        { $pull: { products: { product: product._id } } },
        { new: true }
    )

    res.json({ wishListItems })
})

module.exports = {
    getWishListItems,
    addToWishList,
    removeFromWishList
}