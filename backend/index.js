const express = require('express');
 feat/segunda-entrega-tomas
const rutas = require('./api/rutas');
const ServicioViajes = require('./servicios/ServicioViajes');
const ServicioRanking = require('./servicios/ServicioRanking');
const app = express();
app.use(express.json());
const servicioViajes = new ServicioViajes();
const servicioRanking = new ServicioRanking();
servicioViajes.on('viaje:guardado', (evt) => servicioRanking.alGuardarViaje(evt));
app.use((req, _res, next) => { req.servicios = { servicioViajes, servicioRanking }; next(); });
app.use('/api', rutas);
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => console.log(`✅ API GreenRoute en funcionamiento en el puerto ${PUERTO}`));
=======
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
main
