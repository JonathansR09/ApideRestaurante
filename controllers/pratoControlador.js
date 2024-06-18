const Prato = require('../modelos/prato');

exports.obterTodosPratos = async (req, res) => {
  try {
    const pratos = await Prato.findAll();
    res.status(200).json(pratos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criarPrato = async (req, res) => {
  try {
    const prato = await Prato.create(req.body);
    res.status(201).json(prato);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Outros métodos para controle de pratos...
