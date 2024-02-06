const asyncHandler = require("express-async-handler"); 
const products = require('../Models/productModel');

const getAllProducts = asyncHandler(async (req, res) => {

    const data = await products.find();

    res.json({data});
});

const getSingleProduct = asyncHandler(async (req, res) => {
    
    const productKey = req.params.id;
    const data = await products.findOne({productKey});
    if(!data){
        res.status(400);
        throw new Error("Invalid product Key");
    }
    res.json({data});
});

const postSingleProduct =  asyncHandler(async(req, res) => {
    const {
        name, productKey, brand, price, discount,category,
        starRating, ratings, description, reviews, image
    } = req.body;

    if(productKey) {
        const productExists = await products.findOne({ productKey });
        if(productExists) {
            res.json({"msg" : "product already exists"});
            return;
        }
    }

    const ModifiedPrice = (price, dis)=>{
        const nprice = (price * (100-dis))/100;
        return parseInt(nprice);
    }

    const actualDiscount = discount || 5;
    const actualStarRating = starRating || 3.5;
    const actualRatings = ratings || 299;
    const actualReviews = reviews || 47;

    const newPrice = ModifiedPrice(price, discount);

    if(name && productKey && brand && price && category && description && image ){
        const data = await products.create({
            name, productKey, brand, price, 
            discount : actualDiscount,
            category, newPrice,
            starRating : actualStarRating,
            ratings : actualRatings,
            description, 
            reviews : actualReviews,
            image
        });
        res.json({data});
        return;
    }
    res.status(400);
    throw new Error("Provide all specified fields"); 
});

const putSingleProduct = asyncHandler(async (req, res) => {

    const productKey = req.params.id;

    const data = await products.findOneAndUpdate(
        {productKey}, req.body, {new: true}
        );
    res.json({data});
});

const deleteSingleProduct = asyncHandler(async(req, res) => {

    const productKey = req.params.id;

    const data = await products.findOneAndDelete({productKey});
    
    res.json({data});
});

module.exports = {
    getAllProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}