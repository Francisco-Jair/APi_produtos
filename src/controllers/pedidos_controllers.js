const knex = require('../database')

module.exports = {
    async show(req, res, next) {
        try {
            const { produtos_id, page = 1 } = req.query
            const query = knex('pedidos').limit(5).offset((page - 1) * 5)

            const countObj = knex('pedidos').count()

            if (produtos_id) {
                query
                    .where({ produtos_id })
                    .join('produtos', 'produtos.id', '=', 'pedidos.produtos_id')
                    .select('produtos.*', 'pedidos.quantidade')

                countObj.where({ produtos_id })
            }

            const [count] = await countObj
            res.header('X-Total-Count', count['count(*)'])

            const result = await query


            if (result.length === 0) {
                return res.status(200).send("Nenhum pedido cadastrado")
            }
            else {
                return res.json(result)
            }
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { quantidade, produtos_id } = req.body

            await knex('pedidos').insert({ quantidade, produtos_id })

            res.status(201).send("Pedido cadastrado")
        } catch (error) {

        }
    }

}