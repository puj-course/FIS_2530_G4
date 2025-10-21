const FabricaCalculadoraEmision = require('../emisiones/FabricaCalculadoraEmision');
const ConstructorResumenRuta = require('./ConstructorResumenRuta');
class FachadaRutas {
  constructor(proveedorMapa) { this.proveedorMapa = proveedorMapa; }
  async planificarRuta({ origen, destino, modo }) {
    const ruta = await this.proveedorMapa.obtenerRuta({ origen, destino, modo });
    const calculadora = FabricaCalculadoraEmision.obtenerPorModo(modo);
    const co2Kg = calculadora.calcular({ distanciaKm: ruta.distanciaKm, duracionMin: ruta.duracionMin });
    return new ConstructorResumenRuta()
      .conOrigen(origen)
      .conDestino(destino)
      .conModo(modo)
      .conDistanciaKm(ruta.distanciaKm)
      .conDuracionMin(ruta.duracionMin)
      .conCO2Kg(co2Kg)
      .conMeta('trazo', ruta.trazo)
      .construir();
  }
}
module.exports = FachadaRutas;