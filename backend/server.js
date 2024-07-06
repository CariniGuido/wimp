const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');

app.use(express.json());
app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
