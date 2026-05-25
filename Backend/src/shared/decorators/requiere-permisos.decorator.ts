/**
 * @file requiere-permisos.decorator.ts
 * @description Decorator que declara los permisos atómicos requeridos por un endpoint.
 *
 * Uso:
 *   @RequierePermisos(Permiso.EMPRESAS_CREAR, Permiso.EMPRESAS_EDITAR)
 */

import { SetMetadata } from '@nestjs/common';
import { Permiso } from 'src/shared/constants/roles.const';

export const PERMISOS_KEY = 'permisos_requeridos';

export const RequierePermisos = (...permisos: Permiso[]) =>
    SetMetadata(PERMISOS_KEY, permisos);
