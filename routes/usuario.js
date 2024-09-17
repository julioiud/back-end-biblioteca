const {Router} = require('express')
const {
    crearUsuario,
    consultarUsuarios,
    consultarUsuarioPorID,
    actualizarUsuario,
    deshabilitarUsuarioPorID} = require('../controllers/usuarioController')

const router = Router()

router.post('/', crearUsuario)

module.exports = router