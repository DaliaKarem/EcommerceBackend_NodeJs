const {addCategory,getAllCategories,getSpacificCategory}=require('../services/categoryServices')
const express=require('express')
const router=express.Router()
//router.post("/",addCategory)
router.route("/").post(addCategory).get(getAllCategories)
router.route("/:id").get(getSpacificCategory)

//router.get("/",getAllCategories)
module.exports=router
