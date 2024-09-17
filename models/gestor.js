const { Schema, model } = require('mongoose')

const GestorSchema = Schema({
    documento : {
        type : String, 
        required : true,
        unique : [true, 'Codigo usuario ya existe']
    },
    nombre : {
        type: String,
        required : [true, 'Usuario debe tener un nombre']
    },
    password : {
        type: String
    },
    enabled : {
        type: Boolean
    },
    // datos de auditoria
    fechaCreacion : {
        type: Date,
        default: new Date()
    },
    fechaActualizacion : {
        type: Date
    }
})

module.exports = model('Gestor', GestorSchema)