\# Diagrama de Base de Datos — GreenRoute



> Coherente con casos de uso: usuarios → viajes; factores versionables; ranking por período.



```mermaid

erDiagram

&nbsp;   USUARIO {

&nbsp;     uuid id PK

&nbsp;     string nombre

&nbsp;     string email UNIQUE

&nbsp;     string password\_hash

&nbsp;     string rol

&nbsp;     timestamp creado\_en

&nbsp;   }



&nbsp;   MODO\_TRANSPORTE {

&nbsp;     int id PK

&nbsp;     string nombre  "walk|bike|bus|car"

&nbsp;     boolean es\_sostenible

&nbsp;   }



&nbsp;   FACTOR\_EMISION {

&nbsp;     int id PK

&nbsp;     int modo\_id FK

&nbsp;     decimal g\_co2\_km

&nbsp;     decimal g\_co2\_min

&nbsp;     timestamp vigente\_desde

&nbsp;     timestamp vigente\_hasta

&nbsp;   }



&nbsp;   RUTA\_CONSULTA {

&nbsp;     uuid id PK

&nbsp;     string origen

&nbsp;     string destino

&nbsp;     decimal distancia\_km

&nbsp;     int duracion\_min

&nbsp;     jsonb raw\_api

&nbsp;     timestamp creado\_en

&nbsp;   }



&nbsp;   VIAJE {

&nbsp;     uuid id PK

&nbsp;     uuid usuario\_id FK

&nbsp;     int modo\_id FK

&nbsp;     uuid ruta\_id FK

&nbsp;     date fecha

&nbsp;     decimal distancia\_km

&nbsp;     int duracion\_min

&nbsp;     decimal emision\_g\_co2

&nbsp;     decimal ahorro\_g\_co2

&nbsp;   }



&nbsp;   INSIGNIA {

&nbsp;     int id PK

&nbsp;     string codigo UNIQUE

&nbsp;     string nombre

&nbsp;     string descripcion

&nbsp;     decimal umbral\_ahorro\_g

&nbsp;   }



&nbsp;   USUARIO\_INSIGNIA {

&nbsp;     uuid usuario\_id FK

&nbsp;     int insignia\_id FK

&nbsp;     timestamp otorgada\_en

&nbsp;   }



&nbsp;   RANKING {

&nbsp;     uuid id PK

&nbsp;     date periodo\_inicio

&nbsp;     date periodo\_fin

&nbsp;     uuid usuario\_id FK

&nbsp;     decimal ahorro\_total\_g\_co2

&nbsp;     int posicion

&nbsp;   }



&nbsp;   USUARIO ||--o{ VIAJE : "realiza"

&nbsp;   MODO\_TRANSPORTE ||--o{ VIAJE : "se usa en"

&nbsp;   RUTA\_CONSULTA ||--o{ VIAJE : "referencia"

&nbsp;   MODO\_TRANSPORTE ||--o{ FACTOR\_EMISION : "tiene"

&nbsp;   USUARIO ||--o{ USUARIO\_INSIGNIA : "obtiene"

&nbsp;   INSIGNIA ||--o{ USUARIO\_INSIGNIA : "es otorgada"

&nbsp;   USUARIO ||--o{ RANKING : "acumula"



