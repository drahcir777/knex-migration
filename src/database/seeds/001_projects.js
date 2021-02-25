
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { title: 'nodejs', user_id: 9 },
        { title: 'javascript', user_id: 10 },
        { title: 'reactjs', user_id: 11 },
        { title: 'reactnative', user_id: 12 }
      ])
    })
};
