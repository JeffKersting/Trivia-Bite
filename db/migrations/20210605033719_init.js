
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.string('email').notNullable().unique()
      table.timestamps(true, true)
    })
    .createTable('groups', table => {
      table.integer('user_id').unsigned().primary()
      table.foreign('user_id').references('users.id')
      table.integer('daily_score')
      table.string('group_name')
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
};
