// backend/server.test.js
const request = require('supertest');
const express = require('express');
const app = require('./index'); 

describe('Pruebas del servidor backend', () => {
  it('GET / debe responder 200 servidor backend funcionando', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Servidor activo ✅');
  });

  it('GET /notifications el modulo debe responder 404 ruta funcionando sin información por el momento ', async () => {
    const res = await request(app).get('/notifications');
    expect(res.statusCode).toBe(404);
  });
});
