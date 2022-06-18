const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require('./userrolesModel');
const fetchStandard = require('./hooks/fetchStandard');
const fetchDivision = require('./hooks/fetchDivision');
const fetchSubject = require('./hooks/fetchSubject');
const validate = require('feathers-validate-joi');
const fetchUser = require('./hooks/fetchUser');
const fetchRole = require('./hooks/fetchRole');


module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [ validate.form(schema , {abortEarly : false}), fetchStandard() , fetchDivision(), fetchSubject(), fetchUser(), fetchRole()],
    update: [ validate.form(schema , {abortEarly : false}),fetchStandard() , fetchDivision(), fetchSubject(), fetchUser(), fetchRole()],
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
