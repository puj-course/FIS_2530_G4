\# Diagrama de Componentes — GreenRoute





```mermaid

flowchart LR

&nbsp; %% --- Clients ---

&nbsp; subgraph Clients

&nbsp;   W\[Web App (React)]

&nbsp;   M\[Mobile App (React Native)]

&nbsp; end



&nbsp; %% --- Backend API ---

&nbsp; subgraph Backend\["API GreenRoute (Node.js + Express)"]

&nbsp;   A1\[Auth/JWT]

&nbsp;   A2\[Rutas \& Viajes]

&nbsp;   A3\[Gamificación \& Ranking]

&nbsp;   A4\[Reportes]

&nbsp; end



&nbsp; %% --- Data Layer ---

&nbsp; subgraph Data

&nbsp;   DB\[(PostgreSQL)]

&nbsp;   REDIS\[(Redis Cache)]

&nbsp; end



&nbsp; %% --- External Providers ---

&nbsp; subgraph External\["Proveedores externos"]

&nbsp;   MAPS\[OpenRouteService / Google Maps]

&nbsp;   MAIL\[Email/Push service]

&nbsp;   OBS\[Logs \& Métricas]

&nbsp; end



&nbsp; %% --- Flujos ---

&nbsp; W -->|HTTPS JSON| Backend

&nbsp; M -->|HTTPS JSON| Backend



&nbsp; Backend -->|SQL| DB

&nbsp; Backend <-->|cache| REDIS



&nbsp; A2 -->|/directions| MAPS

&nbsp; Backend --> MAIL

&nbsp; Backend --> OBS



