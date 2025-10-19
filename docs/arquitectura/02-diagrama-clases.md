\# Diagrama de Clases — GreenRoute





```mermaid

classDiagram

&nbsp; %% ---------- Dominio ----------

&nbsp; class Usuario {

&nbsp;   +id: UUID

&nbsp;   +nombre: string

&nbsp;   +email: string

&nbsp;   +rol: string

&nbsp; }



&nbsp; class ModoTransporte {

&nbsp;   +id: int

&nbsp;   +nombre: string

&nbsp;   +esSostenible: boolean

&nbsp; }



&nbsp; class FactorEmision {

&nbsp;   +id: int

&nbsp;   +modoId: int

&nbsp;   +gCo2Km: decimal

&nbsp;   +vigenciaIncluye(fecha: Date): bool

&nbsp; }



&nbsp; class RutaConsulta {

&nbsp;   +id: UUID

&nbsp;   +origen: string

&nbsp;   +destino: string

&nbsp;   +distanciaKm: decimal

&nbsp;   +duracionMin: int

&nbsp; }



&nbsp; class Viaje {

&nbsp;   +id: UUID

&nbsp;   +usuarioId: UUID

&nbsp;   +modoId: int

&nbsp;   +rutaId: UUID

&nbsp;   +fecha: Date

&nbsp;   +emision(): decimal

&nbsp;   +ahorro(): decimal

&nbsp; }



&nbsp; %% ---------- Repositorios ----------

&nbsp; class ViajeRepository {

&nbsp;   +save(v: Viaje): void

&nbsp;   +findByUsuario(usuarioId: UUID): Viaje\[]

&nbsp; }



&nbsp; class FactorEmisionRepository {

&nbsp;   +vigente(modoId: int, fecha: Date): FactorEmision

&nbsp; }



&nbsp; %% ---------- Servicios ----------

&nbsp; class RoutingProvider {

&nbsp;   <<interface>>

&nbsp;   +route(origen: string, destino: string, modo: string): RutaConsulta

&nbsp; }



&nbsp; class OpenRouteServiceAdapter {

&nbsp;   +route(origen: string, destino: string, modo: string): RutaConsulta

&nbsp; }



&nbsp; class EmisionService {

&nbsp;   +calcularEmision(distKm: decimal, modoId: int, fecha: Date): decimal

&nbsp;   +calcularAhorro(distKm: decimal, modoElegidoId: int, fecha: Date): decimal

&nbsp; }



&nbsp; class RankingService {

&nbsp;   +recalcular(periodoInicio: Date, periodoFin: Date): void

&nbsp;   +top(n: int): RankingEntry\[]

&nbsp; }



&nbsp; %% ---------- Web/API ----------

&nbsp; class ViajeController {

&nbsp;   +POST /viajes

&nbsp;   +GET  /viajes/mios

&nbsp; }



&nbsp; class RutaController {

&nbsp;   +GET /rutas?origen\&destino\&modo

&nbsp; }



&nbsp; class RankingController {

&nbsp;   +GET /ranking?periodo

&nbsp; }



&nbsp; %% ---------- Relaciones ----------

&nbsp; Viaje --> ModoTransporte

&nbsp; Viaje --> RutaConsulta

&nbsp; EmisionService --> FactorEmisionRepository

&nbsp; ViajeController --> EmisionService

&nbsp; ViajeController --> ViajeRepository

&nbsp; RutaController --> RoutingProvider

&nbsp; OpenRouteServiceAdapter ..|> RoutingProvider

&nbsp; RankingController --> RankingService



