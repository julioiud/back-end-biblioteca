const { Schema, model } = require('mongoose')

const PrestamoSchema = Schema({
    ejemplar : {
        type: Schema.Types.ObjectId,
        ref: 'Ejemplar',
        required: true
    },
    usuario : {
        type: String,
        ref: 'Usuario',
        required : [true, 'Titulo debe tener un nombre']
    },
    fechaPrestamo : {
        type: Date,
        default: new Date(),
        required: true
    },
    fechaADevolver : {
        type: Date,
        // calcular con 15+ días
        default: (new Date()).getDate() + 15
    },
    fechaDevolucion : {
        type: Date
    },
    gestor : {
        type: Schema.Types.ObjectId,
        ref: 'Gestor',
        required: true
    },
    multa : {
        type: Number,
        // se calcular al hacer update con la devolución
        default: 0
    },
    multaPagada : {
      type: Boolean
    }
})

module.exports = model('Prestamo', PrestamoSchema)