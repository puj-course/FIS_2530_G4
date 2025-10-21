\# Diagrama de Despliegue — GreenRoute







```mermaid

flowchart TB
  %% --- Pipeline CI/CD ---
  DEV[Desarrollo local] -->|Push de código| GIT[Repositorio GitHub]
  GIT -->|Ejecución CI/CD| ACTIONS[GitHub Actions]
  ACTIONS -->|Build & Push de imágenes| REGISTRY[Container Registry]

  %% --- Entorno de Producción ---
  subgraph PRODUCCION["Producción"]
    NGINX[Nginx Reverse Proxy :80 / :443]
    FRONT[Frontend Container]
    API[API Container]
    DB[(PostgreSQL)]
    REDIS[(Redis Cache)]
    MON[Monitoring / Logs]
  end

  %% --- Flujo de Despliegue ---
  REGISTRY -->|Pull de imágenes| FRONT
  REGISTRY -->|Pull de imágenes| API

  NGINX <-->|HTTPS| FRONT
  FRONT -->|HTTPS| API
  API -->|TCP 5432| DB
  API -->|TCP 6379| REDIS
  API --> MON

  %% --- Notas opcionales ---
  %% Las variables de entorno usadas en el despliegue:
  %% DATABASE_URL, REDIS_URL, JWT_SECRET, MAPS_API_KEY

