const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteCrontroller.js');

router.get('/', clienteController.mostrarClientes);
router.post('/', clienteController.agregarClientes);
router.get('/:id', clienteController.mostrarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarClientes);

module.exports = router;
