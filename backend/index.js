const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar servicios y rutas
const rutas = require('./api/rutas');
const ServicioViajes = require('./services/ServicioViajes');
const ServicioRanking = require('./services/ServicioRanking');

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar servicios
const servicioViajes = new ServicioViajes();
const servicioRanking = new ServicioRanking();

// Middleware o rutas de ejemplo
app.use('/api', rutas);
app.post('/viaje', (req, res) => {
  const viaje = req.body;
  servicioViajes.guardar(viaje);
  res.json({ mensaje: 'Viaje guardado correctamente' });
});

// Endpoint para el health check del workflow
app.get('/health', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(⁠ ✅ API GreenRoute en funcionamiento en el puerto ${PORT} ⁠);
});
