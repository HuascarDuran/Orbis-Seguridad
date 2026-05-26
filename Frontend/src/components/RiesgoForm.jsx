// src/components/RiesgoForm.jsx
import React, { useState, useEffect } from 'react';
import API from '../services/api';

// Opciones de los enums (espejo del backend)
const OPCIONES_TIPO_CONTROL = [
  { value: 'P',  label: 'P — Preventivo' },
  { value: 'D',  label: 'D — Detectivo' },
  { value: 'C',  label: 'C — Correctivo' },
  { value: 'Di', label: 'Di — Disuasivo' },
];

const OPCIONES_NIVEL_CONTROL = [
  { value: 'A', label: 'A — Alto' },
  { value: 'S', label: 'S — Satisfactorio' },
  { value: 'M', label: 'M — Medio' },
];

const OPCIONES_FRECUENCIA = [
  { value: 'D',  label: 'D — Diario' },
  { value: 'S',  label: 'S — Semanal' },
  { value: 'M',  label: 'M — Mensual' },
  { value: 'A',  label: 'A — Anual' },
  { value: 'PT', label: 'PT — Por Transacción' },
  { value: 's',  label: 's — Semestral' },
];

const OPCIONES_TRATAMIENTO = [
  'Reducir', 'Aceptar', 'Evitar', 'Transferir',
];

const ESCALA_1_5 = [1, 2, 3, 4, 5];

const ESTADO_INICIAL = {
  activo_informacion: '',
  aplicativos_sistemas: '',
  amenaza_vulnerabilidad: '',
  riesgo_consecuencia: '',
  probabilidad_inherente: 1,
  impacto_inherente: 1,
  tratamiento_riesgo: 'Reducir',
  controles_implementar: '',
  tipo_control: 'P',
  nivel_control: 'A',
  frecuencia_control: 'M',
  probabilidad_residual: 1,
  impacto_residual: 1,
};

// Estilos básicos
const estilos = {
  overlay: {
    position: 'fixed', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
  },
  modal: {
    backgroundColor: '#ffffff', borderRadius: 8, width: '90%', maxWidth: 900,
    maxHeight: '90vh', overflowY: 'auto', padding: 24, boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    borderBottom: '2px solid #1e3a8a', paddingBottom: 12, marginBottom: 20,
  },
  title: { margin: 0, color: '#0f172a', fontSize: 20 },
  closeBtn: {
    background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#64748b',
  },
  section: {
    marginBottom: 20, padding: 12, borderLeft: '4px solid #1e3a8a',
    backgroundColor: '#f8fafc', borderRadius: 4,
  },
  sectionTitle: { margin: '0 0 12px 0', color: '#1e3a8a', fontSize: 14, fontWeight: 700 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  field: { display: 'flex', flexDirection: 'column', gap: 4 },
  label: { fontSize: 13, fontWeight: 600, color: '#334155' },
  input: {
    padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: 4, fontSize: 13,
  },
  textarea: {
    padding: '8px 10px', border: '1px solid #cbd5e1', borderRadius: 4,
    fontSize: 13, minHeight: 60, resize: 'vertical', fontFamily: 'inherit',
  },
  preview: {
    padding: 12, backgroundColor: '#eef2ff', borderRadius: 4,
    fontSize: 13, marginTop: 8,
  },
  actions: {
    display: 'flex', justifyContent: 'flex-end', gap: 8,
    marginTop: 20, paddingTop: 16, borderTop: '1px solid #e2e8f0',
  },
  btnPrimary: {
    padding: '10px 20px', backgroundColor: '#1e3a8a', color: '#fff',
    border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer',
  },
  btnSecondary: {
    padding: '10px 20px', backgroundColor: '#e2e8f0', color: '#0f172a',
    border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer',
  },
  error: {
    padding: 10, backgroundColor: '#fee2e2', color: '#991b1b',
    borderRadius: 4, marginBottom: 12, fontSize: 13,
  },
};

// Función auxiliar para calcular nivel en tiempo real (preview)
const calcularNivel = (prob, imp) => {
  const valor = prob * imp;
  if (valor <= 4)  return { valor, nivel: 'Bajo',     color: '#22c55e' };
  if (valor <= 9)  return { valor, nivel: 'Moderado', color: '#facc15' };
  if (valor <= 16) return { valor, nivel: 'Alto',     color: '#f97316' };
  return                  { valor, nivel: 'Extremo',  color: '#dc2626' };
};

export default function RiesgoForm({ riesgoExistente, onClose, onGuardado }) {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const esEdicion = Boolean(riesgoExistente?.id);

  useEffect(() => {
    if (riesgoExistente) {
      // Quitamos campos calculados; el backend los recalcula
      const {
        riesgo_inherente, nivel_riesgo_inherente,
        riesgo_residual, nivel_riesgo_residual,
        id, created_at, updated_at,
        ...resto
      } = riesgoExistente;
      setForm({ ...ESTADO_INICIAL, ...resto });
    }
  }, [riesgoExistente]);

  const handleChange = (campo) => (e) => {
    const valor = e.target.value;
    // Para campos numéricos, parsear
    const esNumerico = [
      'probabilidad_inherente', 'impacto_inherente',
      'probabilidad_residual', 'impacto_residual',
    ].includes(campo);
    setForm((prev) => ({
      ...prev,
      [campo]: esNumerico ? parseInt(valor, 10) : valor,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setEnviando(true);
    try {
      if (esEdicion) {
        await API.patch(`/api/riesgos/${riesgoExistente.id}`, form);
      } else {
        await API.post('/api/riesgos', form);
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

  // Previews en tiempo real
  const previewInherente = calcularNivel(form.probabilidad_inherente, form.impacto_inherente);
  const previewResidual  = calcularNivel(form.probabilidad_residual,  form.impacto_residual);

  return (
    <div style={estilos.overlay} onClick={onClose}>
      <div style={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <div style={estilos.header}>
          <h2 style={estilos.title}>
            {esEdicion ? 'Editar Riesgo' : 'Nuevo Riesgo de Seguridad'}
          </h2>
          <button style={estilos.closeBtn} onClick={onClose} type="button">×</button>
        </div>

        {error && <div style={estilos.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* === Activo de Información === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>1. Activo de Información</h3>
            <div style={estilos.grid}>
              <div style={estilos.field}>
                <label style={estilos.label}>Activo de Información *</label>
                <input
                  style={estilos.input}
                  type="text"
                  value={form.activo_informacion}
                  onChange={handleChange('activo_informacion')}
                  required
                />
              </div>
              <div style={estilos.field}>
                <label style={estilos.label}>Aplicativos / Sistemas *</label>
                <input
                  style={estilos.input}
                  type="text"
                  value={form.aplicativos_sistemas}
                  onChange={handleChange('aplicativos_sistemas')}
                  required
                />
              </div>
            </div>
          </div>

          {/* === Identificación y Valoración === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>2. Identificación y Valoración</h3>
            <div style={estilos.field}>
              <label style={estilos.label}>Amenaza / Vulnerabilidad *</label>
              <textarea
                style={estilos.textarea}
                value={form.amenaza_vulnerabilidad}
                onChange={handleChange('amenaza_vulnerabilidad')}
                required
              />
            </div>
            <div style={{ ...estilos.field, marginTop: 12 }}>
              <label style={estilos.label}>Riesgo / Consecuencia *</label>
              <textarea
                style={estilos.textarea}
                value={form.riesgo_consecuencia}
                onChange={handleChange('riesgo_consecuencia')}
                required
              />
            </div>
          </div>

          {/* === Cálculo Inherente === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>3. Cálculo Inicial — Riesgo Inherente</h3>
            <div style={estilos.grid}>
              <div style={estilos.field}>
                <label style={estilos.label}>Probabilidad Inherente (1-5) *</label>
                <select
                  style={estilos.input}
                  value={form.probabilidad_inherente}
                  onChange={handleChange('probabilidad_inherente')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div style={estilos.field}>
                <label style={estilos.label}>Impacto Inherente (1-5) *</label>
                <select
                  style={estilos.input}
                  value={form.impacto_inherente}
                  onChange={handleChange('impacto_inherente')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div style={{ ...estilos.preview, backgroundColor: previewInherente.color + '33' }}>
              <strong>Resultado:</strong> {form.probabilidad_inherente} × {form.impacto_inherente} = <strong>{previewInherente.valor}</strong> →{' '}
              <span style={{
                backgroundColor: previewInherente.color, color: '#fff',
                padding: '2px 8px', borderRadius: 3, fontWeight: 700,
              }}>
                {previewInherente.nivel}
              </span>
            </div>
          </div>

          {/* === Medición y Mitigación === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>4. Medición y Mitigación</h3>
            <div style={estilos.grid}>
              <div style={estilos.field}>
                <label style={estilos.label}>Tratamiento del Riesgo *</label>
                <select
                  style={estilos.input}
                  value={form.tratamiento_riesgo}
                  onChange={handleChange('tratamiento_riesgo')}
                >
                  {OPCIONES_TRATAMIENTO.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div style={estilos.field}>
                <label style={estilos.label}>Controles a Implementar *</label>
                <textarea
                  style={estilos.textarea}
                  value={form.controles_implementar}
                  onChange={handleChange('controles_implementar')}
                  required
                />
              </div>
            </div>
          </div>

          {/* === Eficiencia del Control === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>5. Eficiencia del Control</h3>
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
                <label style={estilos.label}>Nivel de Control *</label>
                <select
                  style={estilos.input}
                  value={form.nivel_control}
                  onChange={handleChange('nivel_control')}
                >
                  {OPCIONES_NIVEL_CONTROL.map((o) => (
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

          {/* === Cálculo Residual === */}
          <div style={estilos.section}>
            <h3 style={estilos.sectionTitle}>6. Riesgo Residual</h3>
            <div style={estilos.grid}>
              <div style={estilos.field}>
                <label style={estilos.label}>Probabilidad Residual (1-5) *</label>
                <select
                  style={estilos.input}
                  value={form.probabilidad_residual}
                  onChange={handleChange('probabilidad_residual')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div style={estilos.field}>
                <label style={estilos.label}>Impacto Residual (1-5) *</label>
                <select
                  style={estilos.input}
                  value={form.impacto_residual}
                  onChange={handleChange('impacto_residual')}
                >
                  {ESCALA_1_5.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div style={{ ...estilos.preview, backgroundColor: previewResidual.color + '33' }}>
              <strong>Resultado:</strong> {form.probabilidad_residual} × {form.impacto_residual} = <strong>{previewResidual.valor}</strong> →{' '}
              <span style={{
                backgroundColor: previewResidual.color, color: '#fff',
                padding: '2px 8px', borderRadius: 3, fontWeight: 700,
              }}>
                {previewResidual.nivel}
              </span>
            </div>
          </div>

          {/* === Acciones === */}
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