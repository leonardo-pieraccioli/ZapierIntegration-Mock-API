const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');

const getNewCustomer = require("./triggers/new_customer");

const getGetAllUserIds = require("./triggers/get_all_user_ids");

const createAddNewCustomer = require("./creates/add_new_customer");

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [getNewCustomer.key]: getNewCustomer,
    [getGetAllUserIds.key]: getGetAllUserIds,
  },

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {
    [createAddNewCustomer.key]: createAddNewCustomer
  },

  resources: {},
};
