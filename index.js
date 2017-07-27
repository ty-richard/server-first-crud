var express = require('express')
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
var knex = require('./db/connection')

var index = require('./routes/index')

var app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors())

app.use('/', index)

app.listen(process.env.PORT || 8080)
