const express = require('express');
const router = express.Router();

const validateToken = require('../Middlewares/validateToken');
const {
    getAllOrders,
    addToOrders,
    delOrder,
    updateOrder
} = require('../Controllers/orderControllers');


router.route("/").get(validateToken, getAllOrders);
router.route("/").post(validateToken, addToOrders);
router.route("/").delete(validateToken, delOrder);
router.route("/").put(validateToken, updateOrder);

module.exports = router;