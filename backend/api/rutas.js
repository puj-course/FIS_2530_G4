const { Router } = require('express');
const FachadaRutas = require('../dominio/rutas/FachadaRutas');
const ProveedorGoogle = require('../dominio/rutas/ProveedorGoogle');
const ProveedorOSM = require('../dominio/rutas/ProveedorOSM');
const enrutador = Router();

function seleccionarProveedor(nombre) {
  if ((nombre || '').toLowerCase() === 'google') return new ProveedorGoogle();
  return new ProveedorOSM();
}

enrutador.post('/ruta', async (req, res) => {
  try {
    const { origen, destino, modo, proveedor = 'osm' } = req.body;
    const fachada = new FachadaRutas(seleccionarProveedor(proveedor));
    const resumen = await fachada.planificarRuta({ origen, destino, modo });
    res.json(resumen);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

enrutador.post('/viaje', async (req, res) => {
  try {
    const { usuarioId, resumenRuta, modoReferencia } = req.body;
    const { servicioViajes } = req.servicios;
    const resultado = await servicioViajes.guardarViaje({ usuarioId, resumenRuta, modoReferencia });
    res.json(resultado);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

enrutador.get('/ranking', (req, res) => {
  const { servicioRanking } = req.servicios;
  res.json(servicioRanking.top(10));
});

module.exports = enrutador;