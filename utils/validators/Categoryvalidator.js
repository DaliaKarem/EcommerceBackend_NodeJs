const { check} = require('express-validator');
const validatorMiddelWare=require('../../middleware/validator')

exports.validateSpecificCateg=[
    check('id').isMongoId().withMessage('Invalid Id'),
     validatorMiddelWare,
]