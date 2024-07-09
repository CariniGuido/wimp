const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1t5vghVfi5]-SO1Mg', // Actualiza esto con tu nueva contraseña
  database: 'gimnasio' // Asegúrate de usar el nombre correcto de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
