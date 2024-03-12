const express = require('express');
const router = express.Router();
const validateToken = require('../Middlewares/validateToken');

const {
    getAllTypesCategories,
    addTypesCategories,
    removeTypesCategories
} = require('../Controllers/typesCategoriesControllers');


router.route("/").get( getAllTypesCategories);
router.route("/").post( addTypesCategories);
router.route("/:id").delete( removeTypesCategories);

module.exports = router;