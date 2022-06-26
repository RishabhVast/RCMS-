module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const userSchema = new Schema({
        
        firstName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
          },
          lastName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
          },
      
         email: {
              type: String,
              lowercase: true,
              minlength: 5,
              maxlength: 255,
              required: true
             },
      
          phone: {
            type: String ,
             required: true,
             minlength : 10,
             maxlength : 20,
          },
          userName: {
              type: String ,
              required: true,
              minlength: 3,
              maxlength: 50,
              unique : true,
          },
         
          password: { 
            type: String ,
             required: true,
             minlength: 8,
             maxlength: 1024
         },
          
      
          lastLoggedIn :{
            type : Date,
            default : Date.now()
            
          },
        
          isActive :{
          
             type : Boolean,
             required: true,
             default : false,
      
          },

          isAdmin :{
            type :  Boolean,
            default : false
          }
        
         
          
        },

         
      
        {  
          timestamps: true
        }
        );
  return userSchema;
}