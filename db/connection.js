var knex = require('knex')
const config = require('../knexfile')[enviroment]

const enviroment = process.env.NODE_ENV || 'development'




module.exports = require('knex')(config)
