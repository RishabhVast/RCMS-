const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require('./studenttestresults.Model');
const validate = require('feathers-validate-joi');
const fetchStudent = require('./hooks/fetchStudent');
const fetchGrade = require('./hooks/fetchGrade');
const fetchTest = require('./hooks/fetchTest');

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [validate.form(schema , {abortEarly : false}), fetchGrade(), fetchStudent() , fetchTest()  ],
    update: [validate.form(schema , {abortEarly : false}), fetchGrade(), fetchStudent() , fetchTest() ],
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
