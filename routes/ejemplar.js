const {Router} = require('express')
const {
    consultarEjemplares
    } = require('../controllers/ejemplarController')
const { validarToken } = require('../middlewares/validar-token')

const router = Router()


router.get('/', [validarToken], consultarEjemplares)

module.exports = router
