
exports.up = function (knex) {
    return knex.schema.createTable('produtos', function (table) {
        table.increments('id')
        table.text('nome')
        table.float('preco')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('produtos')
};
