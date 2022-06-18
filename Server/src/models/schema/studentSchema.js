


module.exports = function (app) {

  const getStandardSchema = require('./standardSchema');
  const getDivisionSchema = require('./divisionSchema');

 

    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const studentsSchema = new Schema({

      firstName : {
         type: String,
         minlength : 3,
         maxlength : 50,
         required: true 
        },

      middleName : {
         type: String,
         minlength : 3,
         maxlength : 50,
         required: true 
        },

      lastName : {
         type: String,
         minlength : 3,
         maxlength : 50,
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
 
        year : {
          type:  Number,
          required : true,

        },

        dob :{
          type : Date,
          
         
        },

        isActive : {
          type : Boolean,
          default : false
        },
      
        parents : [
          {
            firstName :{
              type : String,
               required : true,
               minlength : 3,
               maxlength : 50
            },
            lastName :{
              type : String,
               required : true,
               minlength : 3,
               maxlength : 50
            },
            phone :{
              type : String,
              required : true,
              minlength : 10,
              maxlength : 10
            },
            email :{
              type : String,
              required : true,

            },
            address1 :{
              type : String,
              required : true
            },
          
            address2 :{
              type : String,
              required : true
            },

            area :{
               type : String,
               require : true 
            },

            city :{
               type : String,
               required : true
            },

            state :{
              type : String,
              required : true
            },

            zipcode :{
              type : String,
              required: true
            },

            relationship:{
              type : String,
              required : true,

            }

          }
        ],
       
      

   

    }, {
      timestamps: true
    });
  return studentsSchema;
}