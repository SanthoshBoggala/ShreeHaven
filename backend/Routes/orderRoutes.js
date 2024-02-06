const express = require('express');
const router = express.Router();

const validateToken = require('../Middlewares/validateToken');
const {
    getAllOrders,
    getAllMyOrders,
    getSingleOrder,
    addToOrders,
    delOrder,
    updateOrder
} = require('../Controllers/orderControllers');


router.route("/").get( getAllOrders);
router.route("/").post( addToOrders);
router.route("/user").get( getAllMyOrders);
router.route("/:id").get( getSingleOrder);
router.route("/:id").put( updateOrder);
router.route("/:id").delete( delOrder);

module.exports = router;