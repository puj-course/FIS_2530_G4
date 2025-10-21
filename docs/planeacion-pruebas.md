# 🧪 Planeación de Pruebas de Funcionalidades – GreenRoute

Este documento describe la estrategia de pruebas para validar las funcionalidades clave de la aplicación GreenRoute, asegurando su correcto funcionamiento, usabilidad y alineación con los objetivos del proyecto.

---

## 🎯 Objetivos de las pruebas

- Verificar que cada funcionalidad cumpla con los requisitos definidos.
- Detectar errores o comportamientos inesperados en etapas tempranas.
- Garantizar una experiencia fluida y ecológica para el usuario final.
- Validar la integración entre frontend, backend y APIs externas.

---

## 🧩 Funcionalidades a probar

| Funcionalidad                         | Tipo de prueba       | Estado esperado                          |
|--------------------------------------|----------------------|------------------------------------------|
| Búsqueda de rutas                    | Funcional / UI       | Muestra opciones con tiempos y CO₂       |
| Comparación entre medios de transporte | Funcional / UX       | Visualiza diferencias claras             |
| Cálculo de CO₂ ahorrado              | Lógica / Backend     | Precisión en resultados                  |
| Ranking comunitario                  | UI / Integración     | Orden correcto y datos actualizados      |
| Perfil de usuario                    | UI / Persistencia    | Estadísticas personales visibles         |
| Registro e inicio de sesión         | Seguridad / UX       | Flujo seguro y sin errores               |
| Integración con Google Maps / OSM    | API / Conectividad   | Rutas precisas y respuesta rápida        |
| Responsive design                    | UI / Adaptabilidad   | Correcta visualización en todos los dispositivos |

---

## 🛠️ Herramientas sugeridas

- **Jest / Mocha**: pruebas unitarias en frontend y backend.
- **Cypress / Playwright**: pruebas end-to-end.
- **Postman**: validación de endpoints y respuestas de API.
- **Lighthouse**: auditoría de rendimiento y accesibilidad.

---

## 📅 Cronograma de pruebas

| Semana | Actividad                          |
|--------|------------------------------------|
| 1      | Configuración de entorno de pruebas |
| 2      | Pruebas unitarias de backend        |
| 3      | Pruebas de interfaz y UX            |
| 4      | Pruebas de integración y APIs       |
| 5      | Pruebas de rendimiento y seguridad  |
| 6      | Validación final y ajustes          |

---

## ✅ Criterios de aceptación

- Todas las funcionalidades deben pasar sus pruebas unitarias y de integración.
- No deben existir errores críticos en el flujo principal de uso.
- La app debe ser usable en dispositivos móviles y escritorio.
- Los datos deben persistir correctamente en la base de datos.

---

## 📌 Notas adicionales

- Las pruebas deben considerar escenarios reales de movilidad urbana.
- Se recomienda incluir usuarios beta para validar experiencia y motivación.
- Documentar cualquier bug encontrado y su resolución.

---

