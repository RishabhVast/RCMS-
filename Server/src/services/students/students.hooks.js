const { authenticate } = require('@feathersjs/authentication').hooks;
const validate = require('feathers-validate-joi');
const { schema } = require('./studentsModel');
const fetchStandard = require('../userroles/hooks/fetchStandard')
const fetchDivision = require('../userroles/hooks/fetchDivision')

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [ validate.form(schema , {abortEarly : false}),fetchStandard() , fetchDivision()],
    update: [],
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
