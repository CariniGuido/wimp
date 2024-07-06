const db = require('../db');

const Cliente = {
  getAll: (callback) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM clientes WHERE id = ?';
    db.query(query, [id], callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO clientes SET ?';
    db.query(query, data, callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE clientes SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM clientes WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Cliente;
