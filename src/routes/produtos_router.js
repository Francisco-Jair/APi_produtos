const express = require('express')
const router = express.Router();

//OK
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da rota de produtos"
    })
})

router.post('/', (req, res, next) => {
    const produto = {
        name: req.body.name,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: "Usando o POST dentro da rota de produtos",
        produtoCriado: produto
    })
})

//Falta implementar
router.get('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o GET dentro da rota de produtos EXCLUSIVO"
    })
})


router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    })
})

router.put('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PUT dentro da rota de produtos'
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de produtos'
    })
})

module.exports = router