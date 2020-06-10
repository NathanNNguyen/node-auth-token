const knex = require('knex');

const config = require('../knexfile.js').production || require('../knexfile.js').development;

module.exports = knex(config);