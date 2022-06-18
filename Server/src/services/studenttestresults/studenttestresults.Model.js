const Joi = require('joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb')




const schema = Joi.object({

    _id : objectId(),
    student : objectId().required(),
    test : objectId().required(),
    grade  : objectId().required(),
    obtainedMarks : Joi.number().required()
   

})

module.exports.schema = schema;
