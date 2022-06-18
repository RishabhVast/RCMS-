// studenttestresults-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html



// for more of what you can do here.
module.exports = function (app) {

  const  getStudentSchema = require('./schema/studentSchema');
  const  getTestSchema  = require('./schema/testSchema');
  const   getGradeSchema = require('./schema/gradeSchema')

  const modelName = 'studenttestresults';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
  


    student :{
      type : getStudentSchema(app),
      required : true
    },

    test :{
      type : getTestSchema(app),
      required : true
    },

    grade :{
      type : getGradeSchema(app),
      required : true
    },

    obtainedMarks :{
      type : Number,
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
