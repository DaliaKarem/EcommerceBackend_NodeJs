const {addCategory,getAllCategories,UpdateSpacificCategory,getSpacificCategory,DeleteSpacificCategory}=require('../services/categoryServices')
const express=require('express');
const {validateSpecificCateg,validateAddCateg,validateDeleteCateg,validateUpdateCateg}=require('../utils/validators/Categoryvalidator');
const router=express.Router()
//router.post("/",addCategory)
router.route("/").post(validateAddCateg,addCategory).get(getAllCategories)
router.route("/:id").get(validateSpecificCateg,getSpacificCategory).put(validateUpdateCateg,UpdateSpacificCategory).delete(validateDeleteCateg,DeleteSpacificCategory)

//router.get("/",getAllCategories)
module.exports=router

