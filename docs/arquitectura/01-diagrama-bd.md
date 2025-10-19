\# Diagrama de Base de Datos — GreenRoute



> Coherente con casos de uso: usuarios → viajes; factores versionables; ranking por período.



```mermaid
erDiagram
    USUARIO {
      uuid id
      string nombre
      string email
      string password_hash
      string rol
      datetime creado_en
    }

    MODO_TRANSPORTE {
      int id
      string nombre
      boolean es_sostenible
    }

    FACTOR_EMISION {
      int id
      int modo_id
      decimal g_co2_km
      decimal g_co2_min
      datetime vigente_desde
      datetime vigente_hasta
    }

    RUTA_CONSULTA {
      uuid id
      string origen
      string destino
      decimal distancia_km
      int duracion_min
      string raw_api
      datetime creado_en
    }

    VIAJE {
      uuid id
      uuid usuario_id
      int modo_id
      uuid ruta_id
      date fecha
      decimal distancia_km
      int duracion_min
      decimal emision_g_co2
      decimal ahorro_g_co2
    }

    INSIGNIA {
      int id
      string codigo
      string nombre
      string descripcion
      decimal umbral_ahorro_g
    }

    USUARIO_INSIGNIA {
      uuid usuario_id
      int insignia_id
      datetime otorgada_en
    }

    RANKING {
      uuid id
      date periodo_inicio
      date periodo_fin
      uuid usuario_id
      decimal ahorro_total_g_co2
      int posicion
    }

    USUARIO ||--o{ VIAJE : realiza
    MODO_TRANSPORTE ||--o{ VIAJE : se_usa_en
    RUTA_CONSULTA ||--o{ VIAJE : referencia
    MODO_TRANSPORTE ||--o{ FACTOR_EMISION : tiene
    USUARIO ||--o{ USUARIO_INSIGNIA : obtiene
    INSIGNIA ||--o{ USUARIO_INSIGNIA : es_otorgada
    USUARIO ||--o{ RANKING : acumula

