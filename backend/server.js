const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gimnasio-c12cc.firebaseio.com"
});

const db = admin.firestore();
const app = express();
const clienteRoutes = require('./routes/clienteRoutes')(db);

app.use(express.json());
app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
