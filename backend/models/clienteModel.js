const admin = require('firebase-admin');
const db = admin.firestore();

const Cliente = {
  getAll: async (callback) => {
    try {
      const clientesSnapshot = await db.collection('clientes').get();
      const clientes = [];
      clientesSnapshot.forEach((doc) => {
        clientes.push({ id: doc.id, ...doc.data() });
      });
      callback(null, clientes);
    } catch (err) {
      callback(err, null);
    }
  },

  getById: async (id, callback) => {
    try {
      const clienteDoc = await db.collection('clientes').doc(id).get();
      if (!clienteDoc.exists) {
        return callback('Cliente no encontrado', null);
      }
      callback(null, { id: clienteDoc.id, ...clienteDoc.data() });
    } catch (err) {
      callback(err, null);
    }
  },

  create: async (data, callback) => {
    try {
      const docRef = await db.collection('clientes').add(data);
      callback(null, { id: docRef.id });
    } catch (err) {
      callback(err, null);
    }
  },

  update: async (id, data, callback) => {
    try {
      await db.collection('clientes').doc(id).set(data, { merge: true });
      callback(null, { message: 'Cliente actualizado' });
    } catch (err) {
      callback(err, null);
    }
  },

  delete: async (id, callback) => {
    try {
      await db.collection('clientes').doc(id).delete();
      callback(null, { message: 'Cliente eliminado' });
    } catch (err) {
      callback(err, null);
    }
  }
};

module.exports = Cliente;
