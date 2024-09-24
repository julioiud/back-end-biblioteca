const { Schema, model } = require('mongoose')

const LibroSchema = Schema({
    codigo : {
        type : String, 
        required : true,
        unique : [true, 'Codigo libro ya existe']
    },
    titulo : {
        type: String,
        required : [true, 'Titulo debe tener un nombre']
    },
    ISBN : {
        type: String,
        required : true,
        unique : [true, 'ISBN libro ya existe']
    },
    editorial : {
        type: Schema.Types.ObjectId,
        ref: 'Editorial'
    },
    // muchos a muchos
    autores : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Autor'
        }
    ],
    paginas : {
        type: Number
    },
    // datos de auditoria
    fechaCreacion : {
        type: Date,
        default: new Date()
    },
    fechaActualizacion : {
        type: Date
    },
})

module.exports = model('Libro', LibroSchema)
