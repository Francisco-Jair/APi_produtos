
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        { nome: 'Notebook', preco: 1236 },
        { nome: 'Xbox', preco: 369 },
        { nome: 'PC GAMER', preco: 12 },
        { nome: 'PLAYSTATION', preco: 16 },
        { nome: 'NITENDO', preco: 1126 },
      ]);
    });
};
