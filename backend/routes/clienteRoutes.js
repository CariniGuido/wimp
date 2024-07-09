module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  // Ruta para obtener todos los clientes
  router.get('/', async (req, res) => {
    try {
      const clientesSnapshot = await db.collection('clientes').get();
      const clientes = [];
      clientesSnapshot.forEach((doc) => {
        clientes.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Añadir más rutas según sea necesario

  return router;
};
