const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require("./divisions.model");
const validate = require("feathers-validate-joi");

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false })],
    update: [validate.form(schema, { abortEarly: false })],
    patch: [validate.form(schema, { abortEarly: false })],
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
