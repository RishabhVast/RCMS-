module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;

    const  gradeSchema = new Schema({
        
      name : { 
        type: String, 
        minlength : 2,
        maxlength : 50,
        required: true },
  
        start : {
          type :  String,
          minlength : 2,
          maxlength : 10,
          required : true
  
        },
  
        end : {
          type : String ,
          minlength : 2,
          maxlength : 10,
          required : true,
        }
  
  
    }, {
      timestamps: true
    });
  return gradeSchema;
}