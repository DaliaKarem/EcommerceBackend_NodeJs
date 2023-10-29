const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')//middleware logger

dotenv.config({path:'config.env' })
const DB=require('./config/DB')
const categoryRouter=require('./Routes/categoryRoute')
const ApiError = require('./utils/apiError')

//connect DB
DB()
//app
const app=express();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/api/v1/categories",categoryRouter)
app.all('*',(req,res,next)=>{
    next(new ApiError(`Error ${req.originalUrl} Doesn't Exist`,400))
})
//Error Handler with Express Middleware
app.use((err,req,res,next)=>{

    res.status(err.statusCode).json({Error:err,massege:err.massege,stack:err.stack})
})


app.listen(process.env.PORT,()=>{
    console.log(`Running Done on port ${process.env.PORT}`)
})