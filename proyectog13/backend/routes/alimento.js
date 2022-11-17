const express = require('express');
const router = express.Router();
const alimentoController = require('../controllers/alimentoController')

router.get('/', alimentoController.mostrarAlimentos)
router.post('/', alimentoController.agregarAlimentos)
router.get('/:id', alimentoController.mostrarAlimento)
router.delete('/:id', alimentoController.eliminarAlimento)
router.put('/:id', alimentoController.actualizarAlimento)

module.exports = router;
