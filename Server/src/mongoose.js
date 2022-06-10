const mongoose = require('mongoose');
const config = require('config')

module.exports = function (app) {
mongoose.connect(
    
  config.get("mongodb")
   
).then(()=>{
  console.log(` Connected to ${config.get("mongodb")}`);
}).catch((error)=>{
   
   console.log(error);
  
})

  app.set('mongooseClient', mongoose);
};
