// Creación y configuración de la APP de Express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de rutas
app.get('/', (req, res) => {
    res.send('Ruta en el Backend');
})


module.exports = app;