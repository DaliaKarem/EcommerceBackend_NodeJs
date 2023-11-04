const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

const subCateModel=require('../models/subCategoryModel');


const ApiError=require('../utils/apiError')

//des   Add SubCategory
//route  POST /api/v1/Subcategories
//acc    Admin(private)
exports.addSubCategory = asyncHandler(async (req, res) => {
    const { name, category } = req.body;
    const subCate = await subCateModel.create({
      name: name,
      slug: slugify(name),
       category, 
    });
    res.status(201).json({ data: subCate });
  });
//des   show Category
//route  GET /api/v1/Subcategories
//acc    All(public)
exports.getAllSubCategories = asyncHandler(async (req, res) => {
    const allSubCate = await subCateModel.find({});
    res.status(200).json({ length: allSubCate.length, data: allSubCate });
  });
  //des   show spacificCategory
  //route  GET /api/v1/Subcategories/:id
  //acc    All(public)
  exports.getSpacificSubCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const SubCate = await subCateModel.findById(id);
    if (!SubCate) {
      return next(new ApiError(`Error There is no SubCategory With this ID ${id}`, 404));
    }
    res.status(200).json({ data: SubCate });
  });
  
  //des   update spacificCategory
  //route  PUT /api/v1/Subcategories/:id
  //acc    Admin(private)
  exports.UpdateSpacificSubCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, categoryID } = req.body;
    const Cate = await subCateModel.findByIdAndUpdate(
      { _id: id },
      { name, slug: slugify(name), categoryID }, // Corrected property name
      { new: true } // Use { new: true } to get the updated document
    );
    if (!Cate) {
      return next(new ApiError(`Error There is no Category With this ID ${id}`, 404));
    }
    res.status(200).json({ data: Cate });
  });
  
  //des   Delete spacificCategory
  //route  Delete /api/v1/categories/:id
  //acc    Admin(private)
  exports.DeleteSpacificSubCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const Cate = await subCateModel.findByIdAndDelete(id);
    if (!Cate) {
      return next(new ApiError(`Error There is no Category With this ID ${id}`, 404));
    }
    res.status(204).json({ msg: `Done...Delete Category With this ID ${id}` });
  });