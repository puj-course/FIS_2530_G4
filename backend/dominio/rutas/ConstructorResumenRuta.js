class ConstructorResumenRuta {
  constructor() {
    this.resumen = { origen: null, destino: null, modo: null, distanciaKm: null, duracionMin: null, co2Kg: null, alternativas: [], meta: {} };
  }
  conOrigen(o) { this.resumen.origen = o; return this; }
  conDestino(d) { this.resumen.destino = d; return this; }
  conModo(m) { this.resumen.modo = m; return this; }
  conDistanciaKm(km) { this.resumen.distanciaKm = km; return this; }
  conDuracionMin(min) { this.resumen.duracionMin = min; return this; }
  conCO2Kg(kg) { this.resumen.co2Kg = kg; return this; }
  agregarAlternativa(alt) { this.resumen.alternativas.push(alt); return this; }
  conMeta(clave, valor) { this.resumen.meta[clave] = valor; return this; }
  construir() { return Object.freeze({ ...this.resumen }); }
}
module.exports = ConstructorResumenRuta;