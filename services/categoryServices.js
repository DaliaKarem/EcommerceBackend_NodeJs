const CateModel=require('../models/categoryModel')
var slugify = require('slugify')
const asyncHandler = require('express-async-handler')

//des   Add Category
//route  POST /api/v1/categories
//acc    Admin(private)
exports.addCategory=asyncHandler(async(req,res)=>{
    const name=req.body.name;
  const category=await CateModel.create({
        name:name,
        slug:slugify(name),
    });res.status(201).json({data:category})



}
)
//des   show Category
//route  GET /api/v1/categories
//acc    All(public)
exports.getAllCategories=asyncHandler(async(req,res)=>{
  const AllCate=await CateModel.find({}); 
  res.status(200).json({length:AllCate.length,data:AllCate}) 
})
//des   show spacificCategory
//route  GET /api/v1/categories/:id
//acc    All(public)
exports.getSpacificCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const Cate=await CateModel.findById(id); 
    if(!Cate)
    {
        res.status(404).json({msg:`Error There is no Category With this ID ${id}`}) 

    }
    res.status(200).json({data:Cate}) 

  })