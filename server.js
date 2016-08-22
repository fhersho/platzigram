const http = require('http')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'public')))

server.listen(port, () => console.log(`Servidor escuchando por el puerto ${port}`))
