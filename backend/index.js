// backend/index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const notificationRoutes = require('./routes/notificationRoutes');
app.use('/notifications', notificationRoutes);

app.get('/', (_req, res) => {
  res.send('Servidor activo ✅');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;

