const Joi = require('joi')
const { objectId } = require('@feathers-plus/validate-joi-mongodb')




const schema = Joi.object({

    _id : objectId(),
    standard : objectId().required(),
    division : objectId().required(),
    subject  : objectId().required(),
    user     : objectId().required(),
    role     : objectId().required(),
    year       : Joi.number().required()

})

module.exports.schema = schema;
