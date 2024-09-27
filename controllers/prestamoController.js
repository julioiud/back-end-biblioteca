const { request, response } = require('express')
const Prestamo = require('../models/prestamo')
const Usuario = require('../models/usuario')
const Ejemplar = require('../models/ejemplar')
const Gestor = require('../models/gestor')

const prestarEjemplar = 
    async (req = request, res = response) => {
    try {
        /**
         * {
         *  "ejemplar": {
         *      "_id": "dadadadadasd"
         *  },
         *  "usuario" : {
         *      "_id": "dadasdad"
         *  } 
         * }
         */
        const {ejemplar, usuario} = req.body
        const uid = req.uid

        /**
         * Validaciones
         */
        // 3. que sea un usuario válido
        const usuarioBD = await Usuario.findById(usuario._id)
        if(!usuarioBD) {
            return res.status(400).json({
                msj: 'Usuario no existe'
            })
        }
        // 4. que sea un ejemplar valido
        const ejemplarBD = await Ejemplar.findById(ejemplar._id)
        if(!ejemplarBD) {
            return res.status(400).json({
                msj: 'Ejemplar no existe'
            })
        }
        // 5. gestor valido
        const gestorBD = await Gestor.findOne({documento : uid})
        if(!gestorBD) {
            return res.status(400).json({
                msj: 'Gestor no existe'
            })
        }
        // 0. que el ejemplar no esté prestado
        const prestamoPorEjemplar = await Prestamo.find({
            $and : [
                { ejemplar : ejemplarBD },
                { fechaDevolucion : null }
            ]
        })
   
        if(prestamoPorEjemplar && prestamoPorEjemplar.length > 0) {
            return res.status(400).json({
                msj: 'Este ejemplar ha sido prestado'
            })
        }

        // 1. que la persona no pase el limite prestamos
        let prestamosDBporUsuario = []
        prestamosDBporUsuario = await Prestamo.find({
            usuario: usuarioBD
        })
        const prestamosNoDevueltos = 
            prestamosDBporUsuario.filter(prest =>
                prest && !prest.fechaDevolucion
            )
        const cantNoDevueltos = prestamosNoDevueltos.length
        const maximos = Number(process.env.PRESTAMOS_MAX_SIMULTANEOS)
        if (cantNoDevueltos >= maximos){
            return res.status(400).json({
                msj: 'El Usuario ya tiene el máximo de préstamos'
            })
        }
        // 2. que no tenga multas
        const prestamosConMultas = 
            prestamosDBporUsuario
                .filter(prest => (!prest.multaPagada && prest.multa > 0))
        const cantConMultas = prestamosConMultas.length
        if(cantConMultas > 0) {
            return res.status(400).json({
                msj: 'El usuario tiene una multa, no se le puede prestar'
            })
        }
        // 6. horario: hora inicial y final
        const hoy = new Date()
        const horaActual = hoy.getHours()
        if(horaActual < process.env.HORA_INICIAL_PRESTAMO
            || horaActual > process.env.HORA_FINAL_PRESTAMOS
        ) {
            return res.status(400).json({
                msj: `Está fuera del horario de préstamos, es:
                de ${process.env.HORA_INICIAL_PRESTAMO} a ${process.env.HORA_FINAL_PRESTAMOS}`
            })
        }
        data = {
            ejemplar : ejemplarBD,
            usuario : usuarioBD,
            gestor : gestorBD
        }
        const prestamo = new Prestamo(data)
        await prestamo.save()
        return res.status(201).json(prestamo)
   } catch(e) {
      console.log(e)
      return res.status(500).json({e})
    }
}

const devolverEjemplar = 
    async (req = request, res = response) => {

}

const cobrarMulta = 
    async (req = request, res = response) => {

}

const notificarMulta = 
    async (req = request, res = response) => {

}

const consultaPrestamos = 
    async (req = request, res = response) => {
    try {
      const prestamos = await Prestamo.find()
       return res.json(prestamos)
     } catch(e) {
        console.log(e)
        return res.status(500).json({e})
    }
}

const consultaPrestamoPorUsuario = 
    async (req = request, res = response) => {

}

module.exports = {
    prestarEjemplar,
    devolverEjemplar,
    consultaPrestamos
}