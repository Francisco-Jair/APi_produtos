const http = require('http') //Cria um serviço de HTTP
const app = require('./App')
const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => { console.log("Servidor iniciado") })