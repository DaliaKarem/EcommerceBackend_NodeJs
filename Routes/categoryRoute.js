const {addCategory,getAllCategories,UpdateSpacificCategory,getSpacificCategory,DeleteSpacificCategory}=require('../services/categoryServices')
const express=require('express')
const router=express.Router()
//router.post("/",addCategory)
router.route("/").post(addCategory).get(getAllCategories)
router.route("/:id").get(getSpacificCategory).put(UpdateSpacificCategory).delete(DeleteSpacificCategory)

//router.get("/",getAllCategories)
module.exports=router