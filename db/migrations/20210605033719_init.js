
exports.up = function(knex) {
  return knex.schema
    .createTable('groups', table => {
      table.increments('id')
      table.string('group_name').notNullable().unique()
    })
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('groups').unsigned()
      table.foreign('groups').references('groups.group_name')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('groups')
};
