exports.up = function(knex, Promise) {
  return knex.schema.createTable('concert', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('venue').notNullable()
    table.integer('rate').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('concert')
};
