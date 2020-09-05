
exports.up = function (knex) {
    return knex.schema.createTable('pedidos', function (table) {
        table.increments('id')

        //relacionamento 1 para N
        table.integer('produtos_id').references('produtos.id').notNullable().onDelete('CASCADE')//nomedatabela.campo
        table.integer('quantidade')

        table.timestamps(true, true)
    })
};

exports.down = knex => knex.schema.dropTable('pedidos')
