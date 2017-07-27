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

router.get('/:id', (req, res) => {
  let id = req.params.id;

  knex('concert')
    .where('id', id).first()
    .then(concerts => {
      res.json(concerts)
    })
})

router.post('/', (req, res) => {
  let post = req.body;
  console.log(post);

  knex('concert').insert(post)
    .returning('*')
    .then(concerts => {
      res.json(concerts);
    });
})

router.put('/:id', (req, res) => {
   let id = req.params.id;
   let edit = req.body;

   knex('concert').where('id', id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited);
    })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  knex('concert')
    .where('id', id).del()
    .then(deleted => {
      res.json({
        message: 'Concert Deleted!!',
        deleted: deleted
      });
    });
});

module.exports = router;
