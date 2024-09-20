const {Router} = require('express')
const {
    crearGestor,
    loguear
} = require('../controllers/gestorController')

const router = Router()

router.post('/', crearGestor)

router.post('/login', loguear)

module.exports = router