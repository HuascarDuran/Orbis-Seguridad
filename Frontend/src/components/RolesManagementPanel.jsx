import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Plus, Edit2, Trash2, Check, X, Info, CheckCircle2, Lock } from 'lucide-react';
import { getRoles, getPermisos, createRole, updateRole, deleteRole } from '../services/rolesService';

const C = {
  bg:        '#FEFCFB',
  surface:   '#F5F3F0',
  elevated:  '#FFFFFF',
  primary:   '#0f2c4a',
  accent:    '#F29E38',
  text:      '#464E59',
  muted:     '#9298A6',
  stroke:    '#BFAEA4',
};

const ROL_DISPLAY_NOMBRES = {
  1: 'Oficial de Seguridad de Información (OSI)',
  2: 'Admin RRHH',
  3: 'Admin Empresas',
  4: 'Investigador Senior',
  5: 'Investigador Junior',
  6: 'Temporal',
  7: 'Visitante'
};

const mapNombreRol = (rol) => {
  if (!rol) return '';
  return ROL_DISPLAY_NOMBRES[rol.id] ?? rol.nombre;
};

const CATEGORIAS_PERMISOS = [
  {
    key: 'usuarios',
    titulo: 'Módulo de Usuarios',
    permisos: [
      { key: 'usuarios:leer', label: 'Ver Usuarios', desc: 'Permite listar y ver perfiles de usuarios.' },
      { key: 'usuarios:crear', label: 'Crear Usuarios', desc: 'Permite registrar nuevos usuarios y procesar solicitudes.' },
      { key: 'usuarios:editar', label: 'Editar Usuarios', desc: 'Permite modificar alias, correos y roles.' },
      { key: 'usuarios:eliminar', label: 'Eliminar Usuarios', desc: 'Permite dar de baja o desactivar cuentas.' },
      { key: 'usuarios:bloquear', label: 'Bloquear/Desbloquear', desc: 'Permite desbloquear cuentas por intentos fallidos.' },
    ]
  },
  {
    key: 'empresas',
    titulo: 'Módulo de Empresas',
    permisos: [
      { key: 'empresas:leer', label: 'Lectura Total', desc: 'Acceso completo de lectura a todas las empresas.' },
      { key: 'empresas:leer_restringido', label: 'Lectura Restringida', desc: 'Acceso de lectura limitado a los rubros asignados.' },
      { key: 'empresas:crear', label: 'Crear Empresas', desc: 'Permite registrar empresas y usar el formulario externo.' },
      { key: 'empresas:editar', label: 'Editar Empresas', desc: 'Permite modificar datos del catálogo de empresas.' },
      { key: 'empresas:eliminar', label: 'Eliminar Empresas', desc: 'Permite dar de baja o eliminar empresas.' },
      { key: 'empresas:exportar', label: 'Exportar catálogo', desc: 'Permite exportar datos a formatos Excel/CSV.' },
    ]
  },
  {
    key: 'auditoria',
    titulo: 'Módulo de Auditoría',
    permisos: [
      { key: 'logs:leer', label: 'Ver Logs', desc: 'Permite ver los reportes forenses y logs de auditoría.' },
    ]
  },
  {
    key: 'riesgos',
    titulo: 'Módulo de Riesgos',
    permisos: [
      { key: 'riesgos:leer', label: 'Ver Riesgos', desc: 'Permite acceder a la matriz y análisis de riesgos.' },
      { key: 'riesgos:crear', label: 'Crear Riesgos', desc: 'Permite registrar nuevos riesgos en el sistema.' },
      { key: 'riesgos:editar', label: 'Editar Riesgos', desc: 'Permite actualizar la severidad o estado de un riesgo.' },
      { key: 'riesgos:eliminar', label: 'Eliminar Riesgos', desc: 'Permite borrar registros de riesgos.' },
    ]
  },
  {
    key: 'compliance',
    titulo: 'Módulo OWASP & CIA',
    permisos: [
      { key: 'dashboard:leer', label: 'Ver Compliance', desc: 'Permite ver el dashboard de cumplimiento y seguridad.' },
    ]
  },
  {
    key: 'roles',
    titulo: 'Configuración del Sistema',
    permisos: [
      { key: 'roles:gestionar', label: 'Gestionar Roles', desc: 'Permiso crítico para crear y editar roles del sistema.' },
    ]
  }
];

const RolesManagementPanel = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Formulario
  const [editId, setEditId] = useState(null); // null si es creación
  const [nombre, setNombre] = useState('');
  const [permisosSeleccionados, setPermisosSeleccionados] = useState([]);
  
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((msg, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRoles();
      setRoles(data);
    } catch (e) {
      const msg = e?.response?.data?.message || e.message || 'Error al cargar roles';
      setError(Array.isArray(msg) ? msg.join(', ') : msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleTogglePermiso = (permisoKey) => {
    setPermisosSeleccionados((prev) =>
      prev.includes(permisoKey)
        ? prev.filter((p) => p !== permisoKey)
        : [...prev, permisoKey]
    );
  };

  const handleSelectAllCategory = (permisosCategoria, selectAll) => {
    const keys = permisosCategoria.map(p => p.key);
    if (selectAll) {
      setPermisosSeleccionados((prev) => [...new Set([...prev, ...keys])]);
    } else {
      setPermisosSeleccionados((prev) => prev.filter(p => !keys.includes(p)));
    }
  };

  const resetForm = () => {
    setEditId(null);
    setNombre('');
    setPermisosSeleccionados([]);
  };

  const handleEdit = (rol) => {
    setEditId(rol.id);
    setNombre(mapNombreRol(rol));
    setPermisosSeleccionados(rol.permisos.map((p) => p.nombre));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      addToast('El nombre del rol es requerido.', 'error');
      return;
    }

    try {
      const originalRol = roles.find(r => r.id === editId);
      const payload = {
        nombre: (editId >= 1 && editId <= 7 && originalRol) ? originalRol.nombre : nombre.trim(),
        permisos: permisosSeleccionados,
      };

      if (editId) {
        await updateRole(editId, payload);
        addToast('Rol actualizado con éxito.', 'success');
      } else {
        await createRole(payload);
        addToast('Rol creado con éxito.', 'success');
      }
      resetForm();
      loadData();
    } catch (e) {
      const msg = e?.response?.data?.message || e.message || 'Error al procesar la operación';
      addToast(Array.isArray(msg) ? msg.join(', ') : msg, 'error');
    }
  };

  const handleDelete = async (id, nombreRol) => {
    if (id >= 1 && id <= 7) {
      addToast('No se pueden eliminar los roles por defecto del sistema.', 'error');
      return;
    }
    if (!window.confirm(`¿Estás seguro de eliminar el rol "${nombreRol}"?`)) {
      return;
    }

    try {
      await deleteRole(id);
      addToast('Rol eliminado con éxito.', 'success');
      loadData();
      if (editId === id) resetForm();
    } catch (e) {
      const msg = e?.response?.data?.message || e.message || 'Error al eliminar rol';
      addToast(Array.isArray(msg) ? msg.join(', ') : msg, 'error');
    }
  };

  return (
    <div className="min-h-screen w-full p-8 flex flex-col items-center" style={{ backgroundColor: C.bg }}>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Lista de Roles (Izquierda) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: C.primary }}>
                <Shield size={20} />
              </div>
              <div>
                <h1 className="font-bodoni font-bold text-lg text-gray-800 uppercase tracking-wider">Roles del Sistema</h1>
                <p className="text-xs font-miles text-gray-400">Modelos de control de acceso definidos</p>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-xs font-miles mb-4">
                {error}
              </div>
            )}

            {loading && roles.length === 0 ? (
              <p className="text-center text-sm text-gray-400 font-miles py-12">Cargando roles...</p>
            ) : (
              <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
                {roles.map((rol) => {
                  const esCritico = rol.id >= 1 && rol.id <= 7;
                  return (
                    <motion.div
                      key={rol.id}
                      whileHover={{ scale: 1.01 }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        editId === rol.id 
                          ? 'border-[#F29E38] bg-orange-50/20' 
                          : 'border-gray-100 bg-gray-50/30 hover:border-gray-300'
                      }`}
                      onClick={() => handleEdit(rol)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bodoni font-bold text-sm text-gray-800 uppercase tracking-wide">
                            {mapNombreRol(rol)}
                          </p>
                          <p className="text-xs text-[#F29E38] font-miles font-medium mt-1">
                            {rol.permisos?.length || 0} permisos asignados
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); handleEdit(rol); }}
                            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
                            title="Editar permisos"
                          >
                            <Edit2 size={13} />
                          </button>
                          {!esCritico && (
                            <button
                              onClick={(e) => { e.stopPropagation(); handleDelete(rol.id, rol.nombre); }}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                              title="Eliminar rol"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Pastillas de permisos (Previsualización) */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {rol.permisos?.slice(0, 4).map((p) => (
                          <span key={p.id} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-mono">
                            {p.nombre}
                          </span>
                        ))}
                        {rol.permisos?.length > 4 && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-400 font-miles">
                            +{rol.permisos.length - 4} más
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Formulario de Creación / Edición (Derecha) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h2 className="font-bodoni font-bold text-gray-800 text-lg uppercase tracking-wider">
                  {editId ? 'Modificar Rol' : 'Nuevo Rol Administrativo'}
                </h2>
                <p className="text-xs font-miles text-gray-400 mt-0.5">
                  {editId ? 'Configura la matriz dinámica de accesos' : 'Crea un rol y mapea sus permisos granulares'}
                </p>
              </div>
              {editId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs px-2.5 py-1.5 rounded-lg font-miles border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  <X size={12} />
                  Cancelar
                </button>
              )}
            </div>

            {/* Nombre del Rol */}
            <div>
              <label className="block text-xs font-bodoni font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Nombre del Rol <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Auditor Externo"
                disabled={editId >= 1 && editId <= 7}
                className="w-full bg-white border border-gray-200 rounded-xl text-gray-800 font-miles px-4 py-2.5 focus:outline-none focus:border-[#F29E38] disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
              />
              {editId >= 1 && editId <= 7 && (
                <p className="text-[10px] text-amber-600 font-miles mt-1 flex items-center gap-1">
                  <Info size={10} /> El nombre de los roles del sistema no puede ser modificado.
                </p>
              )}
            </div>

            {editId === 1 && (
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-miles animate-fade-in">
                <Lock size={16} className="mt-0.5 flex-shrink-0 text-amber-600 animate-pulse" />
                <div>
                  <p className="font-bold uppercase tracking-wide">Configuración Protegida (OSI Lock)</p>
                  <p className="mt-0.5 leading-relaxed text-amber-700">
                    Este rol posee los privilegios críticos de la plataforma. Para prevenir brechas y garantizar la integridad de las políticas de acceso, sus permisos están bloqueados y no pueden ser alterados.
                  </p>
                </div>
              </div>
            )}

            {/* Checklist Granular por Categorías */}
            <div className="flex flex-col gap-4">
              <label className="block text-xs font-bodoni font-semibold text-gray-700 uppercase tracking-wider">
                Matriz de Permisos / Opciones Granulares
              </label>
              
              <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-1">
                {CATEGORIAS_PERMISOS.map((cat) => {
                  const keys = cat.permisos.map(p => p.key);
                  const todosMarcados = keys.every(k => permisosSeleccionados.includes(k));
                  const algunoMarcado = keys.some(k => permisosSeleccionados.includes(k)) && !todosMarcados;

                  return (
                    <div key={cat.key} className="bg-gray-50/40 rounded-xl p-4 border border-gray-100">
                      {/* Header de Categoría */}
                      <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                        <span className="text-xs font-bodoni font-bold text-gray-800 uppercase tracking-wider">
                          {cat.titulo}
                        </span>
                        {editId !== 1 && (
                          <button
                            type="button"
                            onClick={() => handleSelectAllCategory(cat.permisos, !todosMarcados)}
                            className="text-[10px] font-miles text-gray-400 hover:text-gray-700 underline"
                          >
                            {todosMarcados ? 'Deseleccionar todos' : 'Seleccionar todos'}
                          </button>
                        )}
                      </div>

                      {/* Lista de Permisos */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cat.permisos.map((p) => {
                          const marcado = permisosSeleccionados.includes(p.key);
                          return (
                            <label
                              key={p.key}
                              className={`flex items-start gap-2.5 p-2 rounded-lg border transition-all ${
                                editId === 1 ? 'cursor-not-allowed opacity-70 bg-gray-50/50' : 'cursor-pointer hover:bg-white/50'
                              } ${
                                marcado 
                                  ? 'border-[#F29E38]/50 bg-white shadow-sm' 
                                  : 'border-transparent'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={marcado}
                                disabled={editId === 1}
                                onChange={() => handleTogglePermiso(p.key)}
                                className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-[#F29E38] focus:ring-[#F29E38] disabled:opacity-50 disabled:cursor-not-allowed"
                              />
                              <div>
                                <p className="text-xs font-semibold text-gray-800 font-miles leading-none">{p.label}</p>
                                <p className="text-[10px] text-gray-400 font-miles mt-0.5 leading-tight">{p.desc}</p>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botones de Envío */}
            {editId === 1 ? (
              <div className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 font-bodoni font-bold uppercase rounded-xl py-3 text-sm tracking-wide border border-gray-200 select-none">
                <Lock size={14} className="text-gray-400" />
                Rol no modificable
              </div>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, backgroundColor: '#07243c' }}
                whileTap={{ scale: 0.99 }}
                className="w-full text-white font-bodoni font-bold uppercase rounded-xl py-2.5 text-sm tracking-wide transition-all duration-200"
                style={{ backgroundColor: C.primary }}
              >
                {editId ? 'Guardar Cambios' : 'Crear Rol Administrativo'}
              </motion.button>
            )}
          </form>
        </div>

      </div>

      {/* Toast Alert System */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              className={`px-4 py-3 rounded-xl shadow-lg text-sm font-miles text-white max-w-xs flex items-center gap-2 ${
                t.type === 'success' ? 'bg-green-600' :
                t.type === 'error'   ? 'bg-red-600'   : 'bg-gray-700'
              }`}
            >
              {t.type === 'success' && <CheckCircle2 size={16} />}
              <span>{t.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RolesManagementPanel;
