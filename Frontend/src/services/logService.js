// src/services/logService.js
//
// Servicio Axios para consumo de endpoints de auditoría.
// Todos los endpoints están protegidos con JWT — el token
// se inyecta automáticamente por el interceptor de api.js.
//
// Permisos esperados en backend:
//   GET /api/logs/seguridad  → SUPERADMIN (1), ADMIN_RRHH (2)
//   GET /api/logs/aplicacion → SUPERADMIN (1), ADMIN_RRHH (2), ADMIN_EMPRESAS (3)
//   GET /api/logs/:id        → Ambos grupos anteriores
//   GET /api/logs/export     → SUPERADMIN (1) únicamente

import API from './api';

// ─── Constantes de paginación por defecto ───────────────────
const DEFAULT_PAGE  = 1;
const DEFAULT_LIMIT = 20;

// ─── Helpers internos ────────────────────────────────────────

/**
 * Construye un objeto de parámetros limpio, descartando
 * valores undefined/null/'all' para no ensuciar la query string.
 */
function buildParams(overrides = {}) {
  const raw = {
    page:     DEFAULT_PAGE,
    limit:    DEFAULT_LIMIT,
    ...overrides,
  };
  return Object.fromEntries(
    Object.entries(raw).filter(
      ([, v]) => v !== undefined && v !== null && v !== 'all' && v !== '',
    ),
  );
}

// ─── API pública del servicio ─────────────────────────────────

/**
 * Obtiene logs de seguridad (intentos fallidos, bloqueos, JWT expirados…).
 * Solo accesible para SUPERADMIN (idRol 1) y ADMIN_RRHH (idRol 2).
 *
 * @param {object} filtros
 * @param {number}  [filtros.page=1]
 * @param {number}  [filtros.limit=20]
 * @param {string}  [filtros.usuario]      - Filtrar por alias de usuario
 * @param {string}  [filtros.accion]       - Ej: 'LOGIN_FALLIDO', 'CUENTA_BLOQUEADA'
 * @param {string}  [filtros.severidad]    - 'ALTO' | 'MEDIO' | 'BAJO'
 * @param {string}  [filtros.fechaDesde]   - ISO 8601: '2026-05-01T00:00:00Z'
 * @param {string}  [filtros.fechaHasta]   - ISO 8601: '2026-05-31T23:59:59Z'
 *
 * @returns {Promise<{ data: LogSeguridad[], total: number, page: number, limit: number }>}
 */
export async function getLogsSeguridad(filtros = {}) {
  const params = buildParams(filtros);
  const response = await API.get('/api/logs/seguridad', { params });
  return response.data;
}

/**
 * Obtiene logs de aplicación (CRUD de empresas, usuarios, etc.).
 * Accesible para SUPERADMIN (1), ADMIN_RRHH (2) y ADMIN_EMPRESAS (3).
 *
 * @param {object} filtros
 * @param {number}  [filtros.page=1]
 * @param {number}  [filtros.limit=20]
 * @param {string}  [filtros.usuario]      - Filtrar por alias de usuario
 * @param {string}  [filtros.accion]       - Ej: 'EMPRESA_CREADA', 'USUARIO_EDITADO'
 * @param {string}  [filtros.entidad]      - Ej: 'Empresa', 'Usuario', 'Sede'
 * @param {string}  [filtros.fechaDesde]
 * @param {string}  [filtros.fechaHasta]
 *
 * @returns {Promise<{ data: LogAplicacion[], total: number, page: number, limit: number }>}
 */
export async function getLogsAplicacion(filtros = {}) {
  const params = buildParams(filtros);
  const response = await API.get('/api/logs/aplicacion', { params });
  return response.data;
}

/**
 * Obtiene el detalle completo de un registro de log por su ID.
 * Incluye campos sensibles como userAgent, ip completa y payload raw.
 *
 * @param {number|string} id
 * @returns {Promise<LogDetalle>}
 */
export async function getLogById(id) {
  const response = await API.get(`/api/logs/${id}`);
  return response.data;
}

/**
 * Descarga un archivo CSV/XLSX con los logs filtrados.
 * Solo SUPERADMIN puede exportar.
 *
 * @param {'seguridad'|'aplicacion'} tipo
 * @param {object} filtros  - Mismos filtros que getLogsSeguridad / getLogsAplicacion
 * @returns {Promise<Blob>}
 */
export async function exportarLogs(tipo, filtros = {}) {
  const params = buildParams({ ...filtros, formato: 'csv' });
  const response = await API.get(`/api/logs/export/${tipo}`, {
    params,
    responseType: 'blob',
  });
  return response.data;
}

/**
 * Trigger manual para descargar el Blob retornado por exportarLogs().
 *
 * @param {Blob}   blob
 * @param {string} nombreArchivo  - Ej: 'logs-seguridad-2026-05.csv'
 */
export function descargarBlob(blob, nombreArchivo) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href     = url;
  a.download = nombreArchivo;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Tipado JSDoc de referencia ───────────────────────────────
//
// @typedef {object} LogSeguridad
// @property {number}  id
// @property {string}  accion         - Clave de acción: 'LOGIN_FALLIDO', 'CUENTA_BLOQUEADA', etc.
// @property {string}  usuario        - Alias del usuario afectado
// @property {string}  severidad      - 'ALTO' | 'MEDIO' | 'BAJO'
// @property {string}  ip             - IP del cliente (puede estar enmascarada)
// @property {string}  userAgent      - User-agent del navegador
// @property {object}  detalles       - Payload JSON con contexto adicional
// @property {string}  creadoEn       - ISO 8601 timestamp
//
// @typedef {object} LogAplicacion
// @property {number}  id
// @property {string}  accion         - 'EMPRESA_CREADA', 'EMPRESA_EDITADA', 'USUARIO_ELIMINADO'…
// @property {string}  usuario        - Alias del usuario que realizó la acción
// @property {string}  entidad        - Nombre de la entidad afectada: 'Empresa', 'Usuario', etc.
// @property {number}  entidadId      - ID del registro afectado
// @property {object}  antes          - Estado del registro antes del cambio (para ediciones)
// @property {object}  despues        - Estado del registro después del cambio (para ediciones)
// @property {string}  ip
// @property {string}  userAgent
// @property {string}  creadoEn