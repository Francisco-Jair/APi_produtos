const express = require('express')
const app = express()
const produtosRotas = require('./routes/produtos_router')
const pedidosRotas = require('./routes/pedidos_router')

//Rotas
app.use('/produtos', produtosRotas)
app.use('/pedidos', pedidosRotas)


module.exports = app