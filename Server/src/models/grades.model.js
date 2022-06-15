// grades-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'grades';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
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

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
