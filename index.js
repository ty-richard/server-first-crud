var express = require('express')
var bodyParser = require('body-parser')
var knex = require('./db/connection')

var app = express()

app.get('/', (req, res) => {
  knex('concert').select('*').then(function(concerts) {
    res.json(concerts);
  })
})

app.listen(8080)
