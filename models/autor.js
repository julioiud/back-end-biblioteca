const { Schema, model } = require('mongoose')

const AutorSchema = Schema({
    codigo : {
        type : Number, 
        required : true,
        unique : [true, 'Codigo autor ya existe']
    },
    nombre : {
        type: String,
        required : [true, 'Autor debe tener un nombre']
    },
    descripcion : {
        type: String
    },
    // relacion muchos-muchos
    libros: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Libro'
        }
    ],
    // datos de auditoria
    fechaCreacion : {
        type: Date,
        default: new Date()
    },
    fechaActualizacion : {
        type: Date
    },
    
})

module.exports = model('Autor', AutorSchema)

