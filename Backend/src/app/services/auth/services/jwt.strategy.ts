import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { MyJwtConfig } from 'src/config/services/jwt.config';
import { UsuariosService } from 'src/modules/usuarios/services/usuarios.service';
import { Rol } from 'src/shared/constants/roles.const';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly jwtConfig: MyJwtConfig,
        private readonly usuariosService: UsuariosService
    ) {
        const { secret } = jwtConfig.get();
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }

    async validate(payload: any) {
    if (!payload) {
        throw new UnauthorizedException({ 
            message: 'Token inválido'
        });
    }

    // ✅ Agregás idRol aquí
    const data = { 
        sub: payload.sub, 
        usuario: payload.usuario, 
        rol: payload.rol,
        idRol: payload.idRol,   // 👈 esta línea es el fix
        must_change_password: payload.must_change_password ?? false 
    };

    const usuario = await this.usuariosService.findOne(data.sub, {
        throwException: false,
    });

    if (!usuario) {
        throw new UnauthorizedException({ 
            message: 'Token inválido'
        });
    }

    if (usuario.idRol !== Rol.TEMPORAL) {
        return data;
    }

    if (!usuario.expiracion) {
        throw new UnauthorizedException({ 
            message: 'Usuario invalido' 
        });
    }

    const now = new Date();
    if (usuario.expiracion.getTime() <= now.getTime()) {
        throw new UnauthorizedException({
            message: 'Cuenta expirada'
        });
    }

    return data;
}
}
