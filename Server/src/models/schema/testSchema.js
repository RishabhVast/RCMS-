const getStandardSchema = require('./standardSchema');
const getDivisionSchema = require('./divisionSchema');
const getSubjectSchema = require('./subjectSchema');


module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;

    const testSchema = new Schema({

      name: {
         type: String,
         minlength : 3,
         maxlength : 20,
         required: true },


         totalMarks :{
            type : Number,
            required : true,


         },

         year :{
            type : Number,
            required : true
         },

         highestMarks :{
            type : Number,
            default : 0,
           

         },

         averageMarks :{
            type : Number,
            default : 0,
          

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

    }, 

    {
      timestamps: true
    });
  return testSchema;
}