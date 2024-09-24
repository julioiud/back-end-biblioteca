const {Router} = require('express')
const {
    prestarEjemplar,
    devolverEjemplar
} = require('../controllers/prestamoController')
const { validarToken } = require('../middlewares/validar-token')

const router = Router()

router.post('/', [validarToken], prestarEjemplar)

module.exports = router