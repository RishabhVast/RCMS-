const Joi = require('joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb')




const schema = Joi.object({

    _id : objectId(),
    standard : objectId().required(),
    division : objectId().required(),
    firstName : Joi.string().min(3).max(50).required(),
    lastName : Joi.string().min(3).max(50).required(),
    middleName : Joi.string().min(3).max(50).required(),
    isActive : Joi.boolean().default(false),
    year       : Joi.string().required(),
    phone :     Joi.string().min(10).max(10).required(),
    email :     Joi.string().required(),
    dob   :     Joi.date().required(),
    parents : Joi.object().keys({
           
        firstName : Joi.string().min(3).max(50).required(),
        lastName :  Joi.string().min(3).max(50).required(),
        phone :     Joi.string().min(10).max(10).required(),
        email :     Joi.string().required(),
        address1 :  Joi.string().required(),
        address2 :  Joi.string().required(),
        area  :     Joi.string().required(),
        city :      Joi.string().required(),
        state :     Joi.string().required(),
        zipcode :   Joi.string().required(),
        relationship : Joi.string().required(),

    }).required()

})

module.exports.schema = schema;
