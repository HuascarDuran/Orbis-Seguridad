// src/components/RiesgosTable.jsx
import React, { useEffect, useState, useCallback } from 'react';
import API from '../services/api';
import RiesgoForm from './RiesgoForm';
import { exportarRiesgosAExcel } from './utils/exportarRiesgosExcel';

// Mapa de colores según matriz de calor
const COLORES_NIVEL = {
  Bajo:     { bg: '#22c55e', text: '#ffffff' },
  Moderado: { bg: '#facc15', text: '#1f2937' },
  Alto:     { bg: '#f97316', text: '#ffffff' },
  Extremo:  { bg: '#dc2626', text: '#ffffff' },
};

const celdaNivel = (nivel) => {
  const c = COLORES_NIVEL[nivel] || { bg: '#e5e7eb', text: '#111827' };
  return {
    backgroundColor: c.bg,
    color: c.text,
    fontWeight: 600,
    textAlign: 'center',
    padding: '8px 12px',
    border: '1px solid #cbd5e1',
    whiteSpace: 'nowrap',
  };
};

const celdaBase = {
  padding: '8px 12px',
  border: '1px solid #cbd5e1',
  fontSize: 13,
  verticalAlign: 'top',
};

const headerStyle = {
  backgroundColor: '#1e3a8a',
  color: '#ffffff',
  padding: '10px 12px',
  border: '1px solid #1e40af',
  fontWeight: 700,
  fontSize: 12,
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const groupHeaderStyle = {
  backgroundColor: '#0f172a',
  color: '#ffffff',
  padding: '10px 12px',
  border: '1px solid #1e40af',
  fontWeight: 700,
  fontSize: 13,
  textAlign: 'center',
};

const btnPrimary = {
  padding: '8px 16px',
  backgroundColor: '#1e3a8a',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 13,
};

const btnSuccess = {
  padding: '8px 16px',
  backgroundColor: '#15803d',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 13,
};

const btnEdit = {
  padding: '4px 8px',
  backgroundColor: '#0284c7',
  color: '#fff',
  border: 'none',
  borderRadius: 3,
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 11,
  marginRight: 4,
};

const btnDanger = {
  padding: '4px 8px',
  backgroundColor: '#dc2626',
  color: '#fff',
  border: 'none',
  borderRadius: 3,
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 11,
};

// ── Estilos del tooltip ──────────────────────────────────────────────────────
const tooltipWrapperStyle = {
  position: 'relative',
  display: 'inline-block',
  cursor: 'default',
};

const tooltipBoxStyle = {
  position: 'absolute',
  zIndex: 200,
  bottom: '135%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#0f172a',
  color: '#fff',
  fontSize: 12,
  borderRadius: 6,
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
  pointerEvents: 'none',
  lineHeight: 1.7,
};

// ── Componente AuditoriaTooltip ──────────────────────────────────────────────
function AuditoriaTooltip({ usuarioNombre, ipOrigen, fechaCreacion }) {
  const [visible, setVisible] = useState(false);

  // Registros viejos sin trazabilidad no muestran el ícono
  if (!usuarioNombre && !ipOrigen) return null;

  const fecha = fechaCreacion
    ? new Date(fechaCreacion).toLocaleString('es-BO', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      })
    : '—';

  return (
    <div
      style={tooltipWrapperStyle}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Ícono circular "i" */}
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: '50%',
        backgroundColor: visible ? '#1e3a8a' : '#e2e8f0',
        color: visible ? '#fff' : '#64748b',
        fontSize: 12,
        fontWeight: 700,
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}>
        i
      </span>

      {/* Tooltip */}
      {visible && (
        <div style={tooltipBoxStyle}>
          <div style={{
            marginBottom: 4,
            paddingBottom: 4,
            borderBottom: '1px solid #334155',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}>
            🔍 Trazabilidad
          </div>
          <div>👤 <strong>Usuario:</strong> {usuarioNombre ?? '—'}</div>
          <div>🌐 <strong>IP:</strong> {ipOrigen ?? '—'}</div>
          <div>🕐 <strong>Fecha:</strong> {fecha}</div>
        </div>
      )}
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function RiesgosTable() {
  const [riesgos, setRiesgos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [riesgoEditar, setRiesgoEditar] = useState(null);

  const cargarRiesgos = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);
      const { data } = await API.get('/api/riesgos');
      setRiesgos(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error al cargar riesgos');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarRiesgos();
  }, [cargarRiesgos]);

  const handleNuevo = () => {
    setRiesgoEditar(null);
    setModalAbierto(true);
  };

  const handleEditar = (riesgo) => {
    setRiesgoEditar(riesgo);
    setModalAbierto(true);
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Eliminar este riesgo? Esta acción no se puede deshacer.')) return;
    try {
      await API.delete(`/api/riesgos/${id}`);
      cargarRiesgos();
    } catch (err) {
      alert('Error al eliminar: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleExportar = async () => {
    if (riesgos.length === 0) {
      alert('No hay riesgos para exportar.');
      return;
    }
    try {
      await exportarRiesgosAExcel(riesgos);
    } catch (err) {
      alert('Error al exportar: ' + err.message);
    }
  };

  const handleCerrarModal = () => {
    setModalAbierto(false);
    setRiesgoEditar(null);
  };

  if (cargando) return <div style={{ padding: 24 }}>Cargando matriz de riesgos…</div>;
  if (error)    return <div style={{ padding: 24, color: '#dc2626' }}>Error: {error}</div>;

  return (
    <div style={{ padding: 16 }}>
      {/* Barra de acciones */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <h2 style={{ margin: 0, color: '#0f172a' }}>
          Matriz de Análisis de Riesgos de Seguridad de Información
        </h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={btnPrimary} onClick={handleNuevo}>+ Nuevo Riesgo</button>
          <button style={btnSuccess} onClick={handleExportar}>📊 Exportar a Excel</button>
        </div>
      </div>

      <div style={{ overflowX: 'auto', border: '1px solid #cbd5e1', borderRadius: 6 }}>
        <table style={{ borderCollapse: 'collapse', minWidth: 2300, width: '100%' }}>
          <thead>
            <tr>
              <th colSpan={2} style={groupHeaderStyle}>Activo de Información</th>
              <th colSpan={1} style={groupHeaderStyle}>Identificación</th>
              <th colSpan={1} style={groupHeaderStyle}>Valoración</th>
              <th colSpan={2} style={groupHeaderStyle}>Cálculo Inicial</th>
              <th colSpan={2} style={groupHeaderStyle}>Evaluación Riesgo Inherente</th>
              <th colSpan={1} style={groupHeaderStyle}>Medición</th>
              <th colSpan={1} style={groupHeaderStyle}>Mitigación</th>
              <th colSpan={3} style={groupHeaderStyle}>Eficiencia del Control</th>
              <th colSpan={4} style={groupHeaderStyle}>Riesgo Residual</th>
              <th rowSpan={2} style={groupHeaderStyle}>Acciones</th>
            </tr>
            <tr>
              <th style={headerStyle}>Activo Información</th>
              <th style={headerStyle}>Aplicativos / Sistemas</th>
              <th style={headerStyle}>Amenaza / Vulnerabilidad</th>
              <th style={headerStyle}>Riesgo / Consecuencia</th>
              <th style={headerStyle}>Prob. Inh.</th>
              <th style={headerStyle}>Imp. Inh.</th>
              <th style={headerStyle}>Riesgo Inh.</th>
              <th style={headerStyle}>Nivel Inh.</th>
              <th style={headerStyle}>Tratamiento</th>
              <th style={headerStyle}>Controles a Implementar</th>
              <th style={headerStyle}>Tipo</th>
              <th style={headerStyle}>Nivel</th>
              <th style={headerStyle}>Frecuencia</th>
              <th style={headerStyle}>Prob. Res.</th>
              <th style={headerStyle}>Imp. Res.</th>
              <th style={headerStyle}>Riesgo Res.</th>
              <th style={headerStyle}>Nivel Res.</th>
            </tr>
          </thead>
          <tbody>
            {riesgos.length === 0 && (
              <tr>
                <td colSpan={18} style={{ ...celdaBase, textAlign: 'center', padding: 20 }}>
                  No hay riesgos registrados. Crea el primero con el botón "Nuevo Riesgo".
                </td>
              </tr>
            )}
            {riesgos.map((r) => (
              <tr key={r.id}>
                <td style={celdaBase}>{r.activo_informacion}</td>
                <td style={celdaBase}>{r.aplicativos_sistemas}</td>
                <td style={celdaBase}>{r.amenaza_vulnerabilidad}</td>
                <td style={celdaBase}>{r.riesgo_consecuencia}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.probabilidad_inherente}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.impacto_inherente}</td>
                <td style={{ ...celdaBase, textAlign: 'center', fontWeight: 600 }}>{r.riesgo_inherente}</td>
                <td style={celdaNivel(r.nivel_riesgo_inherente)}>{r.nivel_riesgo_inherente}</td>
                <td style={celdaBase}>{r.tratamiento_riesgo}</td>
                <td style={celdaBase}>{r.controles_implementar}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.tipo_control}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.nivel_control}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.frecuencia_control}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.probabilidad_residual}</td>
                <td style={{ ...celdaBase, textAlign: 'center' }}>{r.impacto_residual}</td>
                <td style={{ ...celdaBase, textAlign: 'center', fontWeight: 600 }}>{r.riesgo_residual}</td>
                <td style={celdaNivel(r.nivel_riesgo_residual)}>{r.nivel_riesgo_residual}</td>

                {/* Celda de acciones con tooltip de trazabilidad */}
                <td style={{ ...celdaBase, textAlign: 'center', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <AuditoriaTooltip
                      usuarioNombre={r.usuario_nombre}
                      ipOrigen={r.ip_origen}
                      fechaCreacion={r.created_at}
                    />
                    <button style={btnEdit} onClick={() => handleEditar(r)}>Editar</button>
                    <button style={btnDanger} onClick={() => handleEliminar(r.id)}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leyenda */}
      <div style={{ marginTop: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <strong style={{ alignSelf: 'center' }}>Leyenda Matriz de Calor:</strong>
        {Object.entries(COLORES_NIVEL).map(([nivel, c]) => (
          <span
            key={nivel}
            style={{
              backgroundColor: c.bg,
              color: c.text,
              padding: '4px 12px',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {nivel} {nivel === 'Bajo' ? '(1-4)' : nivel === 'Moderado' ? '(5-9)' : nivel === 'Alto' ? '(10-16)' : '(20-25)'}
          </span>
        ))}
      </div>

      {/* Modal del formulario */}
      {modalAbierto && (
        <RiesgoForm
          riesgoExistente={riesgoEditar}
          onClose={handleCerrarModal}
          onGuardado={cargarRiesgos}
        />
      )}
    </div>
  );
}