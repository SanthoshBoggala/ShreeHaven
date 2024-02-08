const asyncHandler = require("express-async-handler"); 
const Products = require('../Models/productModel');

const getAllProducts = asyncHandler(async (req, res) => {

    const products = await Products.find();

    res.json({products});
});

const getAllHotProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = await Products.find().sort({ discount: -1 });
    if(limit) {
        products = products.limit(parseInt(limit));
    }

    res.json({products});
});

const getAllTrendingProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = await Products.find().sort({ ratings: -1 });
    if(limit) {
        products = products.limit(parseInt(limit));
    }

    res.json({products});
});

const getAllTopRatedProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = await Products.find().sort({ starRating: -1 });
    if(limit) {
        products = products.limit(parseInt(limit));
    }

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
        name, brand, price, category, type ,discount = 0, starRating = 0, ratings = 0,
        description
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

    const newPrice = modifiedPrice(Number(price), Number(discount));

    let inStock = req.body.inStock === 'true' ? true : false
    let data = {
        key, name, brand, category, type, price, newPrice, discount, inStock, ratings, starRating, description
    }
    let product = await new Products( data );


    if(req.files) {
        let pathArray = req.files.map(file => file.path.split('/').slice(-2).join('/'));
        
        product.images = pathArray.join(',');
    }

    product.save();

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
    let pathArray = productExists.images;

    if(req.files && req.files.length > 0) {
        let imagesPath = req.files.map(file => file.path.split('/').slice(-2).join('/'));
        
        console.log(imagesPath.join(','));

        pathArray = imagesPath.join(',');
        
    }
    if(newPrice != 0){
        product = await Products.findOneAndUpdate(
            {key: req.params.id},
            {...req.body, newPrice , images: pathArray},
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
    getAllHotProducts,
    getAllTrendingProducts,
    getAllTopRatedProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}