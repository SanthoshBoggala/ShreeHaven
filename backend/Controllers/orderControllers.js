const asyncHandler = require('express-async-handler');
const Products = require('../Models/productModel');
const Orders = require('../Models/ordersModel');


const getAllOrders = asyncHandler(async (req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'admin' ) {
    //     res.status(401);
    //     throw new Error('only admins can access');
    // }
    const orders = await Orders.find()
    res.json({ orders });
});
const getAllMyOrders = asyncHandler(async (req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'customer' ) {
    //     res.status(401);
    //     throw new Error('only customers can access');
    // }
    const orders = await Orders.find()
    res.json({ orders });
});
const getSingleOrder = asyncHandler(async (req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'customer' ) {
    //     res.status(401);
    //     throw new Error('only customers can access');
    // }
    const order = await Orders.findById(req.params.id)
    res.json({ order });
});
const addToOrders = asyncHandler(async(req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'customer' ) {
    //     res.status(401);
    //     throw new Error('only customers can access');
    // }
    const { key, size, quantity, price } = req.body;

    if(!size || !quantity || !price || !key){
        res.status(400);
        throw new Error("provide all fields");
    }

    const productExists = await Products.findOne({ key });
    if(!productExists) {
        res.status(400);
        throw new Error('product not exists');
    }

    const currentDate = new Date();
    const dateAfter6Days = new Date(currentDate);
    dateAfter6Days.setDate(currentDate.getDate() + 6);

    const order = await Orders.create( 
    {   
            product: productExists._id,
            size,
            quantity,
            price,
            expectedDeliveryDate: dateAfter6Days
    });

    res.json({order});
});

const updateOrder = asyncHandler(async (req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'admin' ) {
    //     res.status(401);
    //     throw new Error('only admins can access');
    // }
    const orderId = req.params.id;
    const { status } = req.body;

    if (!orderId || !status) {
        res.status(400);
        throw new Error("Please provide orderId and status");
    }
    const statusOptions = ['Pending', 'Failed', 'Delivered', 'Return Pending'];
    if (!statusOptions.includes(status)) {
        res.status(400);
        throw new Error("status is invalid");
    }

    const orderData = await Orders.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
    );

    res.json({ orderData });
});
const delOrder = asyncHandler(async (req, res) => {
    // const { userId, type } = req.user
    // if( type !== 'customer' ) {
    //     res.status(401);
    //     throw new Error('only customers can access');
    // }
    const order = await Orders.findByIdAndDelete(req.params.id);
    res.json({order});
});



module.exports = {
    getAllOrders,
    getAllMyOrders,
    getSingleOrder,
    addToOrders,
    delOrder,
    updateOrder
}
