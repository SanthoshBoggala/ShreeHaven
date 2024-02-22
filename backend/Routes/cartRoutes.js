const express = require('express');
const router = express.Router();
const validateToken = require('../Middlewares/validateToken');

const {
    getCartItems, addToCartItems, removeFromCartItems, getMyCartItems
} = require('../Controllers/cartControllers');


router.route("/").get(  getCartItems);
router.route("/").post(  addToCartItems);
router.route("/user").get(  getMyCartItems)
router.route("/:id").put(  removeFromCartItems);

module.exports = router;