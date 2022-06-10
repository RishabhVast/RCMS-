// Initializes the `standards` service on path `/standards`
const { Standards } = require('./standards.class');
const createModel = require('../../models/standards.model');
const hooks = require('./standards.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/standards', new Standards(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('standards');

  service.hooks(hooks);
};
