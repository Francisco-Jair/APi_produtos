const knex = require('../database')

module.exports = {

    async allProdutos(req, res, next) {
        const result = await knex('produtos')
        .where('deleted_at', null)
        return res.json(result)
    },

    async searchProdutos(req, res, next) {
        const id = req.params.id
        const result = await knex('produtos').where({ id })

        if (result.length === 0) {
            return res.status(201).send('Produto inexistente')
        }
        else {
            return res.json(result)
        }
    },

    async create(req, res, next) {
        try {
            const { nome, preco } = req.body

            await knex('produtos').insert({
                nome,
                preco
            })

            return res.status(201).send('Produto cadastrado com sucessos')
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const { nome, preco } = req.body
            const { id } = req.params

            const result = await knex('produtos').where({ id })

            if (result.length === 0) {
                return res.status(201).send('Produto inexistente')
            } else {
                await knex('produtos').update({ nome, preco }).where({ id })

                return res.status(201).send('Produto atualizado com sucessos')
            }


        } catch (error) {
            next(error)
        }
    },

    async update_patch(req, res, next) {
        try {
            const { nome, preco } = req.body
            const { id } = req.params

            const result = await knex('produtos').where({ id })

            if (result.length === 0) {
                return res.status(201).send('Produto inexistente')
            } else {
                await knex('produtos').update({ nome, preco }).where({ id })
                return res.status(201).send('Produto atualizado com sucessos')
            }

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            const result = await knex('produtos').where({ id })

            if (result.length === 0) {
                return res.status(201).send('Produto inexistente')
            } else {
                await knex('produtos')
                    .where({ id })
                    .update('deleted_at', new Date())
                // .del()
                return res.status(201).send('Produto deletado com sucessos')
            }

        } catch (error) {
            next(error)
        }
    },
}