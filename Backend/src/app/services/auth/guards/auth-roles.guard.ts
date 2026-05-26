import { Injectable, CanActivate, ExecutionContext, Type, mixin, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

export const AuthRolesGuard = (roles: number[]): Type<CanActivate> => {
    @Injectable()
    class MixinAuthRolesGuard extends AuthGuard('jwt') {
        constructor(private reflector: Reflector) {
            super();
        }

        async canActivate(context: ExecutionContext): Promise<boolean> {
            const jwtValid = (await super.canActivate(context)) as boolean;
            if (!jwtValid) return false;

            const { user } = context.switchToHttp().getRequest();
            if (!roles || roles.length === 0) return true;

            // --- CORRECCIÓN AQUÍ ---
            // Usamos .includes para verificar que el rol esté en la lista permitida
            const isAllowed = roles.includes(Number(user.idRol || user.rol));
            // -----------------------

            if (!isAllowed) {
                throw new ForbiddenException({
                    message: 'No tiene permiso para realizar esta acción'
                });
            }
            return true;
        }
    }

    return mixin(MixinAuthRolesGuard);
};
