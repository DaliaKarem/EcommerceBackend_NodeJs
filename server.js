const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')//middleware logger
const mongoose=require('mongoose')

dotenv.config({path:'config.env' })
mongoose.connect(process.env.DB_URI)
.then((con)=>{console.log(`DB connectes ${con.connection.host}`)})
.catch((error)=>{console.error(`DataError ${error}`),process.exit(1)});


const app=express();
//middleware
app.use(express.json())
app.use(morgan('dev'))

//schema
const {Schema}=mongoose;
const CateSchema=new Schema({
    name:String
})
//convert schema
const CateModel=mongoose.model("Category",CateSchema);

//Routes
app.post("/",(req,res)=>{
    const name=req.body.name;
    console.log(name)
    const newCate=new CateModel({name})
    newCate.save().then((doc)=>{
        res.json(doc)
    }).catch((error)=>{
        res.json(error)
    })
})

app.get('/',(req,res)=>{
    res.send('HIIIII welcome Home')
})

app.listen(process.env.PORT,()=>{
    console.log(`Running Done on port ${process.env.PORT}`)
})