const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')//middleware logger

dotenv.config({path:'config.env' })
const DB=require('./config/DB')
const categoryRouter=require('./Routes/categoryRoute')
const SubcategoryRouter=require('./Routes/subCategoryRoute')

const ApiError = require('./utils/apiError')
const Error=require('./middleware/errorHandling')
//connect DB
DB()
//app
const app=express();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/api/v1/categories",categoryRouter)
app.use("/api/v1/Subcategories",SubcategoryRouter)

app.all('*',(req,res,next)=>{
    next(new ApiError(`Error ${req.originalUrl} Doesn't Exist`,400))
})
//Error Handler with Express Middleware
app.use(Error)


app.listen(process.env.PORT,()=>{
    console.log(`Running Done on port ${process.env.PORT}`)
})