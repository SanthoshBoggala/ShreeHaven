const express = require('express');
const router = express.Router();

const validateToken = require('../Middlewares/validateToken');
const {
    getAllProducts,
    getSingleProduct,
    postSingleProduct,
    putSingleProduct,
    deleteSingleProduct
}   = require('../Controllers/productsControllers')


router.route("/").get(getAllProducts)
router.route("/:id").get(getSingleProduct)
router.route("/").post(postSingleProduct)
router.route("/:id").put(putSingleProduct)
router.route("/:id").delete(deleteSingleProduct)

module.exports = router;