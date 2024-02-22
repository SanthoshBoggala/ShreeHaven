const express = require('express');
const router = express.Router();

const upload = require('../Middlewares/uploadFiles');
const validateToken = require('../Middlewares/validateToken');
const {
    getAllProducts,
    getAllHotProducts,
    getAllTrendingProducts,
    getAllTopRatedProducts,
    getAllSimilarProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}   = require('../Controllers/productsControllers');


router.route("/").get( getAllProducts);

router.route("/hot_deals").get( getAllHotProducts);
router.route("/trending_deals").get( getAllTrendingProducts);
router.route("/top_rated").get( getAllTopRatedProducts);
router.route("/similar_products").get( getAllSimilarProducts);


router.route("/:id").get( getSingleProduct);
router.route("/").post( postSingleProduct);
router.route("/:id").put(  putSingleProduct);
router.route("/:id").delete( deleteSingleProduct);

module.exports = router;