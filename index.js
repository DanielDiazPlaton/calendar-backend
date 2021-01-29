const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./databases/config');
require('dotenv').config();


// Servidor de express
const app = express();

// Database
dbConnection();

//CORS
app.use(cors());

// Directorio publico
app.use('/login', express.static('public'));

//lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }`);
});