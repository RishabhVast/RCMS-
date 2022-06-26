// Initializes the `studenttestresults` service on path `/studenttestresults`
const { Studenttestresults } = require('./studenttestresults.class');
const createModel = require('../../models/studenttestresults.model');
const hooks = require('./studenttestresults.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true
  }; 

  // Initialize our service with any options it requires
  app.use('/studenttestresults', new Studenttestresults(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('studenttestresults');

  service.hooks(hooks);
};
