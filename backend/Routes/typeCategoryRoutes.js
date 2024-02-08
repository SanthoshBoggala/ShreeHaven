const express = require('express');
const router = express.Router();
const validateToken = require('../Middlewares/validateToken');

const {
    getAllTypesCategories,
    addTypesCategories,
    removeTypesCategories
} = require('../Controllers/typesCategoriesControllers');


router.route("/").get( validateToken, getAllTypesCategories);
router.route("/").post( validateToken, addTypesCategories);
router.route("/:id").delete( validateToken, removeTypesCategories);

module.exports = router;