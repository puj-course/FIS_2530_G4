\# Diagrama de Clases — GreenRoute




```mermaid
classDiagram
  %% ---------------- Dominio ----------------
  class Usuario {
    +id: UUID
    +nombre: string
    +email: string
    +rol: string
  }

  class ModoTransporte {
    +id: int
    +nombre: string
    +esSostenible: boolean
  }

  class FactorEmision {
    +id: int
    +modoId: int
    +gCo2Km: decimal
    +vigenciaIncluye(fecha: Date): bool
  }

  class RutaConsulta {
    +id: UUID
    +origen: string
    +destino: string
    +distanciaKm: decimal
    +duracionMin: int
  }

  class Viaje {
    +id: UUID
    +usuarioId: UUID
    +modoId: int
    +rutaId: UUID
    +fecha: Date
    +emision(): decimal
    +ahorro(): decimal
  }

  %% ---------------- Repositorios ----------------
  class ViajeRepository {
    +save(v: Viaje): void
    +findByUsuario(usuarioId: UUID): Viaje[]
  }

  class FactorEmisionRepository {
    +vigente(modoId: int, fecha: Date): FactorEmision
  }

  %% ---------------- Patrones GoF ----------------
  class DatabaseManager {
    <<Singleton>>
    -instance: DatabaseManager
    +getInstance(): DatabaseManager
    +getConnection(): Connection
  }

  class RoutingProvider {
    <<interface>>
    +route(origen: string, destino: string, modo: string): RutaConsulta
  }

  class OpenRouteServiceAdapter {
    <<Adapter>>
    +route(origen: string, destino: string, modo: string): RutaConsulta
  }

  class CalculoEmisionStrategy {
    <<interface>>
    +calcularEmision(distKm: decimal): decimal
  }

  class CalculoBicicleta {
    <<Strategy>>
    +calcularEmision(distKm: decimal): decimal
  }

  class CalculoBus {
    <<Strategy>>
    +calcularEmision(distKm: decimal): decimal
  }

  class CalculoCarro {
    <<Strategy>>
    +calcularEmision(distKm: decimal): decimal
  }

  %% ---------------- Servicios ----------------
  class EmisionService {
    +calcularEmision(distKm: decimal, modoId: int, fecha: Date): decimal
    +calcularAhorro(distKm: decimal, modoElegidoId: int, fecha: Date): decimal
  }

  class RankingService {
    +recalcular(periodoInicio: Date, periodoFin: Date): void
    +top(n: int): RankingEntry[]
  }

  %% ---------------- Controladores ----------------
  class ViajeController {
    +POST /viajes
    +GET  /viajes/mios
  }

  class RutaController {
    +GET /rutas?origen&destino&modo
  }

  class RankingController {
    +GET /ranking?periodo
  }

  %% ---------------- Relaciones ----------------
  DatabaseManager --> FactorEmisionRepository : "usa"
  DatabaseManager --> ViajeRepository : "usa"

  EmisionService --> CalculoEmisionStrategy : "usa"
  CalculoEmisionStrategy <|.. CalculoBicicleta
  CalculoEmisionStrategy <|.. CalculoBus
  CalculoEmisionStrategy <|.. CalculoCarro

  RutaController --> RoutingProvider
  OpenRouteServiceAdapter ..|> RoutingProvider

  Viaje --> ModoTransporte
  Viaje --> RutaConsulta

  EmisionService --> FactorEmisionRepository
  ViajeController --> EmisionService
  ViajeController --> ViajeRepository
  RankingController --> RankingService
