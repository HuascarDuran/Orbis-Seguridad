// src/components/RiesgoForm.jsx
import React, { useState, useEffect } from 'react';
import API from '../services/api';

// Opciones de los enums (espejo del backend)
const OPCIONES_TIPO_CONTROL = [
  { value: 'Preventivo', label: 'Preventivo (Eficacia 3)' },
  { value: 'Detectivo', label: 'Detectivo (Eficacia 2)' },
  { value: 'Correctivo', label: 'Correctivo (Eficacia 2)' },
  { value: 'Disuasivo', label: 'Disuasivo (Eficacia 1)' },
];

const OPCIONES_NIVEL_IMPLEMENTACION = [
  { value: 'Automatico', label: 'Automático (Eficacia 3)' },
  { value: 'Semiautomatico', label: 'Semiautomático (Eficacia 2)' },
  { value: 'Manual', label: 'Manual (Eficacia 1)' },
];

const OPCIONES_FRECUENCIA = [
  { value: 'Por evento', label: 'Por evento (Eficacia 3)' },
  { value: 'Diario', label: 'Diario (Eficacia 1)' },
  { value: 'Semanal', label: 'Semanal (Eficacia 1)' },
  { value: 'Mensual', label: 'Mensual (Eficacia 1)' },
  { value: 'Anual', label: 'Anual (Eficacia 1)' },
];

const OPCIONES_TRATAMIENTO = [
  { value: 'Mitigar/Reducir', label: 'Mitigar/Reducir' },
  { value: 'Aceptar', label: 'Aceptar (Sin controles)' },
  { value: 'Eliminar/Evitar', label: 'Eliminar/Evitar (Riesgo residual = 0)' },
  { value: 'Transferir', label: 'Transferir' },
];

const OPCIONES_TIPO_ACTIVO = [
  'Datos/Información',
  'Software/Aplicaciones',
  'Hardware',
  'Redes/Comunicaciones',
  'Personas',
  'Procesos/Instalaciones'
];

const OPCIONES_TIPO_AMENAZA = [
  'Natural',
  'Humana Intencional',
  'Humana Accidental'
];

const ESCALA_1_5 = [1, 2, 3, 4, 5];

const ESTADO_INICIAL = {
  id_activo: '',
  id_amenaza: '',
  riesgo_consecuencia: '',
  probabilidad_inherente: 1,
  impacto_inherente: 1,
  tratamiento_riesgo: 'Mitigar/Reducir',
  controles_implementar: '',
  tipo_control: 'Preventivo',
  frecuencia_control: 'Mensual',
};

// Estilos premium
const estilos = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 16,
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: '100%',
    maxWidth: 900,
    maxHeight: '92vh',
    overflowY: 'auto',
    padding: 32,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid #e2e8f0',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: 16,
    marginBottom: 24,
  },
  title: {
    margin: 0,
    color: '#0f172a',
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '-0.025em',
  },
  closeBtn: {
    background: '#f1f5f9',
    border: 'none',
    fontSize: 20,
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  section: {
    marginBottom: 24,
    padding: 20,
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  sectionTitle: {
    margin: '0 0 16px 0',
    color: '#1e3a8a',
    fontSize: 15,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: '#334155',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    fontSize: 13,
    backgroundColor: '#ffffff',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  textarea: {
    padding: '10px 12px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    fontSize: 13,
    minHeight: 80,
    resize: 'vertical',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  preview: {
    padding: 16,
    borderRadius: 8,
    fontSize: 14,
    marginTop: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 28,
    paddingTop: 20,
    borderTop: '1px solid #e2e8f0',
  },
  btnPrimary: {
    padding: '10px 24px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  btnSecondary: {
    padding: '10px 24px',
    backgroundColor: '#f1f5f9',
    color: '#0f172a',
    border: 'none',
    borderRadius: 8,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  error: {
    padding: 12,
    backgroundColor: '#fee2e2',
    borderLeft: '4px solid #ef4444',
    color: '#991b1b',
    borderRadius: 6,
    marginBottom: 20,
    fontSize: 13,
  },
  infoText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  badge: {
    padding: '4px 10px',
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  lockBanner: {
    padding: 16,
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: 8,
    color: '#1e40af',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }
};

const obtenerInfoRiesgo = (valor) => {
  if (valor <= 4)  return { nivel: 'Bajo',     color: '#22c55e', text: '#ffffff' };
  if (valor <= 9)  return { nivel: 'Moderado', color: '#eab308', text: '#1f2937' };
  if (valor <= 16) return { nivel: 'Alto',     color: '#f97316', text: '#ffffff' };
  return                  { nivel: 'Extremo',  color: '#dc2626', text: '#ffffff' };
};

export default function RiesgoForm({ riesgoExistente, onClose, onGuardado }) {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const [activos, setActivos] = useState([]);
  const [amenazas, setAmenazas] = useState([]);

  const [activoManualChecked, setActivoManualChecked] = useState(false);
  const [amenazaManualChecked, setAmenazaManualChecked] = useState(false);
  const [activoManual, setActivoManual] = useState({ nombre: '', tipo: 'Datos/Información', criticidad: 3 });
  const [amenazaManual, setAmenazaManual] = useState({ nombre: '', tipo: 'Humana Intencional', descripcion: '' });

  const [nivelImplementacion, setNivelImplementacion] = useState('Automatico');

  const esEdicion = Boolean(riesgoExistente?.id);

  useEffect(() => {
    const cargarCatalogos = async () => {
      try {
        const [resActivos, resAmenazas] = await Promise.all([
          API.get('/api/riesgos/activos'),
          API.get('/api/riesgos/amenazas'),
        ]);
        setActivos(resActivos.data);
        setAmenazas(resAmenazas.data);
      } catch (err) {
        console.error('Error al cargar catálogos:', err);
        setError('No se pudieron cargar los catálogos del sistema.');
      }
    };
    cargarCatalogos();
  }, []);

  useEffect(() => {
    if (riesgoExistente) {
      setForm({
        id_activo: riesgoExistente.activo?.id || '',
        id_amenaza: riesgoExistente.amenaza?.id || '',
        riesgo_consecuencia: riesgoExistente.riesgo_consecuencia || '',
        probabilidad_inherente: riesgoExistente.probabilidad_inherente || 1,
        impacto_inherente: riesgoExistente.impacto_inherente || 1,
        tratamiento_riesgo: riesgoExistente.tratamiento_riesgo || 'Mitigar/Reducir',
        controles_implementar: riesgoExistente.controles_implementar || '',
        tipo_control: riesgoExistente.tipo_control || 'Preventivo',
        frecuencia_control: riesgoExistente.frecuencia_control || 'Mensual',
      });
      setNivelImplementacion(riesgoExistente.nivel_implementacion || 'Automatico');
      if (!riesgoExistente.activo && riesgoExistente.activo_manual) {
        setActivoManualChecked(true);
        setActivoManual(riesgoExistente.activo_manual);
      }
      if (!riesgoExistente.amenaza && riesgoExistente.amenaza_manual) {
        setAmenazaManualChecked(true);
        setAmenazaManual(riesgoExistente.amenaza_manual);
      }
    }
  }, [riesgoExistente]);

  const handleChange = (campo) => (e) => {
    const valor = e.target.value;
    const esNumerico = [
      'id_activo', 'id_amenaza',
      'probabilidad_inherente', 'impacto_inherente',
    ].includes(campo);
    setForm((prev) => ({
      ...prev,
      [campo]: esNumerico ? (valor === '' ? '' : parseInt(valor, 10)) : valor,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!activoManualChecked && !form.id_activo) {
      setError('Por favor, selecciona o registra un Activo de Información.');
      return;
    }
    if (activoManualChecked && !activoManual.nombre.trim()) {
      setError('Por favor, introduce el nombre del Activo Manual.');
      return;
    }

    if (!amenazaManualChecked && !form.id_amenaza) {
      setError('Por favor, selecciona o registra una Amenaza/Vulnerabilidad.');
      return;
    }
    if (amenazaManualChecked && !amenazaManual.nombre.trim()) {
      setError('Por favor, introduce el nombre de la Amenaza Manual.');
      return;
    }

    setEnviando(true);
    try {
      const payload = {
        riesgo_consecuencia: form.riesgo_consecuencia,
        probabilidad_inherente: parseInt(form.probabilidad_inherente, 10),
        impacto_inherente: parseInt(form.impacto_inherente, 10),
        tratamiento_riesgo: form.tratamiento_riesgo,
      };

      if (activoManualChecked) {
        payload.id_activo = null;
        payload.activo_manual = {
          nombre: activoManual.nombre,
          tipo: activoManual.tipo,
          criticidad: parseInt(activoManual.criticidad, 10)
        };
      } else {
        payload.id_activo = parseInt(form.id_activo, 10);
        payload.activo_manual = null;
      }

      if (amenazaManualChecked) {
        payload.id_amenaza = null;
        payload.amenaza_manual = {
          nombre: amenazaManual.nombre,
          tipo: amenazaManual.tipo,
          descripcion: amenazaManual.descripcion || null
        };
      } else {
        payload.id_amenaza = parseInt(form.id_amenaza, 10);
        payload.amenaza_manual = null;
      }

      if (form.tratamiento_riesgo === 'Mitigar/Reducir') {
        payload.controles_implementar = form.controles_implementar;
        payload.tipo_control = form.tipo_control;
        payload.nivel_control = null;
        payload.nivel_implementacion = nivelImplementacion;
        payload.frecuencia_control = form.frecuencia_control;
      } else {
        payload.controles_implementar = null;
        payload.tipo_control = null;
        payload.nivel_control = null;
        payload.nivel_implementacion = null;
        payload.frecuencia_control = null;
      }

      if (esEdicion) {
        await API.patch(`/api/riesgos/${riesgoExistente.id}`, payload);
      } else {
        await API.post('/api/riesgos', payload);
      }
      onGuardado?.();
      onClose?.();
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Error al guardar';
      setError(Array.isArray(msg) ? msg.join(', ') : msg);
    } finally {
      setEnviando(false);
    }
  };

  const Ri = form.probabilidad_inherente * form.impacto_inherente;
  let Rr = Ri;
  let eC = 0;

  if (form.tratamiento_riesgo === 'Mitigar/Reducir') {
    let eficTipo = 0;
    if (form.tipo_control === 'Preventivo') eficTipo = 3;
    else if (form.tipo_control === 'Detectivo' || form.tipo_control === 'Correctivo') eficTipo = 2;
    else if (form.tipo_control === 'Disuasivo') eficTipo = 1;

    let eficNivel = 0;
    if (nivelImplementacion === 'Automatico') eficNivel = 3;
    else if (nivelImplementacion === 'Semiautomatico') eficNivel = 2;
    else if (nivelImplementacion === 'Manual') eficNivel = 1;

    let eficFrec = 0;
    if (form.frecuencia_control === 'Por evento') eficFrec = 3;
    else eficFrec = 1;

    eC = eficTipo + eficNivel + eficFrec;
    Rr = Math.max(1, Ri - eC);
  } else if (form.tratamiento_riesgo === 'Eliminar/Evitar') {
    Rr = 0;
  }

  const previewInherente = obtenerInfoRiesgo(Ri);
  const previewResidual  = obtenerInfoRiesgo(Rr);

  const activoSeleccionado = activos.find((a) => a.id === form.id_activo);
  const amenazaSeleccionada = amenazas.find((t) => t.id === form.id_amenaza);

  const esTratamientoMitigacion = form.tratamiento_riesgo === 'Mitigar/Reducir';

  return (
    <div style={estilos.overlay} onClick={onClose}>
      <div style={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <div style={estilos.header}>
          <h2 style={estilos.title}>
            {esEdicion ? 'Editar Riesgo de Seguridad' : 'Registrar Nuevo Riesgo de Seguridad'}
          </h2>
          <button style={estilos.closeBtn} onClick={onClose} type="button">×</button>
        </div>

        {error && <div style={estilos.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>📁 1. Activo de Información</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <input
                type="checkbox"
                id="activoManualChecked"
                checked={activoManualChecked}
                onChange={(e) => {
                  setActivoManualChecked(e.target.checked);
                  setError(null);
                }}
                style={{ width: 16, height: 16, cursor: 'pointer' }}
              />
              <label htmlFor="activoManualChecked" style={{ ...estilos.label, cursor: 'pointer', userSelect: 'none', fontSize: 13 }}>
                ✏️ Registrar activo manualmente (no catalogado)
              </label>
            </div>

            {activoManualChecked ? (
              <div style={estilos.grid}>
                <div style={estilos.field}>
                  <label style={estilos.label}>Nombre del Activo Manual *</label>
                  <input
                    style={estilos.input}
                    type="text"
                    value={activoManual.nombre}
                    onChange={(e) => setActivoManual({ ...activoManual, nombre: e.target.value })}
                    placeholder="Ej: Base de datos de logs temporal"
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Tipo de Activo *</label>
                    <select
                      style={estilos.input}
                      value={activoManual.tipo}
                      onChange={(e) => setActivoManual({ ...activoManual, tipo: e.target.value })}
                    >
                      {OPCIONES_TIPO_ACTIVO.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Criticidad (1-5) *</label>
                    <select
                      style={estilos.input}
                      value={activoManual.criticidad}
                      onChange={(e) => setActivoManual({ ...activoManual, criticidad: parseInt(e.target.value, 10) })}
                    >
                      {ESCALA_1_5.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div style={estilos.grid}>
                <div style={estilos.field}>
                  <label style={estilos.label}>Seleccionar Activo *</label>
                  <select
                    style={estilos.input}
                    value={form.id_activo}
                    onChange={handleChange('id_activo')}
                    required
                  >
                    <option value="">-- Seleccionar Activo --</option>
                    {activos.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.nombre}
                      </option>
                    ))}
                  </select>
                  {activoSeleccionado && (
                    <div style={estilos.infoText}>
                      <strong>Tipo:</strong> {activoSeleccionado.tipo} | <strong>Criticidad:</strong> {activoSeleccionado.criticidad}/5
                    </div>
                  )}
                </div>
                <div style={estilos.field}>
                  <label style={estilos.label}>Nivel de Criticidad del Activo</label>
                  <input
                    style={{ ...estilos.input, backgroundColor: '#f1f5f9', cursor: 'not-allowed' }}
                    type="text"
                    value={activoSeleccionado ? `Criticidad: ${activoSeleccionado.criticidad} (${activoSeleccionado.tipo})` : 'Seleccione un activo'}
                    disabled
                  />
                </div>
              </div>
            )}
          </div>

          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>🔍 2. Identificación y Consecuencia</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <input
                type="checkbox"
                id="amenazaManualChecked"
                checked={amenazaManualChecked}
                onChange={(e) => {
                  setAmenazaManualChecked(e.target.checked);
                  setError(null);
                }}
                style={{ width: 16, height: 16, cursor: 'pointer' }}
              />
              <label htmlFor="amenazaManualChecked" style={{ ...estilos.label, cursor: 'pointer', userSelect: 'none', fontSize: 13 }}>
                ✏️ Registrar amenaza manualmente (no catalogada)
              </label>
            </div>

            {amenazaManualChecked ? (
              <div style={estilos.grid}>
                <div style={estilos.field}>
                  <label style={estilos.label}>Nombre de la Amenaza Manual *</label>
                  <input
                    style={estilos.input}
                    type="text"
                    value={amenazaManual.nombre}
                    onChange={(e) => setAmenazaManual({ ...amenazaManual, nombre: e.target.value })}
                    placeholder="Ej: Fuga de credenciales OSI"
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Tipo de Amenaza *</label>
                    <select
                      style={estilos.input}
                      value={amenazaManual.tipo}
                      onChange={(e) => setAmenazaManual({ ...amenazaManual, tipo: e.target.value })}
                    >
                      {OPCIONES_TIPO_AMENAZA.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Descripción</label>
                    <input
                      style={estilos.input}
                      type="text"
                      value={amenazaManual.descripcion}
                      onChange={(e) => setAmenazaManual({ ...amenazaManual, descripcion: e.target.value })}
                      placeholder="Descripción detallada"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div style={estilos.grid}>
                <div style={estilos.field}>
                  <label style={estilos.label}>Amenaza / Vulnerabilidad *</label>
                  <select
                    style={estilos.input}
                    value={form.id_amenaza}
                    onChange={handleChange('id_amenaza')}
                    required
                  >
                    <option value="">-- Seleccionar Amenaza --</option>
                    {amenazas.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.nombre}
                      </option>
                    ))}
                  </select>
                  {amenazaSeleccionada && (
                    <div style={estilos.infoText}>
                      <strong>Categoría:</strong> {amenazaSeleccionada.tipo} <br />
                      <span style={{ fontSize: 12, fontStyle: 'italic' }}>{amenazaSeleccionada.descripcion}</span>
                    </div>
                  )}
                </div>
                <div style={estilos.field}>
                  <label style={estilos.label}>Riesgo / Consecuencia *</label>
                  <textarea
                    style={estilos.textarea}
                    value={form.riesgo_consecuencia}
                    onChange={handleChange('riesgo_consecuencia')}
                    placeholder="Detalle la consecuencia de la materialización del riesgo..."
                    required
                  />
                </div>
              </div>
            )}
            
            {amenazaManualChecked && (
              <div style={{ ...estilos.field, marginTop: 16 }}>
                <label style={estilos.label}>Riesgo / Consecuencia *</label>
                <textarea
                  style={estilos.textarea}
                  value={form.riesgo_consecuencia}
                  onChange={handleChange('riesgo_consecuencia')}
                  placeholder="Detalle la consecuencia de la materialización del riesgo..."
                  required
                />
              </div>
            )}
          </div>

          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>📊 3. Cálculo de Riesgo Inherente</h3>
            <div style={estilos.grid}>
              <div style={estilos.field}>
                <label style={estilos.label}>Probabilidad Inherente *</label>
                <select
                  style={estilos.input}
                  value={form.probabilidad_inherente}
                  onChange={handleChange('probabilidad_inherente')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div style={estilos.field}>
                <label style={estilos.label}>Impacto Inherente *</label>
                <select
                  style={estilos.input}
                  value={form.impacto_inherente}
                  onChange={handleChange('impacto_inherente')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div style={{ ...estilos.preview, backgroundColor: previewInherente.color + '18', borderLeft: `4px solid ${previewInherente.color}` }}>
              <div>
                <strong>Cálculo:</strong> {form.probabilidad_inherente} (Prob) × {form.impacto_inherente} (Imp) = <strong style={{ fontSize: 16 }}>{Ri}</strong>
              </div>
              <span style={{ ...estilos.badge, backgroundColor: previewInherente.color, color: previewInherente.text }}>
                {previewInherente.nivel}
              </span>
            </div>
          </div>

          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>🛡️ 4. Tratamiento del Riesgo</h3>
            <div style={estilos.field}>
              <label style={estilos.label}>Tratamiento Seleccionado *</label>
              <select
                style={estilos.input}
                value={form.tratamiento_riesgo}
                onChange={handleChange('tratamiento_riesgo')}
              >
                {OPCIONES_TRATAMIENTO.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>⚙️ 5. Controles de Mitigación</h3>
            {esTratamientoMitigacion ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={estilos.field}>
                  <label style={estilos.label}>Controles a Implementar *</label>
                  <textarea
                    style={estilos.textarea}
                    value={form.controles_implementar}
                    onChange={handleChange('controles_implementar')}
                    placeholder="Escriba los controles de seguridad que mitigan esta amenaza..."
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Tipo de Control *</label>
                    <select
                      style={estilos.input}
                      value={form.tipo_control}
                      onChange={handleChange('tipo_control')}
                    >
                      {OPCIONES_TIPO_CONTROL.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Nivel Implementación *</label>
                    <select
                      style={estilos.input}
                      value={nivelImplementacion}
                      onChange={(e) => setNivelImplementacion(e.target.value)}
                    >
                      {OPCIONES_NIVEL_IMPLEMENTACION.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div style={estilos.field}>
                    <label style={estilos.label}>Frecuencia *</label>
                    <select
                      style={estilos.input}
                      value={form.frecuencia_control}
                      onChange={handleChange('frecuencia_control')}
                    >
                      {OPCIONES_FRECUENCIA.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div style={estilos.lockBanner}>
                <span>🔒</span>
                <div>
                  <strong>Controles Bloqueados:</strong> El tratamiento es "{form.tratamiento_riesgo}". No se necesitan controles de mitigación. Los campos se guardarán automáticamente como nulos en la base de datos.
                </div>
              </div>
            )}
          </div>

          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>🔄 6. Estimación de Riesgo Residual</h3>
            <div style={{ ...estilos.preview, backgroundColor: previewResidual.color + '18', borderLeft: `4px solid ${previewResidual.color}` }}>
              <div>
                <strong>Riesgo Residual Resultante:</strong> <strong style={{ fontSize: 18 }}>{Rr}</strong>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                  {form.tratamiento_riesgo === 'Mitigar/Reducir' && (
                    <span>
                      Cálculo: Ri ({Ri}) - e(C) ({eC}) [
                      Tipo: {form.tipo_control === 'Preventivo' ? '3' : ['Detectivo', 'Correctivo'].includes(form.tipo_control) ? '2' : '1'} | 
                      Impl: {nivelImplementacion === 'Automatico' ? '3' : nivelImplementacion === 'Semiautomatico' ? '2' : '1'} | 
                      Frec: {form.frecuencia_control === 'Por evento' ? '3' : '1'}
                      ]
                    </span>
                  )}
                  {form.tratamiento_riesgo === 'Eliminar/Evitar' && (
                    <span>El riesgo es evitado o eliminado por completo.</span>
                  )}
                  {['Aceptar', 'Transferir'].includes(form.tratamiento_riesgo) && (
                    <span>El riesgo es aceptado o transferido sin controles de mitigación.</span>
                  )}
                </div>
              </div>
              <span style={{ ...estilos.badge, backgroundColor: previewResidual.color, color: previewResidual.text }}>
                {previewResidual.nivel}
              </span>
            </div>
          </div>

          <div style={estilos.actions}>
            <button type="button" style={estilos.btnSecondary} onClick={onClose} disabled={enviando}>
              Cancelar
            </button>
            <button type="submit" style={estilos.btnPrimary} disabled={enviando}>
              {enviando ? 'Guardando…' : (esEdicion ? 'Actualizar' : 'Crear Riesgo')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}