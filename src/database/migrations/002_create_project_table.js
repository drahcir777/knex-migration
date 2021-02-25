
exports.up = knex => knex.schema.createTable('projects', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('user_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE')

    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('projects');

