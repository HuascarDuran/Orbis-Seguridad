/**
 * @file permisos.guard.ts
 * @description Guard granular basado en PERMISSION_MATRIX.
 *
 * OWASP A01 MITIGATION: La autorización se resuelve 100% en el servidor
 * consultando la matriz canónica, nunca confiando en datos del cliente.
 *
 * Uso en controller:
 *   @UseGuards(JwtGuard, PermisosGuard)
 *   @RequierePermisos(Permiso.EMPRESAS_EDITAR)
 *   @Patch(':id')
 *   update(...) {}
 */

import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISOS_KEY } from '../../../shared/decorators/requiere-permisos.decorator';
import { Permiso, Rol, rolTienePermiso } from '../../../shared/constants/roles.const';

/** Forma del payload inyectado por JwtStrategy en request.user */
interface JwtPayloadUsuario {
    sub: number;
    usuario: string;
    rol: number;
    must_change_password: boolean;
}

@Injectable()
export class PermisosGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const permisosRequeridos = this.reflector.getAllAndOverride<Permiso[]>(
            PERMISOS_KEY,
            [context.getHandler(), context.getClass()],
        );

        // Si el endpoint no exige permisos específicos, pasa el guard
        if (!permisosRequeridos || permisosRequeridos.length === 0) {
            return true;
        }

        const request = context.switchToHttp().getRequest<{ user: JwtPayloadUsuario }>();
        const { user } = request;

        if (!user || !(user.rol in Rol)) {
            throw new ForbiddenException('Rol no reconocido o token inválido.');
        }

        const rolUsuario = user.rol as Rol;

        const tieneAcceso = permisosRequeridos.every((permiso) =>
            rolTienePermiso(rolUsuario, permiso),
        );

        if (!tieneAcceso) {
            throw new ForbiddenException(
                `Acceso denegado. Se requieren: [${permisosRequeridos.join(', ')}].`,
            );
        }

        return true;
    }
}
