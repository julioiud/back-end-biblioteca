const dotenv = require('dotenv') // importando dotenv
dotenv.config()
const express = require('express')
const app = express()

// TODO: MIGRAR A app.js
const { mongoConnect } = require('./databases/config')
mongoConnect()

app.set('port', process.env.PORT || 3002)

app.listen(app.get('port'), () => {
    console.log('Arrancó la app por el puerto ' + app.get('port'))
})