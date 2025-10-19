\# Diagrama de Despliegue — GreenRoute







```mermaid

flowchart TB

&nbsp; Dev\[Dev local] --> GH\[GitHub Repo]

&nbsp; GH -->|CI| GA\[GitHub Actions]

&nbsp; GA -->|build images\\npush| REG\[Container Registry]



&nbsp; subgraph PROD\[Producción]

&nbsp;   RP\[Nginx Reverse Proxy\\n:80 / :443]

&nbsp;   FE\[Frontend Container]

&nbsp;   BE\[API Container]

&nbsp;   DB\[(PostgreSQL)]

&nbsp;   RE\[(Redis)]

&nbsp;   MON\[Monitoring / Logs]

&nbsp; end



&nbsp; REG --> FE

&nbsp; REG --> BE



&nbsp; RP <-->|HTTPS| FE

&nbsp; FE -->|HTTPS| BE

&nbsp; BE -->|TCP 5432| DB

&nbsp; BE -->|TCP 6379| RE

&nbsp; BE --> MON



