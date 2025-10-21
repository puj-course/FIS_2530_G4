const ProveedorMapa = require('./ProveedorMapa');
class ProveedorOSM extends ProveedorMapa {
  async obtenerRuta({ origen, destino, modo }) {
    return { distanciaKm: 5.4, duracionMin: 20, trazo: 'linea_codificada_osm' };
  }
}
module.exports = ProveedorOSM;