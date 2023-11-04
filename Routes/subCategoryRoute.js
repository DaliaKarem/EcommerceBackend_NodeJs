const express=require('express');

const {addSubCategory,getAllSubCategories,UpdateSpacificSubCategory,getSpacificSubCategory,DeleteSpacificSubCategory}=require('../services/subcategoryServices')

const {validateSpecificSubCateg,validateAddSubCateg,validateDeleteSubCateg,validateUpdateSubCateg}=require('../utils/validators/subCategoryvalidator');

const router=express.Router({mergeParams: true});//allow to access params from other routes   
router.route("/").post(validateAddSubCateg,addSubCategory).get(getAllSubCategories)
router.route("/:id").get(validateSpecificSubCateg,getSpacificSubCategory).put(validateUpdateSubCateg,UpdateSpacificSubCategory).delete(validateDeleteSubCateg,DeleteSpacificSubCategory)

//router.get("/",getAllCategories)
module.exports=router

