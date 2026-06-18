-- ============================================================
-- PARTE 1: Tablas para RBAC Dinámico
-- ============================================================

-- Tabla de permisos
CREATE TABLE IF NOT EXISTS permisos (
  id_permiso SERIAL PRIMARY KEY,
  nombre_permiso VARCHAR(100) UNIQUE NOT NULL,
  descripcion VARCHAR(255)
);

-- Tabla de asociación Muchos a Muchos entre Roles y Permisos
CREATE TABLE IF NOT EXISTS roles_permisos (
  id_rol INTEGER REFERENCES roles(id_rol) ON DELETE CASCADE,
  id_permiso INTEGER REFERENCES permisos(id_permiso) ON DELETE CASCADE,
  PRIMARY KEY (id_rol, id_permiso)
);

-- ============================================================
-- PARTE 2: Catálogo inicial de Permisos Granulares
-- ============================================================

INSERT INTO permisos (nombre_permiso, descripcion) VALUES
  ('usuarios:leer', 'Ver panel de administración de usuarios'),
  ('usuarios:crear', 'Crear nuevos usuarios'),
  ('usuarios:editar', 'Editar información de usuarios'),
  ('usuarios:eliminar', 'Eliminar/desactivar usuarios'),
  ('usuarios:bloquear', 'Bloquear y desbloquear cuentas de usuario'),
  ('empresas:leer', 'Ver listado completo y detalles de empresas'),
  ('empresas:leer_restringido', 'Ver empresas con restricción por rubro asignado'),
  ('empresas:crear', 'Crear y registrar empresas'),
  ('empresas:editar', 'Editar información de empresas'),
  ('empresas:eliminar', 'Eliminar empresas'),
  ('empresas:exportar', 'Exportar catálogo de empresas'),
  ('logs:leer', 'Ver logs de auditoría del sistema'),
  ('riesgos:leer', 'Ver matriz de riesgos'),
  ('riesgos:crear', 'Crear riesgos'),
  ('riesgos:editar', 'Editar riesgos'),
  ('riesgos:eliminar', 'Eliminar riesgos'),
  ('dashboard:leer', 'Ver dashboards de cumplimiento/seguridad/OWASP'),
  ('roles:gestionar', 'Administrar roles y permisos del sistema')
ON CONFLICT (nombre_permiso) DO UPDATE 
SET descripcion = EXCLUDED.descripcion;

-- ============================================================
-- PARTE 3: Población Inicial de Roles y Permisos (Retrocompatibilidad)
-- ============================================================

-- 1. SUPERADMIN (1) - Todos los permisos
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 1, id_permiso FROM permisos
ON CONFLICT DO NOTHING;

-- 2. ADMIN_RRHH (2)
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 2, id_permiso FROM permisos WHERE nombre_permiso IN (
  'usuarios:leer', 'usuarios:crear', 'usuarios:editar', 'usuarios:bloquear',
  'empresas:leer', 'logs:leer', 'dashboard:leer',
  'riesgos:leer', 'riesgos:crear', 'riesgos:editar', 'riesgos:eliminar',
  'roles:gestionar'
)
ON CONFLICT DO NOTHING;

-- 3. ADMIN_EMPRESAS (3)
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 3, id_permiso FROM permisos WHERE nombre_permiso IN (
  'empresas:leer', 'empresas:crear', 'empresas:editar', 'empresas:eliminar', 'empresas:exportar',
  'dashboard:leer', 'riesgos:leer', 'riesgos:crear', 'riesgos:editar'
)
ON CONFLICT DO NOTHING;

-- 4. INVESTIGADOR_SENIOR (4)
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 4, id_permiso FROM permisos WHERE nombre_permiso IN (
  'empresas:leer', 'empresas:editar',
  'riesgos:leer', 'riesgos:crear', 'riesgos:editar',
  'dashboard:leer'
)
ON CONFLICT DO NOTHING;

-- 5. INVESTIGADOR_JUNIOR (5) - Con lectura restringida
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 5, id_permiso FROM permisos WHERE nombre_permiso IN (
  'empresas:leer_restringido',
  'riesgos:leer',
  'dashboard:leer'
)
ON CONFLICT DO NOTHING;

-- 6. TEMPORAL (6)
INSERT INTO roles_permisos (id_rol, id_permiso)
SELECT 6, id_permiso FROM permisos WHERE nombre_permiso IN (
  'empresas:leer'
)
ON CONFLICT DO NOTHING;
