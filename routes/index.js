var express = require('express')
var knex = require('../db/connection')
var router = express.Router()

/*get HOME page. */

router.get('/', (req, res) => {
  knex('concert')
    .then(concerts => {
      res.json(concerts)
    })
})

module.exports = router;
