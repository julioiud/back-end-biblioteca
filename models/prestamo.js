const dayjs = require('dayjs')
const { Schema, model } = require('mongoose')


const PrestamoSchema = Schema({
    ejemplar : {
        type: Schema.Types.ObjectId,
        ref: 'Ejemplar',
        required: true
    },
    usuario : {
        type: Schema.Types.ObjectId,
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
        default: dayjs().add(15, 'day')
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
        // se calcular TODOS LOS DIAS A LAS 00:00
        default: 0
    },
    multaPagada : {
      type: Boolean,
      // se calcular TODOS LOS DIAS A LAS 00:00
      default : true
    },
    gestorDevolucion : {
        type: Schema.Types.ObjectId,
        ref: 'Gestor'
    },
    gestorCobra : {
        type: Schema.Types.ObjectId,
        ref: 'Gestor'
    },
    fechaCobro : {
        type: Date
    }
})

module.exports = model('Prestamo', PrestamoSchema)