const EstrategiaEmision = require('./EstrategiaEmision');
class EmisionBus extends EstrategiaEmision {
  calcular({ distanciaKm }) { return Number((distanciaKm * 0.082).toFixed(3)); }
}
module.exports = EmisionBus;