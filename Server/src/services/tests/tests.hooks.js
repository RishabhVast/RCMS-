const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require('./tests.Model');
const validate = require('feathers-validate-joi');
const fetchStandard = require('../userroles/hooks/fetchStandard');
const fetchDivision = require('../userroles/hooks/fetchDivision');
const fetchSubject = require('../userroles/hooks/fetchSubject');

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [validate.form(schema , {abortEarly : false}), fetchStandard() , fetchDivision(), fetchSubject()],
    update: [validate.form(schema , {abortEarly : false}), fetchStandard() , fetchDivision(), fetchSubject()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
