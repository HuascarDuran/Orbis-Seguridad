/**
 * @file roles.const.ts
 * @description Definición canónica de roles y matriz de permisos granulares.
 *
 * PRINCIPIO DE MÍNIMO PRIVILEGIO: Cada rol sólo posee los permisos
 * estrictamente necesarios para su función. Los Guards deben importar
 * PERMISSION_MATRIX y validar contra ella, NUNCA hardcodear IDs de rol.
 */

// ─────────────────────────────────────────────
// 1. ENUM CANÓNICO DE ROLES (fuente de verdad)
// ─────────────────────────────────────────────
export enum Rol {
    SUPERADMIN          = 1,
    ADMIN_RRHH          = 2,
    ADMIN_EMPRESAS      = 3,
    INVESTIGADOR_SENIOR = 4,
    INVESTIGADOR_JUNIOR = 5,
    TEMPORAL            = 6,
    VISITANTE           = 7,
}

/** @deprecated Usa `Rol` directamente. Mantenido para compatibilidad. */
export { Rol as RolesEnum };

// ─────────────────────────────────────────────
// 2. CATÁLOGO DE PERMISOS ATÓMICOS
//    Sigue el patrón: RECURSO_ACCION
// ─────────────────────────────────────────────
export enum Permiso {
    // Usuarios
    USUARIOS_LEER    = 'usuarios:leer',
    USUARIOS_CREAR   = 'usuarios:crear',
    USUARIOS_EDITAR  = 'usuarios:editar',
    USUARIOS_ELIMINAR= 'usuarios:eliminar',
    USUARIOS_BLOQUEAR= 'usuarios:bloquear',

    // Empresas
    EMPRESAS_LEER    = 'empresas:leer',
    EMPRESAS_LEER_RESTRINGIDO = 'empresas:leer_restringido',
    EMPRESAS_CREAR   = 'empresas:crear',
    EMPRESAS_EDITAR  = 'empresas:editar',
    EMPRESAS_ELIMINAR= 'empresas:eliminar',
    EMPRESAS_EXPORTAR= 'empresas:exportar',

    // Logs
    LOGS_LEER        = 'logs:leer',

    // Riesgos
    RIESGOS_LEER     = 'riesgos:leer',
    RIESGOS_CREAR    = 'riesgos:crear',
    RIESGOS_EDITAR   = 'riesgos:editar',
    RIESGOS_ELIMINAR = 'riesgos:eliminar',

    // Dashboard
    DASHBOARD_LEER   = 'dashboard:leer',

    // Roles
    ROLES_GESTIONAR  = 'roles:gestionar',
}

// ─────────────────────────────────────────────
// 3. MATRIZ DE PERMISOS POR ROL (fuente de verdad para guards)
//    Los Guards DEBEN consultar esta matriz en tiempo de ejecución.
// ─────────────────────────────────────────────
export const PERMISSION_MATRIX: Record<Rol, ReadonlyArray<Permiso>> = {
    [Rol.SUPERADMIN]: Object.values(Permiso) as Permiso[],

    [Rol.ADMIN_RRHH]: [
    Permiso.USUARIOS_LEER,
    Permiso.USUARIOS_CREAR,
    Permiso.USUARIOS_EDITAR,
    Permiso.USUARIOS_BLOQUEAR,
    Permiso.EMPRESAS_LEER,
    Permiso.LOGS_LEER,
    Permiso.DASHBOARD_LEER,
    Permiso.RIESGOS_LEER,
    Permiso.RIESGOS_CREAR,
    Permiso.RIESGOS_EDITAR,
    Permiso.RIESGOS_ELIMINAR,
],

    [Rol.ADMIN_EMPRESAS]: [
        Permiso.EMPRESAS_LEER,
        Permiso.EMPRESAS_CREAR,
        Permiso.EMPRESAS_EDITAR,
        Permiso.EMPRESAS_ELIMINAR,
        Permiso.EMPRESAS_EXPORTAR,
        Permiso.DASHBOARD_LEER,
        Permiso.RIESGOS_LEER,
        Permiso.RIESGOS_CREAR,
        Permiso.RIESGOS_EDITAR,
    ],

    [Rol.INVESTIGADOR_SENIOR]: [
        Permiso.EMPRESAS_LEER,
        Permiso.EMPRESAS_EDITAR,
        Permiso.RIESGOS_LEER,
        Permiso.RIESGOS_CREAR,
        Permiso.RIESGOS_EDITAR,
        Permiso.DASHBOARD_LEER,
    ],

    [Rol.INVESTIGADOR_JUNIOR]: [
        Permiso.EMPRESAS_LEER,   // Restringido por rubros asignados en BD
        Permiso.RIESGOS_LEER,
        Permiso.DASHBOARD_LEER,
    ],

    [Rol.TEMPORAL]: [
        Permiso.EMPRESAS_LEER,
    ],

    [Rol.VISITANTE]: [],
} as const;

// ─────────────────────────────────────────────
// 4. HELPER: verificar permiso sin instanciar guards
// ─────────────────────────────────────────────
export function rolTienePermiso(rol: Rol, permiso: Permiso): boolean {
    return (PERMISSION_MATRIX[rol] ?? []).includes(permiso);
}

// ─────────────────────────────────────────────
// 5. AGRUPACIONES SEMÁNTICAS (para @Roles() decorator)
//    Úsalas en lugar de hardcodear arrays de números.
// ─────────────────────────────────────────────
export const ROLES_ADMIN          = [Rol.SUPERADMIN, Rol.ADMIN_RRHH, Rol.ADMIN_EMPRESAS] as const;
export const ROLES_ADMIN_SISTEMA  = [Rol.SUPERADMIN, Rol.ADMIN_RRHH] as const;
export const ROLES_ADMIN_EMPRESAS = [Rol.SUPERADMIN, Rol.ADMIN_EMPRESAS] as const;
export const ROLES_INVESTIGADORES = [Rol.INVESTIGADOR_SENIOR, Rol.INVESTIGADOR_JUNIOR] as const;
export const ROLES_CON_LECTURA    = [
    Rol.SUPERADMIN,
    Rol.ADMIN_RRHH,
    Rol.ADMIN_EMPRESAS,
    Rol.INVESTIGADOR_SENIOR,
    Rol.INVESTIGADOR_JUNIOR,
] as const;
