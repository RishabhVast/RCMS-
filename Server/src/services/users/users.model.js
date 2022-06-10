const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
 firsName :  Joi.string().min(5).max(50).required(),
 lastName :  Joi.string().min(5).max(50).required(),
 userName :  Joi.string().min(5).max(50).required(),
 email    :  Joi.string().min(5).max(255).required(),
 phone    : Joi.string().min(10).max(20).required(),
 password : Joi.string().min(8).max(1024).required(),
 isAdmin  : Joi.boolean().default(false),
 isActive :  Joi.boolean().default(false),
  

});

module.exports.schema = schema;
