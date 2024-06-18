const express = require('express');
const router = express.Router();
const clienteControlador = require('../controladores/clienteControlador');

router.get('/', clienteControlador.obterTodosClientes);
router.post('/', clienteControlador.criarCliente);
// Outras rotas...

module.exports = router;
