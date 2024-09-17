const { request, response } = require('express')
const Usuario = require('../models/usuario')


// crear usuario
const crearUsuario = async (req = request, res = response) => {
    try {
        const body = req.body
        const usuario = new Usuario(body)
        await usuario.save()
        return res.status(201).json(usuario)
    } catch(e) {
        console.log(e)
        return res.status(500).json({e})
    }
}

// consultar usuarios
const consultarUsuarios = (req = request, res = response) => {

}

// consultar un usuario
const consultarUsuarioPorID = (req = request, res = response) => {

}

// actualizar o editar usuario
const actualizarUsuario = (req = request, res = response) => {

}

// deshabilitar usuario --> delete lógico
const deshabilitarUsuarioPorID = (req = request, res = response) => {

}


module.exports = {
    crearUsuario,
    consultarUsuarios,
    consultarUsuarioPorID,
    actualizarUsuario,
    deshabilitarUsuarioPorID
}