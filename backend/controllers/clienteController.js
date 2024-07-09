const clienteController = {
  getAll: async (req, res) => {
    try {
      const clientesSnapshot = await db.collection('clientes').get();
      const clientes = [];
      clientesSnapshot.forEach(doc => {
        clientes.push({ id: doc.id, ...doc.data() });
      });
      res.json(clientes);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const clienteDoc = await db.collection('clientes').doc(id).get();
      if (!clienteDoc.exists) {
        return res.status(404).send('Cliente no encontrado');
      }
      res.json({ id: clienteDoc.id, ...clienteDoc.data() });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  
  create: async (req, res) => {
    try {
      const data = req.body;
      const docRef = await db.collection('clientes').add(data);
      res.json({ id: docRef.id });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await db.collection('clientes').doc(id).set(data, { merge: true });
      res.json({ message: 'Cliente actualizado' });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await db.collection('clientes').doc(id).delete();
      res.json({ message: 'Cliente eliminado' });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

module.exports = clienteController;
