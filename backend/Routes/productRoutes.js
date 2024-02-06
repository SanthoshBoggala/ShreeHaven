const express = require('express');
const router = express.Router();

const validateToken = require('../Middlewares/validateToken');
const {
    getAllProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}   = require('../Controllers/productsControllers');


router.route("/").get( validateToken, getAllProducts);
router.route("/:id").get( validateToken, getSingleProduct);
router.route("/").post( validateToken, postSingleProduct);
router.route("/:id").put( validateToken, putSingleProduct);
router.route("/:id").delete( validateToken, deleteSingleProduct);

module.exports = router;