require('../db/mongodb');
const Log = require('./log');
const Build = require('./build');

module.exports = {
  models: {
    Log,
    Build,
  },
};
