const express = require('express')
const router = express.Router();
const controller_Pedidos = require('../controllers/pedidos_controllers')

router.get('/', controller_Pedidos.show)

router.post('/', controller_Pedidos.create)

// router.get('/:id', controller_Pedidos.onlyPedido)

// router.patch('/:id', controller_Pedidos.upgradePatch)

// router.put('/:id', controller_Pedidos.upgrade)

// router.delete('/:id', controller_Pedidos.delete)

module.exports = router