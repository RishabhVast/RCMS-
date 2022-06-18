// userroles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html



// for more of what you can do here.
module.exports = function (app) {
  const getStandardSchema = require('./schema/standardSchema');
  const getDivisionSchema = require('./schema/divisionSchema');
  const getSubjectSchema = require('./schema/subjectSchema');
  const getUserSchema = require('./schema/userSchema');
  const getRoleSchema = require('./schema/roleSchema')

  const modelName = 'userroles';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({



    year: { 
      type: Number, 
      required: true 
    },
 
     standard :{
       type : getStandardSchema(app),
       required : true
     },
    
   division :{
  
     type : getDivisionSchema(app),
     required : true
   },

   subject : {
     type : getSubjectSchema(app),
     required : true
   },

   user : {
     type : getUserSchema(app),
     required : true
  },
 
   role : {
           
    type : getRoleSchema(app),
    required : true
   }



  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
