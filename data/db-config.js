const knex = require('knex');

const environment = process.env.DB_ENV || 'development' // added this
const config = require('../knexfile.js')[environment]

module.exports = knex(config);