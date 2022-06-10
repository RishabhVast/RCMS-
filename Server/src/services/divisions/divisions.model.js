const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId,
  name: Joi.string().min(3).max(10).required(),
});

module.exports.schema = schema;