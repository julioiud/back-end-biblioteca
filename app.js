const dotenv = require('dotenv') // importando dotenv
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const { mongoConnect } = require('./databases/config')
mongoConnect()

// middlewares
app.use(cors({
    origin: '*',
    methods : ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'token', 'Authorization'],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// rutas
const usuarios = require('./routes/usuario')
const gestores = require('./routes/gestor')
const prestamos = require('./routes/prestamo')

app.use('/api/v1/usuarios', usuarios)
app.use('/api/v1/gestores', gestores)
app.use('/api/v1/prestamos', prestamos)

app.get('*', (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app

