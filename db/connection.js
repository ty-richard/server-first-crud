var knex = require('knex')
var configs = require('../knexfile')

var enviroment = 'development'
var dbConfig = configs[enviroment]



module.exports = knex(dbConfig)
