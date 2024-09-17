const dotenv = require('dotenv') // importando dotenv
dotenv.config()
const express = require('express')
const app = express()
// TODO: MIGRAR A app.js
const { mongoConnect } = require('./databases/config')
mongoConnect()

// rutas
const usuarios = require('./routes/usuario')

app.use('/api/v1/usuarios', usuarios)

module.exports = app

