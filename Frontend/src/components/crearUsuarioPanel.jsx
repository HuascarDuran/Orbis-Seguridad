import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { crearUsuarioNuevo } from '../services/usuarioService';

const ROLES = [
  { value: 1, label: 'Oficial de Seguridad de Información (OSI)' },
  { value: 2, label: 'Admin RRHH' },
  { value: 3, label: 'Admin Empresas' },
  { value: 4, label: 'Investigador Senior' },
  { value: 5, label: 'Investigador Junior' },
  { value: 6, label: 'Temporal' },
  { value: 7, label: 'Visitante' },
];

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl text-gray-800 font-miles px-4 py-2.5 focus:outline-none focus:border-[#F29E38] transition-colors duration-200 text-sm';

const labelClass = 'block text-sm font-bodoni font-medium text-gray-700 mb-1';

const CrearUsuarioPanel = ({ onCreado }) => {
  const [form, setForm] = useState({ nombre: '', apellido: '', correoReal: '', idRol: 5 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: field === 'idRol' ? Number(e.target.value) : e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.nombre.trim() || !form.apellido.trim() || !form.correoReal.trim()) {
      setError('Todos los campos son requeridos.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correoReal)) {
      setError('Ingresa un correo electrónico válido.');
      return;
    }

    setLoading(true);
    try {
      await crearUsuarioNuevo(form);
      setExito(true);
      setForm({ nombre: '', apellido: '', correoReal: '', idRol: 5 });
      if (onCreado) onCreado();
      setTimeout(() => setExito(false), 3000);
    } catch (err) {
      const msg = err?.response?.data?.message;
      setError(Array.isArray(msg) ? msg.join(', ') : msg || 'Error al crear el usuario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full max-w-lg"
    >
      <div className="mb-5">
        <h2 className="font-bodoni font-bold text-[#0f2c4a] text-lg uppercase tracking-wider">
          Crear nuevo usuario
        </h2>
        <p className="text-xs font-miles text-gray-500 mt-1">
          Se generará un alias @orbis.com y se enviará la contraseña temporal por correo.
        </p>
      </div>

      <AnimatePresence>
        {exito && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2"
          >
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-sm font-miles text-green-700">
              Usuario creado. Las credenciales fueron enviadas al correo indicado.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nombre</label>
            <input
              type="text"
              value={form.nombre}
              onChange={handleChange('nombre')}
              placeholder="Juan"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Apellido</label>
            <input
              type="text"
              value={form.apellido}
              onChange={handleChange('apellido')}
              placeholder="Pérez"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Correo personal</label>
          <input
            type="email"
            value={form.correoReal}
            onChange={handleChange('correoReal')}
            placeholder="juan.perez@ejemplo.com"
            className={inputClass}
          />
          <p className="text-xs text-gray-400 font-miles mt-1">
            Las credenciales serán enviadas a este correo.
          </p>
        </div>

        <div>
          <label className={labelClass}>Rol</label>
          <select
            value={form.idRol}
            onChange={handleChange('idRol')}
            className={`${inputClass} cursor-pointer`}
          >
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-500 font-miles"
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ backgroundColor: '#0A3A5A', scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#0f2c4a] text-white font-bodoni font-bold uppercase rounded-xl py-2.5 text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? 'Creando usuario...' : 'Crear usuario'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CrearUsuarioPanel;
