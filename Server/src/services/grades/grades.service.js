// Initializes the `grades` service on path `/grades`
const { Grades } = require('./grades.class');
const createModel = require('../../models/grades.model');
const hooks = require('./grades.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/grades', new Grades(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('grades');

  service.hooks(hooks);
};
