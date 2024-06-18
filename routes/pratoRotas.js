const express = require('express');
const router = express.Router();
const pratoControlador = require('../controladores/pratoControlador');

router.get('/', pratoControlador.obterTodosPratos);
router.post('/', pratoControlador.criarPrato);
// Outras rotas para pratos...

module.exports = router;
