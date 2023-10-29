const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')//middleware logger

dotenv.config({path:'config.env' })
const DB=require('./config/DB')
const categoryRouter=require('./Routes/categoryRoute')

//connect DB
DB()
//app
const app=express();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/api/v1/categories",categoryRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Running Done on port ${process.env.PORT}`)
})