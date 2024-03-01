const { formatDistanceToNow } = require('date-fns')
const asyncHandler = require("express-async-handler"); 
const Products = require('../Models/productModel');


const getAllProducts = asyncHandler(async (req, res) => {
    const { limit, type, search } = req.query
    const filters = req.query

    let products
    if(type){
        products = Products.find({ type });
    }
    else{
        products = Products.find()
    }

    let cates = []
    const k = Object.keys(filters)

    k.map(one => {
        if(filters[one] == 'false'){
            cates.push(one)
        }
    })
    
    if(filters.sortOption){
        products = products.sort({newPrice: parseInt(filters.sortOption) })
    }

    if(cates.length !== 0){
        products = products.find({category: { $nin: cates} })
    }
    if(limit){
        products = products.limit(parseInt(limit))
    }
    if(search && search.length !== 0){
        products = products.find({ name: {$regex: `/${search}/`} })
    }
    products = await products.exec()

    res.json({products});
});

const getAllHotProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = Products.find().sort({ discount: -1 });
    if(limit) {
        products = products.limit(parseInt(limit));
    }
    products = await products.exec();
    res.json({products});
});

const getAllTrendingProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = Products.find().sort({ ratings: -1 });
    if(limit) {
        products = products.limit(parseInt(limit));
    }
    products = await products.exec();
    res.json({products});
});

const getAllTopRatedProducts = asyncHandler(async (req, res) => {
    const { limit } = req.query;

    let products = await Products.find().sort({ starRating: -1 });
    let topRated = {}
    let cateCaptions = []
    if(limit) {
        products.some(one => {
            if(!topRated[one.category]) {
                topRated[one.category] = one
            }
            if(topRated.length == limit) return true
            else return false
        });
        cateCaptions = ['New Range', 'Top Collection', 'Bestsellers', 'Specials', 'Popular', 'In Focus Now', "Don't Miss", 
                                     "Best Picks", "Most Loved", "Explore Now", "Widest Range"]

        function shuffleArray(cap) {
            for (let i = cap.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cap[i], cap[j]] = [cap[j], cap[i]];
            }
        }    
        
        shuffleArray(cateCaptions)

        products = Object.values(topRated)
    }
    res.json({products, cateCaptions});
});

const getAllSimilarProducts = asyncHandler(async (req, res)=>{
    const {key} = req.query

    let products = await Products.find()


    res.json({products})
})

const getSingleProduct = asyncHandler(async (req, res) => {
    
    let product = await Products.findOne({ key: req.params.id }).populate({
        path: 'reviews.review',
        populate: {
          path: 'user',
          model: 'users'
        }
      });
    if(!product) {
        res.status(400);
        throw new Error('product not found');
    }

    product.reviews.sort((a, b) => new Date(b.review.date) - new Date(a.review.date))

    res.json({product});
});

const postSingleProduct =  asyncHandler(async(req, res) => {
    const {
        name, brand, price, category, productType ,discount = 0, starRating = 0, ratings = 0,
        description, images
    } = req.body;
    const { userId, type } = req.user;

    if( type !== 'admin' ) {
        res.status(401);
        throw new Error('only admins can access');
    }

    if(!name || !brand || !price || !category || !productType || !description || !images){
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
        key, name, brand, category, type: productType, price, reviews : [], newPrice, discount, inStock, ratings, starRating, description
    }
    let product = await new Products( data );

    product.images = images
    product.save();

    res.json({product});
});

const putSingleProduct = asyncHandler(async (req, res) => {
    let { brand, price, category, productType ,discount, starRating, ratings,
    description, images } = req.body;
    const { userId, type } = req.user;

    if( type !== 'admin' ) {
        res.status(401);
        throw new Error('only admins can access');
    }

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
    let newProduct = req.body
    productType = newProduct.productType
    
    delete newProduct.productType
    if(productType) {
        newProduct = {...newProduct, type: productType}
    }
    if(newPrice !== 0){
        product = await Products.findOneAndUpdate(
            {key: req.params.id},
            {...newProduct, newPrice },
            {new: true}
        );
    }
    else{
        product = await Products.findOneAndUpdate(
            {key: req.params.id},
            {...newProduct},
            {new: true}
        );
    }

    res.json({product})
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
    getAllSimilarProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}