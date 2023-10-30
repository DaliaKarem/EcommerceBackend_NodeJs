const Error=(err,req,res,next)=>{
if(process.env.NODE_ENV=="development")
{
    sendForDev(err,res);
}else{
    sendForProduct(err,res);
}
  
}
const sendForDev=(err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        Error:err,
        massege:err.massege,
        stack:err.stack
    })
}
const sendForProduct=(err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,

        massege:err.massege,
    })
}
module.exports=Error