const express = require('express');
const router = express.Router();

const upload = require('../Middlewares/uploadFiles');
const validateToken = require('../Middlewares/validateToken');
const {
    getAllProducts,
    getAllHotProducts,
    getAllTrendingProducts,
    getAllTopRatedProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}   = require('../Controllers/productsControllers');


router.route("/").get( validateToken, getAllProducts);

router.route("/hot_deals").get( validateToken, getAllHotProducts);
router.route("/trending_deals").get( validateToken, getAllTrendingProducts);
router.route("/top_rated").get( validateToken, getAllTopRatedProducts);

router.route("/:id").get( validateToken, getSingleProduct);
router.route("/").post( validateToken, upload.array('files[]'), postSingleProduct);
router.route("/:id").put( validateToken, upload.array('files[]') , putSingleProduct);
router.route("/:id").delete( validateToken, deleteSingleProduct);

module.exports = router;