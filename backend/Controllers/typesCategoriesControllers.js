const asyncHandler = require('express-async-handler');
const TypeCategory = require('../Models/typeCategoryModel');

const getAllTypesCategories = asyncHandler(async(req, res)=>{
    const {type} = req.query 

    let typecategories
    if(type) {
        typecategories = await TypeCategory.findOne({ type })
    }
    else {
        typecategories = await TypeCategory.find();
    }
    res.json({typecategories});
});
const addTypesCategories = asyncHandler(async(req, res)=>{

    const { productType, category } = req.body;


    if(productType && !category ) {
        const typecategory = await TypeCategory.findOne({ type: productType });
        if(typecategory) {
            res.status(400);
            throw new Error('Product type already exists');
        }
        const newType = await TypeCategory.create({ type: productType, categories: [] });

        res.json({newType});
    }
    else if( productType && category )
    {
        let typecategory = await TypeCategory.findOne({ type: productType });
        if(!typecategory) {
            typecategory = await TypeCategory.create({ type: productType, categories: [] });
        }

        const categoryExists = typecategory.categories.find( cat => cat.category === category );
        if(categoryExists) {
            res.status(400);
            throw new Error('Category already exists');
        }

        typecategory.categories.push( {category} );
        const updatedTypeCategory = await typecategory.save();

        res.json({updatedTypeCategory})
    }
    else {
        res.status(400);
        throw new Error('Invalid');
    }
});
const removeTypesCategories = asyncHandler(async(req, res)=>{
    res.json({msg: 'work on later'})
});

module.exports = {
    getAllTypesCategories,
    addTypesCategories,
    removeTypesCategories
}