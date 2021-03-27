const {Router} = require('express')

const route = Router()
const pruebaController = require('../controllers/pruebaController')

route.get('/',pruebaController.obtener)
route.post('/',pruebaController.crear)
route.put('/',pruebaController.actualizar)
route.delete('/',pruebaController.eliminar)

module.exports = route