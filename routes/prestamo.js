const {Router} = require('express')
const {
    prestarEjemplar,
    devolverEjemplar,
    consultaPrestamos
} = require('../controllers/prestamoController')
const { validarToken } = require('../middlewares/validar-token')

const router = Router()

router.post('/', [validarToken], prestarEjemplar)
router.get('/', [validarToken], consultaPrestamos)

module.exports = router