const {Router} = require('express')
const {
    prestarEjemplar,
    devolverEjemplar,
    consultaPrestamos,
    cobrarMulta,
    consultaPrestamosPorUsuario,
    consultaPrestamosPorUsuarioYEstado
} = require('../controllers/prestamoController')
const { validarToken } = require('../middlewares/validar-token')

const router = Router()

router.post('/', [validarToken], prestarEjemplar)
router.get('/', [validarToken], consultaPrestamos)
router.put('/:id', [validarToken], devolverEjemplar)
router.put('/cobrar/:id', [validarToken], cobrarMulta)
router.get('/:id/usuarios', [validarToken], consultaPrestamosPorUsuario)
router.get('/:id/usuarios/:estado', [validarToken], consultaPrestamosPorUsuarioYEstado)


module.exports = router