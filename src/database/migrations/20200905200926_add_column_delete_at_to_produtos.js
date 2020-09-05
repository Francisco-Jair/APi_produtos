
exports.up = function (knex) {
    return knex.schema.alterTable('produtos', function (table) {
        table.timestamp('deleted_at')
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('produtos', table => { table.dropColumn('deleted_at') })
};
