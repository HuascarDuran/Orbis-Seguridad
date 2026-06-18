import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISOS_KEY } from '../../../shared/decorators/requiere-permisos.decorator';
import { Permiso } from '../../../shared/constants/roles.const';
import { RolesService } from '../../../modules/usuarios/modules/roles/services/roles.service';

interface JwtPayloadUsuario {
    sub: number;
    usuario: string;
    idRol: number;
    must_change_password: boolean;
}

@Injectable()
export class PermisosGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const permisosRequeridos = this.reflector.getAllAndOverride<Permiso[]>(
            PERMISOS_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!permisosRequeridos || permisosRequeridos.length === 0) {
            return true;
        }

        const request = context.switchToHttp().getRequest<{ user: JwtPayloadUsuario }>();
        const { user } = request;

        if (!user || !user.idRol) {
            throw new ForbiddenException('Rol no reconocido o token inválido.');
        }

        const idRol = Number(user.idRol);
        const permisosUsuario = await this.rolesService.getPermissionsForRole(idRol);

        const tieneAcceso = permisosRequeridos.every((permiso) => {
            if (permiso === Permiso.EMPRESAS_LEER) {
                return permisosUsuario.includes(Permiso.EMPRESAS_LEER) ||
                       permisosUsuario.includes(Permiso.EMPRESAS_LEER_RESTRINGIDO);
            }
            return permisosUsuario.includes(permiso);
        });

        if (!tieneAcceso) {
            throw new ForbiddenException(
                `Acceso denegado. Se requieren los permisos: [${permisosRequeridos.join(', ')}].`,
            );
        }

        return true;
    }
}
