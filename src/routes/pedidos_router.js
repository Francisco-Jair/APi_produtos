const express = require('express')
const router = express.Router();

//OK
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da rota de Pedidos"
    })
})

router.post('/', (req, res, next) => {
    const pedidos = {
        id: req.body.id,
        quantidade: req.body.quantidade,
    }
    console.log(pedidos)
    res.status(201).send({
        mensagem: "Usando o POST dentro da rota de Pedidos",
        pedidoCriado: pedidos
    })
})

//Falta implementar
router.get('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o GET dentro da rota de Pedidos EXCLUSIVO"
    })
})


router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de Pedidos'
    })
})

router.put('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PUT dentro da rota de Pedidos'
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de Pedidos'
    })
})

module.exports = router