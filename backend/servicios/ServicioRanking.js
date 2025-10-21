class ServicioRanking {
  constructor() { this.ranking = new Map(); }
  alGuardarViaje(evento) {
    const { usuarioId, co2Ahorrado } = evento;
    const previo = this.ranking.get(usuarioId) || 0;
    const nuevo = previo + Math.max(1, Math.round(co2Ahorrado * 10));
    this.ranking.set(usuarioId, nuevo);
  }
  top(n = 10) {
    return [...this.ranking.entries()].sort((a,b)=>b[1]-a[1]).slice(0,n).map(([usuarioId,puntos],i)=>({posicion:i+1,usuarioId,puntos}));
  }
}
module.exports = ServicioRanking;