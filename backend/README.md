# 🚴 GreenRoute – Backend

Backend del proyecto **GreenRoute**, una aplicación que promueve la movilidad sostenible en entornos urbanos. Este servicio gestiona rutas, usuarios, rankings y cálculo de impacto ambiental.

---

## 🌍 Descripción

GreenRoute ayuda a las personas a elegir rutas más ecológicas y calcular el impacto positivo de sus decisiones de transporte, comparando caminar, bicicleta, transporte público o carro particular.

---

## 👥 Integrantes

- Luis Díaz → [LuisDiaz2250](https://github.com/LuisDiaz2250)  
- Camila Ariza → [camilaariza-bot](https://github.com/camilaariza-bot)  
- Tomás Rodriguez → [TomasRP20](https://github.com/TomasRP20)

---

## 🛠️ Tecnologías utilizadas

- **Node.js + Express** – servidor backend
- **PostgreSQL** o **MongoDB** – persistencia de datos
- **Google Maps API** / **OpenStreetMap** – cálculo de rutas
- **dotenv** – manejo de variables de entorno

---

## 🚀 Funcionalidades del backend

- Endpoint para búsqueda y comparación de rutas
- Cálculo de CO₂ ahorrado por tipo de transporte
- Gestión de usuarios y perfiles
- Ranking comunitario por impacto ecológico
- Autenticación básica (login / registro)

---

## 📁 Estructura de carpetas propuesta

backend/ 
├── controllers/ # Lógica de negocio por módulo 
├── routes/ # Definición de endpoints 
├── models/ # Esquemas de base de datos 
├── services/ # Integraciones externas (API Maps, cálculo CO₂) 
├── utils/ # Funciones auxiliares 
├── config/ # Conexión a BD, variables de entorno 
├── index.js # Punto de entrada del servidor 
├── .env # Variables sensibles (PORT, DB_URI, API_KEY) 
└── package.json # Dependencias y scripts
