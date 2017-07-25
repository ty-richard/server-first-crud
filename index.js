var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var knex = require('./db/connection')

var index = require('./routes/index')

var app = express()

app.use(cors())

app.use('/', index)

app.listen(process.env.PORT || 8080)
