const asyncHandler = require('express-async-handler');
const products = require('../Models/productModel');
const orders = require('../Models/ordersModel');


const getAllOrders = asyncHandler(async(req, res)=>{
    const {userId} = req.user;

    const ordersData = await orders.findOne({user : userId}).populate('orders.product');

    res.json({"orders": ordersData});
});

const addToOrders = asyncHandler(async(req, res)=>{
    const {userId} = req.user;
    const {productKey} = req.body;

    const data = await products.findOne({productKey});

    if(!data){
        res.status(400);
        throw new Error("Invalid product key");
    }

    const newOrder = { ...req.body };
    delete newOrder.productKey;

    const userExists = await orders.findOne({user : userId})

    if(!userExists) {
        await orders.create({user : userId, orders: []})
    }

    const orderData = await orders.findOneAndUpdate(
        {user : userId},
        {$push: {orders: {
            ...newOrder,
            product : data._id
                }}
        },
        {new: true}
    )
    res.json({orderData});
});

const delOrder = asyncHandler(async(req, res)=>{
    const {userId} = req.user;
    const { orderId } = req.body;

    if(!orderId) {
        res.status(400);
        throw new Error("please provide order id");
    }
    const orderData = await orders.findOneAndUpdate(
        {user : userId},
        {$pull: {orders: { _id : orderId}}},
        {new: true}
    )
    res.json({orderData});
});

const updateOrder = asyncHandler( async (req, res)=>{

    const {orderId, newStatus} = req.body;

    const statusOptions = ['Pending', 'Failed', 'Delivered', 'Return Pending'];
    if(!statusOptions.includes(newStatus)) {
        res.status(400);
        throw new Error("status is invalid");
    }

    if (!orderId || !newStatus) {
        res.status(400);
        throw new Error("Please provide orderId and newStatus");
    }

    const orderData = await orders.findOneAndUpdate(
        { 'orders._id' : orderId }, 
        { $set: { 'orders.$.status': newStatus } },
        {new: true}
    );
    
    res.json({orderData});
});

module.exports = {
    getAllOrders,
    addToOrders,
    delOrder,
    updateOrder
}
