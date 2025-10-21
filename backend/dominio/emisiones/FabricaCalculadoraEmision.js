const EmisionCaminar = require('./EmisionCaminar');
const EmisionBicicleta = require('./EmisionBicicleta');
const EmisionBus = require('./EmisionBus');
const EmisionCarro = require('./EmisionCarro');

class FabricaCalculadoraEmision {
  static obtenerPorModo(modo) {
    switch ((modo || '').toLowerCase()) {
      case 'caminar': return new EmisionCaminar();
      case 'bici':
      case 'bicicleta': return new EmisionBicicleta();
      case 'bus':
      case 'autobus': return new EmisionBus();
      case 'carro':
      case 'auto': return new EmisionCarro();
      default: throw new Error(`Modo de transporte no soportado: ${modo}`);
    }
  }
}
module.exports = FabricaCalculadoraEmision;