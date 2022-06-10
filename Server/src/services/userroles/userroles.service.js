// Initializes the `userroles` service on path `/userroles`
const { Userroles } = require('./userroles.class');
const createModel = require('../../models/userroles.model');
const hooks = require('./userroles.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/userroles', new Userroles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('userroles');

  service.hooks(hooks);
};
