module.exports = function (app) {
     const mongooseClient = app.get('mongooseClient');
     const { Schema } = mongooseClient;
     const roleSchema = new Schema({
    name: {
       type: String, 
       minlength : 3, 
       maxlength : 50,
       required: true }
  }, {
    timestamps: true
  });
  return roleSchema;
}
