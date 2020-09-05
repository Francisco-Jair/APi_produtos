
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pedidos').del()
    .then(function () {
      // Inserts seed entries
      return knex('pedidos').insert([
        { produtos_id: 1, quantidade: 10 },
        { produtos_id: 2, quantidade: 100 },
        { produtos_id: 3, quantidade: 660 },
        { produtos_id: 4, quantidade: 660 },
      ]);
    });
};
