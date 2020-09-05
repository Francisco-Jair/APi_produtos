const express = require('express')
const controller_Produto = require('../controllers/produtos_controllers')
const router = express.Router();


router.get('/', controller_Produto.allProdutos)

router.post('/', controller_Produto.create)

router.get('/:id', controller_Produto.searchProdutos)

router.patch('/:id', controller_Produto.update_patch)

router.put('/:id', controller_Produto.update)

router.delete('/:id', controller_Produto.delete)

module.exports = router