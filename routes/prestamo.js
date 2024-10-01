const {Router} = require('express')
const {
    prestarEjemplar,
    devolverEjemplar,
    consultaPrestamos,
    cobrarMulta
} = require('../controllers/prestamoController')
const { validarToken } = require('../middlewares/validar-token')

const router = Router()

router.post('/', [validarToken], prestarEjemplar)
router.get('/', [validarToken], consultaPrestamos)
router.put('/:id', [validarToken], devolverEjemplar)
router.put('/cobrar/:id', [validarToken], cobrarMulta)

module.exports = router