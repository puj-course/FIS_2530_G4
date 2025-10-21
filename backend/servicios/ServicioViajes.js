const EventEmitter = require('events');
class ServicioViajes extends EventEmitter {
  async guardarViaje({ usuarioId, resumenRuta, modoReferencia = 'carro' }) {
    const co2Actual = resumenRuta.co2Kg;
    const referencia = resumenRuta.distanciaKm * 0.192;
    const co2Ahorrado = Math.max(0, referencia - co2Actual);
    this.emit('viaje:guardado', { usuarioId, co2Ahorrado, resumenRuta });
    return { ok: true };
  }
}
module.exports = ServicioViajes;