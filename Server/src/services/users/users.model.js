const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
_id: objectId(),
 firstName :  Joi.string().min(3).max(50).required(),
 lastName :  Joi.string().min(3).max(50).required(),
 userName :  Joi.string().min(3).max(50).required(),
 email    :  Joi.string().min(5).max(255).required(),
 phone    :  Joi.string().min(10).max(20).required(),
 password :  Joi.string().min(8).max(1024).required(),
 isActive :  Joi.boolean().default(false),
 isAdmin   : Joi.boolean().default(false)
 
  

});

module.exports.schema = schema;
