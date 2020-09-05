# API EM NODE USANDO BANCO RELACIONAL


### Banco de dados SQLITE3

### clone repositorio
### npm install
### npm start


## Comandos KNEX
npx knex init
npx knex migrate:make create_table_produtos
npx knex migrate:latest
npx knex seed:make 001_users
npx knex seed:run
npx knex seed:run --specific 002_pedidos.js