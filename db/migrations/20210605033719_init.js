
exports.up = function(knex) {
  return knex.schema
    .createTable('groups', table => {
      table.increments('id').primary()
      table.string('group_name').unique()
      table.timestamps(true, true)
    })
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.string('email').notNullable().unique()
      table.integer('daily_score')
      table.integer('group_id').unsigned().nullable()
      table.foreign('group_id').references('groups.id')
      table.timestamps(true, true)
    })
    .createTable('questions', table => {
      table.increments('id').primary()
      table.string('category')
      table.string('question')
      table.string('correct_answer')
      table.string('incorrect_1')
      table.string('incorrect_2')
      table.string('incorrect_3')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('groups')
    .dropTable('questions')
};
