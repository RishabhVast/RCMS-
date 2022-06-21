const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require('./studenttestresults.Model');
//const validate = require('feathers-validate-joi');
const fetchStudent = require('./hooks/fetchStudent');
const fetchGrade = require('./hooks/fetchGrade');
const fetchTest = require('./hooks/fetchTest');
const calculateResult = require('./hooks/calculateMarks')

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [ calculateResult() ,fetchGrade(), fetchStudent() , fetchTest()],
    update: [  fetchGrade(), fetchStudent() , fetchTest() ],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [  ],
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
