const express = require('express');
const router = express.Router();
const validateToken = require('../Middlewares/validateToken');
const {
    getCartItems, addToCartItems, removeFromCartItems
} = require('../Controllers/cartControllers');


router.route("/").get(validateToken, getCartItems);
router.route("/").post(validateToken, addToCartItems);
router.route("/").put(validateToken, removeFromCartItems);

module.exports = router;