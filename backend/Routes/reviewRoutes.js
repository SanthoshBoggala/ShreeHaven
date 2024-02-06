const express = require('express');
const router = express.Router();

const {
    getAllReviews,
    getAllMyReviews,
    getSingleReview,
    postSingleReview,
    putSingleReview,
    deleteSingleReview
}   = require('../Controllers/reviewControllers');


router.route("/").get(getAllReviews);
router.route("/user").get(getAllMyReviews);
router.route("/:id").get(getSingleReview);
router.route("/").post(postSingleReview);
router.route("/:id").put(putSingleReview);
router.route("/:id").delete(deleteSingleReview);

module.exports = router;