class ApiError extends Error{
    constructor(msg,statusCode)
    {
        super(msg);
        this.statusCode=statusCode
        this.status=`${statusCode}`.startsWith(4)?'fail' :'error';

    }
}
module.exports=ApiError