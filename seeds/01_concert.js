exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "exercise"; ALTER SEQUENCE exercise_id_seq RESTART WITH 10;')
    .then(function() {
      var concerts = [{
        id: 1,
        name: 'Kanye West',
        venue: 'Pepsi Center',
        rate: 5
      }, {
        id: 2,
        name: 'Drake',
        venue: 'Pepsi Center',
        rate: 5
      }, {
        id: 3,
        name: 'Leon Bridges',
        venue: 'Fillmore Auditorium',
        rate: 5
      }, {
        id: 4,
        name: 'Empire of the Sun',
        venue: '1st Bank Center',
        rate: 2
      }, {
        id: 5,
        name: 'John Legend',
        venue: 'Bellco Theatre',
        rate: 4
      }, {
        id: 6,
        name: 'Lana Del Rey',
        venue: 'Red Rocks Amphitheater',
        rate: 4
      }, {
        id: 7,
        name: 'Travis Scott',
        venue: 'Key Bank Arena',
        rate: 5
      }, {
        id: 8,
        name: 'Phantagram',
        venue: 'Gothic Theatre',
        rate: 5
      }, {
        id: 9,
        name: 'Paint Store',
        venue: 'Gothic Theatre',
        rate: 1
      }]

      return knex('concert').insert(concerts)
    });
};
