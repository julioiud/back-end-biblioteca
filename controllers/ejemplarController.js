const { request, response } = require('express')
const Ejemplar = require('../models/ejemplar')

const consultarEjemplares = async (req = request, res = response) => {
    try {
        const ejemplares = await Ejemplar.find()
        .populate({
            path: 'libro',
            select: '_id titulo'
        })
        return res.json(ejemplares)
    } catch(e) {
        console.log(e)
        return res.status(500).json({e})
    }
}

module.exports = {
    consultarEjemplares
}