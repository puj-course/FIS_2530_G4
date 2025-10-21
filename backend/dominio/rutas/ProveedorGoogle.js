const ProveedorMapa = require('./ProveedorMapa');
class ProveedorGoogle extends ProveedorMapa {
  async obtenerRuta({ origen, destino, modo }) {
    return { distanciaKm: 5.2, duracionMin: 18, trazo: 'linea_codificada_google' };
  }
}
module.exports = ProveedorGoogle;