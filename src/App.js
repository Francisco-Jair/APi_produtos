const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express()
const produtosRotas = require('./routes/produtos_router')
const pedidosRotas = require('./routes/pedidos_router')

app.use(morgan('dev'))//Retorna um Log
app.use(bodyParser.urlencoded({ extend: false }))//Apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas formato JSON


//CORS
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')//Onde tem o * poderia colocar a URL que ele permite não todos como esta
    res.header('Acess-Control-Allow-Header', 'Content-Type, Origin, X-Requested-With, Accept, Authorization, X-Total-Count')


    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }

    next()
})

//Rotas
app.use('/produtos', produtosRotas)
app.use('/pedidos', pedidosRotas)

//Tratamento caso não encontra rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

//Outro tratamento de erro Middlleware
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})


module.exports = app