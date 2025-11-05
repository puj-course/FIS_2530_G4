// backend/index.js
const express = require('express');
const dotenv = require('dotenv');

// 1) Cargar variables de entorno (.env)
dotenv.config();

const app = express();

// 2) Para leer JSON del body
app.use(express.json());

// 3) Importar tus rutas de notificaciones
const notificationRoutes = require('./routes/notificationRoutes');

// 4) Montar las rutas bajo /notifications
app.use('/notifications', notificationRoutes);

// 5) Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Backend on port', PORT));
