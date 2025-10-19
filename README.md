# 🚴 GreenRoute – Movilidad sostenible

## Avance de la Issue #1 - Elaboración inicial del README

\## Integrantes



\- Luis Díaz → \[LuisDiaz2250]
\- Camila Ariza → \[camilaariza-bot]
\- Tomás Rodriguez → \[TomasRP20]


## 🌍 Descripción

GreenRoute es una aplicación que promueve la movilidad sostenible en la ciudad.  
Su objetivo es ayudar a las personas a elegir la ruta más ecológica y calcular el impacto positivo de sus decisiones de transporte, comparando caminar, usar bicicleta, transporte público o carro particular.

## ✨ Objetivos

* Fomentar la movilidad urbana sostenible.
* Concientizar sobre la reducción de emisiones de CO₂.
* Crear un espacio de motivación con rankings entre usuarios.



## 🎯 Conexión con los ODS

* **ODS 11**: Ciudades y comunidades sostenibles.
* **ODS 13**: Acción por el clima.

## 🚀 Funcionalidades

* Búsqueda de rutas y comparación entre distintos medios de transporte.
* Cálculo del CO₂ ahorrado al elegir una opción sostenible.
* Ranking comunitario para motivar la participación.
* Perfil de usuario con estadísticas personales.

## 🛠️ Tecnologías propuestas

* **Frontend**: React / React Native.
* **Backend**: Node.js + Express.
* **Base de datos**: PostgreSQL o MongoDB.
* **APIs**: Google Maps API o OpenStreetMap para cálculo de rutas.

## 🌱 Impacto esperado

* Reducir la huella de carbono en la movilidad urbana.
* Sensibilizar a los usuarios sobre sus elecciones de transporte.
* Crear comunidades más comprometidas con el medio ambiente.

## 📖 Inspiración

Este proyecto se inspira en la encíclica **Laudato Si’** y en los **Objetivos de Desarrollo Sostenible (ODS)**, buscando unir tecnología y conciencia ambiental para transformar la manera en que nos movemos en la ciudad.

 feat/arq-5-readme-links


 🧭 Arquitectura del Proyecto



La siguiente sección reúne los diagramas desarrollados durante la fase de \*\*Diseño y Arquitectura\*\* de \*GreenRoute\*:



| Tipo de diagrama | Archivo | Descripción |

|------------------|----------|--------------|

| 🗄️ \*\*Base de Datos (ER)\*\* | \[01-diagrama-bd.md](docs/arquitectura/01-diagrama-bd.md) | Representa el modelo relacional: usuarios, viajes, factores de emisión, ranking e insignias. |

| 🧱 \*\*Clases (Dominio + API)\*\* | \[02-diagrama-clases.md](docs/arquitectura/02-diagrama-clases.md) | Muestra la arquitectura en capas Controller → Service → Repository y las entidades principales. |

| 🧩 \*\*Componentes\*\* | \[03-diagrama-componentes.md](docs/arquitectura/03-diagrama-componentes.md) | Visualiza los módulos del sistema y su interacción con datos y servicios externos. |

| ☁️ \*\*Despliegue (CI/CD + Infraestructura)\*\* | \[04-diagrama-despliegue.md](docs/arquitectura/04-diagrama-despliegue.md) | Define el entorno de producción con Nginx, Docker, PostgreSQL, Redis y GitHub Actions. |



> 📌 Estos diagramas se encuentran en la carpeta \[`docs/arquitectura/`](docs/arquitectura/) y fueron creados con \*\*Mermaid\*\*, por lo que se renderizan automáticamente en GitHub.


🧩 Coherencia de la Arquitectura GreenRoute

Todos los diagramas se construyeron en coherencia con la arquitectura seleccionada para el proyecto:
- **Estilo:** N-capas modular (Frontend React + API Node.js/Express + DB PostgreSQL + Redis).
- **Lógica de negocio:** cálculo de CO₂ ahorrado por viajes sostenibles, ranking de usuarios e insignias.
- **Base de Datos:** refleja las entidades y relaciones principales (usuario, viaje, modo, emisión, ranking).
- **Clases:** siguen el patrón `Controller → Service → Repository` para desacoplar responsabilidades.
- **Componentes:** muestran los módulos del sistema y cómo interactúan con proveedores externos.
- **Despliegue:** define la topología final (Docker + Nginx + CI/CD con GitHub Actions).

👉 En conjunto, la arquitectura garantiza escalabilidad, seguridad y coherencia con los objetivos del proyecto GreenRoute.


