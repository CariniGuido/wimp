const Cliente = require('../models/clienteModel');

const clienteController = {
  getAll: (req, res) => {
    Cliente.getAll((err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  },
  getById: (req, res) => {
    const { id } = req.params;
    Cliente.getById(id, (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },
  create: (req, res) => {
    const data = req.body;
    Cliente.create(data, (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Cliente.update(id, data, (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Cliente actualizado' });
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    Cliente.delete(id, (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Cliente eliminado' });
    });
  }
};

module.exports = clienteController;
