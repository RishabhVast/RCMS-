const users = require('./users/users.service.js');

const standards = require('./standards/standards.service.js');

const divisions = require('./divisions/divisions.service.js');

const subjects = require('./subjects/subjects.service.js');

const roles = require('./roles/roles.service.js');

const userroles = require('./userroles/userroles.service.js');

const students = require('./students/students.service.js');

const tests = require('./tests/tests.service.js');

const studenttestresults = require('./studenttestresults/studenttestresults.service.js');

const grades = require('./grades/grades.service.js');

const reports = require('./reports/reports.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);

  app.configure(standards);
  app.configure(divisions);
  app.configure(subjects);
  app.configure(roles);
  app.configure(userroles);
  app.configure(students);
  app.configure(tests);
  app.configure(studenttestresults);
  app.configure(grades);
  app.configure(reports);
};
