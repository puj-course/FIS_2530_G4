const EstrategiaEmision = require('./EstrategiaEmision');
class EmisionCarro extends EstrategiaEmision {
  calcular({ distanciaKm }) { return Number((distanciaKm * 0.192).toFixed(3)); }
}
module.exports = EmisionCarro;