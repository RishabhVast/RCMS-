const Joi = require('joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb');





const schema = Joi.object({

    _id :        objectId(),
    standard :  objectId().required(),
    division :  objectId().required(),
    subject  :  objectId().required(),
    name     :      Joi.string().min(3).max(50).required(),
    totalMarks :    Joi.number().required(),
    highestMarks :  Joi.number().default(0),
    averageMarks :  Joi.number().default(0),
    year       :    Joi.number().required()

})

module.exports.schema = schema;
