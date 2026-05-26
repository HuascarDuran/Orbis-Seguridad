// src/components/PanelAuditoria.jsx
//
// Panel de auditoría corporativo con dos pestañas:
//   - Logs de Seguridad  → SUPERADMIN (1) y ADMIN_RRHH (2)
//   - Logs de Aplicación → SUPERADMIN (1), ADMIN_RRHH (2) y ADMIN_EMPRESAS (3)
//
// Uso:
//   <PanelAuditoria loggedInUser={loggedInUser} />
//
// donde loggedInUser.idRol es el número de rol del usuario autenticado.

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Shield, FileText, AlertTriangle, CheckCircle, XCircle,
  Info, LogIn, LogOut, Lock, Unlock, UserX, UserCheck,
  Edit3, Trash2, PlusCircle, Eye, Download, RefreshCw,
  ChevronLeft, ChevronRight, Monitor, Globe, Clock,
  Search, Filter, X, ArrowRight, AlertCircle, Key,
  Building2, Users, Cpu,
} from 'lucide-react';
import {
  getLogsSeguridad,
  getLogsAplicacion,
  exportarLogs,
  descargarBlob,
} from '../services/logService';

// ─────────────────────────────────────────────────────────────
// SECCIÓN 1: Diccionarios de traducción
// Toda la lógica de "mapeo a texto humano" vive aquí,
// aislada del componente para fácil mantenimiento.
// ─────────────────────────────────────────────────────────────

/**
 * Devuelve la configuración visual y textual de una acción de seguridad.
 * @param {string} accion
 * @param {object} detalles - Payload JSON del backend
 * @returns {{ icon, color, titulo, descripcion, severidad }}
 */
function traducirAccionSeguridad(accion, detalles = {}) {
  const d = detalles ?? {};
  const mapa = {
    LOGIN_EXITOSO: {
      icon:        <LogIn size={15} />,
      color:       'success',
      titulo:      'Inicio de sesión exitoso',
      descripcion: 'El usuario autenticó sus credenciales correctamente.',
      severidad:   'BAJO',
    },
    LOGIN_FALLIDO: {
      icon:  <XCircle size={15} />,
      color: 'danger',
      titulo: 'Intento de acceso fallido',
      descripcion: d.intentosRestantes !== undefined
        ? `Contraseña incorrecta. Intentos restantes: ${d.intentosRestantes}.`
        : 'Credenciales inválidas proporcionadas.',
      severidad: 'ALTO',
    },
    CUENTA_BLOQUEADA: {
      icon:  <Lock size={15} />,
      color: 'danger',
      titulo: 'Cuenta bloqueada automáticamente',
      descripcion: `Superado el límite de intentos fallidos${d.minutosBloqueo ? `. Bloqueo por ${d.minutosBloqueo} min.` : '.'}`,
      severidad: 'ALTO',
    },
    CUENTA_DESBLOQUEADA: {
      icon:  <Unlock size={15} />,
      color: 'warning',
      titulo: 'Cuenta desbloqueada',
      descripcion: d.porAdmin
        ? `Desbloqueada manualmente por un administrador.`
        : 'Desbloqueo automático por expiración del período de bloqueo.',
      severidad: 'MEDIO',
    },
    TOKEN_EXPIRADO: {
      icon:  <Clock size={15} />,
      color: 'warning',
      titulo: 'Sesión expirada',
      descripcion: 'El JWT del usuario expiró. Se requiere re-autenticación.',
      severidad: 'MEDIO',
    },
    TOKEN_INVALIDO: {
      icon:  <AlertTriangle size={15} />,
      color: 'danger',
      titulo: 'Token inválido o manipulado',
      descripcion: 'Se recibió un JWT con firma inválida o estructura incorrecta.',
      severidad: 'ALTO',
    },
    ACCESO_DENEGADO: {
      icon:  <UserX size={15} />,
      color: 'danger',
      titulo: 'Acceso no autorizado',
      descripcion: d.rutaIntentada
        ? `El rol del usuario no tiene permiso para acceder a "${d.rutaIntentada}".`
        : 'Intento de acceso a un recurso sin los permisos necesarios.',
      severidad: 'ALTO',
    },
    LOGOUT: {
      icon:  <LogOut size={15} />,
      color: 'neutral',
      titulo: 'Cierre de sesión',
      descripcion: 'El usuario finalizó su sesión de forma voluntaria.',
      severidad: 'BAJO',
    },
    CUENTA_TEMPORAL_EXPIRADA: {
      icon:  <Clock size={15} />,
      color: 'warning',
      titulo: 'Cuenta temporal expirada',
      descripcion: 'El acceso del usuario temporal superó su fecha de expiración.',
      severidad: 'MEDIO',
    },
    RESET_PASSWORD_SOLICITADO: {
      icon:  <Key size={15} />,
      color: 'neutral',
      titulo: 'Solicitud de recuperación de contraseña',
      descripcion: `Se generó un token de reset y se envió al correo del usuario.`,
      severidad: 'BAJO',
    },
    RESET_PASSWORD_COMPLETADO: {
      icon:  <CheckCircle size={15} />,
      color: 'success',
      titulo: 'Contraseña restablecida',
      descripcion: 'El usuario completó el proceso de recuperación de contraseña.',
      severidad: 'BAJO',
    },
    PASSWORD_CAMBIADA: {
      icon:  <Key size={15} />,
      color: 'success',
      titulo: 'Contraseña actualizada',
      descripcion: 'El usuario cambió su contraseña satisfactoriamente.',
      severidad: 'BAJO',
    },
  };

  return mapa[accion] ?? {
    icon:        <Info size={15} />,
    color:       'neutral',
    titulo:      accion?.replace(/_/g, ' ') ?? 'Evento desconocido',
    descripcion: Object.keys(d).length
      ? `Detalles: ${Object.entries(d).map(([k, v]) => `${k}: ${v}`).join(', ')}.`
      : 'Sin descripción disponible.',
    severidad: 'BAJO',
  };
}

/**
 * Devuelve la configuración visual y textual de una acción de aplicación.
 * @param {string} accion
 * @param {string} entidad - Nombre de la entidad afectada
 * @returns {{ icon, color, titulo }}
 */
function traducirAccionAplicacion(accion, entidad = '') {
  const entidadLabel = entidad ? ` de ${entidad}` : '';
  const mapa = {
    EMPRESA_CREADA:       { icon: <PlusCircle size={15} />,  color: 'success', titulo: `Registro${entidadLabel} creado` },
    EMPRESA_EDITADA:      { icon: <Edit3 size={15} />,        color: 'info',    titulo: `Registro${entidadLabel} modificado` },
    EMPRESA_ELIMINADA:    { icon: <Trash2 size={15} />,       color: 'danger',  titulo: `Registro${entidadLabel} eliminado` },
    USUARIO_CREADO:       { icon: <UserCheck size={15} />,    color: 'success', titulo: `Usuario creado` },
    USUARIO_EDITADO:      { icon: <Edit3 size={15} />,        color: 'info',    titulo: `Usuario modificado` },
    USUARIO_ELIMINADO:    { icon: <UserX size={15} />,        color: 'danger',  titulo: `Usuario eliminado` },
    SEDE_CREADA:          { icon: <Building2 size={15} />,    color: 'success', titulo: `Sede creada` },
    SEDE_EDITADA:         { icon: <Edit3 size={15} />,        color: 'info',    titulo: `Sede modificada` },
    SEDE_ELIMINADA:       { icon: <Trash2 size={15} />,       color: 'danger',  titulo: `Sede eliminada` },
    ROL_ASIGNADO:         { icon: <Shield size={15} />,       color: 'warning', titulo: `Rol asignado a usuario` },
    EXPORTACION:          { icon: <Download size={15} />,     color: 'neutral', titulo: `Exportación de datos` },
  };

  return mapa[accion] ?? {
    icon:   <FileText size={15} />,
    color:  'neutral',
    titulo: accion?.replace(/_/g, ' ') ?? 'Acción desconocida',
  };
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 2: Tokens de color y utilidades de estilo
// ─────────────────────────────────────────────────────────────

const COLOR_MAP = {
  success: {
    badge:   'bg-green-50 text-green-800 border border-green-200',
    dot:     'bg-green-500',
    icon:    'text-green-600',
    rowHover:'hover:bg-green-50/30',
  },
  danger: {
    badge:   'bg-red-50 text-red-800 border border-red-200',
    dot:     'bg-red-500',
    icon:    'text-red-500',
    rowHover:'hover:bg-red-50/30',
  },
  warning: {
    badge:   'bg-amber-50 text-amber-800 border border-amber-200',
    dot:     'bg-amber-500',
    icon:    'text-amber-500',
    rowHover:'hover:bg-amber-50/30',
  },
  info: {
    badge:   'bg-blue-50 text-blue-800 border border-blue-200',
    dot:     'bg-blue-500',
    icon:    'text-blue-500',
    rowHover:'hover:bg-blue-50/30',
  },
  neutral: {
    badge:   'bg-gray-100 text-gray-700 border border-gray-200',
    dot:     'bg-gray-400',
    icon:    'text-gray-400',
    rowHover:'hover:bg-gray-50',
  },
};

const SEVERIDAD_COLOR = {
  ALTO:  'danger',
  MEDIO: 'warning',
  BAJO:  'success',
};

function Badge({ color = 'neutral', icon, children }) {
  const c = COLOR_MAP[color] ?? COLOR_MAP.neutral;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${c.badge}`}>
      {icon && <span className={c.icon}>{icon}</span>}
      {children}
    </span>
  );
}

function formatearFecha(isoString) {
  if (!isoString) return '—';
  try {
    return new Intl.DateTimeFormat('es-BO', {
      day:    '2-digit',
      month:  '2-digit',
      year:   'numeric',
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date(isoString));
  } catch {
    return isoString;
  }
}

function abreviarIP(ip) {
  if (!ip) return '—';
  // Ocultar último octeto para privacidad en tabla: 192.168.1.xxx
  const partes = ip.split('.');
  if (partes.length === 4) return `${partes[0]}.${partes[1]}.${partes[2]}.***`;
  return ip;
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 3: Modal de detalle técnico
// ─────────────────────────────────────────────────────────────

function ModalDetalle({ log, tipo, onClose }) {
  if (!log) return null;

  const esSeg = tipo === 'seguridad';
  const tradSeg = esSeg ? traducirAccionSeguridad(log.accion, log.detalles) : null;
  const tradApp = !esSeg ? traducirAccionAplicacion(log.accion, log.entidad) : null;
  const trad    = tradSeg ?? tradApp;
  const colorKey = esSeg
    ? (SEVERIDAD_COLOR[tradSeg?.severidad] ?? 'neutral')
    : trad?.color ?? 'neutral';

  // Campos "antes / después" para logs de aplicación con cambios
  const tieneAntesDespues =
    !esSeg &&
    log.antes &&
    log.despues &&
    Object.keys(log.antes).length > 0;

  // Keys que cambiaron
  const camposCambiados = tieneAntesDespues
    ? [...new Set([...Object.keys(log.antes ?? {}), ...Object.keys(log.despues ?? {})])]
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Detalle técnico del registro de auditoría"
      >
        {/* Cabecera del modal */}
        <div className="flex items-start justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${COLOR_MAP[colorKey].badge}`}>
              <span className={COLOR_MAP[colorKey].icon}>{trad?.icon}</span>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">{trad?.titulo}</p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">{log.accion}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* Bloque de descripción */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Descripción del evento</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {esSeg ? tradSeg?.descripcion : `${trad?.titulo} sobre "${log.recurso ?? '—'}".`}
            </p>
          </div>

          {/* Metadatos técnicos */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Metadatos técnicos</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'ID de registro', value: `#${log.id}`,                    icon: <FileText size={14} /> },
                { label: 'Usuario',        value: log.nombreUsuario ?? '—',     icon: <Users size={14} /> },
                { label: 'Fecha y hora',   value: formatearFecha(log.creadoEn),  icon: <Clock size={14} /> },
                { label: 'Dirección IP',   value: log.ipOrigen ?? '—',          icon: <Globe size={14} /> },
                // Cambia la línea de severidad por esto:
                { label: 'Severidad', value: esSeg ? (tradSeg?.severidad ?? '—') : 'N/A (Aplicación)', icon: <AlertTriangle size={14} /> },
                  
                { label: 'Entidad / Módulo',
                  value: log.recurso ?? (esSeg ? 'Seguridad' : '—'),
                  icon: <Cpu size={14} /> },
              ].map(({ label, value, icon }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-lg p-3 flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5 shrink-0">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">{label}</p>
                    <p className="text-sm font-medium text-gray-800 truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User-Agent */}
          {log.userAgent && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1.5">
                <Monitor size={12} className="inline mr-1" />
                Agente de usuario
              </p>
              <p className="text-xs font-mono bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-gray-600 break-all leading-relaxed">
                {log.userAgent}
              </p>
            </div>
          )}

          {/* Antes / Después para logs de aplicación */}
          {tieneAntesDespues && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                Campos modificados
              </p>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-3 py-2 text-gray-400 font-medium">Campo</th>
                      <th className="text-left px-3 py-2 text-gray-400 font-medium">Antes</th>
                      <th className="text-center px-2 py-2 text-gray-300">→</th>
                      <th className="text-left px-3 py-2 text-gray-400 font-medium">Después</th>
                    </tr>
                  </thead>
                  <tbody>
                    {camposCambiados.map((campo, i) => {
                      const antes   = log.antes?.[campo];
                      const despues = log.despues?.[campo];
                      const cambio  = JSON.stringify(antes) !== JSON.stringify(despues);
                      return (
                        <tr
                          key={campo}
                          className={`border-t border-gray-100 ${cambio ? 'bg-amber-50/40' : ''}`}
                        >
                          <td className="px-3 py-2 font-mono text-gray-600 font-medium">{campo}</td>
                          <td className="px-3 py-2 text-red-600/80">
                            {antes !== undefined ? String(antes) : <span className="text-gray-300 italic">sin valor</span>}
                          </td>
                          <td className="px-2 py-2 text-center">
                            <ArrowRight size={12} className={cambio ? 'text-amber-500' : 'text-gray-200'} />
                          </td>
                          <td className="px-3 py-2 text-green-700 font-medium">
                            {despues !== undefined ? String(despues) : <span className="text-gray-300 italic">sin valor</span>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Detalles JSON raw (acordeón) para logs de seguridad */}
          {esSeg && log.detalles && Object.keys(log.detalles).length > 0 && (
            <details className="group">
              <summary className="text-xs font-medium text-gray-400 uppercase tracking-wide cursor-pointer hover:text-gray-600 select-none list-none flex items-center gap-1.5">
                <span>Payload técnico (JSON raw)</span>
                <ChevronLeft size={12} className="group-open:rotate-90 transition-transform -rotate-90" />
              </summary>
              <pre className="mt-2 text-xs font-mono bg-gray-900 text-green-400 rounded-xl px-4 py-3 overflow-x-auto leading-relaxed">
                {JSON.stringify(log.detalles, null, 2)}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 4: Controles de filtro compartidos
// ─────────────────────────────────────────────────────────────

function BarraFiltros({ filtros, onChange, tipo }) {
  const accionesSeguridad = [
    'LOGIN_EXITOSO', 'LOGIN_FALLIDO', 'CUENTA_BLOQUEADA', 'CUENTA_DESBLOQUEADA',
    'TOKEN_EXPIRADO', 'TOKEN_INVALIDO', 'ACCESO_DENEGADO', 'LOGOUT',
    'CUENTA_TEMPORAL_EXPIRADA', 'RESET_PASSWORD_SOLICITADO', 'PASSWORD_CAMBIADA',
  ];
  const accionesAplicacion = [
    'EMPRESA_CREADA', 'EMPRESA_EDITADA', 'EMPRESA_ELIMINADA',
    'USUARIO_CREADO', 'USUARIO_EDITADO', 'USUARIO_ELIMINADO',
    'SEDE_CREADA', 'SEDE_EDITADA', 'SEDE_ELIMINADA',
    'ROL_ASIGNADO', 'EXPORTACION',
  ];
  const acciones = tipo === 'seguridad' ? accionesSeguridad : accionesAplicacion;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Búsqueda por usuario */}
      <div className="relative">
        <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Usuario…"
          value={filtros.usuario ?? ''}
          onChange={(e) => onChange({ usuario: e.target.value, page: 1 })}
          className="text-xs pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 w-36 focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
      </div>

      {/* Filtro de acción */}
      <div className="relative">
        <Filter size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <select
          value={filtros.accion ?? 'all'}
          onChange={(e) => onChange({ accion: e.target.value, page: 1 })}
          className="text-xs pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 appearance-none cursor-pointer"
        >
          <option value="all">Todas las acciones</option>
          {acciones.map((a) => (
            <option key={a} value={a}>{a.replace(/_/g, ' ')}</option>
          ))}
        </select>
      </div>

      {/* Filtro de severidad (solo seguridad) */}
      {tipo === 'seguridad' && (
        <select
          value={filtros.severidad ?? 'all'}
          onChange={(e) => onChange({ severidad: e.target.value, page: 1 })}
          className="text-xs px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300 cursor-pointer"
        >
          <option value="all">Toda severidad</option>
          <option value="ALTO">Alto</option>
          <option value="MEDIO">Medio</option>
          <option value="BAJO">Bajo</option>
        </select>
      )}

      {/* Rango de fechas */}
      <input
        type="date"
        value={filtros.fechaDesde ?? ''}
        onChange={(e) => onChange({ fechaDesde: e.target.value, page: 1 })}
        className="text-xs px-2 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
        aria-label="Fecha desde"
      />
      <span className="text-xs text-gray-400">–</span>
      <input
        type="date"
        value={filtros.fechaHasta ?? ''}
        onChange={(e) => onChange({ fechaHasta: e.target.value, page: 1 })}
        className="text-xs px-2 py-1.5 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
        aria-label="Fecha hasta"
      />

      {/* Limpiar filtros */}
      {(filtros.usuario || filtros.accion || filtros.severidad || filtros.fechaDesde || filtros.fechaHasta) && (
        <button
          onClick={() => onChange({ usuario: '', accion: 'all', severidad: 'all', fechaDesde: '', fechaHasta: '', page: 1 })}
          className="text-xs flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors px-2 py-1.5 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-100"
        >
          <X size={12} /> Limpiar
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 5: Paginación
// ─────────────────────────────────────────────────────────────

function Paginacion({ page, total, limit, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const desde = total === 0 ? 0 : (page - 1) * limit + 1;
  const hasta  = Math.min(page * limit, total);

  return (
    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
      <p className="text-xs text-gray-400">
        {total === 0 ? 'Sin resultados' : `Mostrando ${desde}–${hasta} de ${total} registros`}
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(page - 1)}
          disabled={page <= 1}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Página anterior"
        >
          <ChevronLeft size={14} />
        </button>
        {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
          let p;
          if (totalPages <= 7) {
            p = i + 1;
          } else if (page <= 4) {
            p = i + 1;
          } else if (page >= totalPages - 3) {
            p = totalPages - 6 + i;
          } else {
            p = page - 3 + i;
          }
          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`w-7 h-7 rounded-lg text-xs font-medium transition-colors ${
                p === page
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          );
        })}
        <button
          onClick={() => onChange(page + 1)}
          disabled={page >= totalPages}
          className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Página siguiente"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 6: Tabla de logs de seguridad
// ─────────────────────────────────────────────────────────────

function TablaLogsSeguridad({ logs, onVerDetalle }) {
  if (logs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Shield size={40} className="mb-3 opacity-30" />
        <p className="text-sm">No se encontraron registros de seguridad.</p>
        <p className="text-xs mt-1">Prueba ajustando los filtros.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {['ID', 'Fecha y hora', 'Usuario', 'Evento', 'Severidad', 'IP', 'Acción'].map((h) => (
              <th
                key={h}
                className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide pb-2 border-b border-gray-100 px-2 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            const trad     = traducirAccionSeguridad(log.accion, log.detalles);
            const sevColor = SEVERIDAD_COLOR[trad.severidad] ?? 'neutral';
            const c        = COLOR_MAP[sevColor];

            return (
              <tr
                key={log.id}
                className={`border-b border-gray-50 transition-colors cursor-pointer ${c.rowHover}`}
                onClick={() => onVerDetalle(log)}
              >
                <td className="px-2 py-3 font-mono text-xs text-gray-400">#{log.id}</td>
                <td className="px-2 py-3 text-xs text-gray-500 whitespace-nowrap font-mono">
                  {formatearFecha(log.creadoEn)}
                </td>
                <td className="px-2 py-3">
                  <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md font-mono">
                    {log.nombreUsuario ?? '—'}
                  </span>
                </td>
                <td className="px-2 py-3 max-w-xs">
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 ${c.icon}`}>{trad.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-gray-800 leading-snug">{trad.titulo}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug line-clamp-2">{trad.descripcion}</p>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-3 whitespace-nowrap">
                  <Badge color={sevColor}>
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} inline-block`} />
                    {trad.severidad}
                  </Badge>
                </td>
                <td className="px-2 py-3 font-mono text-xs text-gray-400 whitespace-nowrap">
                  {abreviarIP(log.ipOrigen)}
                </td>
                <td className="px-2 py-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); onVerDetalle(log); }}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                    aria-label={`Ver detalle del registro ${log.id}`}
                  >
                    <Eye size={13} /> Ver
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 7: Tabla de logs de aplicación
// ─────────────────────────────────────────────────────────────

function TablaLogsAplicacion({ logs, onVerDetalle }) {
  if (logs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <FileText size={40} className="mb-3 opacity-30" />
        <p className="text-sm">No se encontraron registros de aplicación.</p>
        <p className="text-xs mt-1">Prueba ajustando los filtros.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {['ID', 'Fecha y hora', 'Usuario', 'Operación', 'Entidad', 'ID Registro', 'Cambios', 'Acción'].map((h) => (
              <th
                key={h}
                className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide pb-2 border-b border-gray-100 px-2 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            const trad          = traducirAccionAplicacion(log.accion, log.recurso);
            const c             = COLOR_MAP[trad.color ?? 'neutral'];
            const tieneAntes    = log.antes  && Object.keys(log.antes).length > 0;
            const tieneDespues  = log.despues && Object.keys(log.despues).length > 0;
            const camposCount   = tieneAntes
              ? [...new Set([...Object.keys(log.antes ?? {}), ...Object.keys(log.despues ?? {})])].length
              : 0;

            return (
              <tr
                key={log.id}
                className={`border-b border-gray-50 transition-colors cursor-pointer ${c.rowHover}`}
                onClick={() => onVerDetalle(log)}
              >
                <td className="px-2 py-3 font-mono text-xs text-gray-400">#{log.id}</td>
                <td className="px-2 py-3 text-xs text-gray-500 whitespace-nowrap font-mono">
                  {formatearFecha(log.creadoEn)}
                </td>
                <td className="px-2 py-3">
                  <span className="text-xs font-medium text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md font-mono">
                    {log.nombreUsuario ?? '—'}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`shrink-0 ${c.icon}`}>{trad.icon}</span>
                    <Badge color={trad.color}>{trad.titulo}</Badge>
                  </div>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Building2 size={13} className="text-gray-400" />
                    {log.recurso ?? '—'}
                  </div>
                </td>
                <td className="px-2 py-3 font-mono text-xs text-gray-500">
                  {log.entidadId ?? '—'}
                </td>
                
                <td className="px-2 py-3">
                 {log.detalles?.camposModificados?.length > 0 ? (
                    <Badge color="warning">
                 <Edit3 size={11} />
                    {log.detalles.camposModificados.length} campo{log.detalles.camposModificados.length > 1 ? 's' : ''}
                </Badge>
                 ) : (
               <Badge color="success"><PlusCircle size={11} /> Registro</Badge>
                    )}
                    </td>
                <td className="px-2 py-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); onVerDetalle(log); }}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                    aria-label={`Ver detalle del registro ${log.id}`}
                  >
                    <Eye size={13} /> Ver
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 8: Componente principal exportable
// ─────────────────────────────────────────────────────────────

const LIMITE = 20;

export default function PanelAuditoria({ loggedInUser }) {
  const idRol = loggedInUser?.idRol ?? 0;

  // Control de acceso por pestaña
  const puedeVerSeguridad  = [1, 2].includes(idRol);      // SUPERADMIN, ADMIN_RRHH
  const puedeVerAplicacion = [1, 2, 3].includes(idRol);   // + ADMIN_EMPRESAS
  const puedeExportar      = idRol === 1;                  // Solo SUPERADMIN

  const tabsDisponibles = useMemo(() => {
    const tabs = [];
    if (puedeVerSeguridad)  tabs.push({ id: 'seguridad',  label: 'Logs de seguridad',   icon: <Shield size={15} /> });
    if (puedeVerAplicacion) tabs.push({ id: 'aplicacion', label: 'Logs de aplicación',  icon: <FileText size={15} /> });
    return tabs;
  }, [puedeVerSeguridad, puedeVerAplicacion]);

  const [tabActiva, setTabActiva] = useState(() => tabsDisponibles[0]?.id ?? 'seguridad');

  // Estado de datos
  const [logsSeg,   setLogsSeg]   = useState([]);
  const [logsApp,   setLogsApp]   = useState([]);
  const [totalSeg,  setTotalSeg]  = useState(0);
  const [totalApp,  setTotalApp]  = useState(0);
  const [cargando,  setCargando]  = useState(false);
  const [error,     setError]     = useState(null);

  // Filtros independientes por pestaña
  const [filtrosSeg, setFiltrosSeg] = useState({ page: 1, limit: LIMITE });
  const [filtrosApp, setFiltrosApp] = useState({ page: 1, limit: LIMITE });

  // Modal
  const [logSeleccionado, setLogSeleccionado] = useState(null);
  const [tipoModal, setTipoModal]             = useState('seguridad');

  // Exportación
  const [exportando, setExportando] = useState(false);

  // ── Cargar logs de seguridad ──────────────────────────────
  const cargarSeguridad = useCallback(async () => {
    if (!puedeVerSeguridad) return;
    setCargando(true);
    setError(null);
    try {
      const res = await getLogsSeguridad(filtrosSeg);
      setLogsSeg(res.data ?? []);
      setTotalSeg(res.total ?? 0);
    } catch (e) {
      setError('No se pudo cargar los logs de seguridad. Verifique sus permisos o intente más tarde.');
    } finally {
      setCargando(false);
    }
  }, [filtrosSeg, puedeVerSeguridad]);

  // ── Cargar logs de aplicación ─────────────────────────────
  const cargarAplicacion = useCallback(async () => {
    if (!puedeVerAplicacion) return;
    setCargando(true);
    setError(null);
    try {
      const res = await getLogsAplicacion(filtrosApp);
      setLogsApp(res.data ?? []);
      setTotalApp(res.total ?? 0);
    } catch (e) {
      setError('No se pudo cargar los logs de aplicación. Verifique sus permisos o intente más tarde.');
    } finally {
      setCargando(false);
    }
  }, [filtrosApp, puedeVerAplicacion]);

  useEffect(() => { if (tabActiva === 'seguridad')  cargarSeguridad();  }, [tabActiva, filtrosSeg, cargarSeguridad]);
  useEffect(() => { if (tabActiva === 'aplicacion') cargarAplicacion(); }, [tabActiva, filtrosApp, cargarAplicacion]);

  // ── Handlers ──────────────────────────────────────────────
  function actualizarFiltrosSeg(cambios) {
    setFiltrosSeg((prev) => ({ ...prev, ...cambios }));
  }

  function actualizarFiltrosApp(cambios) {
    setFiltrosApp((prev) => ({ ...prev, ...cambios }));
  }

  function abrirModal(log, tipo) {
    setLogSeleccionado(log);
    setTipoModal(tipo);
  }

  async function handleExportar() {
    if (!puedeExportar) return;
    setExportando(true);
    try {
      const tipo   = tabActiva;
      const filtros = tabActiva === 'seguridad' ? filtrosSeg : filtrosApp;
      const blob   = await exportarLogs(tipo, filtros);
      const fecha  = new Date().toISOString().slice(0, 10);
      descargarBlob(blob, `orbis-logs-${tipo}-${fecha}.csv`);
    } catch {
      setError('No se pudo generar la exportación. Intente nuevamente.');
    } finally {
      setExportando(false);
    }
  }

  // ── Acceso denegado ───────────────────────────────────────
  if (!puedeVerSeguridad && !puedeVerAplicacion) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <AlertCircle size={44} className="mb-3 text-red-300" />
        <p className="text-sm font-medium text-gray-600">Acceso denegado</p>
        <p className="text-xs mt-1">Tu rol no tiene permisos para visualizar el panel de auditoría.</p>
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Cabecera */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield size={20} className="text-gray-700" />
            <h1 className="text-xl font-medium text-gray-900">Panel de auditoría</h1>
          </div>
          <p className="text-sm text-gray-500 ml-7">
            Registro de eventos de seguridad y actividad del sistema · Solo lectura
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => tabActiva === 'seguridad' ? cargarSeguridad() : cargarAplicacion()}
            disabled={cargando}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40"
          >
            <RefreshCw size={13} className={cargando ? 'animate-spin' : ''} />
            Actualizar
          </button>
          {puedeExportar && (
            <button
              onClick={handleExportar}
              disabled={exportando}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors disabled:opacity-40"
            >
              <Download size={13} className={exportando ? 'animate-bounce' : ''} />
              {exportando ? 'Exportando…' : 'Exportar CSV'}
            </button>
          )}
        </div>
      </div>

      {/* Error global */}
      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4 text-sm text-red-700">
          <AlertTriangle size={16} className="shrink-0 text-red-500" />
          {error}
          <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-100 mb-5 flex gap-1">
        {tabsDisponibles.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabActiva(tab.id)}
            className={`inline-flex items-center gap-1.5 text-sm px-4 py-2.5 border-b-2 transition-colors ${
              tabActiva === tab.id
                ? 'border-gray-900 text-gray-900 font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            {tab.label}
            {/* Contador de total */}
            {tab.id === 'seguridad' && totalSeg > 0 && (
              <span className="ml-1 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                {totalSeg}
              </span>
            )}
            {tab.id === 'aplicacion' && totalApp > 0 && (
              <span className="ml-1 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                {totalApp}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5">
        {tabActiva === 'seguridad' && puedeVerSeguridad && (
          <>
            <div className="mb-4">
              <BarraFiltros
                filtros={filtrosSeg}
                onChange={actualizarFiltrosSeg}
                tipo="seguridad"
              />
            </div>
            {cargando ? (
              <div className="flex items-center justify-center py-16 text-gray-400">
                <RefreshCw size={20} className="animate-spin mr-2" />
                <span className="text-sm">Cargando registros…</span>
              </div>
            ) : (
              <TablaLogsSeguridad
                logs={logsSeg}
                onVerDetalle={(log) => abrirModal(log, 'seguridad')}
              />
            )}
            {!cargando && (
              <Paginacion
                page={filtrosSeg.page}
                total={totalSeg}
                limit={LIMITE}
                onChange={(p) => actualizarFiltrosSeg({ page: p })}
              />
            )}
          </>
        )}

        {tabActiva === 'aplicacion' && puedeVerAplicacion && (
          <>
            <div className="mb-4">
              <BarraFiltros
                filtros={filtrosApp}
                onChange={actualizarFiltrosApp}
                tipo="aplicacion"
              />
            </div>
            {cargando ? (
              <div className="flex items-center justify-center py-16 text-gray-400">
                <RefreshCw size={20} className="animate-spin mr-2" />
                <span className="text-sm">Cargando registros…</span>
              </div>
            ) : (
              <TablaLogsAplicacion
                logs={logsApp}
                onVerDetalle={(log) => abrirModal(log, 'aplicacion')}
              />
            )}
            {!cargando && (
              <Paginacion
                page={filtrosApp.page}
                total={totalApp}
                limit={LIMITE}
                onChange={(p) => actualizarFiltrosApp({ page: p })}
              />
            )}
          </>
        )}
      </div>

      {/* Modal de detalle */}
      {logSeleccionado && (
        <ModalDetalle
          log={logSeleccionado}
          tipo={tipoModal}
          onClose={() => setLogSeleccionado(null)}
        />
      )}
    </div>
  );
}