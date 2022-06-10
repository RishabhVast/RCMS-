module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const divisionSchema = new Schema({
      name: {
         type: String,
         minlength : 3,
         maxlength : 10,
         required: true }
    }, {
      timestamps: true
    });
  return divisionSchema;
}