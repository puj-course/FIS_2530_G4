\# Diagrama de Componentes — GreenRoute




```mermaid
flowchart LR
  subgraph Clients
    W[Web App React]
    M[Mobile App React Native]
  end

  subgraph Backend["API GreenRoute (Node.js + Express)"]
    A1[Auth / JWT]
    A2[Rutas y Viajes]
    A3[Gamificación y Ranking]
    A4[Reportes]
  end

  subgraph Data
    DB[(PostgreSQL)]
    REDIS[(Redis Cache)]
  end

  subgraph External["Proveedores externos"]
    MAPS[OpenRouteService o Google Maps]
    MAIL[Servicio de Correo / Push]
    OBS[Logs y Métricas]
  end

  W -->|HTTPS JSON| Backend
  M -->|HTTPS JSON| Backend

  Backend -->|SQL| DB
  Backend <-->|Cache| REDIS

  A2 -->|/directions| MAPS
  Backend --> MAIL
  Backend --> OBS
