/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! ./common/utils */ "./src/common/utils/index.ts");
let AppController = class AppController {
    async ping(res) {
        return (0, utils_1.OkRes)(res, {
            status: 'ok',
            timestamp: new Date().toISOString()
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('ping'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "ping", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('app')
], AppController);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_module_1 = __webpack_require__(/*! ./config/config.module */ "./src/config/config.module.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const auth_module_1 = __webpack_require__(/*! ./app/services/auth/auth.module */ "./src/app/services/auth/auth.module.ts");
const usuarios_module_1 = __webpack_require__(/*! ./modules/usuarios/usuarios.module */ "./src/modules/usuarios/usuarios.module.ts");
const empresas_module_1 = __webpack_require__(/*! ./modules/empresas/empresas.module */ "./src/modules/empresas/empresas.module.ts");
const departamentos_module_1 = __webpack_require__(/*! ./modules/empresas/modules/departamentos/departamentos.module */ "./src/modules/empresas/modules/departamentos/departamentos.module.ts");
const familias_module_1 = __webpack_require__(/*! ./modules/empresas/modules/familias/familias.module */ "./src/modules/empresas/modules/familias/familias.module.ts");
const fundadores_module_1 = __webpack_require__(/*! ./modules/empresas/modules/fundadores/fundadores.module */ "./src/modules/empresas/modules/fundadores/fundadores.module.ts");
const hitos_module_1 = __webpack_require__(/*! ./modules/empresas/modules/hitos/hitos.module */ "./src/modules/empresas/modules/hitos/hitos.module.ts");
const imagenes_module_1 = __webpack_require__(/*! ./modules/empresas/modules/imagenes/imagenes.module */ "./src/modules/empresas/modules/imagenes/imagenes.module.ts");
const implementaciones_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/implementaciones.module */ "./src/modules/empresas/modules/implementaciones/implementaciones.module.ts");
const acciones_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/modules/acciones/acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/acciones.module.ts");
const tipos_acciones_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module.ts");
const tipos_acciones_implementaciones_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module.ts");
const items_module_1 = __webpack_require__(/*! ./modules/empresas/modules/items/items.module */ "./src/modules/empresas/modules/items/items.module.ts");
const municipios_module_1 = __webpack_require__(/*! ./modules/empresas/modules/municipios/municipios.module */ "./src/modules/empresas/modules/municipios/municipios.module.ts");
const municipios_empresa_module_1 = __webpack_require__(/*! ./modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module.ts");
const operaciones_internacionales_module_1 = __webpack_require__(/*! ./modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module */ "./src/modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module.ts");
const premios_module_1 = __webpack_require__(/*! ./modules/empresas/modules/premios/premios.module */ "./src/modules/empresas/modules/premios/premios.module.ts");
const rubros_module_1 = __webpack_require__(/*! ./modules/empresas/modules/rubros/rubros.module */ "./src/modules/empresas/modules/rubros/rubros.module.ts");
const rubros_empresas_module_1 = __webpack_require__(/*! ./modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module.ts");
const sedes_module_1 = __webpack_require__(/*! ./modules/empresas/modules/sedes/sedes.module */ "./src/modules/empresas/modules/sedes/sedes.module.ts");
const tamanios_empresas_module_1 = __webpack_require__(/*! ./modules/empresas/modules/tamanios-empresas/tamanios-empresas.module */ "./src/modules/empresas/modules/tamanios-empresas/tamanios-empresas.module.ts");
const tipos_societarios_module_1 = __webpack_require__(/*! ./modules/empresas/modules/tipos-societarios/tipos-societarios.module */ "./src/modules/empresas/modules/tipos-societarios/tipos-societarios.module.ts");
const empresas_tipos_societarios_module_1 = __webpack_require__(/*! ./modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module.ts");
const roles_module_1 = __webpack_require__(/*! ./modules/usuarios/modules/roles/roles.module */ "./src/modules/usuarios/modules/roles/roles.module.ts");
const implementaciones_acciones_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module.ts");
const proyectos_module_1 = __webpack_require__(/*! ./modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module.ts");
const formulario_module_1 = __webpack_require__(/*! ./app/services/formulario/formulario.module */ "./src/app/services/formulario/formulario.module.ts");
const servicios_module_1 = __webpack_require__(/*! ./modules/empresas/modules/servicios/servicios.module */ "./src/modules/empresas/modules/servicios/servicios.module.ts");
const paises_module_1 = __webpack_require__(/*! ./modules/empresas/modules/paises/paises.module */ "./src/modules/empresas/modules/paises/paises.module.ts");
const dashboard_module_1 = __webpack_require__(/*! ./app/services/dashboard/dashboard.module */ "./src/app/services/dashboard/dashboard.module.ts");
const solicitudes_temporales_module_1 = __webpack_require__(/*! ./app/services/solicitudes-temporales/solicitudes-temporales.module */ "./src/app/services/solicitudes-temporales/solicitudes-temporales.module.ts");
const app_task_1 = __webpack_require__(/*! ./tasks/app.task */ "./src/tasks/app.task.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const email_module_1 = __webpack_require__(/*! ./shared/services/email/email.module */ "./src/shared/services/email/email.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const datamart_module_1 = __webpack_require__(/*! ./modules/datamart/datamart.module */ "./src/modules/datamart/datamart.module.ts");
const common_module_1 = __webpack_require__(/*! ./common/common.module */ "./src/common/common.module.ts");
const logs_module_1 = __webpack_require__(/*! ./modules/logs/logs.module */ "./src/modules/logs/logs.module.ts");
const riesgos_module_1 = __webpack_require__(/*! ./modules/riesgos/riesgos.module */ "./src/modules/riesgos/riesgos.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            common_module_1.CommonModule,
            email_module_1.EmailModule,
            config_module_1.MyConfigModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            roles_module_1.RolesModule,
            empresas_module_1.EmpresasModule,
            departamentos_module_1.DepartamentosModule,
            familias_module_1.FamiliasModule,
            fundadores_module_1.FundadoresModule,
            hitos_module_1.HitosModule,
            imagenes_module_1.ImagenesModule,
            implementaciones_module_1.ImplementacionesModule,
            acciones_module_1.AccionesModule,
            implementaciones_acciones_module_1.ImplementacionesAccionesModule,
            proyectos_module_1.ProyectosModule,
            tipos_acciones_module_1.TiposAccionesModule,
            tipos_acciones_implementaciones_module_1.TiposAccionesImplementacionesModule,
            items_module_1.ItemsModule,
            municipios_module_1.MunicipiosModule,
            municipios_empresa_module_1.MunicipiosEmpresaModule,
            operaciones_internacionales_module_1.OperacionesInternacionalesModule,
            paises_module_1.PaisesModule,
            premios_module_1.PremiosModule,
            rubros_module_1.RubrosModule,
            rubros_empresas_module_1.RubrosEmpresasModule,
            sedes_module_1.SedesModule,
            servicios_module_1.ServiciosModule,
            tamanios_empresas_module_1.TamaniosEmpresasModule,
            tipos_societarios_module_1.TiposSocietariosModule,
            empresas_tipos_societarios_module_1.EmpresasTiposSocietariosModule,
            formulario_module_1.FormularioModule,
            dashboard_module_1.DashboardModule,
            solicitudes_temporales_module_1.SolicitudesTemporalesModule,
            datamart_module_1.DatamartModule,
            logs_module_1.LogsModule,
            riesgos_module_1.RiesgosModule
        ],
        providers: [
            app_task_1.AppTask
        ],
        controllers: [app_controller_1.AppController]
    })
], AppModule);


/***/ }),

/***/ "./src/app/services/auth/api/auth.controller.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth/api/auth.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const express_1 = __webpack_require__(/*! express */ "express");
const auth_service_1 = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth/services/auth.service.ts");
const register_dto_1 = __webpack_require__(/*! ../dto/register.dto */ "./src/app/services/auth/dto/register.dto.ts");
const login_dto_1 = __webpack_require__(/*! ../dto/login.dto */ "./src/app/services/auth/dto/login.dto.ts");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
const login_response_dto_1 = __webpack_require__(/*! ../dto/login-response.dto */ "./src/app/services/auth/dto/login-response.dto.ts");
const swagger_response_utils_1 = __webpack_require__(/*! src/common/utils/swagger/swagger-response.utils */ "./src/common/utils/swagger/swagger-response.utils.ts");
const reset_password_dto_1 = __webpack_require__(/*! ../dto/reset-password.dto */ "./src/app/services/auth/dto/reset-password.dto.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(data, res) {
        const usuario = await this.authService.register(data);
        return (0, utils_1.CreatedRes)(res, {
            message: 'El usuario fue registrado'
        });
    }
    async login(data, res, req) {
        const response = await this.authService.login(data, req.ip ?? '127.0.0.1');
        return (0, utils_1.OkRes)(res, response);
    }
    async forgotPassword(dto, res, req) {
        await this.authService.solicitarResetPassword(dto.correo, req.ip ?? '127.0.0.1');
        return (0, utils_1.OkRes)(res, {
            message: 'Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.'
        });
    }
    async validateResetToken(token, res) {
        const result = await this.authService.validarTokenReset(token);
        return (0, utils_1.OkRes)(res, result);
    }
    async resetPassword(dto, res, req) {
        await this.authService.confirmarResetPassword(dto.token, dto.passwordNuevo, req.ip ?? '127.0.0.1');
        return (0, utils_1.OkRes)(res, { message: 'Contraseña restablecida exitosamente.' });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/register'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para registrar usuarios como visitantes',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Respuesta en caso de crear usuario exitosamente',
        type: common_response_dto_1.CommonResponseDto
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    (0, swagger_1.ApiConflictResponse)({
        description: 'Respuesta en caso de nombre de usuario ya usado',
        type: common_response_dto_1.CommonResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api iniciar sesion en el sistema'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de iniciar sesion exitosamente',
        type: login_response_dto_1.LoginResponseDto
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Respuesta en caso de ingresar credenciales incorrectas',
        type: common_response_dto_1.CommonResponseDto
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _d : Object, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object, typeof (_f = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/forgot-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Solicitar restablecimiento de contraseña por correo' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Correo enviado si la cuenta existe', type: common_response_dto_1.CommonResponseDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof reset_password_dto_1.ForgotPasswordDto !== "undefined" && reset_password_dto_1.ForgotPasswordDto) === "function" ? _g : Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object, typeof (_j = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Get)('/reset-password/validate/:token'),
    (0, swagger_1.ApiOperation)({ summary: 'Validar si un token de restablecimiento es válido' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Estado de validez del token', type: common_response_dto_1.CommonResponseDto }),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateResetToken", null);
__decorate([
    (0, common_1.Post)('/reset-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirmar el restablecimiento de contraseña con token' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Contraseña actualizada exitosamente', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof reset_password_dto_1.ResetPasswordDto !== "undefined" && reset_password_dto_1.ResetPasswordDto) === "function" ? _l : Object, typeof (_m = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _m : Object, typeof (_o = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/app/services/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth/auth.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth/services/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./api/auth.controller */ "./src/app/services/auth/api/auth.controller.ts");
const usuarios_module_1 = __webpack_require__(/*! src/modules/usuarios/usuarios.module */ "./src/modules/usuarios/usuarios.module.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const jwt_config_1 = __webpack_require__(/*! src/config/services/jwt.config */ "./src/config/services/jwt.config.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./services/jwt.strategy */ "./src/app/services/auth/services/jwt.strategy.ts");
const email_module_1 = __webpack_require__(/*! src/shared/services/email/email.module */ "./src/shared/services/email/email.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_1.UsuariosModule,
            email_module_1.EmailModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [jwt_config_1.MyJwtConfig],
                useFactory: (jwtConfig) => {
                    const { secret, expiresIn, isActive } = jwtConfig.get();
                    if (!isActive) {
                        console.warn('JWT inactivo');
                    }
                    return {
                        secret,
                        signOptions: { expiresIn },
                    };
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy
        ],
    })
], AuthModule);


/***/ }),

/***/ "./src/app/services/auth/dto/login-response.dto.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/auth/dto/login-response.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
class LoginResponseDto extends common_response_dto_1.CommonResponseDto {
    access_token;
    idUsuario;
    idRol;
    must_change_password;
}
exports.LoginResponseDto = LoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Token de acceso',
        type: String
    }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "access_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de usuario',
        type: String
    }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "idUsuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rol del usuario',
        type: Number
    }),
    __metadata("design:type", Number)
], LoginResponseDto.prototype, "idRol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el usuario debe cambiar su contraseña antes de operar',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], LoginResponseDto.prototype, "must_change_password", void 0);


/***/ }),

/***/ "./src/app/services/auth/dto/login.dto.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth/dto/login.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
    usuario;
    contrasenia;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de usuario',
        type: String
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contrasenia de usuario',
        type: String
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "contrasenia", void 0);


/***/ }),

/***/ "./src/app/services/auth/dto/register.dto.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth/dto/register.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
    usuario;
    correo;
    contrasenia;
    idRol;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de usuario',
        type: String,
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo del usuario',
        type: String,
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(150),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contrasenia de usuario',
        type: String,
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], RegisterDto.prototype, "contrasenia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rol asignado',
        type: Number,
        required: true
    }),
    (0, class_validator_1.IsNumber)({ allowNaN: false }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RegisterDto.prototype, "idRol", void 0);


/***/ }),

/***/ "./src/app/services/auth/dto/reset-password.dto.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/auth/dto/reset-password.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidarTokenDto = exports.ResetPasswordDto = exports.ForgotPasswordDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ForgotPasswordDto {
    correo;
}
exports.ForgotPasswordDto = ForgotPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Correo inválido' }),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "correo", void 0);
class ResetPasswordDto {
    token;
    passwordNuevo;
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "passwordNuevo", void 0);
class ValidarTokenDto {
    token;
}
exports.ValidarTokenDto = ValidarTokenDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidarTokenDto.prototype, "token", void 0);


/***/ }),

/***/ "./src/app/services/auth/guards/auth-roles.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/auth/guards/auth-roles.guard.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthRolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const AuthRolesGuard = (roles) => {
    var _a;
    let MixinAuthRolesGuard = class MixinAuthRolesGuard extends (0, passport_1.AuthGuard)('jwt') {
        reflector;
        constructor(reflector) {
            super();
            this.reflector = reflector;
        }
        async canActivate(context) {
            const jwtValid = (await super.canActivate(context));
            if (!jwtValid)
                return false;
            const { user } = context.switchToHttp().getRequest();
            if (!roles || roles.length === 0)
                return true;
            const isAllowed = roles.includes(Number(user.rol));
            if (!isAllowed) {
                throw new common_1.ForbiddenException({
                    message: 'No tiene permiso para realizar esta acción'
                });
            }
            return true;
        }
    };
    MixinAuthRolesGuard = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
    ], MixinAuthRolesGuard);
    return (0, common_1.mixin)(MixinAuthRolesGuard);
};
exports.AuthRolesGuard = AuthRolesGuard;


/***/ }),

/***/ "./src/app/services/auth/permisos.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/services/auth/permisos.guard.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermisosGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const requiere_permisos_decorator_1 = __webpack_require__(/*! ../../../shared/decorators/requiere-permisos.decorator */ "./src/shared/decorators/requiere-permisos.decorator.ts");
const roles_const_1 = __webpack_require__(/*! ../../../shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
let PermisosGuard = class PermisosGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const permisosRequeridos = this.reflector.getAllAndOverride(requiere_permisos_decorator_1.PERMISOS_KEY, [context.getHandler(), context.getClass()]);
        if (!permisosRequeridos || permisosRequeridos.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const { user } = request;
        if (!user || !(user.rol in roles_const_1.Rol)) {
            throw new common_1.ForbiddenException('Rol no reconocido o token inválido.');
        }
        const rolUsuario = user.rol;
        const tieneAcceso = permisosRequeridos.every((permiso) => (0, roles_const_1.rolTienePermiso)(rolUsuario, permiso));
        if (!tieneAcceso) {
            throw new common_1.ForbiddenException(`Acceso denegado. Se requieren: [${permisosRequeridos.join(', ')}].`);
        }
        return true;
    }
};
exports.PermisosGuard = PermisosGuard;
exports.PermisosGuard = PermisosGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], PermisosGuard);


/***/ }),

/***/ "./src/app/services/auth/services/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/auth/services/auth.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const crypto = __webpack_require__(/*! crypto */ "crypto");
const usuarios_auth_service_1 = __webpack_require__(/*! src/modules/usuarios/services/usuarios-auth.service */ "./src/modules/usuarios/services/usuarios-auth.service.ts");
const usuarios_service_1 = __webpack_require__(/*! src/modules/usuarios/services/usuarios.service */ "./src/modules/usuarios/services/usuarios.service.ts");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const jwt_config_1 = __webpack_require__(/*! src/config/services/jwt.config */ "./src/config/services/jwt.config.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const email_service_1 = __webpack_require__(/*! src/shared/services/email/email.service */ "./src/shared/services/email/email.service.ts");
const logs_service_1 = __webpack_require__(/*! src/modules/logs/logs.service */ "./src/modules/logs/logs.service.ts");
let AuthService = class AuthService {
    usuariosAuthService;
    usuariosService;
    jwtConfig;
    jwtService;
    configService;
    emailService;
    logsService;
    constructor(usuariosAuthService, usuariosService, jwtConfig, jwtService, configService, emailService, logsService) {
        this.usuariosAuthService = usuariosAuthService;
        this.usuariosService = usuariosService;
        this.jwtConfig = jwtConfig;
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
        this.logsService = logsService;
    }
    async register(data) {
        const [existeUsuario, existeCorreo] = await Promise.all([
            this.usuariosService.findByUsuario(data.usuario, { throwException: false }),
            this.usuariosService.findOneByCorreo(data.correo, { throwException: false }),
        ]);
        if (existeUsuario) {
            throw new common_1.ConflictException({ message: 'El usuario ingresado ya se encuentra registrado.' });
        }
        if (existeCorreo) {
            throw new common_1.ConflictException({ message: 'Ya existe un usuario con el mismo correo.' });
        }
        return this.usuariosAuthService.create({
            ...data,
            idRol: data.idRol ?? roles_const_1.Rol.VISITANTE,
        });
    }
    async login(data, ipOrigen) {
        const MAX_ATTEMPTS = this.configService.get('MAX_LOGIN_ATTEMPTS', 3);
        const LOCKOUT_MINUTES = this.configService.get('LOCKOUT_MINUTES', 30);
        const alias = data.usuario.toLowerCase().replace(/@orbis\.com$/i, '').trim();
        const usuario = await this.usuariosService.findByUsuario(alias, { throwException: false });
        if (!usuario) {
            await this.logsService.loginFallido({
                nombreUsuario: alias,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS,
            });
            throw new common_1.UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }
        if (usuario.idRol === roles_const_1.RolesEnum.TEMPORAL &&
            usuario.expiracion &&
            usuario.expiracion.getTime() <= Date.now()) {
            await this.logsService.loginFallido({
                nombreUsuario: usuario.usuario,
                ipOrigen,
                intentosRestantes: 0,
            });
            throw new common_1.UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }
        if (usuario.isLocked && usuario.lockedAt) {
            const unlockTime = (0, date_fns_1.addMinutes)(usuario.lockedAt, LOCKOUT_MINUTES);
            if (new Date() >= unlockTime) {
                await this.usuariosService.desbloquearCuenta(usuario.id);
                await this.logsService.cuentaDesbloqueada({
                    idUsuarioAfectado: usuario.id,
                    nombreUsuarioAfectado: usuario.usuario,
                    motivo: 'AUTO_EXPIRACION',
                });
                usuario.isLocked = false;
                usuario.failedAttempts = 0;
            }
        }
        if (usuario.isLocked) {
            throw new common_1.UnauthorizedException({
                message: `Cuenta bloqueada. Intenta en ${LOCKOUT_MINUTES} min o solicita desbloqueo al administrador.`,
            });
        }
        const passwordOk = await (0, utils_1.comparePassword)(data.contrasenia, usuario.contrasenia);
        if (!passwordOk) {
            const newCount = (usuario.failedAttempts ?? 0) + 1;
            if (newCount >= MAX_ATTEMPTS) {
                await this.usuariosService.bloquearCuenta(usuario.id);
                await this.logsService.cuentaBloqueada({
                    idUsuario: usuario.id,
                    nombreUsuario: usuario.usuario,
                    ipOrigen,
                    maxIntentos: MAX_ATTEMPTS,
                });
                if (usuario.correoReal) {
                    this.emailService.enviarCuentaBloqueada(usuario.correoReal, usuario.usuario);
                }
                throw new common_1.UnauthorizedException({
                    message: `Cuenta bloqueada por ${LOCKOUT_MINUTES} min tras ${MAX_ATTEMPTS} intentos fallidos.`,
                });
            }
            await this.usuariosService.incrementarIntentos(usuario.id, newCount);
            await this.logsService.loginFallido({
                nombreUsuario: usuario.usuario,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS - newCount,
            });
            throw new common_1.UnauthorizedException({
                message: `Credenciales incorrectas. Intentos restantes: ${MAX_ATTEMPTS - newCount}.`,
            });
        }
        if ((usuario.failedAttempts ?? 0) > 0) {
            await this.usuariosService.incrementarIntentos(usuario.id, 0);
        }
        let mustChangePassword = usuario.mustChangePassword ?? false;
        if (!mustChangePassword && usuario.passwordExpiresAt && new Date() > usuario.passwordExpiresAt) {
            mustChangePassword = true;
            await this.usuariosService.marcarPasswordExpirado(usuario.id);
        }
        const payload = {
            sub: usuario.id,
            id: usuario.id,
            usuario: usuario.usuario,
            rol: usuario.idRol,
            idRol: usuario.idRol,
            must_change_password: mustChangePassword,
        };
        const { secret, expiresIn } = this.jwtConfig.get();
        const token = this.jwtService.sign(payload, { secret, expiresIn });
        await this.logsService.loginExitoso({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });
        return {
            message: 'Login exitoso.',
            access_token: token,
            idUsuario: usuario.id,
            idRol: usuario.idRol,
            must_change_password: mustChangePassword,
        };
    }
    async solicitarResetPassword(correo, ipOrigen) {
        const RESET_MINUTES = this.configService.get('RESET_TOKEN_EXPIRES_MINUTES', 30);
        const frontendUrl = (this.configService.get('FRONTEND_URL') || 'https://orbis-seguridad.vercel.app').split(',')[0].trim().replace(/\/$/, '');
        const usuario = await this.usuariosService.findByAnyEmail(correo);
        if (!usuario)
            return;
        const rawToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        const expires = (0, date_fns_1.addMinutes)(new Date(), RESET_MINUTES);
        await this.usuariosService.guardarResetToken(usuario.id, tokenHash, expires);
        await this.logsService.resetPasswordSolicitado({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });
        const resetUrl = `${frontendUrl}/reset-password?token=${rawToken}`;
        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarResetPassword(correoDestino, resetUrl, RESET_MINUTES);
    }
    async validarTokenReset(token) {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const usuario = await this.usuariosService.findByResetToken(tokenHash);
        const valido = !!usuario &&
            !!usuario.resetTokenExpires &&
            new Date() <= usuario.resetTokenExpires;
        return { valido };
    }
    async confirmarResetPassword(token, passwordNuevo, ipOrigen) {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const usuario = await this.usuariosService.findByResetToken(tokenHash);
        if (!usuario || !usuario.resetTokenExpires || new Date() > usuario.resetTokenExpires) {
            throw new common_1.BadRequestException({ message: 'Token inválido o expirado.' });
        }
        await this.usuariosService.resetearPassword(usuario.id, passwordNuevo);
        await this.logsService.resetPasswordCompletado({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });
        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarPasswordCambiada(correoDestino);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof usuarios_auth_service_1.UsuariosAuthService !== "undefined" && usuarios_auth_service_1.UsuariosAuthService) === "function" ? _a : Object, typeof (_b = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _b : Object, typeof (_c = typeof jwt_config_1.MyJwtConfig !== "undefined" && jwt_config_1.MyJwtConfig) === "function" ? _c : Object, typeof (_d = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _e : Object, typeof (_f = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _f : Object, typeof (_g = typeof logs_service_1.LogsService !== "undefined" && logs_service_1.LogsService) === "function" ? _g : Object])
], AuthService);


/***/ }),

/***/ "./src/app/services/auth/services/jwt.strategy.ts":
/*!********************************************************!*\
  !*** ./src/app/services/auth/services/jwt.strategy.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const jwt_config_1 = __webpack_require__(/*! src/config/services/jwt.config */ "./src/config/services/jwt.config.ts");
const usuarios_service_1 = __webpack_require__(/*! src/modules/usuarios/services/usuarios.service */ "./src/modules/usuarios/services/usuarios.service.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    jwtConfig;
    usuariosService;
    constructor(jwtConfig, usuariosService) {
        const { secret } = jwtConfig.get();
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
        this.jwtConfig = jwtConfig;
        this.usuariosService = usuariosService;
    }
    async validate(payload) {
        if (!payload) {
            throw new common_1.UnauthorizedException({
                message: 'Token inválido'
            });
        }
        const data = { sub: payload.sub, usuario: payload.usuario, rol: payload.rol, must_change_password: payload.must_change_password ?? false };
        const usuario = await this.usuariosService.findOne(data.sub, {
            throwException: false,
        });
        if (!usuario) {
            throw new common_1.UnauthorizedException({
                message: 'Token inválido'
            });
        }
        if (usuario.idRol !== roles_const_1.Rol.TEMPORAL) {
            return data;
        }
        if (!usuario.expiracion) {
            throw new common_1.UnauthorizedException({
                message: 'Usuario invalido'
            });
        }
        const now = new Date();
        if (usuario.expiracion.getTime() <= now.getTime()) {
            throw new common_1.UnauthorizedException({
                message: 'Cuenta expirada'
            });
        }
        return data;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_config_1.MyJwtConfig !== "undefined" && jwt_config_1.MyJwtConfig) === "function" ? _a : Object, typeof (_b = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/app/services/dashboard/api/dashboard.controller.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/dashboard/api/dashboard.controller.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dashboard_service_1 = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard/services/dashboard.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const get_promedio_antiguedad_dto_1 = __webpack_require__(/*! ../dto/api-response/get-promedio-antiguedad.dto */ "./src/app/services/dashboard/dto/api-response/get-promedio-antiguedad.dto.ts");
const get_empresas_anio_dto_1 = __webpack_require__(/*! ../dto/api-response/get-empresas-anio.dto */ "./src/app/services/dashboard/dto/api-response/get-empresas-anio.dto.ts");
const get_empresas_anio_params_dto_1 = __webpack_require__(/*! ../dto/api-input/get-empresas-anio-params.dto */ "./src/app/services/dashboard/dto/api-input/get-empresas-anio-params.dto.ts");
const get_empresas_tamanios_params_dto_1 = __webpack_require__(/*! ../dto/api-input/get-empresas-tamanios-params.dto */ "./src/app/services/dashboard/dto/api-input/get-empresas-tamanios-params.dto.ts");
const get_empresas_tamanios_dto_1 = __webpack_require__(/*! ../dto/api-response/get-empresas-tamanios.dto */ "./src/app/services/dashboard/dto/api-response/get-empresas-tamanios.dto.ts");
const get_average_antiguedad_params_dto_1 = __webpack_require__(/*! ../dto/api-input/get-average-antiguedad-params.dto */ "./src/app/services/dashboard/dto/api-input/get-average-antiguedad-params.dto.ts");
const get_statistics_params_dto_1 = __webpack_require__(/*! ../dto/get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
const get_promedio_sedes_dto_1 = __webpack_require__(/*! ../dto/api-response/get-promedio-sedes.dto */ "./src/app/services/dashboard/dto/api-response/get-promedio-sedes.dto.ts");
const get_porcentajes_rubro_params_dto_1 = __webpack_require__(/*! ../dto/api-input/get-porcentajes-rubro-params.dto */ "./src/app/services/dashboard/dto/api-input/get-porcentajes-rubro-params.dto.ts");
const get_porcentajes_rubro_dto_1 = __webpack_require__(/*! ../dto/api-response/get-porcentajes-rubro.dto */ "./src/app/services/dashboard/dto/api-response/get-porcentajes-rubro.dto.ts");
const get_empresas_acciones_params_dto_1 = __webpack_require__(/*! ../dto/api-input/get-empresas-acciones-params.dto */ "./src/app/services/dashboard/dto/api-input/get-empresas-acciones-params.dto.ts");
const get_empresas_acciones_dto_1 = __webpack_require__(/*! ../dto/api-response/get-empresas-acciones.dto */ "./src/app/services/dashboard/dto/api-response/get-empresas-acciones.dto.ts");
const get_empresas_departamento_dto_1 = __webpack_require__(/*! ../dto/api-response/get-empresas-departamento.dto */ "./src/app/services/dashboard/dto/api-response/get-empresas-departamento.dto.ts");
const get_total_hitos_anio_dto_1 = __webpack_require__(/*! ../dto/api-response/get-total-hitos-anio.dto */ "./src/app/services/dashboard/dto/api-response/get-total-hitos-anio.dto.ts");
let DashboardController = class DashboardController {
    dashboardService;
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getPromedioAntiguedad(params, res) {
        const avg = await this.dashboardService.getAverageAntiguedad(params);
        return (0, utils_1.OkRes)(res, {
            promedio: avg
        });
    }
    async getEmpresasPorAnio(params, res) {
        const data = await this.dashboardService.getEmpresasPorAnio(params);
        return (0, utils_1.OkRes)(res, {
            empresasAnio: data
        });
    }
    async getTamaniosEmpresas(params, res) {
        const data = await this.dashboardService.getEmpresasPorTamanio(params);
        return (0, utils_1.OkRes)(res, {
            tamanios: data
        });
    }
    async getEmpresasPorSectorEconomico(params, res) {
        const rubros = await this.dashboardService.getPorcentajesRubros(params);
        return (0, utils_1.OkRes)(res, {
            rubros: rubros
        });
    }
    async getPromedioSedes(params, res) {
        const promedio = await this.dashboardService.getPromedioSedes(params);
        return (0, utils_1.OkRes)(res, {
            promedio: promedio
        });
    }
    async getEmpresasAcciones(params, res) {
        const acciones = await this.dashboardService.getEmpresasAcciones(params);
        return (0, utils_1.OkRes)(res, acciones);
    }
    async getEmpresasDepartamentos(res) {
        const conteos = await this.dashboardService.getEmpresasPorDepartamentos();
        return (0, utils_1.OkRes)(res, {
            departamentos: conteos
        });
    }
    async getTotalHitosAnio(res) {
        const data = await this.dashboardService.obtenerTotalHitosAnio();
        return (0, utils_1.OkRes)(res, {
            hitos: data
        });
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('/promedio-antiguedad'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener el promedio de anios de antiguedad',
        description: 'Este endpoint es para obtener el promedio de anios de antiguedad en base a el anio de fundacion de la empresa'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener el promedio de antiguedad exitosamente',
        type: get_promedio_antiguedad_dto_1.GetPromedioAntiguedadDto
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_average_antiguedad_params_dto_1.GetAverageAntiguedadParamsDto !== "undefined" && get_average_antiguedad_params_dto_1.GetAverageAntiguedadParamsDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getPromedioAntiguedad", null);
__decorate([
    (0, common_1.Get)('/empresas-anio'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener el el total de empresas registradas por anio de fundacion',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtner las empresa por anio exitosamente',
        type: get_empresas_anio_dto_1.GetEmpresasAnio
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof get_empresas_anio_params_dto_1.GetEmpresasAnioParamsDto !== "undefined" && get_empresas_anio_params_dto_1.GetEmpresasAnioParamsDto) === "function" ? _d : Object, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEmpresasPorAnio", null);
__decorate([
    (0, common_1.Get)('/empresas-tamanios-porcentaje'),
    (0, swagger_1.ApiOperation)({
        summary: 'API para obtener los tamanis de empresas con datos estaditsticos'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener los datos de tamanis de empresas',
        type: get_empresas_tamanios_dto_1.GetEmpresasTamaniosDto
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof get_empresas_tamanios_params_dto_1.GetEmpresasTamaniosParamsDto !== "undefined" && get_empresas_tamanios_params_dto_1.GetEmpresasTamaniosParamsDto) === "function" ? _f : Object, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTamaniosEmpresas", null);
__decorate([
    (0, common_1.Get)('/porcentajes-rubros'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener los porcentajes de empresas por rubro',
        description: 'Esto devuelve una lisat de rubros donde cada porcentaje pertenece a las empresas que tiene regustradas este rubro'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_porcentajes_rubro_dto_1.GetPorcentajesRubroDto,
        description: 'Respuesta en caso de obtener los porcentajes de cada rubro'
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof get_porcentajes_rubro_params_dto_1.GetPorcentajeRubroParamsDto !== "undefined" && get_porcentajes_rubro_params_dto_1.GetPorcentajeRubroParamsDto) === "function" ? _h : Object, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEmpresasPorSectorEconomico", null);
__decorate([
    (0, common_1.Get)('/promedio-sedes'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener el promedio de sedes'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_promedio_sedes_dto_1.GetPromedioSedesDto,
        description: 'Respuesta en caso de obtener exitosmaente el promedio de sedes'
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof get_statistics_params_dto_1.GetStatisticsParamsDto !== "undefined" && get_statistics_params_dto_1.GetStatisticsParamsDto) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getPromedioSedes", null);
__decorate([
    (0, common_1.Get)('porciones-accion'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener le proporcion de empresas con ods y sin ods'
    }),
    (0, swagger_1.ApiOkResponse)({
        type: get_empresas_acciones_dto_1.GetEmpresasAccionesDto,
        description: 'Respuesta en caso de obtener exitosamente los porcentajes'
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof get_empresas_acciones_params_dto_1.GetEmpresasAccionesParamsDto !== "undefined" && get_empresas_acciones_params_dto_1.GetEmpresasAccionesParamsDto) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEmpresasAcciones", null);
__decorate([
    (0, common_1.Get)('empresas-departamento'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener el conteo de de empresas que tiene como central cada departamento'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Repuesta en caso de obtener los conteos exitosamente',
        type: get_empresas_departamento_dto_1.GetEmpresasDepartamentosResponseDto
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getEmpresasDepartamentos", null);
__decorate([
    (0, common_1.Get)('total-hitos-anio'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener total de hitos por anio',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtenre la lista hitos por anio',
        type: get_total_hitos_anio_dto_1.GetTotalHitosAnio
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _q : Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTotalHitosAnio", null);
exports.DashboardController = DashboardController = __decorate([
    (0, swagger_1.ApiTags)('Dashboard'),
    (0, common_1.Controller)('api/dashboard'),
    __metadata("design:paramtypes", [typeof (_a = typeof dashboard_service_1.DashboardService !== "undefined" && dashboard_service_1.DashboardService) === "function" ? _a : Object])
], DashboardController);


/***/ }),

/***/ "./src/app/services/dashboard/dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_module_1 = __webpack_require__(/*! src/modules/empresas/empresas.module */ "./src/modules/empresas/empresas.module.ts");
const dashboard_service_1 = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/services/dashboard/services/dashboard.service.ts");
const dashboard_controller_1 = __webpack_require__(/*! ./api/dashboard.controller */ "./src/app/services/dashboard/api/dashboard.controller.ts");
const rubros_module_1 = __webpack_require__(/*! src/modules/empresas/modules/rubros/rubros.module */ "./src/modules/empresas/modules/rubros/rubros.module.ts");
const departamentos_module_1 = __webpack_require__(/*! src/modules/empresas/modules/departamentos/departamentos.module */ "./src/modules/empresas/modules/departamentos/departamentos.module.ts");
const hitos_module_1 = __webpack_require__(/*! src/modules/empresas/modules/hitos/hitos.module */ "./src/modules/empresas/modules/hitos/hitos.module.ts");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            empresas_module_1.EmpresasModule,
            rubros_module_1.RubrosModule,
            departamentos_module_1.DepartamentosModule,
            hitos_module_1.HitosModule,
        ],
        providers: [dashboard_service_1.DashboardService],
        controllers: [dashboard_controller_1.DashboardController],
        exports: [dashboard_service_1.DashboardService]
    })
], DashboardModule);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-input/get-average-antiguedad-params.dto.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-input/get-average-antiguedad-params.dto.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetAverageAntiguedadParamsDto = void 0;
const get_statistics_params_dto_1 = __webpack_require__(/*! ../get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
class GetAverageAntiguedadParamsDto extends get_statistics_params_dto_1.GetStatisticsParamsDto {
}
exports.GetAverageAntiguedadParamsDto = GetAverageAntiguedadParamsDto;


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-input/get-empresas-acciones-params.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-input/get-empresas-acciones-params.dto.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasAccionesParamsDto = void 0;
const get_statistics_params_dto_1 = __webpack_require__(/*! ../get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
class GetEmpresasAccionesParamsDto extends get_statistics_params_dto_1.GetStatisticsParamsDto {
}
exports.GetEmpresasAccionesParamsDto = GetEmpresasAccionesParamsDto;


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-input/get-empresas-anio-params.dto.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-input/get-empresas-anio-params.dto.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasAnioParamsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const get_statistics_params_dto_1 = __webpack_require__(/*! ../get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
class GetEmpresasAnioParamsDto extends get_statistics_params_dto_1.GetStatisticsParamsDto {
    inicio = NaN;
    fin = NaN;
}
exports.GetEmpresasAnioParamsDto = GetEmpresasAnioParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Anio inicial para filtrar las empresas',
        type: Number,
        required: false,
        example: 2015,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetEmpresasAnioParamsDto.prototype, "inicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Anio final para filtrar las empresas',
        type: Number,
        required: false,
        example: 2024,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetEmpresasAnioParamsDto.prototype, "fin", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-input/get-empresas-tamanios-params.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-input/get-empresas-tamanios-params.dto.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasTamaniosParamsDto = void 0;
const get_statistics_params_dto_1 = __webpack_require__(/*! ../get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
class GetEmpresasTamaniosParamsDto extends get_statistics_params_dto_1.GetStatisticsParamsDto {
}
exports.GetEmpresasTamaniosParamsDto = GetEmpresasTamaniosParamsDto;


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-input/get-porcentajes-rubro-params.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-input/get-porcentajes-rubro-params.dto.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPorcentajeRubroParamsDto = void 0;
const get_statistics_params_dto_1 = __webpack_require__(/*! ../get-statistics-params.dto */ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts");
class GetPorcentajeRubroParamsDto extends get_statistics_params_dto_1.GetStatisticsParamsDto {
}
exports.GetPorcentajeRubroParamsDto = GetPorcentajeRubroParamsDto;


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-empresas-acciones.dto.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-empresas-acciones.dto.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasAccionesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class GetEmpresasAccionesDto {
    conAcciones;
    sinAcciones;
}
exports.GetEmpresasAccionesDto = GetEmpresasAccionesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de empresas que tienen al menos un ods registrado',
        example: 72.5,
        type: Number,
    }),
    __metadata("design:type", Number)
], GetEmpresasAccionesDto.prototype, "conAcciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de empresas que no tienen ningun ods registrado',
        example: 27.5,
        type: Number,
    }),
    __metadata("design:type", Number)
], GetEmpresasAccionesDto.prototype, "sinAcciones", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-empresas-anio.dto.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-empresas-anio.dto.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasAnio = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class EmpresasAnio {
    anio;
    total;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresasAnio.prototype, "anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total de empresas',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresasAnio.prototype, "total", void 0);
class GetEmpresasAnio {
    empresasAnio;
}
exports.GetEmpresasAnio = GetEmpresasAnio;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de empresas de cada anio',
        type: [EmpresasAnio]
    }),
    __metadata("design:type", Array)
], GetEmpresasAnio.prototype, "empresasAnio", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-empresas-departamento.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-empresas-departamento.dto.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasDepartamentosResponseDto = exports.GetEmpresaDepartementoDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class GetEmpresaDepartementoDto {
    idDepartamento;
    nombreDepartamento;
    cantidadEmpresas;
}
exports.GetEmpresaDepartementoDto = GetEmpresaDepartementoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: "Identificador único del departamento.",
        type: Number,
    }),
    __metadata("design:type", Number)
], GetEmpresaDepartementoDto.prototype, "idDepartamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "La Paz",
        description: "Nombre del departamento.",
        type: String,
    }),
    __metadata("design:type", String)
], GetEmpresaDepartementoDto.prototype, "nombreDepartamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: "Cantidad total de empresas que tienen sede central en este departamento.",
        type: Number,
    }),
    __metadata("design:type", Number)
], GetEmpresaDepartementoDto.prototype, "cantidadEmpresas", void 0);
class GetEmpresasDepartamentosResponseDto {
    departamentos;
}
exports.GetEmpresasDepartamentosResponseDto = GetEmpresasDepartamentosResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Conteos de empresas por departamentos',
        type: [GetEmpresaDepartementoDto]
    }),
    __metadata("design:type", Array)
], GetEmpresasDepartamentosResponseDto.prototype, "departamentos", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-empresas-tamanios.dto.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-empresas-tamanios.dto.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetEmpresasTamaniosDto = exports.EmpresaTamanioDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class EmpresaTamanioDto {
    idTamanio;
    nombreTamanio;
    total;
    porcentaje;
}
exports.EmpresaTamanioDto = EmpresaTamanioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del tamanio de empresa',
        type: Number,
    }),
    __metadata("design:type", Number)
], EmpresaTamanioDto.prototype, "idTamanio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del tamanio de empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaTamanioDto.prototype, "nombreTamanio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total de empresas relacionadas a este tamanio',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresaTamanioDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje'
    }),
    __metadata("design:type", Number)
], EmpresaTamanioDto.prototype, "porcentaje", void 0);
class GetEmpresasTamaniosDto {
    tamanios;
}
exports.GetEmpresasTamaniosDto = GetEmpresasTamaniosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de tamanios con datos estadisticos',
        type: [EmpresaTamanioDto]
    }),
    __metadata("design:type", Array)
], GetEmpresasTamaniosDto.prototype, "tamanios", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-porcentajes-rubro.dto.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-porcentajes-rubro.dto.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPorcentajesRubroDto = exports.PorcentajeRubro = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PorcentajeRubro {
    idRubro;
    nombreRubro;
    totalEmpresas;
    porcentaje;
}
exports.PorcentajeRubro = PorcentajeRubro;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID único del rubro',
    }),
    __metadata("design:type", Number)
], PorcentajeRubro.prototype, "idRubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Comercio',
        description: 'Nombre del rubro',
    }),
    __metadata("design:type", String)
], PorcentajeRubro.prototype, "nombreRubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'Cantidad total de empresas que pertenecen a este rubro',
    }),
    __metadata("design:type", Number)
], PorcentajeRubro.prototype, "totalEmpresas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 12.5,
        description: 'Porcentaje de empresas que pertenecen a este rubro respecto al total',
    }),
    __metadata("design:type", Number)
], PorcentajeRubro.prototype, "porcentaje", void 0);
class GetPorcentajesRubroDto {
    rubros;
}
exports.GetPorcentajesRubroDto = GetPorcentajesRubroDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [PorcentajeRubro],
        description: 'Lista de rubros con sus estadísticas de participación',
    }),
    __metadata("design:type", Array)
], GetPorcentajesRubroDto.prototype, "rubros", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-promedio-antiguedad.dto.ts":
/*!************************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-promedio-antiguedad.dto.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPromedioAntiguedadDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class GetPromedioAntiguedadDto {
    promedio;
}
exports.GetPromedioAntiguedadDto = GetPromedioAntiguedadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Premdio de antiguedad',
        type: Number
    }),
    __metadata("design:type", Number)
], GetPromedioAntiguedadDto.prototype, "promedio", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-promedio-sedes.dto.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-promedio-sedes.dto.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPromedioSedesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class GetPromedioSedesDto {
    promedio;
}
exports.GetPromedioSedesDto = GetPromedioSedesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Promedio',
        type: Number
    }),
    __metadata("design:type", Number)
], GetPromedioSedesDto.prototype, "promedio", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/api-response/get-total-hitos-anio.dto.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/services/dashboard/dto/api-response/get-total-hitos-anio.dto.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTotalHitosAnio = exports.TotalHitosAnio = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class TotalHitosAnio {
    anio;
    total;
}
exports.TotalHitosAnio = TotalHitosAnio;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio de los hitos',
        type: Number
    }),
    __metadata("design:type", Number)
], TotalHitosAnio.prototype, "anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total de hitos en el anio',
        type: Number
    }),
    __metadata("design:type", Number)
], TotalHitosAnio.prototype, "total", void 0);
class GetTotalHitosAnio {
    hitos;
}
exports.GetTotalHitosAnio = GetTotalHitosAnio;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de anio con total de hitos',
        type: [TotalHitosAnio]
    }),
    __metadata("design:type", Array)
], GetTotalHitosAnio.prototype, "hitos", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/dto/get-statistics-params.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/dashboard/dto/get-statistics-params.dto.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetStatisticsParamsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class GetStatisticsParamsDto {
    familiar = false;
}
exports.GetStatisticsParamsDto = GetStatisticsParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Indica si solo se consideran empresas con al menos una familia registrada',
        type: Boolean,
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], GetStatisticsParamsDto.prototype, "familiar", void 0);


/***/ }),

/***/ "./src/app/services/dashboard/services/dashboard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/dashboard/services/dashboard.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_statistics_service_1 = __webpack_require__(/*! src/modules/empresas/services/empresas-statistics.service */ "./src/modules/empresas/services/empresas-statistics.service.ts");
const rubros_statistics_service_1 = __webpack_require__(/*! src/modules/empresas/modules/rubros/services/rubros-statistics.service */ "./src/modules/empresas/modules/rubros/services/rubros-statistics.service.ts");
const departamentos_statistics_service_1 = __webpack_require__(/*! src/modules/empresas/modules/departamentos/services/departamentos-statistics.service */ "./src/modules/empresas/modules/departamentos/services/departamentos-statistics.service.ts");
const hitos_statistic_service_1 = __webpack_require__(/*! src/modules/empresas/modules/hitos/services/hitos-statistic.service */ "./src/modules/empresas/modules/hitos/services/hitos-statistic.service.ts");
let DashboardService = class DashboardService {
    empresasStatisticsService;
    rubrosStatisticsService;
    departamentosStatisticsService;
    hitosStatisticService;
    constructor(empresasStatisticsService, rubrosStatisticsService, departamentosStatisticsService, hitosStatisticService) {
        this.empresasStatisticsService = empresasStatisticsService;
        this.rubrosStatisticsService = rubrosStatisticsService;
        this.departamentosStatisticsService = departamentosStatisticsService;
        this.hitosStatisticService = hitosStatisticService;
    }
    async getAverageAntiguedad(params) {
        const avg = await this.empresasStatisticsService.getAverageAntiguedad(params);
        return avg;
    }
    async getEmpresasPorAnio(params) {
        const data = await this.empresasStatisticsService.getEmpresasPorAnio(params);
        return data;
    }
    async getEmpresasPorTamanio(params) {
        const data = await this.empresasStatisticsService.getEmpresasPorTamanio(params);
        return data;
    }
    async getPorcentajesRubros(params) {
        const data = await this.rubrosStatisticsService.getPorcentajesRubro(params);
        return data;
    }
    async getPromedioSedes(params) {
        const data = await this.empresasStatisticsService.getPromedioSedes(params);
        return data;
    }
    async getEmpresasAcciones(params) {
        const data = await this.empresasStatisticsService.getEmpresasAcciones(params);
        return data;
    }
    async getEmpresasPorDepartamentos() {
        const data = await this.departamentosStatisticsService.cedePrincipalPorDepatamento();
        return data;
    }
    async obtenerTotalHitosAnio() {
        const data = await this.hitosStatisticService.obtenerTotalesPorAnio();
        return data;
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof empresas_statistics_service_1.EmpresasStatisticsService !== "undefined" && empresas_statistics_service_1.EmpresasStatisticsService) === "function" ? _a : Object, typeof (_b = typeof rubros_statistics_service_1.RubrosStatisticsService !== "undefined" && rubros_statistics_service_1.RubrosStatisticsService) === "function" ? _b : Object, typeof (_c = typeof departamentos_statistics_service_1.DepartamentosStatisticsService !== "undefined" && departamentos_statistics_service_1.DepartamentosStatisticsService) === "function" ? _c : Object, typeof (_d = typeof hitos_statistic_service_1.HitosStatisticService !== "undefined" && hitos_statistic_service_1.HitosStatisticService) === "function" ? _d : Object])
], DashboardService);


/***/ }),

/***/ "./src/app/services/formulario/api/formulario.controller.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/formulario/api/formulario.controller.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularioController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_roles_guard_1 = __webpack_require__(/*! src/app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const formulario_service_1 = __webpack_require__(/*! ../services/formulario.service */ "./src/app/services/formulario/services/formulario.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
const utils_2 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const register_empresa_dto_1 = __webpack_require__(/*! ../dto/register-empresa.dto */ "./src/app/services/formulario/dto/register-empresa.dto.ts");
let FormularioController = class FormularioController {
    formularioService;
    constructor(formularioService) {
        this.formularioService = formularioService;
    }
    async registerEmpresa(data, res) {
        const response = await this.formularioService.registerEmpresa(data);
        return (0, utils_1.CreatedRes)(res, {
            message: 'Se registro la empresa exitosamente'
        });
    }
};
exports.FormularioController = FormularioController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_EMPRESAS])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para registrar la empresa mediante el formulario'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Respuesta en caso de registrar la empresa exitosamente',
        type: common_response_dto_1.CommonResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_2.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_2.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof register_empresa_dto_1.RegisterEmpresaDto !== "undefined" && register_empresa_dto_1.RegisterEmpresaDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "registerEmpresa", null);
exports.FormularioController = FormularioController = __decorate([
    (0, swagger_1.ApiTags)('Formulario'),
    (0, common_1.Controller)('api/formulario'),
    __metadata("design:paramtypes", [typeof (_a = typeof formulario_service_1.FormularioService !== "undefined" && formulario_service_1.FormularioService) === "function" ? _a : Object])
], FormularioController);


/***/ }),

/***/ "./src/app/services/formulario/dto/implementacion/register-acciones.dto.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/services/formulario/dto/implementacion/register-acciones.dto.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterAccion = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterAccion {
    id;
    proyectos;
}
exports.RegisterAccion = RegisterAccion;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la accion seleccionada',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterAccion.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Proyecto involucrados con la accion',
        type: [String],
        example: ['proy1', 'proy2']
    }),
    __metadata("design:type", Array)
], RegisterAccion.prototype, "proyectos", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/implementacion/register-implementacion.dto.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/formulario/dto/implementacion/register-implementacion.dto.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterImplementacionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const register_acciones_dto_1 = __webpack_require__(/*! ./register-acciones.dto */ "./src/app/services/formulario/dto/implementacion/register-acciones.dto.ts");
class RegisterImplementacionDto {
    tiposAccion;
    anio;
    acciones;
}
exports.RegisterImplementacionDto = RegisterImplementacionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de accion seleccionados,max 2',
        type: [Number],
        example: [1, 2]
    }),
    __metadata("design:type", Array)
], RegisterImplementacionDto.prototype, "tiposAccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio de implementacion de estas acciones',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterImplementacionDto.prototype, "anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Acciones realizadas',
        type: [register_acciones_dto_1.RegisterAccion]
    }),
    __metadata("design:type", Array)
], RegisterImplementacionDto.prototype, "acciones", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/register-empresa.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/formulario/dto/register-empresa.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterEmpresaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const register_rubros_dto_1 = __webpack_require__(/*! ./rubros/register-rubros.dto */ "./src/app/services/formulario/dto/rubros/register-rubros.dto.ts");
const register_tipos_societarios_dto_1 = __webpack_require__(/*! ./tipos-societarios/register-tipos-societarios.dto */ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios.dto.ts");
const register_familia_dto_1 = __webpack_require__(/*! ./register-familia.dto */ "./src/app/services/formulario/dto/register-familia.dto.ts");
const register_sede_dto_1 = __webpack_require__(/*! ./register-sede.dto */ "./src/app/services/formulario/dto/register-sede.dto.ts");
const register_reconocimiento_dto_1 = __webpack_require__(/*! ./register-reconocimiento.dto */ "./src/app/services/formulario/dto/register-reconocimiento.dto.ts");
const register_implementacion_dto_1 = __webpack_require__(/*! ./implementacion/register-implementacion.dto */ "./src/app/services/formulario/dto/implementacion/register-implementacion.dto.ts");
const register_hito_dto_1 = __webpack_require__(/*! ./register-hito.dto */ "./src/app/services/formulario/dto/register-hito.dto.ts");
class RegisterEmpresaDto {
    nombre;
    rubros;
    actividad;
    items;
    servicios;
    direccionWeb;
    fechaFundacion;
    fundadores;
    tiposSocietarios;
    tamanioEmpresa;
    mision;
    vision;
    familia;
    sedes;
    municipios;
    paisesOperaInternacionalmente;
    reconocimientos;
    imagenes;
    mensajeConmemorativo;
    implementacion;
    hitos;
}
exports.RegisterEmpresaDto = RegisterEmpresaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Registro de rubro para la empresa',
        type: register_rubros_dto_1.RegisterRubrosDto
    }),
    __metadata("design:type", typeof (_a = typeof register_rubros_dto_1.RegisterRubrosDto !== "undefined" && register_rubros_dto_1.RegisterRubrosDto) === "function" ? _a : Object)
], RegisterEmpresaDto.prototype, "rubros", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Actividad principal detallada de la empresa',
        type: String,
        nullable: false
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "actividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Items que ofrece le empresa',
        type: [String]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Servicio que la empresa ofrese',
        type: [String],
        isArray: true,
        example: ['servicio1', 'servicio2']
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "servicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Direccion web de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "direccionWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fundacion de la empresa',
        type: String,
        example: '2000-01-01'
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "fechaFundacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fundadores de la empresa',
        type: [String],
        isArray: true,
        example: ['Jaime', 'Octavio', 'Sergio']
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "fundadores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipos societarios de la empresa',
        type: register_tipos_societarios_dto_1.RegisterTiposSocietariosDto
    }),
    __metadata("design:type", typeof (_b = typeof register_tipos_societarios_dto_1.RegisterTiposSocietariosDto !== "undefined" && register_tipos_societarios_dto_1.RegisterTiposSocietariosDto) === "function" ? _b : Object)
], RegisterEmpresaDto.prototype, "tiposSocietarios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del el tamanio de la empresa seleccionada',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterEmpresaDto.prototype, "tamanioEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mision de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "mision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Vision de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "vision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pregunta 15.1 y 15.2',
        type: register_familia_dto_1.RegisterFamiliaDto
    }),
    __metadata("design:type", typeof (_c = typeof register_familia_dto_1.RegisterFamiliaDto !== "undefined" && register_familia_dto_1.RegisterFamiliaDto) === "function" ? _c : Object)
], RegisterEmpresaDto.prototype, "familia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sedes en la que la empresa opera',
        type: [register_sede_dto_1.RegisterSedeDto]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "sedes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de municipio donde las sedes se encuentran, filtrar por departamentos elejidos',
        type: [Number],
        example: [1, 2, 3]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "municipios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ids de paises en los que la empresa opera internacionamente',
        type: [Number],
        example: [1, 2, 3]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "paisesOperaInternacionalmente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Reconocimientos de la empresa',
        type: [register_reconocimiento_dto_1.RegisterReconocimientoDto]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "reconocimientos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Urls de imagenes que tiene la empresa',
        type: [String]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "imagenes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensaje conmemorativo de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], RegisterEmpresaDto.prototype, "mensajeConmemorativo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Esta seccion encapsula las ultimas 3 preguntas, sin contar la de hitos',
        type: register_implementacion_dto_1.RegisterImplementacionDto
    }),
    __metadata("design:type", typeof (_d = typeof register_implementacion_dto_1.RegisterImplementacionDto !== "undefined" && register_implementacion_dto_1.RegisterImplementacionDto) === "function" ? _d : Object)
], RegisterEmpresaDto.prototype, "implementacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hitos de la empresa',
        type: [register_hito_dto_1.RegisterHitoDto]
    }),
    __metadata("design:type", Array)
], RegisterEmpresaDto.prototype, "hitos", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/register-familia.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/formulario/dto/register-familia.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterFamiliaDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterFamiliaDto {
    esFamiliar;
    anioDejo;
}
exports.RegisterFamiliaDto = RegisterFamiliaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Registra si la empresa es familiar, true = si,false = no',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RegisterFamiliaDto.prototype, "esFamiliar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio que la familia dejo de ser familiar',
        type: Number,
        nullable: true
    }),
    __metadata("design:type", Number)
], RegisterFamiliaDto.prototype, "anioDejo", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/register-hito.dto.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/formulario/dto/register-hito.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterHitoDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterHitoDto {
    nombre;
    descripcion;
    fecha;
}
exports.RegisterHitoDto = RegisterHitoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'nombre del hito',
        type: String
    }),
    __metadata("design:type", String)
], RegisterHitoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'descripcion del hito',
        type: String
    }),
    __metadata("design:type", String)
], RegisterHitoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha del hito',
        type: String,
        example: '2001-01-01'
    }),
    __metadata("design:type", String)
], RegisterHitoDto.prototype, "fecha", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/register-reconocimiento.dto.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/formulario/dto/register-reconocimiento.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterReconocimientoDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterReconocimientoDto {
    nombre;
    esPremio;
    esNacional;
    anio;
}
exports.RegisterReconocimientoDto = RegisterReconocimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'nombre del reconocimiento',
        type: String
    }),
    __metadata("design:type", String)
], RegisterReconocimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'identificados si el reconocimiento es un premio o una distincion',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RegisterReconocimientoDto.prototype, "esPremio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'identificados si el reconocimiento nacional o internacional',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RegisterReconocimientoDto.prototype, "esNacional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio en que obtuvo el premio',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterReconocimientoDto.prototype, "anio", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/register-sede.dto.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/formulario/dto/register-sede.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterSedeDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterSedeDto {
    idDepartamento;
    esCentral;
}
exports.RegisterSedeDto = RegisterSedeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del departamento donde se encuentra la la sede',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterSedeDto.prototype, "idDepartamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Si la sede es la central de la empresa, sol puede haber una sede central por empresa',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RegisterSedeDto.prototype, "esCentral", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/rubros/register-rubro-data.dto.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/formulario/dto/rubros/register-rubro-data.dto.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterRubroDataDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterRubroDataDto {
    idRubro;
    esActivo;
}
exports.RegisterRubroDataDto = RegisterRubroDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rubor seleccionado',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterRubroDataDto.prototype, "idRubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo del rubro,true = valor default,false = anterior',
        type: Boolean,
        default: true
    }),
    __metadata("design:type", Boolean)
], RegisterRubroDataDto.prototype, "esActivo", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/rubros/register-rubro-otro.dto.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/formulario/dto/rubros/register-rubro-otro.dto.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterRubroOtroDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterRubroOtroDto {
    nombre;
    esActivo;
}
exports.RegisterRubroOtroDto = RegisterRubroOtroDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del rubro otro ingresado',
        type: String
    }),
    __metadata("design:type", String)
], RegisterRubroOtroDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo del rubro,true = valor default,false = anterior',
        type: Boolean,
        default: true
    }),
    __metadata("design:type", Boolean)
], RegisterRubroOtroDto.prototype, "esActivo", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/rubros/register-rubros.dto.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/formulario/dto/rubros/register-rubros.dto.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterRubrosDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const register_rubro_data_dto_1 = __webpack_require__(/*! ./register-rubro-data.dto */ "./src/app/services/formulario/dto/rubros/register-rubro-data.dto.ts");
const register_rubro_otro_dto_1 = __webpack_require__(/*! ./register-rubro-otro.dto */ "./src/app/services/formulario/dto/rubros/register-rubro-otro.dto.ts");
class RegisterRubrosDto {
    data;
    otros;
}
exports.RegisterRubrosDto = RegisterRubrosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rubros de la lista de seleccion, maximo 2',
        type: register_rubro_data_dto_1.RegisterRubroDataDto,
        nullable: true,
        isArray: true
    }),
    __metadata("design:type", Array)
], RegisterRubrosDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rubros otros personales de empresa, maximo 2',
        type: register_rubro_otro_dto_1.RegisterRubroOtroDto,
        nullable: true,
        isArray: true
    }),
    __metadata("design:type", Array)
], RegisterRubrosDto.prototype, "otros", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-data.dto.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-data.dto.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterTiposSocietariosDataDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterTiposSocietariosDataDto {
    idTipoSocietario;
    esActivo;
    fechaCambio;
}
exports.RegisterTiposSocietariosDataDto = RegisterTiposSocietariosDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del tipo societario seleccionado',
        type: Number
    }),
    __metadata("design:type", Number)
], RegisterTiposSocietariosDataDto.prototype, "idTipoSocietario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de respuesta: true = default, false = si cambio antes',
        type: Boolean,
        default: true
    }),
    __metadata("design:type", Boolean)
], RegisterTiposSocietariosDataDto.prototype, "esActivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha que se cambio, solo si esActivo es false',
        type: String,
        nullable: true,
        example: '2000-01-01'
    }),
    __metadata("design:type", String)
], RegisterTiposSocietariosDataDto.prototype, "fechaCambio", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-otros.dto.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-otros.dto.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterTiposSocietariosOtrosDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterTiposSocietariosOtrosDto {
    nombre;
    esActivo;
    fechaCambio;
}
exports.RegisterTiposSocietariosOtrosDto = RegisterTiposSocietariosOtrosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del tipo societario ingresado',
        type: String
    }),
    __metadata("design:type", String)
], RegisterTiposSocietariosOtrosDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de respuesta: true = default, false = si cambio antes',
        type: Boolean,
        default: true
    }),
    __metadata("design:type", Boolean)
], RegisterTiposSocietariosOtrosDto.prototype, "esActivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha que se cambio, solo si esActivo es false',
        type: String,
        nullable: true,
        example: '2000-01-01'
    }),
    __metadata("design:type", String)
], RegisterTiposSocietariosOtrosDto.prototype, "fechaCambio", void 0);


/***/ }),

/***/ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios.dto.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios.dto.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterTiposSocietariosDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const register_tipos_societarios_data_dto_1 = __webpack_require__(/*! ./register-tipos-societarios-data.dto */ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-data.dto.ts");
const register_tipos_societarios_otros_dto_1 = __webpack_require__(/*! ./register-tipos-societarios-otros.dto */ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios-otros.dto.ts");
class RegisterTiposSocietariosDto {
    data;
    otros;
}
exports.RegisterTiposSocietariosDto = RegisterTiposSocietariosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipos societarios seleccionados',
        type: [register_tipos_societarios_data_dto_1.RegisterTiposSocietariosDataDto],
    }),
    __metadata("design:type", Array)
], RegisterTiposSocietariosDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TIpos societario ingresados como otros',
        type: [register_tipos_societarios_otros_dto_1.RegisterTiposSocietariosOtrosDto]
    }),
    __metadata("design:type", Array)
], RegisterTiposSocietariosDto.prototype, "otros", void 0);


/***/ }),

/***/ "./src/app/services/formulario/formulario.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/formulario/formulario.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularioModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const formulario_service_1 = __webpack_require__(/*! ./services/formulario.service */ "./src/app/services/formulario/services/formulario.service.ts");
const formulario_controller_1 = __webpack_require__(/*! ./api/formulario.controller */ "./src/app/services/formulario/api/formulario.controller.ts");
const tamanios_empresas_module_1 = __webpack_require__(/*! src/modules/empresas/modules/tamanios-empresas/tamanios-empresas.module */ "./src/modules/empresas/modules/tamanios-empresas/tamanios-empresas.module.ts");
const fundadores_module_1 = __webpack_require__(/*! src/modules/empresas/modules/fundadores/fundadores.module */ "./src/modules/empresas/modules/fundadores/fundadores.module.ts");
const empresas_module_1 = __webpack_require__(/*! src/modules/empresas/empresas.module */ "./src/modules/empresas/empresas.module.ts");
const imagenes_module_1 = __webpack_require__(/*! src/modules/empresas/modules/imagenes/imagenes.module */ "./src/modules/empresas/modules/imagenes/imagenes.module.ts");
const servicios_module_1 = __webpack_require__(/*! src/modules/empresas/modules/servicios/servicios.module */ "./src/modules/empresas/modules/servicios/servicios.module.ts");
const familias_module_1 = __webpack_require__(/*! src/modules/empresas/modules/familias/familias.module */ "./src/modules/empresas/modules/familias/familias.module.ts");
const rubros_empresas_module_1 = __webpack_require__(/*! src/modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module.ts");
const items_module_1 = __webpack_require__(/*! src/modules/empresas/modules/items/items.module */ "./src/modules/empresas/modules/items/items.module.ts");
const empresas_tipos_societarios_module_1 = __webpack_require__(/*! src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module.ts");
const sedes_module_1 = __webpack_require__(/*! src/modules/empresas/modules/sedes/sedes.module */ "./src/modules/empresas/modules/sedes/sedes.module.ts");
const municipios_empresa_module_1 = __webpack_require__(/*! src/modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module.ts");
const operaciones_internacionales_module_1 = __webpack_require__(/*! src/modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module */ "./src/modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module.ts");
const premios_module_1 = __webpack_require__(/*! src/modules/empresas/modules/premios/premios.module */ "./src/modules/empresas/modules/premios/premios.module.ts");
const implementaciones_module_1 = __webpack_require__(/*! src/modules/empresas/modules/implementaciones/implementaciones.module */ "./src/modules/empresas/modules/implementaciones/implementaciones.module.ts");
const hitos_module_1 = __webpack_require__(/*! src/modules/empresas/modules/hitos/hitos.module */ "./src/modules/empresas/modules/hitos/hitos.module.ts");
let FormularioModule = class FormularioModule {
};
exports.FormularioModule = FormularioModule;
exports.FormularioModule = FormularioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tamanios_empresas_module_1.TamaniosEmpresasModule,
            fundadores_module_1.FundadoresModule,
            empresas_module_1.EmpresasModule,
            imagenes_module_1.ImagenesModule,
            servicios_module_1.ServiciosModule,
            familias_module_1.FamiliasModule,
            rubros_empresas_module_1.RubrosEmpresasModule,
            items_module_1.ItemsModule,
            empresas_tipos_societarios_module_1.EmpresasTiposSocietariosModule,
            sedes_module_1.SedesModule,
            municipios_empresa_module_1.MunicipiosEmpresaModule,
            operaciones_internacionales_module_1.OperacionesInternacionalesModule,
            premios_module_1.PremiosModule,
            implementaciones_module_1.ImplementacionesModule,
            hitos_module_1.HitosModule,
        ],
        providers: [formulario_service_1.FormularioService],
        controllers: [formulario_controller_1.FormularioController]
    })
], FormularioModule);


/***/ }),

/***/ "./src/app/services/formulario/services/formulario.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/formulario/services/formulario.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormularioService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tamanios_empresas_service_1 = __webpack_require__(/*! src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service */ "./src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresas_service_1 = __webpack_require__(/*! src/modules/empresas/services/empresas.service */ "./src/modules/empresas/services/empresas.service.ts");
const fundadores_service_1 = __webpack_require__(/*! src/modules/empresas/modules/fundadores/services/fundadores.service */ "./src/modules/empresas/modules/fundadores/services/fundadores.service.ts");
const imagenes_service_1 = __webpack_require__(/*! src/modules/empresas/modules/imagenes/services/imagenes.service */ "./src/modules/empresas/modules/imagenes/services/imagenes.service.ts");
const servicios_service_1 = __webpack_require__(/*! src/modules/empresas/modules/servicios/services/servicios.service */ "./src/modules/empresas/modules/servicios/services/servicios.service.ts");
const familias_service_1 = __webpack_require__(/*! src/modules/empresas/modules/familias/services/familias.service */ "./src/modules/empresas/modules/familias/services/familias.service.ts");
const rubros_empresas_service_1 = __webpack_require__(/*! src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service.ts");
const items_service_1 = __webpack_require__(/*! src/modules/empresas/modules/items/services/items.service */ "./src/modules/empresas/modules/items/services/items.service.ts");
const empresas_tipos_societarios_service_1 = __webpack_require__(/*! src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service.ts");
const sedes_service_1 = __webpack_require__(/*! src/modules/empresas/modules/sedes/services/sedes.service */ "./src/modules/empresas/modules/sedes/services/sedes.service.ts");
const municipios_empresa_service_1 = __webpack_require__(/*! src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service.ts");
const operaciones_internacionales_service_1 = __webpack_require__(/*! src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service */ "./src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service.ts");
const premios_service_1 = __webpack_require__(/*! src/modules/empresas/modules/premios/services/premios.service */ "./src/modules/empresas/modules/premios/services/premios.service.ts");
const implementaciones_service_1 = __webpack_require__(/*! src/modules/empresas/modules/implementaciones/services/implementaciones.service */ "./src/modules/empresas/modules/implementaciones/services/implementaciones.service.ts");
const hitos_service_1 = __webpack_require__(/*! src/modules/empresas/modules/hitos/services/hitos.service */ "./src/modules/empresas/modules/hitos/services/hitos.service.ts");
let FormularioService = class FormularioService {
    dataSource;
    tamaniosEmpresasService;
    empresasService;
    fundadoresService;
    imagenesService;
    serviciosService;
    familiasService;
    rubrosEmpresasService;
    itemsService;
    empresasTiposSocietariosService;
    sedesService;
    municipiosEmpresasService;
    operacionesInternacionalesService;
    premiosService;
    implementacionesService;
    hitosService;
    constructor(dataSource, tamaniosEmpresasService, empresasService, fundadoresService, imagenesService, serviciosService, familiasService, rubrosEmpresasService, itemsService, empresasTiposSocietariosService, sedesService, municipiosEmpresasService, operacionesInternacionalesService, premiosService, implementacionesService, hitosService) {
        this.dataSource = dataSource;
        this.tamaniosEmpresasService = tamaniosEmpresasService;
        this.empresasService = empresasService;
        this.fundadoresService = fundadoresService;
        this.imagenesService = imagenesService;
        this.serviciosService = serviciosService;
        this.familiasService = familiasService;
        this.rubrosEmpresasService = rubrosEmpresasService;
        this.itemsService = itemsService;
        this.empresasTiposSocietariosService = empresasTiposSocietariosService;
        this.sedesService = sedesService;
        this.municipiosEmpresasService = municipiosEmpresasService;
        this.operacionesInternacionalesService = operacionesInternacionalesService;
        this.premiosService = premiosService;
        this.implementacionesService = implementacionesService;
        this.hitosService = hitosService;
    }
    async registerEmpresa(data) {
        return this.dataSource.transaction(async (manager) => {
            const tamanioEmpresa = await this.tamaniosEmpresasService.findOne(data.tamanioEmpresa);
            const empresa = await this.empresasService.createTransaction(manager, data);
            const fundadores = await this.fundadoresService.createTransaction(manager, {
                idEmpresa: empresa.id,
                fundadores: data.fundadores
            });
            const imagenes = await this.imagenesService.createTransaction(manager, {
                idEmpresa: empresa.id,
                imagenes: data.imagenes
            });
            const servicios = await this.serviciosService.createTransaction(manager, {
                idEmpresa: empresa.id,
                servicio: data.servicios
            });
            const familia = await this.familiasService.createTransaction(manager, {
                idEmpresa: empresa.id,
                esFamiliar: data.familia.esFamiliar,
                anio: data.familia.anioDejo
            });
            const rubros = await this.rubrosEmpresasService.createTransaction(manager, {
                idEmpresa: empresa.id,
                ...data.rubros
            });
            const items = await this.itemsService.createTransaction(manager, {
                idEmpresa: empresa.id,
                items: data.items
            });
            const tiposSocietarios = await this.empresasTiposSocietariosService.createTransaction(manager, {
                idEmpresa: empresa.id,
                ...data.tiposSocietarios
            });
            const sedes = await this.sedesService.createTransaction(manager, {
                idEmpresa: empresa.id,
                sedes: data.sedes
            });
            const municipios = await this.municipiosEmpresasService.createTransaction(manager, {
                idEmpresa: empresa.id,
                municipios: data.municipios
            });
            const paisesOperaInternacionales = await this.operacionesInternacionalesService.createTransaction(manager, {
                idEmpresa: empresa.id,
                paisesOperaInternacionalmente: data.paisesOperaInternacionalmente
            });
            const reconocmienientos = await this.premiosService.createTransaction(manager, {
                idEmpresa: empresa.id,
                reconocimientos: data.reconocimientos
            });
            const implementacion = await this.implementacionesService.createTransaction(manager, {
                idEmpresa: empresa.id,
                ...data.implementacion
            });
            const hitos = await this.hitosService.createTransaction(manager, {
                idEmpresa: empresa.id,
                hitos: data.hitos
            });
            return empresa;
        });
    }
};
exports.FormularioService = FormularioService;
exports.FormularioService = FormularioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object, typeof (_b = typeof tamanios_empresas_service_1.TamaniosEmpresasService !== "undefined" && tamanios_empresas_service_1.TamaniosEmpresasService) === "function" ? _b : Object, typeof (_c = typeof empresas_service_1.EmpresasService !== "undefined" && empresas_service_1.EmpresasService) === "function" ? _c : Object, typeof (_d = typeof fundadores_service_1.FundadoresService !== "undefined" && fundadores_service_1.FundadoresService) === "function" ? _d : Object, typeof (_e = typeof imagenes_service_1.ImagenesService !== "undefined" && imagenes_service_1.ImagenesService) === "function" ? _e : Object, typeof (_f = typeof servicios_service_1.ServiciosService !== "undefined" && servicios_service_1.ServiciosService) === "function" ? _f : Object, typeof (_g = typeof familias_service_1.FamiliasService !== "undefined" && familias_service_1.FamiliasService) === "function" ? _g : Object, typeof (_h = typeof rubros_empresas_service_1.RubrosEmpresasService !== "undefined" && rubros_empresas_service_1.RubrosEmpresasService) === "function" ? _h : Object, typeof (_j = typeof items_service_1.ItemsService !== "undefined" && items_service_1.ItemsService) === "function" ? _j : Object, typeof (_k = typeof empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService !== "undefined" && empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService) === "function" ? _k : Object, typeof (_l = typeof sedes_service_1.SedesService !== "undefined" && sedes_service_1.SedesService) === "function" ? _l : Object, typeof (_m = typeof municipios_empresa_service_1.MunicipiosEmpresaService !== "undefined" && municipios_empresa_service_1.MunicipiosEmpresaService) === "function" ? _m : Object, typeof (_o = typeof operaciones_internacionales_service_1.OperacionesInternacionalesService !== "undefined" && operaciones_internacionales_service_1.OperacionesInternacionalesService) === "function" ? _o : Object, typeof (_p = typeof premios_service_1.PremiosService !== "undefined" && premios_service_1.PremiosService) === "function" ? _p : Object, typeof (_q = typeof implementaciones_service_1.ImplementacionesService !== "undefined" && implementaciones_service_1.ImplementacionesService) === "function" ? _q : Object, typeof (_r = typeof hitos_service_1.HitosService !== "undefined" && hitos_service_1.HitosService) === "function" ? _r : Object])
], FormularioService);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/api/solicitudes-temporales.controller.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/api/solicitudes-temporales.controller.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolicitudesTemporalesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_roles_guard_1 = __webpack_require__(/*! src/app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const solicitudes_temporales_service_1 = __webpack_require__(/*! ../services/solicitudes-temporales.service */ "./src/app/services/solicitudes-temporales/services/solicitudes-temporales.service.ts");
const create_solicitud_temporal_dto_1 = __webpack_require__(/*! ../dto/create-solicitud-temporal.dto */ "./src/app/services/solicitudes-temporales/dto/create-solicitud-temporal.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
const swagger_response_utils_1 = __webpack_require__(/*! src/common/utils/swagger/swagger-response.utils */ "./src/common/utils/swagger/swagger-response.utils.ts");
const find_all_solicitudes_params_dto_1 = __webpack_require__(/*! ../dto/find-all-solicitudes-params.dto */ "./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-params.dto.ts");
const find_all_solicitudes_response_dto_1 = __webpack_require__(/*! ../dto/find-all-solicitudes-response.dto */ "./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-response.dto.ts");
const rechzar_solicitud_dto_1 = __webpack_require__(/*! ../dto/rechzar-solicitud.dto */ "./src/app/services/solicitudes-temporales/dto/rechzar-solicitud.dto.ts");
let SolicitudesTemporalesController = class SolicitudesTemporalesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto, res) {
        const created = await this.service.create(dto);
        return (0, utils_1.CreatedRes)(res, {
            message: 'La solicitud temporal fue registrada',
        });
    }
    async findAll(params, res) {
        const solicitudes = await this.service.findAll(params);
        return (0, utils_1.OkRes)(res, {
            solicitudes: solicitudes
        });
    }
    async findOne(id, res) {
        const item = await this.service.findOne(id);
        return (0, utils_1.OkRes)(res, {
            solicitud: item
        });
    }
    async aprobarSolicitud(idSolicitud, res) {
        const response = await this.service.aprobarSolicitud(idSolicitud);
        return (0, utils_1.OkRes)(res, {
            message: 'Solicitud aprobada'
        });
    }
    async rechazarSolicitud(idSolicitud, data, res) {
        const response = await this.service.rechazarSolicitud(idSolicitud, data.motivo);
        return (0, utils_1.OkRes)(res, {
            message: 'La solicitud fue rechazada'
        });
    }
};
exports.SolicitudesTemporalesController = SolicitudesTemporalesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear una solicitud temporal (correo, justificación y fechaUso obligatorios; esAprobado opcional)',
        description: 'Crea un registro en la tabla solicitudes_temporales. El campo fecha (CreateDateColumn) se genera automáticamente.',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Solicitud creada correctamente',
        type: common_response_dto_1.CommonResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_solicitud_temporal_dto_1.CreateSolicitudTemporalDto !== "undefined" && create_solicitud_temporal_dto_1.CreateSolicitudTemporalDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SolicitudesTemporalesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_RRHH])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para listar todas las solicitudes temporales',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Listado obtenido correctamente',
        type: find_all_solicitudes_response_dto_1.FindAllSolicitudesResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof find_all_solicitudes_params_dto_1.FindAllSolicitudesParamsDto !== "undefined" && find_all_solicitudes_params_dto_1.FindAllSolicitudesParamsDto) === "function" ? _d : Object, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], SolicitudesTemporalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_RRHH])),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener una solicitud temporal por ID',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID de la solicitud temporal' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Solicitud encontrada',
        type: common_response_dto_1.CommonResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], SolicitudesTemporalesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('aprobar/:idSolicitud'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_RRHH])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para aprobar uns solicitud'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de probar exitosamente la solicitud',
        type: common_response_dto_1.CommonResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)((0, swagger_response_utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Param)('idSolicitud')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], SolicitudesTemporalesController.prototype, "aprobarSolicitud", null);
__decorate([
    (0, common_1.Put)('rechazar/:idSolicitud'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_RRHH])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para rechazar solicitud'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de rechazar exitosamente la solicitud',
        type: common_response_dto_1.CommonResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)((0, swagger_response_utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiBadRequestResponse)((0, swagger_response_utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Param)('idSolicitud')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_h = typeof rechzar_solicitud_dto_1.RechazarSolicitudDto !== "undefined" && rechzar_solicitud_dto_1.RechazarSolicitudDto) === "function" ? _h : Object, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], SolicitudesTemporalesController.prototype, "rechazarSolicitud", null);
exports.SolicitudesTemporalesController = SolicitudesTemporalesController = __decorate([
    (0, swagger_1.ApiTags)('Solicitudes Temporales'),
    (0, common_1.Controller)('api/solicitudes-temporales'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    __metadata("design:paramtypes", [typeof (_a = typeof solicitudes_temporales_service_1.SolicitudesTemporalesService !== "undefined" && solicitudes_temporales_service_1.SolicitudesTemporalesService) === "function" ? _a : Object])
], SolicitudesTemporalesController);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/create-solicitud-temporal.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/create-solicitud-temporal.dto.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSolicitudTemporalDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CreateSolicitudTemporalDto {
    correo;
    justificacion;
    fechaUso;
}
exports.CreateSolicitudTemporalDto = CreateSolicitudTemporalDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo del solicitante, debe ser un email válido',
        example: 'usuario@ejemplo.com',
        maxLength: 150,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], CreateSolicitudTemporalDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Justificación de por qué solicita la cuenta temporal',
        example: 'Necesito acceso temporal para realizar una investigación específica.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateSolicitudTemporalDto.prototype, "justificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de uso solicitada (en formato ISO 8601). Se convierte a Date en el service',
        example: '2025-09-23T10:00:00.000Z',
    }),
    (0, class_validator_1.IsISO8601)({ strict: true }),
    __metadata("design:type", String)
], CreateSolicitudTemporalDto.prototype, "fechaUso", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-params.dto.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-params.dto.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllSolicitudesParamsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const pagination_params_dto_1 = __webpack_require__(/*! src/shared/dto/pagination-params.dto */ "./src/shared/dto/pagination-params.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class FindAllSolicitudesParamsDto extends pagination_params_dto_1.PaginationParamsDto {
    esAprobado;
    correo;
    orderFecha = "DESC";
    fechaDesde;
    fechaHasta;
}
exports.FindAllSolicitudesParamsDto = FindAllSolicitudesParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por estado de solicitud. Valores posibles: `true` = Aprobadas, `false` = Rechazadas, si no se envía se devuelven todas.",
        example: true,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_validator_1.IsBoolean)({ message: "El parámetro 'esAprobado' debe ser true o false" }),
    __metadata("design:type", Boolean)
], FindAllSolicitudesParamsDto.prototype, "esAprobado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por correo del solicitante. No es obligatorio, pero si se envía debe ser un correo válido.",
        example: "usuario@ejemplo.com",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: "El parámetro 'correo' debe ser un email válido" }),
    __metadata("design:type", String)
], FindAllSolicitudesParamsDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ordenar resultados por fecha de solicitud (`fecha`). Valores posibles: 'ASC' o 'DESC'.",
        example: "DESC",
        default: "DESC",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(["ASC", "DESC"], {
        message: "El parámetro 'orderFecha' solo puede ser 'ASC' o 'DESC'",
    }),
    __metadata("design:type", String)
], FindAllSolicitudesParamsDto.prototype, "orderFecha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar solicitudes desde esta fecha (incluida). Formato: YYYY-MM-DD.",
        example: "2025-01-01",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], FindAllSolicitudesParamsDto.prototype, "fechaDesde", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar solicitudes hasta esta fecha (incluida). Formato: YYYY-MM-DD.",
        example: "2025-12-31",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], FindAllSolicitudesParamsDto.prototype, "fechaHasta", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-response.dto.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/find-all-solicitudes-response.dto.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllSolicitudesResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const paginated_solicitudes_dto_1 = __webpack_require__(/*! ./paginated-solicitudes.dto */ "./src/app/services/solicitudes-temporales/dto/paginated-solicitudes.dto.ts");
class FindAllSolicitudesResponseDto {
    solicitudes;
}
exports.FindAllSolicitudesResponseDto = FindAllSolicitudesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: paginated_solicitudes_dto_1.PaginatedSolicitudesDto
    }),
    __metadata("design:type", typeof (_a = typeof paginated_solicitudes_dto_1.PaginatedSolicitudesDto !== "undefined" && paginated_solicitudes_dto_1.PaginatedSolicitudesDto) === "function" ? _a : Object)
], FindAllSolicitudesResponseDto.prototype, "solicitudes", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/paginated-solicitudes.dto.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/paginated-solicitudes.dto.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedSolicitudesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const solicitud_temporal_dto_1 = __webpack_require__(/*! ./solicitud-temporal.dto */ "./src/app/services/solicitudes-temporales/dto/solicitud-temporal.dto.ts");
const pagination_response_dto_1 = __webpack_require__(/*! src/shared/dto/pagination-response.dto */ "./src/shared/dto/pagination-response.dto.ts");
class PaginatedSolicitudesDto extends pagination_response_dto_1.PaginationResponseDto {
}
exports.PaginatedSolicitudesDto = PaginatedSolicitudesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: solicitud_temporal_dto_1.SolicitudTemporalDto, isArray: true }),
    __metadata("design:type", Array)
], PaginatedSolicitudesDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/rechzar-solicitud.dto.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/rechzar-solicitud.dto.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RechazarSolicitudDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RechazarSolicitudDto {
    motivo;
}
exports.RechazarSolicitudDto = RechazarSolicitudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Motivo por el cual se rechaza la solicitud',
        type: String
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], RechazarSolicitudDto.prototype, "motivo", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/dto/solicitud-temporal.dto.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/dto/solicitud-temporal.dto.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolicitudTemporalDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class SolicitudTemporalDto {
    id;
    correo;
    justificacion;
    esAprobado;
    fechaUso;
    fecha;
}
exports.SolicitudTemporalDto = SolicitudTemporalDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Identificador único de la solicitud temporal',
    }),
    __metadata("design:type", Number)
], SolicitudTemporalDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'usuario@correo.com',
        description: 'Correo electrónico asociado a la solicitud',
    }),
    __metadata("design:type", String)
], SolicitudTemporalDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Necesito acceso temporal a la oficina para revisión de documentos',
        description: 'Justificación de la solicitud temporal',
    }),
    __metadata("design:type", String)
], SolicitudTemporalDto.prototype, "justificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        nullable: true,
        description: 'Estado de aprobación de la solicitud: `true` (aprobada), `false` (rechazada), `null` (pendiente)',
    }),
    __metadata("design:type", Object)
], SolicitudTemporalDto.prototype, "esAprobado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2025-09-20T18:00:00.000Z',
        description: 'Fecha hasta donde se solicita el permiso temporal (fecha de uso)',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SolicitudTemporalDto.prototype, "fechaUso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2025-09-17T12:30:00.000Z',
        description: 'Fecha en que se registró la solicitud',
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SolicitudTemporalDto.prototype, "fecha", void 0);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/entities/solicitud-temporal.entity.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/entities/solicitud-temporal.entity.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolicitudTemporal = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SolicitudTemporal = class SolicitudTemporal {
    id;
    correo;
    justificacion;
    esAprobado;
    fechaUso;
    fecha;
};
exports.SolicitudTemporal = SolicitudTemporal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_solicitud', type: 'bigint' }),
    __metadata("design:type", Number)
], SolicitudTemporal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SolicitudTemporal.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'justificacion', type: 'text' }),
    __metadata("design:type", String)
], SolicitudTemporal.prototype, "justificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_aprobado', type: 'boolean', nullable: true, default: null }),
    __metadata("design:type", Object)
], SolicitudTemporal.prototype, "esAprobado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_uso', type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SolicitudTemporal.prototype, "fechaUso", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha', type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SolicitudTemporal.prototype, "fecha", void 0);
exports.SolicitudTemporal = SolicitudTemporal = __decorate([
    (0, typeorm_1.Entity)('solicitudes_temporales')
], SolicitudTemporal);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/services/solicitudes-temporales.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/services/solicitudes-temporales.service.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolicitudesTemporalesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const solicitud_temporal_entity_1 = __webpack_require__(/*! ../entities/solicitud-temporal.entity */ "./src/app/services/solicitudes-temporales/entities/solicitud-temporal.entity.ts");
const email_service_1 = __webpack_require__(/*! src/shared/services/email/email.service */ "./src/shared/services/email/email.service.ts");
const usuarios_auth_service_1 = __webpack_require__(/*! src/modules/usuarios/services/usuarios-auth.service */ "./src/modules/usuarios/services/usuarios-auth.service.ts");
const solicitud_aprobada_template_1 = __webpack_require__(/*! ../templates/solicitud-aprobada.template */ "./src/app/services/solicitudes-temporales/templates/solicitud-aprobada.template.ts");
const typeorm_3 = __webpack_require__(/*! typeorm */ "typeorm");
const solicitud_rechazada_template_1 = __webpack_require__(/*! ../templates/solicitud-rechazada.template */ "./src/app/services/solicitudes-temporales/templates/solicitud-rechazada.template.ts");
let SolicitudesTemporalesService = class SolicitudesTemporalesService {
    solicitudTemporalRepository;
    usuariosAuthService;
    emailService;
    dataSource;
    constructor(solicitudTemporalRepository, usuariosAuthService, emailService, dataSource) {
        this.solicitudTemporalRepository = solicitudTemporalRepository;
        this.usuariosAuthService = usuariosAuthService;
        this.emailService = emailService;
        this.dataSource = dataSource;
    }
    async create(dto) {
        const fechaUsoDate = new Date(dto.fechaUso);
        if (isNaN(fechaUsoDate.getTime())) {
            throw new common_1.BadRequestException({
                message: 'fechaUso inválida; envía un ISO 8601 válido, ej: 2025-09-16T10:30:00Z'
            });
        }
        const entity = this.solicitudTemporalRepository.create({
            correo: dto.correo.trim(),
            justificacion: dto.justificacion.trim(),
            fechaUso: fechaUsoDate,
        });
        const saved = await this.solicitudTemporalRepository.save(entity);
        return saved;
    }
    async aprobarSolicitud(idSolicitud) {
        const soli = await this.solicitudTemporalRepository.findOne({
            where: {
                id: idSolicitud,
                esAprobado: (0, typeorm_2.IsNull)()
            }
        });
        if (!soli) {
            throw new common_1.NotFoundException({
                message: 'Solicitud invalida para aprobar'
            });
        }
        return this.dataSource.transaction(async (manager) => {
            const usuario = await soli.correo.split('@')[0];
            const newUsuario = await this.usuariosAuthService.createTemporal({
                correo: soli.correo,
                usuario: usuario,
                contrasenia: usuario,
                expiracion: soli.fechaUso
            }, manager);
            soli.esAprobado = true;
            const template = (0, solicitud_aprobada_template_1.getHtmlSolcitudAprobada)(usuario, soli.correo, soli.fechaUso);
            const soliSaved = await manager.getRepository(solicitud_temporal_entity_1.SolicitudTemporal).save(soli);
            await this.emailService.sendEmail({
                to: soli.correo,
                subject: 'Aprobacion de cuenta temporal',
                html: template
            });
            return soliSaved;
        });
    }
    async rechazarSolicitud(idSolicitud, motivo) {
        const soli = await this.solicitudTemporalRepository.findOne({
            where: {
                id: idSolicitud,
                esAprobado: (0, typeorm_2.IsNull)()
            }
        });
        if (!soli) {
            throw new common_1.NotFoundException({
                message: 'Solicitud invalida para rechzar'
            });
        }
        soli.esAprobado = false;
        const template = (0, solicitud_rechazada_template_1.getHtmlSolicitudRechazada)(soli.correo, motivo);
        const soliSaved = await this.solicitudTemporalRepository.save(soli);
        await this.emailService.sendEmail({
            to: soli.correo,
            subject: 'Rechazo de cuenta temporal',
            html: template
        });
        return soliSaved;
    }
    async findOne(id) {
        const found = await this.solicitudTemporalRepository.findOne({
            where: {
                id: id
            }
        });
        if (!found)
            throw new common_1.NotFoundException(`Solicitud temporal ${id} no encontrada`);
        return found;
    }
    async findAll(params) {
        const { page, limit, esAprobado, correo, orderFecha, fechaDesde, fechaHasta } = params;
        const where = {};
        if (esAprobado === true || esAprobado === false) {
            where.esAprobado = esAprobado;
        }
        else if (esAprobado === null) {
            where.esAprobado = (0, typeorm_2.IsNull)();
        }
        if (correo) {
            where.correo = (0, typeorm_2.ILike)(`%${correo}%`);
        }
        if (fechaDesde && fechaHasta) {
            where.fecha = (0, typeorm_2.Between)(fechaDesde, fechaHasta);
        }
        else if (fechaDesde) {
            where.fecha = (0, typeorm_2.MoreThanOrEqual)(fechaDesde);
        }
        else if (fechaHasta) {
            where.fecha = (0, typeorm_2.LessThanOrEqual)(fechaHasta);
        }
        const [data, total] = await this.solicitudTemporalRepository.findAndCount({
            where,
            order: { fecha: orderFecha },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            data,
            page,
            limit,
            pages: Math.ceil(total / limit),
            total,
        };
    }
};
exports.SolicitudesTemporalesService = SolicitudesTemporalesService;
exports.SolicitudesTemporalesService = SolicitudesTemporalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(solicitud_temporal_entity_1.SolicitudTemporal)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof usuarios_auth_service_1.UsuariosAuthService !== "undefined" && usuarios_auth_service_1.UsuariosAuthService) === "function" ? _b : Object, typeof (_c = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _c : Object, typeof (_d = typeof typeorm_3.DataSource !== "undefined" && typeorm_3.DataSource) === "function" ? _d : Object])
], SolicitudesTemporalesService);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/solicitudes-temporales.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/solicitudes-temporales.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolicitudesTemporalesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const solicitudes_temporales_service_1 = __webpack_require__(/*! ./services/solicitudes-temporales.service */ "./src/app/services/solicitudes-temporales/services/solicitudes-temporales.service.ts");
const solicitudes_temporales_controller_1 = __webpack_require__(/*! ./api/solicitudes-temporales.controller */ "./src/app/services/solicitudes-temporales/api/solicitudes-temporales.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const solicitud_temporal_entity_1 = __webpack_require__(/*! ./entities/solicitud-temporal.entity */ "./src/app/services/solicitudes-temporales/entities/solicitud-temporal.entity.ts");
const email_module_1 = __webpack_require__(/*! src/shared/services/email/email.module */ "./src/shared/services/email/email.module.ts");
const usuarios_module_1 = __webpack_require__(/*! src/modules/usuarios/usuarios.module */ "./src/modules/usuarios/usuarios.module.ts");
let SolicitudesTemporalesModule = class SolicitudesTemporalesModule {
};
exports.SolicitudesTemporalesModule = SolicitudesTemporalesModule;
exports.SolicitudesTemporalesModule = SolicitudesTemporalesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([solicitud_temporal_entity_1.SolicitudTemporal]),
            email_module_1.EmailModule,
            usuarios_module_1.UsuariosModule
        ],
        providers: [solicitudes_temporales_service_1.SolicitudesTemporalesService],
        controllers: [solicitudes_temporales_controller_1.SolicitudesTemporalesController],
        exports: [solicitudes_temporales_service_1.SolicitudesTemporalesService]
    })
], SolicitudesTemporalesModule);


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/templates/solicitud-aprobada.template.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/templates/solicitud-aprobada.template.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHtmlSolcitudAprobada = void 0;
const getHtmlSolcitudAprobada = (usuario, correo, expiracion) => {
    const contrasena = correo.split('@')[0];
    const fechaExp = expiracion.toLocaleString();
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: #007bff; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { font-size: 12px; color: #666; text-align: center; padding: 10px; }
    .highlight { font-weight: bold; color: #007bff; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Solicitud Aprobada</h2>
    </div>
    <div class="content">
      <p>Hola <span class="highlight">{{usuario}}</span>,</p>
      <p>Tu solicitud de <strong>cuenta temporal</strong> ha sido aprobada.</p>
      <p>Los datos de tu cuenta son:</p>
      <ul>
        <li><strong>Usuario:</strong> ${usuario}</li>
        <li><strong>Contraseña:</strong> ${contrasena}</li>
        <li><strong>Correo registrado:</strong> ${correo}</li>
        <li><strong>Expira el:</strong> ${fechaExp}</li>
      </ul>
      <p>Por favor, recuerda que esta cuenta es <strong>temporal</strong> y dejará de estar activa después de la fecha indicada.</p>
    </div>
    <div class="footer">
      <p>Este es un mensaje automático, no responder.</p>
    </div>
  </div>
</body>
</html>

    `;
};
exports.getHtmlSolcitudAprobada = getHtmlSolcitudAprobada;


/***/ }),

/***/ "./src/app/services/solicitudes-temporales/templates/solicitud-rechazada.template.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/solicitudes-temporales/templates/solicitud-rechazada.template.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHtmlSolicitudRechazada = void 0;
const getHtmlSolicitudRechazada = (correo, motivo) => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Solicitud Temporal Rechazada</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      color: #333333;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    h2 {
      color: #c0392b;
    }
    .reason {
      margin: 20px 0;
      padding: 15px;
      background: #fbeaea;
      border-left: 5px solid #c0392b;
    }
    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Solicitud Rechazada</h2>
    <p>Estimado/a <strong>${correo}</strong>,</p>
    <p>Lamentamos informarle que su solicitud temporal ha sido <strong>rechazada</strong>.</p>

    <div class="reason">
      <p><strong>Motivo de la solicitud:</strong></p>
      <p>${motivo}</p>
    </div>

    <p>En caso de dudas o aclaraciones, puede ponerse en contacto con el administrador.</p>

    <div class="footer">
      <p>Este es un mensaje automático. Por favor, no responda a este correo.</p>
    </div>
  </div>
</body>
</html>
    `;
};
exports.getHtmlSolicitudRechazada = getHtmlSolicitudRechazada;


/***/ }),

/***/ "./src/common/classes/index.ts":
/*!*************************************!*\
  !*** ./src/common/classes/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./options-find-one.class */ "./src/common/classes/options-find-one.class.ts"), exports);


/***/ }),

/***/ "./src/common/classes/options-find-one.class.ts":
/*!******************************************************!*\
  !*** ./src/common/classes/options-find-one.class.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionsFindOne = void 0;
class OptionsFindOne {
    manager = null;
    throwException = false;
}
exports.OptionsFindOne = OptionsFindOne;


/***/ }),

/***/ "./src/common/common.module.ts":
/*!*************************************!*\
  !*** ./src/common/common.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const password_validator_service_1 = __webpack_require__(/*! ./services/password-validator.service */ "./src/common/services/password-validator.service.ts");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [password_validator_service_1.PasswordValidatorService],
        exports: [password_validator_service_1.PasswordValidatorService],
    })
], CommonModule);


/***/ }),

/***/ "./src/common/services/password-validator.service.ts":
/*!***********************************************************!*\
  !*** ./src/common/services/password-validator.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordValidatorService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const zxcvbn = __webpack_require__(/*! zxcvbn */ "zxcvbn");
let PasswordValidatorService = class PasswordValidatorService {
    reglas = [
        {
            descripcion: 'Mínimo 12 caracteres',
            cumplida: (p) => p.length >= 12,
        },
        {
            descripcion: 'Al menos una letra mayúscula',
            cumplida: (p) => /[A-Z]/.test(p),
        },
        {
            descripcion: 'Al menos una letra minúscula',
            cumplida: (p) => /[a-z]/.test(p),
        },
        {
            descripcion: 'Al menos un número',
            cumplida: (p) => /\d/.test(p),
        },
        {
            descripcion: 'Al menos un carácter especial (!@#$%^&*...)',
            cumplida: (p) => /[^A-Za-z0-9]/.test(p),
        },
    ];
    traducciones = {
        'Use a few words, avoid common phrases': 'Usa palabras poco comunes',
        'No need for symbols, digits, or uppercase letters': 'Agrega variedad a tu contraseña',
        'Add another word or two. Uncommon words are better.': 'Agrega más palabras. Las poco comunes son mejores.',
        'Straight rows of keys are easy to guess': 'Las secuencias de teclado son fáciles de adivinar',
        'Short keyboard patterns are easy to guess': 'Los patrones cortos de teclado son fáciles de adivinar',
        'Use a longer keyboard pattern with more turns': 'Usa un patrón más largo con más variedad',
        'Repeats like "aaa" are easy to guess': 'Las repeticiones como "aaa" son fáciles de adivinar',
        'Repeats like "abcabc" are only slightly harder to guess than "abc"': 'Evita repetir secuencias',
        'Sequences like abc or 6543 are easy to guess': 'Las secuencias como abc o 6543 son fáciles',
        'Recent years are easy to guess': 'Los años recientes son fáciles de adivinar',
        'Dates are often easy to guess': 'Las fechas son fáciles de adivinar',
        'This is a top-10 common password': 'Esta es una de las 10 contraseñas más comunes',
        'This is a top-100 common password': 'Esta es una de las 100 contraseñas más comunes',
        'This is a very common password': 'Esta es una contraseña muy común',
        'This is similar to a commonly used password': 'Es similar a una contraseña muy usada',
        'A word by itself is easy to guess': 'Una sola palabra es fácil de adivinar',
        'Names and surnames by themselves are easy to guess': 'Los nombres solos son fáciles de adivinar',
        'Common names and surnames are easy to guess': 'Los nombres comunes son fáciles de adivinar',
    };
    validar(password) {
        const reglasFallidas = this.reglas
            .filter((r) => !r.cumplida(password))
            .map((r) => r.descripcion);
        if (reglasFallidas.length > 0) {
            throw new common_1.BadRequestException({
                message: 'La contraseña no cumple los requisitos',
                errores: reglasFallidas,
                tipo: 'requisitos',
            });
        }
        const resultado = zxcvbn(password);
        if (resultado.score < 2) {
            const sugerencias = [];
            if (resultado.feedback?.warning) {
                sugerencias.push(this.traducir(resultado.feedback.warning));
            }
            (resultado.feedback?.suggestions ?? []).forEach((s) => {
                sugerencias.push(this.traducir(s));
            });
            throw new common_1.BadRequestException({
                message: 'La contraseña es demasiado fácil de adivinar',
                errores: sugerencias.length > 0
                    ? sugerencias
                    : ['Usa una combinación más creativa. Evita palabras comunes, nombres o secuencias.'],
                tipo: 'diccionario',
            });
        }
    }
    obtenerEstadoReglas(password) {
        return this.reglas.map((r) => ({
            descripcion: r.descripcion,
            cumplida: r.cumplida(password),
        }));
    }
    traducir(texto) {
        return this.traducciones[texto] ?? texto;
    }
};
exports.PasswordValidatorService = PasswordValidatorService;
exports.PasswordValidatorService = PasswordValidatorService = __decorate([
    (0, common_1.Injectable)()
], PasswordValidatorService);


/***/ }),

/***/ "./src/common/utils/alias-generator.util.ts":
/*!**************************************************!*\
  !*** ./src/common/utils/alias-generator.util.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildBaseAlias = buildBaseAlias;
function buildBaseAlias(nombre, apellidoPaterno) {
    const normalizar = (str) => str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/\s+/g, '.')
        .replace(/[^a-z0-9.]/g, '');
    return `${normalizar(nombre)}.${normalizar(apellidoPaterno)}`;
}


/***/ }),

/***/ "./src/common/utils/http-response.utils.ts":
/*!*************************************************!*\
  !*** ./src/common/utils/http-response.utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotFoundRes = exports.BadRequestRes = exports.CreatedRes = exports.OkRes = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const OkRes = (res, object) => {
    return res.status(common_1.HttpStatus.OK).json(object);
};
exports.OkRes = OkRes;
const CreatedRes = (res, object) => {
    return res.status(common_1.HttpStatus.CREATED).json(object);
};
exports.CreatedRes = CreatedRes;
const BadRequestRes = (res, object) => {
    return res.status(common_1.HttpStatus.BAD_REQUEST).json(object);
};
exports.BadRequestRes = BadRequestRes;
const NotFoundRes = (res, object) => {
    return res.status(common_1.HttpStatus.NOT_FOUND).json(object);
};
exports.NotFoundRes = NotFoundRes;


/***/ }),

/***/ "./src/common/utils/index.ts":
/*!***********************************!*\
  !*** ./src/common/utils/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./validate-data.util */ "./src/common/utils/validate-data.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./password.utils */ "./src/common/utils/password.utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./http-response.utils */ "./src/common/utils/http-response.utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./swagger/swagger-response.utils */ "./src/common/utils/swagger/swagger-response.utils.ts"), exports);


/***/ }),

/***/ "./src/common/utils/password.utils.ts":
/*!********************************************!*\
  !*** ./src/common/utils/password.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const SALT_ROUNDS = 10;
const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};
exports.hashPassword = hashPassword;
const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};
exports.comparePassword = comparePassword;


/***/ }),

/***/ "./src/common/utils/swagger/swagger-response.utils.ts":
/*!************************************************************!*\
  !*** ./src/common/utils/swagger/swagger-response.utils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerConflictCommon = exports.SwaggerNotFoundCommon = exports.SwaggerBadRequestCommon = void 0;
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
const validation_exception_dto_1 = __webpack_require__(/*! src/shared/dto/validation-exception.dto */ "./src/shared/dto/validation-exception.dto.ts");
const SwaggerBadRequestCommon = () => {
    return {
        description: 'Respuesta en caso de parametros invalidos',
        type: validation_exception_dto_1.ValidationExceptionDto
    };
};
exports.SwaggerBadRequestCommon = SwaggerBadRequestCommon;
const SwaggerNotFoundCommon = () => {
    return {
        description: 'Respuesta en caso de no encontrar un recurso',
        type: common_response_dto_1.CommonResponseDto
    };
};
exports.SwaggerNotFoundCommon = SwaggerNotFoundCommon;
const SwaggerConflictCommon = () => {
    return {
        description: 'Respuesta en caso de un conflicto entre datos repetidos',
        type: common_response_dto_1.CommonResponseDto
    };
};
exports.SwaggerConflictCommon = SwaggerConflictCommon;


/***/ }),

/***/ "./src/common/utils/validate-data.util.ts":
/*!************************************************!*\
  !*** ./src/common/utils/validate-data.util.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateData = validateData;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
function validateData(dtoClass, data) {
    const dto = (0, class_transformer_1.plainToInstance)(dtoClass, data);
    const errores = (0, class_validator_1.validateSync)(dto, {
        whitelist: true,
        forbidNonWhitelisted: true,
    });
    if (errores.length > 0) {
        const mensajes = errores
            .map(e => Object.values(e.constraints || {}))
            .flat();
        throw new common_1.BadRequestException(mensajes);
    }
}


/***/ }),

/***/ "./src/config/config.module.ts":
/*!*************************************!*\
  !*** ./src/config/config.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const config_service_1 = __webpack_require__(/*! ./config.service */ "./src/config/config.service.ts");
const database_config_1 = __webpack_require__(/*! ./services/database.config */ "./src/config/services/database.config.ts");
const jwt_config_1 = __webpack_require__(/*! ./services/jwt.config */ "./src/config/services/jwt.config.ts");
const server_config_1 = __webpack_require__(/*! ./services/server.config */ "./src/config/services/server.config.ts");
const config_validation_1 = __webpack_require__(/*! ./config.validation */ "./src/config/config.validation.ts");
const email_config_1 = __webpack_require__(/*! ./services/email.config */ "./src/config/services/email.config.ts");
let MyConfigModule = class MyConfigModule {
};
exports.MyConfigModule = MyConfigModule;
exports.MyConfigModule = MyConfigModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
                validationSchema: config_validation_1.validationSchema
            }),
        ],
        providers: [
            config_service_1.MyConfigService,
            database_config_1.MyDataBaseConfig,
            jwt_config_1.MyJwtConfig,
            server_config_1.MyServerConfig,
            email_config_1.MyEmailConfig,
        ],
        exports: [
            config_service_1.MyConfigService,
            database_config_1.MyDataBaseConfig,
            jwt_config_1.MyJwtConfig,
            server_config_1.MyServerConfig,
            email_config_1.MyEmailConfig
        ],
    })
], MyConfigModule);


/***/ }),

/***/ "./src/config/config.service.ts":
/*!**************************************!*\
  !*** ./src/config/config.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let MyConfigService = class MyConfigService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    get(key) {
        const value = this.configService.get(key);
        return value;
    }
};
exports.MyConfigService = MyConfigService;
exports.MyConfigService = MyConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], MyConfigService);


/***/ }),

/***/ "./src/config/config.validation.ts":
/*!*****************************************!*\
  !*** ./src/config/config.validation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchema = void 0;
const Joi = __webpack_require__(/*! joi */ "joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),
    PORT: Joi.number().default(3000),
    SHOW_ENV: Joi.boolean().default(false),
    PRINT_LOGS: Joi.boolean().default(false),
    FRONTEND_URL: Joi.string().default(''),
    DATABASE_URL: Joi.string(),
    DB_TYPE: Joi.string(),
    DB_HOST: Joi.string(),
    DB_PORT: Joi.number(),
    DB_USER: Joi.string(),
    DB_PASSWORD: Joi.string(),
    DB_NAME: Joi.string(),
    DB_LOGS: Joi.boolean().default(false),
    ACTIVE_JWT: Joi.boolean().default(true),
    JWT_SECRET: Joi.string().required(),
    JWT_TIME_EXPIRE: Joi.string().required(),
    USER_EMAIL: Joi.string().email().optional(),
    PASS_AUTH: Joi.string().optional(),
    PASSWORD_EXPIRY_DAYS: Joi.number().default(60),
    PASSWORD_HISTORY_COUNT: Joi.number().default(10),
    MAX_LOGIN_ATTEMPTS: Joi.number().default(3),
    LOCKOUT_MINUTES: Joi.number().default(30),
    RESET_TOKEN_EXPIRES_MINUTES: Joi.number().default(30),
})
    .or('DATABASE_URL', 'DB_HOST');


/***/ }),

/***/ "./src/config/services/database.config.ts":
/*!************************************************!*\
  !*** ./src/config/services/database.config.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyDataBaseConfig = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ../config.service */ "./src/config/config.service.ts");
let MyDataBaseConfig = class MyDataBaseConfig {
    config;
    constructor(config) {
        this.config = config;
    }
    get() {
        return {
            type: this.config.get('DB_TYPE'),
            host: this.config.get('DB_HOST'),
            port: this.config.get('DB_PORT'),
            username: this.config.get('DB_USER'),
            password: this.config.get('DB_PASSWORD'),
            database: this.config.get('DB_NAME'),
            logging: this.config.get('DB_LOGS'),
        };
    }
};
exports.MyDataBaseConfig = MyDataBaseConfig;
exports.MyDataBaseConfig = MyDataBaseConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.MyConfigService !== "undefined" && config_service_1.MyConfigService) === "function" ? _a : Object])
], MyDataBaseConfig);


/***/ }),

/***/ "./src/config/services/email.config.ts":
/*!*********************************************!*\
  !*** ./src/config/services/email.config.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyEmailConfig = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ../config.service */ "./src/config/config.service.ts");
let MyEmailConfig = class MyEmailConfig {
    config;
    constructor(config) {
        this.config = config;
    }
    get() {
        return {
            user: this.config.get('USER_EMAIL'),
            pass: this.config.get('PASS_AUTH'),
        };
    }
};
exports.MyEmailConfig = MyEmailConfig;
exports.MyEmailConfig = MyEmailConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.MyConfigService !== "undefined" && config_service_1.MyConfigService) === "function" ? _a : Object])
], MyEmailConfig);


/***/ }),

/***/ "./src/config/services/jwt.config.ts":
/*!*******************************************!*\
  !*** ./src/config/services/jwt.config.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyJwtConfig = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ../config.service */ "./src/config/config.service.ts");
let MyJwtConfig = class MyJwtConfig {
    config;
    constructor(config) {
        this.config = config;
    }
    get() {
        return {
            isActive: this.config.get('ACTIVE_JWT'),
            secret: this.config.get('JWT_SECRET'),
            expiresIn: this.config.get('JWT_TIME_EXPIRE'),
        };
    }
};
exports.MyJwtConfig = MyJwtConfig;
exports.MyJwtConfig = MyJwtConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.MyConfigService !== "undefined" && config_service_1.MyConfigService) === "function" ? _a : Object])
], MyJwtConfig);


/***/ }),

/***/ "./src/config/services/server.config.ts":
/*!**********************************************!*\
  !*** ./src/config/services/server.config.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyServerConfig = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ../config.service */ "./src/config/config.service.ts");
let MyServerConfig = class MyServerConfig {
    config;
    constructor(config) {
        this.config = config;
    }
    get() {
        return {
            port: this.config.get('PORT'),
            showEnv: this.config.get('SHOW_ENV'),
            logs: this.config.get('PRINT_LOGS')
        };
    }
};
exports.MyServerConfig = MyServerConfig;
exports.MyServerConfig = MyServerConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.MyConfigService !== "undefined" && config_service_1.MyConfigService) === "function" ? _a : Object])
], MyServerConfig);


/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_module_1 = __webpack_require__(/*! src/config/config.module */ "./src/config/config.module.ts");
const database_config_1 = __webpack_require__(/*! src/config/services/database.config */ "./src/config/services/database.config.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.MyConfigModule],
                inject: [database_config_1.MyDataBaseConfig],
                useFactory: (configService) => {
                    if (process.env.DATABASE_URL) {
                        return {
                            type: 'postgres',
                            url: process.env.DATABASE_URL,
                            autoLoadEntities: true,
                            synchronize: false,
                            logging: false,
                            ssl: {
                                rejectUnauthorized: false,
                            },
                        };
                    }
                    const dbConfig = configService.get();
                    return {
                        type: 'postgres',
                        host: dbConfig.host,
                        port: dbConfig.port,
                        username: dbConfig.username,
                        password: dbConfig.password,
                        database: dbConfig.database,
                        autoLoadEntities: true,
                        synchronize: false,
                        logging: dbConfig.logging ?? false,
                    };
                },
            }),
        ],
    })
], DatabaseModule);


/***/ }),

/***/ "./src/modules/datamart/controllers/datamart.controller.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/datamart/controllers/datamart.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatamartController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const datamart_service_1 = __webpack_require__(/*! ../services/datamart.service */ "./src/modules/datamart/services/datamart.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const find_all_datamart_response_dto_1 = __webpack_require__(/*! ../dto/outputs/find-all-datamart-response.dto */ "./src/modules/datamart/dto/outputs/find-all-datamart-response.dto.ts");
let DatamartController = class DatamartController {
    datamartService;
    constructor(datamartService) {
        this.datamartService = datamartService;
    }
    async findAll(res) {
        const empresas = await this.datamartService.findAll();
        return (0, utils_1.OkRes)(res, {
            empresas: empresas
        });
    }
};
exports.DatamartController = DatamartController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtenre todos los datos del datamart'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Repsuesta en caso de obtener todo el datamart',
        type: find_all_datamart_response_dto_1.FindAllDatamartResponseDto
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], DatamartController.prototype, "findAll", null);
exports.DatamartController = DatamartController = __decorate([
    (0, swagger_1.ApiTags)('Datamart'),
    (0, common_1.Controller)('datamart'),
    __metadata("design:paramtypes", [typeof (_a = typeof datamart_service_1.DatamartService !== "undefined" && datamart_service_1.DatamartService) === "function" ? _a : Object])
], DatamartController);


/***/ }),

/***/ "./src/modules/datamart/datamart.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/datamart/datamart.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatamartModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const datamart_service_1 = __webpack_require__(/*! ./services/datamart.service */ "./src/modules/datamart/services/datamart.service.ts");
const datamart_controller_1 = __webpack_require__(/*! ./controllers/datamart.controller */ "./src/modules/datamart/controllers/datamart.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ./entities/empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
const municipio_dt_entity_1 = __webpack_require__(/*! ./entities/municipio-dt.entity */ "./src/modules/datamart/entities/municipio-dt.entity.ts");
const ods_dt_entity_1 = __webpack_require__(/*! ./entities/ods-dt.entity */ "./src/modules/datamart/entities/ods-dt.entity.ts");
const pais_dt_entity_1 = __webpack_require__(/*! ./entities/pais-dt.entity */ "./src/modules/datamart/entities/pais-dt.entity.ts");
const proyecto_dt_enity_1 = __webpack_require__(/*! ./entities/proyecto-dt.enity */ "./src/modules/datamart/entities/proyecto-dt.enity.ts");
const sede_dt_entity_1 = __webpack_require__(/*! ./entities/sede-dt.entity */ "./src/modules/datamart/entities/sede-dt.entity.ts");
let DatamartModule = class DatamartModule {
};
exports.DatamartModule = DatamartModule;
exports.DatamartModule = DatamartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                empresa_dt_entity_1.EmpresaDt,
                municipio_dt_entity_1.MunicipioDt,
                ods_dt_entity_1.OdsDt,
                pais_dt_entity_1.PaisDt,
                proyecto_dt_enity_1.ProyectoDt,
                sede_dt_entity_1.SedeDt,
            ])
        ],
        controllers: [datamart_controller_1.DatamartController],
        providers: [datamart_service_1.DatamartService],
        exports: [datamart_service_1.DatamartService]
    })
], DatamartModule);


/***/ }),

/***/ "./src/modules/datamart/dto/empresa-dt.dto.ts":
/*!****************************************************!*\
  !*** ./src/modules/datamart/dto/empresa-dt.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const pais_dt_dto_1 = __webpack_require__(/*! ./pais-dt.dto */ "./src/modules/datamart/dto/pais-dt.dto.ts");
const municipio_dt_dto_1 = __webpack_require__(/*! ./municipio-dt.dto */ "./src/modules/datamart/dto/municipio-dt.dto.ts");
const sede_dt_dto_1 = __webpack_require__(/*! ./sede-dt.dto */ "./src/modules/datamart/dto/sede-dt.dto.ts");
const ods_dt_dto_1 = __webpack_require__(/*! ./ods-dt.dto */ "./src/modules/datamart/dto/ods-dt.dto.ts");
class EmpresaDtDto {
    id;
    nombre;
    fechaFundacion;
    tamanioEmpresa;
    empresaFamiliar;
    rubro;
    esPropioRubro;
    cambioRubro;
    tipoSocietaria;
    esPropioTipoSocietario;
    cambioTipoSocietario;
    oficinaCentral;
    operacionesInternacionales;
    impactoSocial;
    sostenibilidad;
    anioDeImplementacionImpacto;
    paises;
    municipios;
    sedes;
    ods;
}
exports.EmpresaDtDto = EmpresaDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único de la empresa', type: Number }),
    __metadata("design:type", Number)
], EmpresaDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la empresa', type: String }),
    __metadata("design:type", String)
], EmpresaDtDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fundación de la empresa',
        example: '2001-05-14',
        type: Date,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EmpresaDtDto.prototype, "fechaFundacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tamaño de la empresa (micro, pequeña, mediana, grande)',
        type: String,
    }),
    __metadata("design:type", String)
], EmpresaDtDto.prototype, "tamanioEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si la empresa es familiar', type: Boolean }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "empresaFamiliar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rubro principal de la empresa', type: String }),
    __metadata("design:type", String)
], EmpresaDtDto.prototype, "rubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el rubro actual es el propio de la empresa',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "esPropioRubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si la empresa ha cambiado de rubro',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "cambioRubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo societario de la empresa', type: String }),
    __metadata("design:type", String)
], EmpresaDtDto.prototype, "tipoSocietaria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el tipo societario actual es el propio de la empresa',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "esPropioTipoSocietario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si ha habido cambio de tipo societario',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "cambioTipoSocietario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ubicación de la oficina central de la empresa',
        type: String,
    }),
    __metadata("design:type", String)
], EmpresaDtDto.prototype, "oficinaCentral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si realiza operaciones internacionales',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "operacionesInternacionales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si la empresa tiene impacto social',
        type: Boolean,
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "impactoSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si la empresa aplica criterios de sostenibilidad',
        type: Boolean,
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], EmpresaDtDto.prototype, "sostenibilidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Año de implementación del impacto social',
        example: '2023-01-01',
        type: Date,
        nullable: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EmpresaDtDto.prototype, "anioDeImplementacionImpacto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Países donde la empresa tiene presencia',
        type: [pais_dt_dto_1.PaisDtDto],
    }),
    __metadata("design:type", Array)
], EmpresaDtDto.prototype, "paises", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Municipios donde la empresa opera',
        type: [municipio_dt_dto_1.MunicipioDtDto],
    }),
    __metadata("design:type", Array)
], EmpresaDtDto.prototype, "municipios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sedes asociadas a la empresa',
        type: [sede_dt_dto_1.SedeDtDto],
    }),
    __metadata("design:type", Array)
], EmpresaDtDto.prototype, "sedes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Objetivos de Desarrollo Sostenible (ODS) asociados a la empresa',
        type: [ods_dt_dto_1.OdsDtDto],
    }),
    __metadata("design:type", Array)
], EmpresaDtDto.prototype, "ods", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/municipio-dt.dto.ts":
/*!******************************************************!*\
  !*** ./src/modules/datamart/dto/municipio-dt.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipioDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class MunicipioDtDto {
    id;
    nombre;
}
exports.MunicipioDtDto = MunicipioDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del municipio',
        type: Number
    }),
    __metadata("design:type", Number)
], MunicipioDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del municipio donde opera la empresa',
        type: String
    }),
    __metadata("design:type", String)
], MunicipioDtDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/ods-dt.dto.ts":
/*!************************************************!*\
  !*** ./src/modules/datamart/dto/ods-dt.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OdsDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const proyecto_dt_dto_1 = __webpack_require__(/*! ./proyecto-dt.dto */ "./src/modules/datamart/dto/proyecto-dt.dto.ts");
class OdsDtDto {
    id;
    nombre;
    proyectos;
}
exports.OdsDtDto = OdsDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del ODS',
        type: Number
    }),
    __metadata("design:type", Number)
], OdsDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del Objetivo de Desarrollo Sostenible',
        type: String
    }),
    __metadata("design:type", String)
], OdsDtDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de proyectos asociados a este ODS',
        type: [proyecto_dt_dto_1.ProyectoDtDto],
    }),
    __metadata("design:type", Array)
], OdsDtDto.prototype, "proyectos", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/outputs/find-all-datamart-response.dto.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/datamart/dto/outputs/find-all-datamart-response.dto.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllDatamartResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const empresa_dt_dto_1 = __webpack_require__(/*! ../empresa-dt.dto */ "./src/modules/datamart/dto/empresa-dt.dto.ts");
class FindAllDatamartResponseDto {
    empresas;
}
exports.FindAllDatamartResponseDto = FindAllDatamartResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Empresas registradas en el datamart',
        type: [empresa_dt_dto_1.EmpresaDtDto]
    }),
    __metadata("design:type", Array)
], FindAllDatamartResponseDto.prototype, "empresas", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/pais-dt.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/datamart/dto/pais-dt.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PaisDtDto {
    id;
    nombre;
}
exports.PaisDtDto = PaisDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del país',
        type: Number
    }),
    __metadata("design:type", Number)
], PaisDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del país donde opera la empresa',
        type: String
    }),
    __metadata("design:type", String)
], PaisDtDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/proyecto-dt.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/datamart/dto/proyecto-dt.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectoDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ProyectoDtDto {
    id;
    nombre;
}
exports.ProyectoDtDto = ProyectoDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único del proyecto', type: Number }),
    __metadata("design:type", Number)
], ProyectoDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del proyecto', type: String }),
    __metadata("design:type", String)
], ProyectoDtDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/datamart/dto/sede-dt.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/datamart/dto/sede-dt.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedeDtDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class SedeDtDto {
    id;
    nombre;
}
exports.SedeDtDto = SedeDtDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identificador único de la sede', type: Number }),
    __metadata("design:type", Number)
], SedeDtDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la sede', type: String }),
    __metadata("design:type", String)
], SedeDtDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/datamart/entities/empresa-dt.entity.ts":
/*!************************************************************!*\
  !*** ./src/modules/datamart/entities/empresa-dt.entity.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const municipio_dt_entity_1 = __webpack_require__(/*! ./municipio-dt.entity */ "./src/modules/datamart/entities/municipio-dt.entity.ts");
const ods_dt_entity_1 = __webpack_require__(/*! ./ods-dt.entity */ "./src/modules/datamart/entities/ods-dt.entity.ts");
const pais_dt_entity_1 = __webpack_require__(/*! ./pais-dt.entity */ "./src/modules/datamart/entities/pais-dt.entity.ts");
const sede_dt_entity_1 = __webpack_require__(/*! ./sede-dt.entity */ "./src/modules/datamart/entities/sede-dt.entity.ts");
let EmpresaDt = class EmpresaDt {
    id;
    nombre;
    fechaFundacion;
    tamanioEmpresa;
    empresaFamiliar;
    rubro;
    esPropioRubro;
    cambioRubro;
    tipoSocietaria;
    esPropioTipoSocietario;
    cambioTipoSocietario;
    oficinaCentral;
    operacionesInternacionales;
    impactoSocial;
    sostenibilidad;
    anioDeImplementacionImpacto;
    paises;
    municipios;
    sedes;
    ods;
};
exports.EmpresaDt = EmpresaDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_empresa' }),
    __metadata("design:type", Number)
], EmpresaDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_empresa', type: 'text' }),
    __metadata("design:type", String)
], EmpresaDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_fundacion', type: 'date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EmpresaDt.prototype, "fechaFundacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tamanio_empresa', type: 'text' }),
    __metadata("design:type", String)
], EmpresaDt.prototype, "tamanioEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresa_familiar', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "empresaFamiliar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rubro', type: 'text' }),
    __metadata("design:type", String)
], EmpresaDt.prototype, "rubro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_propio_rubro', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "esPropioRubro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cambio_rubro', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "cambioRubro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_societaria', type: 'text' }),
    __metadata("design:type", String)
], EmpresaDt.prototype, "tipoSocietaria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_propio_tipo_societario', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "esPropioTipoSocietario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cambio_tipo_societario', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "cambioTipoSocietario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'oficina_central', type: 'text' }),
    __metadata("design:type", String)
], EmpresaDt.prototype, "oficinaCentral", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'operaciones_internacionales', type: 'boolean' }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "operacionesInternacionales", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'impacto_social', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "impactoSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sostenibilidad', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], EmpresaDt.prototype, "sostenibilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_de_implementacion_impacto', type: 'date', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EmpresaDt.prototype, "anioDeImplementacionImpacto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pais_dt_entity_1.PaisDt, (pais) => pais.empresa),
    __metadata("design:type", Array)
], EmpresaDt.prototype, "paises", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => municipio_dt_entity_1.MunicipioDt, (municipio) => municipio.empresa),
    __metadata("design:type", Array)
], EmpresaDt.prototype, "municipios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sede_dt_entity_1.SedeDt, (sede) => sede.empresa),
    __metadata("design:type", Array)
], EmpresaDt.prototype, "sedes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ods_dt_entity_1.OdsDt, (ods) => ods.empresa),
    __metadata("design:type", Array)
], EmpresaDt.prototype, "ods", void 0);
exports.EmpresaDt = EmpresaDt = __decorate([
    (0, typeorm_1.Entity)('empresas_dt')
], EmpresaDt);


/***/ }),

/***/ "./src/modules/datamart/entities/municipio-dt.entity.ts":
/*!**************************************************************!*\
  !*** ./src/modules/datamart/entities/municipio-dt.entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipioDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ./empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
let MunicipioDt = class MunicipioDt {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.MunicipioDt = MunicipioDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_municipios' }),
    __metadata("design:type", Number)
], MunicipioDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_municipio', type: 'text' }),
    __metadata("design:type", String)
], MunicipioDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresas_dt_id', type: 'int' }),
    __metadata("design:type", Number)
], MunicipioDt.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_dt_entity_1.EmpresaDt, (empresaDt) => empresaDt.municipios),
    (0, typeorm_1.JoinColumn)({ name: 'empresas_dt_id' }),
    __metadata("design:type", typeof (_a = typeof empresa_dt_entity_1.EmpresaDt !== "undefined" && empresa_dt_entity_1.EmpresaDt) === "function" ? _a : Object)
], MunicipioDt.prototype, "empresa", void 0);
exports.MunicipioDt = MunicipioDt = __decorate([
    (0, typeorm_1.Entity)('municipios_dt')
], MunicipioDt);


/***/ }),

/***/ "./src/modules/datamart/entities/ods-dt.entity.ts":
/*!********************************************************!*\
  !*** ./src/modules/datamart/entities/ods-dt.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OdsDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ./empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
const proyecto_dt_enity_1 = __webpack_require__(/*! ./proyecto-dt.enity */ "./src/modules/datamart/entities/proyecto-dt.enity.ts");
let OdsDt = class OdsDt {
    id;
    nombre;
    idEmpresa;
    empresa;
    proyectos;
};
exports.OdsDt = OdsDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_ods' }),
    __metadata("design:type", Number)
], OdsDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_ods', type: 'text' }),
    __metadata("design:type", String)
], OdsDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresas_dt_id', type: 'int' }),
    __metadata("design:type", Number)
], OdsDt.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_dt_entity_1.EmpresaDt, (empresaDt) => empresaDt.municipios),
    (0, typeorm_1.JoinColumn)({ name: 'empresas_dt_id' }),
    __metadata("design:type", typeof (_a = typeof empresa_dt_entity_1.EmpresaDt !== "undefined" && empresa_dt_entity_1.EmpresaDt) === "function" ? _a : Object)
], OdsDt.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_dt_enity_1.ProyectoDt, (proyectoDt) => proyectoDt.ods),
    __metadata("design:type", Array)
], OdsDt.prototype, "proyectos", void 0);
exports.OdsDt = OdsDt = __decorate([
    (0, typeorm_1.Entity)('ods_dt')
], OdsDt);


/***/ }),

/***/ "./src/modules/datamart/entities/pais-dt.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modules/datamart/entities/pais-dt.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ./empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
let PaisDt = class PaisDt {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.PaisDt = PaisDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_paises' }),
    __metadata("design:type", Number)
], PaisDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_pais', type: 'text' }),
    __metadata("design:type", String)
], PaisDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresas_dt_id', type: 'int' }),
    __metadata("design:type", Number)
], PaisDt.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_dt_entity_1.EmpresaDt, (empresaDt) => empresaDt.municipios),
    (0, typeorm_1.JoinColumn)({ name: 'empresas_dt_id' }),
    __metadata("design:type", typeof (_a = typeof empresa_dt_entity_1.EmpresaDt !== "undefined" && empresa_dt_entity_1.EmpresaDt) === "function" ? _a : Object)
], PaisDt.prototype, "empresa", void 0);
exports.PaisDt = PaisDt = __decorate([
    (0, typeorm_1.Entity)('paises_dt')
], PaisDt);


/***/ }),

/***/ "./src/modules/datamart/entities/proyecto-dt.enity.ts":
/*!************************************************************!*\
  !*** ./src/modules/datamart/entities/proyecto-dt.enity.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectoDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const ods_dt_entity_1 = __webpack_require__(/*! ./ods-dt.entity */ "./src/modules/datamart/entities/ods-dt.entity.ts");
let ProyectoDt = class ProyectoDt {
    id;
    nombre;
    idOds;
    ods;
};
exports.ProyectoDt = ProyectoDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], ProyectoDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_proyecto', type: 'text' }),
    __metadata("design:type", String)
], ProyectoDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ods_id', type: 'int' }),
    __metadata("design:type", Number)
], ProyectoDt.prototype, "idOds", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ods_dt_entity_1.OdsDt, (odsDt) => odsDt.proyectos),
    (0, typeorm_1.JoinColumn)({ name: 'ods_id' }),
    __metadata("design:type", typeof (_a = typeof ods_dt_entity_1.OdsDt !== "undefined" && ods_dt_entity_1.OdsDt) === "function" ? _a : Object)
], ProyectoDt.prototype, "ods", void 0);
exports.ProyectoDt = ProyectoDt = __decorate([
    (0, typeorm_1.Entity)('proyectos_dt')
], ProyectoDt);


/***/ }),

/***/ "./src/modules/datamart/entities/sede-dt.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modules/datamart/entities/sede-dt.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedeDt = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ./empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
let SedeDt = class SedeDt {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.SedeDt = SedeDt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_sedes' }),
    __metadata("design:type", Number)
], SedeDt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre_departamento' }),
    __metadata("design:type", String)
], SedeDt.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'empresas_dt_id', type: 'int' }),
    __metadata("design:type", Number)
], SedeDt.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_dt_entity_1.EmpresaDt, (empresaDt) => empresaDt.municipios),
    (0, typeorm_1.JoinColumn)({ name: 'empresas_dt_id' }),
    __metadata("design:type", typeof (_a = typeof empresa_dt_entity_1.EmpresaDt !== "undefined" && empresa_dt_entity_1.EmpresaDt) === "function" ? _a : Object)
], SedeDt.prototype, "empresa", void 0);
exports.SedeDt = SedeDt = __decorate([
    (0, typeorm_1.Entity)('sedes_dt')
], SedeDt);


/***/ }),

/***/ "./src/modules/datamart/services/datamart.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/datamart/services/datamart.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatamartService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_dt_entity_1 = __webpack_require__(/*! ../entities/empresa-dt.entity */ "./src/modules/datamart/entities/empresa-dt.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let DatamartService = class DatamartService {
    empresaDtRepository;
    constructor(empresaDtRepository) {
        this.empresaDtRepository = empresaDtRepository;
    }
    async findAll() {
        const empresas = await this.empresaDtRepository.find({
            select: {
                id: true,
                nombre: true,
                fechaFundacion: true,
                tamanioEmpresa: true,
                empresaFamiliar: true,
                rubro: true,
                esPropioRubro: true,
                cambioRubro: true,
                tipoSocietaria: true,
                esPropioTipoSocietario: true,
                cambioTipoSocietario: true,
                oficinaCentral: true,
                operacionesInternacionales: true,
                impactoSocial: true,
                sostenibilidad: true,
                anioDeImplementacionImpacto: true,
                sedes: {
                    id: true,
                    nombre: true,
                },
                paises: {
                    id: true,
                    nombre: true,
                },
                municipios: {
                    id: true,
                    nombre: true,
                },
                ods: {
                    id: true,
                    nombre: true,
                    proyectos: {
                        id: true,
                        nombre: true
                    }
                },
            },
            relations: {
                sedes: true,
                paises: true,
                municipios: true,
                ods: {
                    proyectos: true,
                },
            }
        });
        return empresas;
    }
};
exports.DatamartService = DatamartService;
exports.DatamartService = DatamartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_dt_entity_1.EmpresaDt)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DatamartService);


/***/ }),

/***/ "./src/modules/empresas/api/empresas.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/empresas/api/empresas.controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_service_1 = __webpack_require__(/*! ../services/empresas.service */ "./src/modules/empresas/services/empresas.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const find_all_empresas_cards_params_dto_1 = __webpack_require__(/*! ../dto/inputs/find-all-empresas-cards-params.dto */ "./src/modules/empresas/dto/inputs/find-all-empresas-cards-params.dto.ts");
const find_all_empresas_cards_pagination_response_dto_1 = __webpack_require__(/*! ../dto/outputs/find-all-empresas-cards-pagination-response.dto */ "./src/modules/empresas/dto/outputs/find-all-empresas-cards-pagination-response.dto.ts");
const find_one_empresa_public_dto_1 = __webpack_require__(/*! ../dto/outputs/find-one-empresa-public.dto */ "./src/modules/empresas/dto/outputs/find-one-empresa-public.dto.ts");
const find_one_empresa_private_dto_1 = __webpack_require__(/*! ../dto/outputs/find-one-empresa-private.dto */ "./src/modules/empresas/dto/outputs/find-one-empresa-private.dto.ts");
const find_all_empresas_cards_public_params_dto_1 = __webpack_require__(/*! ../dto/inputs/find-all-empresas-cards-public-params.dto */ "./src/modules/empresas/dto/inputs/find-all-empresas-cards-public-params.dto.ts");
const auth_roles_guard_1 = __webpack_require__(/*! src/app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
let EmpresasController = class EmpresasController {
    empresasService;
    constructor(empresasService) {
        this.empresasService = empresasService;
    }
    async findAll(res) {
        const empresas = await this.empresasService.findAll();
        return (0, utils_1.OkRes)(res, { empresas });
    }
    async findAllCardsPublic(params, res) {
        const empresas = await this.empresasService.findAllCardsPublic(params);
        return (0, utils_1.OkRes)(res, { empresas });
    }
    async findAllCardsPrivate(params, req, res) {
        const isInvestigador = roles_const_1.ROLES_INVESTIGADORES.includes(req.user.rol);
        const idUsuario = isInvestigador ? req.user.sub : undefined;
        const empresas = await this.empresasService.findAllCardsPrivate(params, idUsuario);
        return (0, utils_1.OkRes)(res, { empresas });
    }
    async findOnePublic(idEmpresa, res) {
        const empresa = await this.empresasService.findOnePublic(idEmpresa);
        return (0, utils_1.OkRes)(res, { empresa });
    }
    async findOnePrivate(idEmpresa, req, res) {
        const isInvestigador = roles_const_1.ROLES_INVESTIGADORES.includes(req.user.rol);
        const idUsuario = isInvestigador ? req.user.sub : undefined;
        const empresa = await this.empresasService.findOnePrivate(idEmpresa, idUsuario);
        return (0, utils_1.OkRes)(res, { empresa });
    }
    async updateEmpresaPrivate(idEmpresa, data, res) {
        const empresa = await this.empresasService.updateEmpresa(idEmpresa, data);
        return (0, utils_1.OkRes)(res, { message: 'Empresa actualizada correctamente', empresa });
    }
    async deleteEmpresa(idEmpresa, res) {
        await this.empresasService.deleteEmpresa(idEmpresa);
        return (0, utils_1.OkRes)(res, { message: 'Empresa eliminada del sistema' });
    }
};
exports.EmpresasController = EmpresasController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.ADMIN_EMPRESAS])),
    (0, swagger_1.ApiOperation)({ summary: 'Api para obtener todas las empresas con detalle completo (solo admins)' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cards/public'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario sin sesion'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener las cads de las empresas',
        type: find_all_empresas_cards_pagination_response_dto_1.FindAllEmpresasCardsPaginationResponseDto
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof find_all_empresas_cards_public_params_dto_1.FindAllEmpresasCardsPublicParamsDto !== "undefined" && find_all_empresas_cards_public_params_dto_1.FindAllEmpresasCardsPublicParamsDto) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "findAllCardsPublic", null);
__decorate([
    (0, common_1.Get)('cards/private'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([...roles_const_1.ROLES_ADMIN_EMPRESAS, ...roles_const_1.ROLES_INVESTIGADORES])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario con sesion'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener las cads de las empresas',
        type: find_all_empresas_cards_pagination_response_dto_1.FindAllEmpresasCardsPaginationResponseDto
    }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    (0, common_1.Get)('cards/private'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([...roles_const_1.ROLES_ADMIN_EMPRESAS, ...roles_const_1.ROLES_INVESTIGADORES])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario con sesion'
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof find_all_empresas_cards_params_dto_1.FindAllEmpresasCardsParamsDto !== "undefined" && find_all_empresas_cards_params_dto_1.FindAllEmpresasCardsParamsDto) === "function" ? _e : Object, Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "findAllCardsPrivate", null);
__decorate([
    (0, common_1.Get)('public/:idEmpresa'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api paara buscar una empresa. para usuarios sin sesion',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de encontrar la empresa',
        type: find_one_empresa_public_dto_1.FindOneEmpresaPublicDto
    }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    __param(0, (0, common_1.Param)('idEmpresa', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "findOnePublic", null);
__decorate([
    (0, common_1.Get)('private/:idEmpresa'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([...roles_const_1.ROLES_ADMIN_EMPRESAS, ...roles_const_1.ROLES_INVESTIGADORES])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api paara buscar una empresa. para usuarios con sesion',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de encontrar la empresa',
        type: find_one_empresa_private_dto_1.FindOneEmpresaPrivateDto
    }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    (0, common_1.Get)('private/:idEmpresa'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([...roles_const_1.ROLES_ADMIN_EMPRESAS, ...roles_const_1.ROLES_INVESTIGADORES])),
    (0, swagger_1.ApiOperation)({
        summary: 'Api paara buscar una empresa. para usuarios con sesion',
    }),
    __param(0, (0, common_1.Param)('idEmpresa', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "findOnePrivate", null);
__decorate([
    (0, common_1.Put)('private/:idEmpresa'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_EMPRESAS)),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para actualizar/editar los datos de una empresa',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Empresa actualizada exitosamente' }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    __param(0, (0, common_1.Param)('idEmpresa', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "updateEmpresaPrivate", null);
__decorate([
    (0, common_1.Delete)(':idEmpresa'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_EMPRESAS)),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para eliminar o dar de baja una empresa',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Empresa eliminada exitosamente' }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    __param(0, (0, common_1.Param)('idEmpresa', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], EmpresasController.prototype, "deleteEmpresa", null);
exports.EmpresasController = EmpresasController = __decorate([
    (0, swagger_1.ApiTags)('Empresas'),
    (0, common_1.Controller)('api/empresas'),
    __metadata("design:paramtypes", [typeof (_a = typeof empresas_service_1.EmpresasService !== "undefined" && empresas_service_1.EmpresasService) === "function" ? _a : Object])
], EmpresasController);


/***/ }),

/***/ "./src/modules/empresas/dto/empresa-card.dto.ts":
/*!******************************************************!*\
  !*** ./src/modules/empresas/dto/empresa-card.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaCardDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const imagen_card_dto_1 = __webpack_require__(/*! ../modules/imagenes/dto/imagen-card.dto */ "./src/modules/empresas/modules/imagenes/dto/imagen-card.dto.ts");
const hito_public_dto_1 = __webpack_require__(/*! ../modules/hitos/dto/hito-public.dto */ "./src/modules/empresas/modules/hitos/dto/hito-public.dto.ts");
const departamento_public_dto_1 = __webpack_require__(/*! ../modules/departamentos/dto/departamento-public.dto */ "./src/modules/empresas/modules/departamentos/dto/departamento-public.dto.ts");
class EmpresaCardDto {
    id;
    nombreComercial;
    imagenes;
    hitos;
    sedeCentral;
}
exports.EmpresaCardDto = EmpresaCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresaCardDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nomnre comercial de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaCardDto.prototype, "nombreComercial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Imagnes de la empresa',
        type: [imagen_card_dto_1.ImagenCardDto]
    }),
    __metadata("design:type", Array)
], EmpresaCardDto.prototype, "imagenes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de hitsos de la empresa',
        type: [hito_public_dto_1.HitoPublicDto]
    }),
    __metadata("design:type", Array)
], EmpresaCardDto.prototype, "hitos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Depratamento central',
        type: departamento_public_dto_1.DepartamentoPublicDto
    }),
    __metadata("design:type", typeof (_a = typeof departamento_public_dto_1.DepartamentoPublicDto !== "undefined" && departamento_public_dto_1.DepartamentoPublicDto) === "function" ? _a : Object)
], EmpresaCardDto.prototype, "sedeCentral", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/empresa-private.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/empresas/dto/empresa-private.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const tamanio_empresa_private_dto_1 = __webpack_require__(/*! ../modules/tamanios-empresas/dto/tamanio-empresa-private.dto */ "./src/modules/empresas/modules/tamanios-empresas/dto/tamanio-empresa-private.dto.ts");
const rubro_empresa_private_dto_1 = __webpack_require__(/*! ../modules/rubros/modules/rubros-empresas/dto/rubro-empresa-private.dto */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-private.dto.ts");
const sede_private_dto_1 = __webpack_require__(/*! ../modules/sedes/dto/sede-private.dto */ "./src/modules/empresas/modules/sedes/dto/sede-private.dto.ts");
const municipio_private_dto_1 = __webpack_require__(/*! ../modules/municipios/dto/municipio-private.dto */ "./src/modules/empresas/modules/municipios/dto/municipio-private.dto.ts");
const servicio_private_dto_1 = __webpack_require__(/*! ../modules/servicios/dto/servicio-private.dto */ "./src/modules/empresas/modules/servicios/dto/servicio-private.dto.ts");
const item_private_dto_1 = __webpack_require__(/*! ../modules/items/dto/item-private.dto */ "./src/modules/empresas/modules/items/dto/item-private.dto.ts");
const empresa_tipo_societario_private_dto_1 = __webpack_require__(/*! ../modules/tipos-societarios/modules/empresas-tipos-societarios/dto/empresa-tipo-societario-private.dto */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/empresa-tipo-societario-private.dto.ts");
const hito_public_dto_1 = __webpack_require__(/*! ../modules/hitos/dto/hito-public.dto */ "./src/modules/empresas/modules/hitos/dto/hito-public.dto.ts");
const premio_private_dto_1 = __webpack_require__(/*! ../modules/premios/dto/premio-private.dto */ "./src/modules/empresas/modules/premios/dto/premio-private.dto.ts");
const familia_private_dto_1 = __webpack_require__(/*! ../modules/familias/dto/familia-private.dto */ "./src/modules/empresas/modules/familias/dto/familia-private.dto.ts");
const pais_dto_1 = __webpack_require__(/*! ../modules/paises/dto/pais.dto */ "./src/modules/empresas/modules/paises/dto/pais.dto.ts");
const fundador_dto_1 = __webpack_require__(/*! ../modules/fundadores/dto/fundador.dto */ "./src/modules/empresas/modules/fundadores/dto/fundador.dto.ts");
const imagen_card_dto_1 = __webpack_require__(/*! ../modules/imagenes/dto/imagen-card.dto */ "./src/modules/empresas/modules/imagenes/dto/imagen-card.dto.ts");
const implementacion_private_dto_1 = __webpack_require__(/*! ../modules/implementaciones/dto/implementacion-private.dto */ "./src/modules/empresas/modules/implementaciones/dto/implementacion-private.dto.ts");
class EmpresaPrivateDto {
    id;
    nombreComercial;
    fechaFundacion;
    vision;
    mision;
    direccionWeb;
    tamanioEmpresa;
    mensaje;
    actividad;
    rubrosEmpresa;
    sedes;
    municipios;
    servicios;
    items;
    tiposSocietariosEmpresa;
    hitos;
    premios;
    familias;
    paisesOperaInteranacionalmente;
    fundadores;
    imagenes;
    implementacion;
}
exports.EmpresaPrivateDto = EmpresaPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresaPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "nombreComercial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fundacion',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "fechaFundacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Vision de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "vision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mision de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "mision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Direccion web',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "direccionWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tmanio de la empresa',
        type: tamanio_empresa_private_dto_1.TamanioEmpresaPrivateDto
    }),
    __metadata("design:type", typeof (_a = typeof tamanio_empresa_private_dto_1.TamanioEmpresaPrivateDto !== "undefined" && tamanio_empresa_private_dto_1.TamanioEmpresaPrivateDto) === "function" ? _a : Object)
], EmpresaPrivateDto.prototype, "tamanioEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensaje de la empresas',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "mensaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Actividad de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPrivateDto.prototype, "actividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de rubros relacionados con la empresa',
        type: [rubro_empresa_private_dto_1.RubroEmpresaPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "rubrosEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sedes de la empresa',
        type: [sede_private_dto_1.SedePrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "sedes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Municipios donde se encuentra la empresa',
        type: [municipio_private_dto_1.MunicipioPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "municipios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Servicio de la empresa',
        type: [servicio_private_dto_1.ServicioPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "servicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Items de la empresa',
        type: [item_private_dto_1.ItemPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la relacion entre los tipos de societario y la empresa',
        type: [empresa_tipo_societario_private_dto_1.EmpresaTipoSocietarioPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "tiposSocietariosEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hitos de la empresa',
        type: [hito_public_dto_1.HitoPublicDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "hitos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Premios de la empresa',
        type: [premio_private_dto_1.PremioPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "premios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Familiar de la empresas',
        type: [familia_private_dto_1.FamiliaPrivateDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "familias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Paises en que la empresa opera internacionalmente',
        type: [pais_dto_1.PaisDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "paisesOperaInteranacionalmente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fundadore de la empresa',
        type: [fundador_dto_1.FundadorDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "fundadores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de url de imagenens de la empresa',
        type: [imagen_card_dto_1.ImagenCardDto]
    }),
    __metadata("design:type", Array)
], EmpresaPrivateDto.prototype, "imagenes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Implementacion de empresa',
        type: implementacion_private_dto_1.ImplementacionPrivateDto
    }),
    __metadata("design:type", typeof (_b = typeof implementacion_private_dto_1.ImplementacionPrivateDto !== "undefined" && implementacion_private_dto_1.ImplementacionPrivateDto) === "function" ? _b : Object)
], EmpresaPrivateDto.prototype, "implementacion", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/empresa-public.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/empresas/dto/empresa-public.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rubro_empresa_public_dto_1 = __webpack_require__(/*! ../modules/rubros/modules/rubros-empresas/dto/rubro-empresa-public.dto */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-public.dto.ts");
const departamento_public_dto_1 = __webpack_require__(/*! ../modules/departamentos/dto/departamento-public.dto */ "./src/modules/empresas/modules/departamentos/dto/departamento-public.dto.ts");
const hito_public_dto_1 = __webpack_require__(/*! ../modules/hitos/dto/hito-public.dto */ "./src/modules/empresas/modules/hitos/dto/hito-public.dto.ts");
class EmpresaPublicDto {
    id;
    nombreComercial;
    mensaje;
    rubrosEmpresa;
    departamento;
    imagenes;
    hitos;
}
exports.EmpresaPublicDto = EmpresaPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresaPublicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la empresa',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPublicDto.prototype, "nombreComercial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensaje de la empresas',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaPublicDto.prototype, "mensaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de rubros relacionados con la empresa',
        type: [rubro_empresa_public_dto_1.RubroEmpresaPublicDto]
    }),
    __metadata("design:type", Array)
], EmpresaPublicDto.prototype, "rubrosEmpresa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sede central de la empresa',
        type: departamento_public_dto_1.DepartamentoPublicDto
    }),
    __metadata("design:type", typeof (_a = typeof departamento_public_dto_1.DepartamentoPublicDto !== "undefined" && departamento_public_dto_1.DepartamentoPublicDto) === "function" ? _a : Object)
], EmpresaPublicDto.prototype, "departamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de url de imagenens de la empresa',
        type: [String]
    }),
    __metadata("design:type", Array)
], EmpresaPublicDto.prototype, "imagenes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hitos de la empresa',
        type: [hito_public_dto_1.HitoPublicDto]
    }),
    __metadata("design:type", Array)
], EmpresaPublicDto.prototype, "hitos", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/inputs/find-all-empresas-cards-params.dto.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/empresas/dto/inputs/find-all-empresas-cards-params.dto.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllEmpresasCardsParamsDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const find_all_empresas_cards_public_params_dto_1 = __webpack_require__(/*! ./find-all-empresas-cards-public-params.dto */ "./src/modules/empresas/dto/inputs/find-all-empresas-cards-public-params.dto.ts");
class FindAllEmpresasCardsParamsDto extends find_all_empresas_cards_public_params_dto_1.FindAllEmpresasCardsPublicParamsDto {
    rubros;
    departamentos;
    tiposSocietarios;
    antiguedad;
    fundador;
    getRubros() {
        if (typeof this.rubros === 'string') {
            return this.rubros
                .split(',')
                .map(v => Number(v.trim()))
                .filter(v => !isNaN(v));
        }
        return Array.isArray(this.rubros) ? this.rubros : [];
    }
    getDepartamentos() {
        if (typeof this.departamentos === 'string') {
            return this.departamentos
                .split(',')
                .map(v => Number(v.trim()))
                .filter(v => !isNaN(v));
        }
        return Array.isArray(this.departamentos) ? this.departamentos : [];
    }
    getTiposSocietarios() {
        if (typeof this.tiposSocietarios === 'string') {
            return this.tiposSocietarios
                .split(',')
                .map(v => Number(v.trim()))
                .filter(v => !isNaN(v));
        }
        return Array.isArray(this.tiposSocietarios) ? this.tiposSocietarios : [];
    }
    getAntiguedad() {
        return this.antiguedad;
    }
    getNombre() {
        return this.nombre;
    }
    getFundador() {
        return this.fundador || '';
    }
}
exports.FindAllEmpresasCardsParamsDto = FindAllEmpresasCardsParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de rubros separados por comas (ejemplo: "1,2,3"). Internamente se convierte a un array de números.',
        type: String,
        example: '1,2,3',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return [];
        return value
            .split(',')
            .map(v => Number(v.trim()))
            .filter(v => !isNaN(v));
    }),
    __metadata("design:type", String)
], FindAllEmpresasCardsParamsDto.prototype, "rubros", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de departamentos separados por comas (ejemplo: "4,7"). Internamente se convierte a un array de números.',
        type: String,
        example: '4,7',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return [];
        return value
            .split(',')
            .map(v => Number(v.trim()))
            .filter(v => !isNaN(v));
    }),
    __metadata("design:type", String)
], FindAllEmpresasCardsParamsDto.prototype, "departamentos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de tipos societarios separados por comas (ejemplo: "2,5"). Internamente se convierte a un array de números.',
        type: String,
        example: '2,5',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return [];
        return value
            .split(',')
            .map(v => Number(v.trim()))
            .filter(v => !isNaN(v));
    }),
    __metadata("design:type", String)
], FindAllEmpresasCardsParamsDto.prototype, "tiposSocietarios", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Antigüedad mínima en años desde la fecha de fundación de la empresa.',
        type: String,
        example: '10',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAllEmpresasCardsParamsDto.prototype, "antiguedad", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nombre del fundador (búsqueda exacta o parcial).',
        type: String,
        example: 'Juan Pérez',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllEmpresasCardsParamsDto.prototype, "fundador", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/inputs/find-all-empresas-cards-public-params.dto.ts":
/*!**************************************************************************************!*\
  !*** ./src/modules/empresas/dto/inputs/find-all-empresas-cards-public-params.dto.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllEmpresasCardsPublicParamsDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const pagination_params_dto_1 = __webpack_require__(/*! src/shared/dto/pagination-params.dto */ "./src/shared/dto/pagination-params.dto.ts");
class FindAllEmpresasCardsPublicParamsDto extends pagination_params_dto_1.PaginationParamsDto {
    nombre;
}
exports.FindAllEmpresasCardsPublicParamsDto = FindAllEmpresasCardsPublicParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nombre comercial de la empresa (búsqueda parcial, no sensible a mayúsculas).',
        type: String,
        example: 'TecnoSur',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllEmpresasCardsPublicParamsDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/outputs/find-all-empresas-cards-pagination-response.dto.ts":
/*!*********************************************************************************************!*\
  !*** ./src/modules/empresas/dto/outputs/find-all-empresas-cards-pagination-response.dto.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllEmpresasCardsPaginationResponseDto = void 0;
const pagination_response_dto_1 = __webpack_require__(/*! src/shared/dto/pagination-response.dto */ "./src/shared/dto/pagination-response.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const empresa_card_dto_1 = __webpack_require__(/*! ../empresa-card.dto */ "./src/modules/empresas/dto/empresa-card.dto.ts");
class FindAllEmpresasCardsPaginationResponseDto extends pagination_response_dto_1.PaginationResponseDto {
}
exports.FindAllEmpresasCardsPaginationResponseDto = FindAllEmpresasCardsPaginationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array de elementos de la página actual',
        type: empresa_card_dto_1.EmpresaCardDto,
        isArray: true,
    }),
    __metadata("design:type", Array)
], FindAllEmpresasCardsPaginationResponseDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/outputs/find-one-empresa-private.dto.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/dto/outputs/find-one-empresa-private.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindOneEmpresaPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const empresa_private_dto_1 = __webpack_require__(/*! ../empresa-private.dto */ "./src/modules/empresas/dto/empresa-private.dto.ts");
class FindOneEmpresaPrivateDto {
    empresa;
}
exports.FindOneEmpresaPrivateDto = FindOneEmpresaPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Empresa buscada',
        type: empresa_private_dto_1.EmpresaPrivateDto
    }),
    __metadata("design:type", typeof (_a = typeof empresa_private_dto_1.EmpresaPrivateDto !== "undefined" && empresa_private_dto_1.EmpresaPrivateDto) === "function" ? _a : Object)
], FindOneEmpresaPrivateDto.prototype, "empresa", void 0);


/***/ }),

/***/ "./src/modules/empresas/dto/outputs/find-one-empresa-public.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/dto/outputs/find-one-empresa-public.dto.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindOneEmpresaPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const empresa_public_dto_1 = __webpack_require__(/*! ../empresa-public.dto */ "./src/modules/empresas/dto/empresa-public.dto.ts");
class FindOneEmpresaPublicDto {
    empresa;
}
exports.FindOneEmpresaPublicDto = FindOneEmpresaPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Empresa buscada',
        type: empresa_public_dto_1.EmpresaPublicDto
    }),
    __metadata("design:type", typeof (_a = typeof empresa_public_dto_1.EmpresaPublicDto !== "undefined" && empresa_public_dto_1.EmpresaPublicDto) === "function" ? _a : Object)
], FindOneEmpresaPublicDto.prototype, "empresa", void 0);


/***/ }),

/***/ "./src/modules/empresas/empresas.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/empresas/empresas.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_service_1 = __webpack_require__(/*! ./services/empresas.service */ "./src/modules/empresas/services/empresas.service.ts");
const empresas_controller_1 = __webpack_require__(/*! ./api/empresas.controller */ "./src/modules/empresas/api/empresas.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_entity_1 = __webpack_require__(/*! ./entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const investigador_empresa_entity_1 = __webpack_require__(/*! src/modules/usuarios/entities/investigador-empresa.entity */ "./src/modules/usuarios/entities/investigador-empresa.entity.ts");
const acciones_module_1 = __webpack_require__(/*! ./modules/acciones/acciones.module */ "./src/modules/empresas/modules/acciones/acciones.module.ts");
const empresas_statistics_service_1 = __webpack_require__(/*! ./services/empresas-statistics.service */ "./src/modules/empresas/services/empresas-statistics.service.ts");
let EmpresasModule = class EmpresasModule {
};
exports.EmpresasModule = EmpresasModule;
exports.EmpresasModule = EmpresasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([empresa_entity_1.Empresa, investigador_empresa_entity_1.InvestigadorEmpresa]),
            acciones_module_1.AccionesModule
        ],
        controllers: [empresas_controller_1.EmpresasController],
        providers: [empresas_service_1.EmpresasService, empresas_statistics_service_1.EmpresasStatisticsService],
        exports: [empresas_service_1.EmpresasService, empresas_statistics_service_1.EmpresasStatisticsService]
    })
], EmpresasModule);


/***/ }),

/***/ "./src/modules/empresas/entities/empresa.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modules/empresas/entities/empresa.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empresa = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const sede_entity_1 = __webpack_require__(/*! ../modules/sedes/entities/sede.entity */ "./src/modules/empresas/modules/sedes/entities/sede.entity.ts");
const familia_entity_1 = __webpack_require__(/*! ../modules/familias/entities/familia.entity */ "./src/modules/empresas/modules/familias/entities/familia.entity.ts");
const fundador_entity_1 = __webpack_require__(/*! ../modules/fundadores/entities/fundador.entity */ "./src/modules/empresas/modules/fundadores/entities/fundador.entity.ts");
const hito_entity_1 = __webpack_require__(/*! ../modules/hitos/entities/hito.entity */ "./src/modules/empresas/modules/hitos/entities/hito.entity.ts");
const imagen_entity_1 = __webpack_require__(/*! ../modules/imagenes/entities/imagen.entity */ "./src/modules/empresas/modules/imagenes/entities/imagen.entity.ts");
const implementacion_entity_1 = __webpack_require__(/*! ../modules/implementaciones/entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
const item_entity_1 = __webpack_require__(/*! ../modules/items/entities/item.entity */ "./src/modules/empresas/modules/items/entities/item.entity.ts");
const municipio_empresa_entity_1 = __webpack_require__(/*! ../modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts");
const municipio_entity_1 = __webpack_require__(/*! ../modules/municipios/entities/municipio.entity */ "./src/modules/empresas/modules/municipios/entities/municipio.entity.ts");
const operacion_internacional_entity_1 = __webpack_require__(/*! ../modules/operaciones-internacionales/entities/operacion-internacional.entity */ "./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts");
const premio_entity_1 = __webpack_require__(/*! ../modules/premios/entities/premio.entity */ "./src/modules/empresas/modules/premios/entities/premio.entity.ts");
const rubro_empresa_entity_1 = __webpack_require__(/*! ../modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts");
const servicio_entity_1 = __webpack_require__(/*! ../modules/servicios/entities/servicio.entity */ "./src/modules/empresas/modules/servicios/entities/servicio.entity.ts");
const tamanio_empresa_entity_1 = __webpack_require__(/*! ../modules/tamanios-empresas/entities/tamanio-empresa.entity */ "./src/modules/empresas/modules/tamanios-empresas/entities/tamanio-empresa.entity.ts");
const empresa_tipo_societario_entity_1 = __webpack_require__(/*! ../modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts");
const pais_entity_1 = __webpack_require__(/*! ../modules/paises/entities/pais.entity */ "./src/modules/empresas/modules/paises/entities/pais.entity.ts");
let Empresa = class Empresa {
    id;
    nombreComercial;
    fechaFundacion;
    vision;
    mision;
    direccionWeb;
    actividad;
    idTamanio;
    mensaje;
    sedes;
    familias;
    fundadores;
    hitos;
    imagenes;
    implementacion;
    items;
    municipiosEmpresas;
    municipios;
    operacionesInternacionales;
    paisesOperaInteranacionalmente;
    premios;
    rubrosEmpresa;
    servicios;
    tamanioEmpresa;
    tiposSocietariosEmpresa;
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_empresa' }),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_comercial' }),
    __metadata("design:type", String)
], Empresa.prototype, "nombreComercial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_fundacion' }),
    __metadata("design:type", String)
], Empresa.prototype, "fechaFundacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'vision' }),
    __metadata("design:type", String)
], Empresa.prototype, "vision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'mision' }),
    __metadata("design:type", String)
], Empresa.prototype, "mision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'direccion_web' }),
    __metadata("design:type", String)
], Empresa.prototype, "direccionWeb", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'actividad' }),
    __metadata("design:type", String)
], Empresa.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_tamanio' }),
    __metadata("design:type", Number)
], Empresa.prototype, "idTamanio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'mensaje' }),
    __metadata("design:type", String)
], Empresa.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sede_entity_1.Sede, (sede) => sede.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "sedes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => familia_entity_1.Familia, (familia) => familia.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "familias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fundador_entity_1.Fundador, (fundador) => fundador.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "fundadores", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hito_entity_1.Hito, (hito) => hito.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "hitos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => imagen_entity_1.Imagen, (imagen) => imagen.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "imagenes", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => implementacion_entity_1.Implementacion, (imple) => imple.empresa),
    __metadata("design:type", typeof (_a = typeof implementacion_entity_1.Implementacion !== "undefined" && implementacion_entity_1.Implementacion) === "function" ? _a : Object)
], Empresa.prototype, "implementacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.Item, (item) => item.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => municipio_empresa_entity_1.MunicipioEmpresa, (muniEmpre) => muniEmpre.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "municipiosEmpresas", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => municipio_entity_1.Municipio, (municipio) => municipio.empresas),
    (0, typeorm_1.JoinTable)({
        name: 'municipios_empresas',
        joinColumn: { name: 'id_empresa' },
        inverseJoinColumn: { name: 'id_municipio' }
    }),
    __metadata("design:type", Array)
], Empresa.prototype, "municipios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => operacion_internacional_entity_1.OperacionInternacional, (operacionInternacional) => operacionInternacional.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "operacionesInternacionales", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => pais_entity_1.Pais, (pais) => pais.empresas),
    (0, typeorm_1.JoinTable)({
        name: 'operaciones_internacionales',
        joinColumn: { name: 'id_empresa' },
        inverseJoinColumn: { name: 'id_pais' }
    }),
    __metadata("design:type", Array)
], Empresa.prototype, "paisesOperaInteranacionalmente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => premio_entity_1.Premio, (premio) => premio.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "premios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rubro_empresa_entity_1.RubroEmpresa, (rubroEmpresa) => rubroEmpresa.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "rubrosEmpresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => servicio_entity_1.Servicio, (servicio) => servicio.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "servicios", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tamanio_empresa_entity_1.TamanioEmpresa, (tam) => tam.empresas),
    (0, typeorm_1.JoinColumn)({ name: 'id_tamanio' }),
    __metadata("design:type", typeof (_b = typeof tamanio_empresa_entity_1.TamanioEmpresa !== "undefined" && tamanio_empresa_entity_1.TamanioEmpresa) === "function" ? _b : Object)
], Empresa.prototype, "tamanioEmpresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => empresa_tipo_societario_entity_1.EmpresaTipoSocietario, (empre) => empre.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "tiposSocietariosEmpresa", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)('empresas')
], Empresa);


/***/ }),

/***/ "./src/modules/empresas/exceptions/empresa-not-found.exception.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/exceptions/empresa-not-found.exception.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaNotFoundException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class EmpresaNotFoundException extends common_1.NotFoundException {
    constructor(idEmpresa) {
        super({
            message: `La empresa con id = ${idEmpresa} non existe`
        });
    }
}
exports.EmpresaNotFoundException = EmpresaNotFoundException;


/***/ }),

/***/ "./src/modules/empresas/find-templates/empresa-private.template.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/find-templates/empresa-private.template.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaPrivateTemplateRelations = exports.EmpresaPrivateTemplateSelect = void 0;
exports.EmpresaPrivateTemplateSelect = {
    id: true,
    nombreComercial: true,
    fechaFundacion: true,
    vision: true,
    mision: true,
    direccionWeb: true,
    tamanioEmpresa: {
        id: true,
        nombre: true,
    },
    mensaje: true,
    actividad: true,
    rubrosEmpresa: {
        id: true,
        rubro: {
            id: true,
            nombre: true,
            esPropio: true
        },
        esActivo: true,
    },
    sedes: {
        id: true,
        departamento: {
            id: true,
            nombre: true,
        },
        esCentral: true
    },
    municipios: {
        id: true,
        nombreMunicipio: true,
    },
    servicios: {
        id: true,
        nombre: true,
    },
    items: {
        id: true,
        nombre: true,
    },
    tiposSocietariosEmpresa: {
        id: true,
        tipoSocietario: {
            id: true,
            nombre: true,
            esPropio: true,
        },
        esActivo: true,
        fechaCambio: true,
    },
    hitos: {
        id: true,
        nombre: true,
        fecha: true,
    },
    premios: {
        id: true,
        nombre: true,
        esPremio: true,
        esNacional: true,
    },
    familias: {
        id: true,
        esFamiliar: true,
        anio: true
    },
    paisesOperaInteranacionalmente: {
        id: true,
        nombre: true
    },
    fundadores: {
        id: true,
        nombre: true
    },
    imagenes: {
        id: true,
        url: true,
    },
    implementacion: {
        id: true,
        anio: true,
        implementacionesAcciones: {
            id: true,
            accion: {
                id: true,
                nombre: true
            },
            proyectos: {
                id: true,
                nombre: true
            },
        },
        tiposAcciones: {
            id: true,
            nombre: true
        }
    }
};
exports.EmpresaPrivateTemplateRelations = {
    tamanioEmpresa: true,
    rubrosEmpresa: {
        rubro: true,
    },
    sedes: {
        departamento: true,
    },
    municipios: true,
    servicios: true,
    items: true,
    tiposSocietariosEmpresa: {
        tipoSocietario: true,
    },
    hitos: true,
    premios: true,
    familias: true,
    paisesOperaInteranacionalmente: true,
    fundadores: true,
    imagenes: true,
    implementacion: {
        implementacionesAcciones: {
            accion: true,
            proyectos: true
        },
        tiposAcciones: true
    }
};


/***/ }),

/***/ "./src/modules/empresas/find-templates/empresa-public.template.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/find-templates/empresa-public.template.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaPublicTemplateRelations = exports.EmpresaPublicTemplateSelect = void 0;
exports.EmpresaPublicTemplateSelect = {
    id: true,
    nombreComercial: true,
    mensaje: true,
    rubrosEmpresa: {
        id: true,
        rubro: {
            id: true,
            nombre: true,
        },
        esActivo: true,
    },
    sedes: {
        id: true,
        departamento: {
            id: true,
            nombre: true,
        },
        esCentral: true
    },
    imagenes: {
        id: true,
        url: true,
    },
    hitos: {
        id: true,
        nombre: true,
        fecha: true,
    },
};
exports.EmpresaPublicTemplateRelations = {
    rubrosEmpresa: {
        rubro: true,
    },
    sedes: {
        departamento: true,
    },
    imagenes: true,
    hitos: true,
};


/***/ }),

/***/ "./src/modules/empresas/modules/acciones/acciones.controller.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/acciones/acciones.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acciones_service_1 = __webpack_require__(/*! ./acciones.service */ "./src/modules/empresas/modules/acciones/acciones.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let AccionesController = class AccionesController {
    accionesService;
    constructor(accionesService) {
        this.accionesService = accionesService;
    }
    async findAll(res) {
        const acciones = await this.accionesService.findAll();
        return (0, utils_1.OkRes)(res, {
            acciones: acciones,
        });
    }
};
exports.AccionesController = AccionesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AccionesController.prototype, "findAll", null);
exports.AccionesController = AccionesController = __decorate([
    (0, swagger_1.ApiTags)('Acciones'),
    (0, common_1.Controller)('api/acciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof acciones_service_1.AccionesService !== "undefined" && acciones_service_1.AccionesService) === "function" ? _a : Object])
], AccionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/acciones/acciones.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/empresas/modules/acciones/acciones.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acciones_service_1 = __webpack_require__(/*! ./acciones.service */ "./src/modules/empresas/modules/acciones/acciones.service.ts");
const acciones_controller_1 = __webpack_require__(/*! ./acciones.controller */ "./src/modules/empresas/modules/acciones/acciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const accione_entity_1 = __webpack_require__(/*! ./entities/accione.entity */ "./src/modules/empresas/modules/acciones/entities/accione.entity.ts");
let AccionesModule = class AccionesModule {
};
exports.AccionesModule = AccionesModule;
exports.AccionesModule = AccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([accione_entity_1.Accion])],
        controllers: [acciones_controller_1.AccionesController],
        providers: [acciones_service_1.AccionesService],
    })
], AccionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/acciones/acciones.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/acciones/acciones.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const accione_entity_1 = __webpack_require__(/*! ./entities/accione.entity */ "./src/modules/empresas/modules/acciones/entities/accione.entity.ts");
let AccionesService = class AccionesService {
    accionRepository;
    constructor(accionRepository) {
        this.accionRepository = accionRepository;
    }
    findAll() {
        return this.accionRepository.find();
    }
};
exports.AccionesService = AccionesService;
exports.AccionesService = AccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(accione_entity_1.Accion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AccionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/acciones/entities/accione.entity.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/acciones/entities/accione.entity.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Accion = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Accion = class Accion {
    id_accion;
    nombre;
};
exports.Accion = Accion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_accion' }),
    __metadata("design:type", Number)
], Accion.prototype, "id_accion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Accion.prototype, "nombre", void 0);
exports.Accion = Accion = __decorate([
    (0, typeorm_1.Entity)({ name: 'acciones' })
], Accion);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/api/departamentos.controller.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/api/departamentos.controller.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartamentosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const departamentos_service_1 = __webpack_require__(/*! ../services/departamentos.service */ "./src/modules/empresas/modules/departamentos/services/departamentos.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let DepartamentosController = class DepartamentosController {
    departamentosService;
    constructor(departamentosService) {
        this.departamentosService = departamentosService;
    }
    async findAll(res) {
        const departamentos = await this.departamentosService.findAll();
        return (0, utils_1.OkRes)(res, {
            departamentos: departamentos
        });
    }
};
exports.DepartamentosController = DepartamentosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], DepartamentosController.prototype, "findAll", null);
exports.DepartamentosController = DepartamentosController = __decorate([
    (0, swagger_1.ApiTags)('Departamentos'),
    (0, common_1.Controller)('api/departamentos'),
    __metadata("design:paramtypes", [typeof (_a = typeof departamentos_service_1.DepartamentosService !== "undefined" && departamentos_service_1.DepartamentosService) === "function" ? _a : Object])
], DepartamentosController);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/departamentos.module.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/departamentos.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartamentosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const departamentos_service_1 = __webpack_require__(/*! ./services/departamentos.service */ "./src/modules/empresas/modules/departamentos/services/departamentos.service.ts");
const departamentos_controller_1 = __webpack_require__(/*! ./api/departamentos.controller */ "./src/modules/empresas/modules/departamentos/api/departamentos.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const departamento_entity_1 = __webpack_require__(/*! ./entities/departamento.entity */ "./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts");
const departamentos_statistics_service_1 = __webpack_require__(/*! ./services/departamentos-statistics.service */ "./src/modules/empresas/modules/departamentos/services/departamentos-statistics.service.ts");
let DepartamentosModule = class DepartamentosModule {
};
exports.DepartamentosModule = DepartamentosModule;
exports.DepartamentosModule = DepartamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([departamento_entity_1.Departamento])
        ],
        controllers: [departamentos_controller_1.DepartamentosController],
        providers: [
            departamentos_service_1.DepartamentosService,
            departamentos_statistics_service_1.DepartamentosStatisticsService,
        ],
        exports: [
            departamentos_service_1.DepartamentosService,
            departamentos_statistics_service_1.DepartamentosStatisticsService,
        ]
    })
], DepartamentosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/dto/departamento-public.dto.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/dto/departamento-public.dto.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartamentoPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class DepartamentoPublicDto {
    id;
    nombre;
}
exports.DepartamentoPublicDto = DepartamentoPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del departamento',
        type: Number
    }),
    __metadata("design:type", Number)
], DepartamentoPublicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del departamento',
        type: String
    }),
    __metadata("design:type", String)
], DepartamentoPublicDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Departamento = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const sede_entity_1 = __webpack_require__(/*! ../../sedes/entities/sede.entity */ "./src/modules/empresas/modules/sedes/entities/sede.entity.ts");
let Departamento = class Departamento {
    id;
    nombre;
    sedes;
};
exports.Departamento = Departamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_departamento' }),
    __metadata("design:type", Number)
], Departamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, name: 'nombre_depto' }),
    __metadata("design:type", String)
], Departamento.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sede_entity_1.Sede, (sede) => sede.departamento),
    __metadata("design:type", Array)
], Departamento.prototype, "sedes", void 0);
exports.Departamento = Departamento = __decorate([
    (0, typeorm_1.Entity)('departamentos')
], Departamento);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/services/departamentos-statistics.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/services/departamentos-statistics.service.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartamentosStatisticsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const departamento_entity_1 = __webpack_require__(/*! ../entities/departamento.entity */ "./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let DepartamentosStatisticsService = class DepartamentosStatisticsService {
    depertamentoRepository;
    constructor(depertamentoRepository) {
        this.depertamentoRepository = depertamentoRepository;
    }
    async cedePrincipalPorDepatamento() {
        const query = this.depertamentoRepository
            .createQueryBuilder("departamento")
            .leftJoin("departamento.sedes", "sede")
            .leftJoin("sede.empresa", "empresa")
            .select("departamento.id", "idDepartamento")
            .addSelect("departamento.nombre", "nombreDepartamento")
            .addSelect("COUNT(DISTINCT empresa.id)", "cantidadEmpresas")
            .groupBy("departamento.id")
            .addGroupBy("departamento.nombre")
            .orderBy("departamento.nombre", "ASC");
        const resultados = await query.getRawMany();
        return resultados.map((row) => ({
            idDepartamento: Number(row.idDepartamento),
            nombreDepartamento: row.nombreDepartamento,
            cantidadEmpresas: Number(row.cantidadEmpresas),
        }));
    }
};
exports.DepartamentosStatisticsService = DepartamentosStatisticsService;
exports.DepartamentosStatisticsService = DepartamentosStatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], DepartamentosStatisticsService);


/***/ }),

/***/ "./src/modules/empresas/modules/departamentos/services/departamentos.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/modules/empresas/modules/departamentos/services/departamentos.service.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartamentosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const departamento_entity_1 = __webpack_require__(/*! ../entities/departamento.entity */ "./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let DepartamentosService = class DepartamentosService {
    departamentoRepository;
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }
    create(createDepartamentoDto) {
        return 'This action adds a new departamento';
    }
    async findAll() {
        const departamentos = await this.departamentoRepository.find({
            select: {
                id: true,
                nombre: true
            }
        });
        return departamentos;
    }
    async findManyByIds(ids) {
        const departamentos = await this.departamentoRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        const encontradosIds = departamentos.map(dep => dep.id);
        const idsNoEncontrados = ids.filter(id => !encontradosIds.includes(id));
        if (idsNoEncontrados.length > 0) {
            throw new common_1.NotFoundException({
                message: 'Algunos IDs de departamentos no se encontraron',
            });
        }
        return departamentos;
    }
    async findOne(id, options = {}) {
        if (Number.isNaN(id) || id === 0) {
            throw new common_1.BadRequestException({
                message: 'Id de tamanio de empresa invalido'
            });
        }
        const dep = await this.departamentoRepository.findOne({
            where: {
                id: id
            }
        });
        if (!dep && options.throwException) {
            throw new common_1.NotFoundException({
                message: 'No se encontro el tamanio de la empresa'
            });
        }
        return dep;
    }
    update(id, updateDepartamentoDto) {
        return `This action updates a #${id} departamento`;
    }
    remove(id) {
        return `This action removes a #${id} departamento`;
    }
};
exports.DepartamentosService = DepartamentosService;
exports.DepartamentosService = DepartamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], DepartamentosService);


/***/ }),

/***/ "./src/modules/empresas/modules/familias/api/familias.controller.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/api/familias.controller.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamiliasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const familias_service_1 = __webpack_require__(/*! ../services/familias.service */ "./src/modules/empresas/modules/familias/services/familias.service.ts");
const create_familia_dto_1 = __webpack_require__(/*! ../dto/create-familia.dto */ "./src/modules/empresas/modules/familias/dto/create-familia.dto.ts");
const update_familia_dto_1 = __webpack_require__(/*! ../dto/update-familia.dto */ "./src/modules/empresas/modules/familias/dto/update-familia.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let FamiliasController = class FamiliasController {
    familiasService;
    constructor(familiasService) {
        this.familiasService = familiasService;
    }
    create(createFamiliaDto) {
        return this.familiasService.create(createFamiliaDto);
    }
    findAll() {
        return this.familiasService.findAll();
    }
    findOne(id) {
        return this.familiasService.findOne(+id);
    }
    update(id, updateFamiliaDto) {
        return this.familiasService.update(+id, updateFamiliaDto);
    }
    remove(id) {
        return this.familiasService.remove(+id);
    }
};
exports.FamiliasController = FamiliasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_familia_dto_1.CreateFamiliaDto !== "undefined" && create_familia_dto_1.CreateFamiliaDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FamiliasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FamiliasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_familia_dto_1.UpdateFamiliaDto !== "undefined" && update_familia_dto_1.UpdateFamiliaDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], FamiliasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamiliasController.prototype, "remove", null);
exports.FamiliasController = FamiliasController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/familias'),
    __metadata("design:paramtypes", [typeof (_a = typeof familias_service_1.FamiliasService !== "undefined" && familias_service_1.FamiliasService) === "function" ? _a : Object])
], FamiliasController);


/***/ }),

/***/ "./src/modules/empresas/modules/familias/dto/create-familia.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/dto/create-familia.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFamiliaDto = void 0;
class CreateFamiliaDto {
    idEmpresa;
    esFamiliar;
    anio;
}
exports.CreateFamiliaDto = CreateFamiliaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/familias/dto/familia-private.dto.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/dto/familia-private.dto.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamiliaPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class FamiliaPrivateDto {
    id;
    esFamiliar;
    anio;
}
exports.FamiliaPrivateDto = FamiliaPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de familiar',
        type: Number
    }),
    __metadata("design:type", Number)
], FamiliaPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si es familiar',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], FamiliaPrivateDto.prototype, "esFamiliar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha si es que alguna vez fue familiar',
        type: Number,
        nullable: true
    }),
    __metadata("design:type", Number)
], FamiliaPrivateDto.prototype, "anio", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/familias/dto/update-familia.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/dto/update-familia.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFamiliaDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_familia_dto_1 = __webpack_require__(/*! ./create-familia.dto */ "./src/modules/empresas/modules/familias/dto/create-familia.dto.ts");
class UpdateFamiliaDto extends (0, mapped_types_1.PartialType)(create_familia_dto_1.CreateFamiliaDto) {
}
exports.UpdateFamiliaDto = UpdateFamiliaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/familias/entities/familia.entity.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/entities/familia.entity.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Familia = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Familia = class Familia {
    id;
    idEmpresa;
    esFamiliar;
    anio;
    empresa;
};
exports.Familia = Familia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_familia' }),
    __metadata("design:type", Number)
], Familia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Familia.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_familiar' }),
    __metadata("design:type", Boolean)
], Familia.prototype, "esFamiliar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'anio' }),
    __metadata("design:type", Number)
], Familia.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.familias),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Familia.prototype, "empresa", void 0);
exports.Familia = Familia = __decorate([
    (0, typeorm_1.Entity)('familias')
], Familia);


/***/ }),

/***/ "./src/modules/empresas/modules/familias/familias.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/familias.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamiliasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const familias_service_1 = __webpack_require__(/*! ./services/familias.service */ "./src/modules/empresas/modules/familias/services/familias.service.ts");
const familias_controller_1 = __webpack_require__(/*! ./api/familias.controller */ "./src/modules/empresas/modules/familias/api/familias.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const familia_entity_1 = __webpack_require__(/*! ./entities/familia.entity */ "./src/modules/empresas/modules/familias/entities/familia.entity.ts");
let FamiliasModule = class FamiliasModule {
};
exports.FamiliasModule = FamiliasModule;
exports.FamiliasModule = FamiliasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([familia_entity_1.Familia])
        ],
        controllers: [familias_controller_1.FamiliasController],
        providers: [familias_service_1.FamiliasService],
        exports: [familias_service_1.FamiliasService]
    })
], FamiliasModule);


/***/ }),

/***/ "./src/modules/empresas/modules/familias/services/familias.service.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/familias/services/familias.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamiliasService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const familia_entity_1 = __webpack_require__(/*! ../entities/familia.entity */ "./src/modules/empresas/modules/familias/entities/familia.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let FamiliasService = class FamiliasService {
    familiaRepository;
    constructor(familiaRepository) {
        this.familiaRepository = familiaRepository;
    }
    create(createFamiliaDto) {
        return 'This action adds a new familia';
    }
    async createTransaction(manager, data) {
        const familia = new familia_entity_1.Familia();
        familia.idEmpresa = data.idEmpresa;
        familia.esFamiliar = data.esFamiliar;
        familia.anio = data.anio;
        return await manager.getRepository(familia_entity_1.Familia).save(familia);
    }
    findAll() {
        return `This action returns all familias`;
    }
    findOne(id) {
        return `This action returns a #${id} familia`;
    }
    update(id, updateFamiliaDto) {
        return `This action updates a #${id} familia`;
    }
    remove(id) {
        return `This action removes a #${id} familia`;
    }
};
exports.FamiliasService = FamiliasService;
exports.FamiliasService = FamiliasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(familia_entity_1.Familia)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], FamiliasService);


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/api/fundadores.controller.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/api/fundadores.controller.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FundadoresController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const fundadores_service_1 = __webpack_require__(/*! ../services/fundadores.service */ "./src/modules/empresas/modules/fundadores/services/fundadores.service.ts");
const update_fundadore_dto_1 = __webpack_require__(/*! ../dto/update-fundadore.dto */ "./src/modules/empresas/modules/fundadores/dto/update-fundadore.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let FundadoresController = class FundadoresController {
    fundadoresService;
    constructor(fundadoresService) {
        this.fundadoresService = fundadoresService;
    }
    findAll() {
        return this.fundadoresService.findAll();
    }
    findOne(id) {
        return this.fundadoresService.findOne(+id);
    }
    update(id, updateFundadoreDto) {
        return this.fundadoresService.update(+id, updateFundadoreDto);
    }
    remove(id) {
        return this.fundadoresService.remove(+id);
    }
};
exports.FundadoresController = FundadoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FundadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FundadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_fundadore_dto_1.UpdateFundadoreDto !== "undefined" && update_fundadore_dto_1.UpdateFundadoreDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FundadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FundadoresController.prototype, "remove", null);
exports.FundadoresController = FundadoresController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/fundadores'),
    __metadata("design:paramtypes", [typeof (_a = typeof fundadores_service_1.FundadoresService !== "undefined" && fundadores_service_1.FundadoresService) === "function" ? _a : Object])
], FundadoresController);


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/dto/create-fundadore.dto.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/dto/create-fundadore.dto.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFundadoreDto = void 0;
class CreateFundadoreDto {
    idEmpresa;
    fundadores;
}
exports.CreateFundadoreDto = CreateFundadoreDto;


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/dto/fundador.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/dto/fundador.dto.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FundadorDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class FundadorDto {
    id;
    nombre;
}
exports.FundadorDto = FundadorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del fundador',
        type: Number
    }),
    __metadata("design:type", Number)
], FundadorDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del fundador',
        type: String
    }),
    __metadata("design:type", String)
], FundadorDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/dto/update-fundadore.dto.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/dto/update-fundadore.dto.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFundadoreDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_fundadore_dto_1 = __webpack_require__(/*! ./create-fundadore.dto */ "./src/modules/empresas/modules/fundadores/dto/create-fundadore.dto.ts");
class UpdateFundadoreDto extends (0, mapped_types_1.PartialType)(create_fundadore_dto_1.CreateFundadoreDto) {
}
exports.UpdateFundadoreDto = UpdateFundadoreDto;


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/entities/fundador.entity.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/entities/fundador.entity.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Fundador = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Fundador = class Fundador {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.Fundador = Fundador;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_fundador' }),
    __metadata("design:type", Number)
], Fundador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_completo' }),
    __metadata("design:type", String)
], Fundador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Fundador.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.fundadores),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Fundador.prototype, "empresa", void 0);
exports.Fundador = Fundador = __decorate([
    (0, typeorm_1.Entity)('fundadores')
], Fundador);


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/fundadores.module.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/fundadores.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FundadoresModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const fundadores_service_1 = __webpack_require__(/*! ./services/fundadores.service */ "./src/modules/empresas/modules/fundadores/services/fundadores.service.ts");
const fundadores_controller_1 = __webpack_require__(/*! ./api/fundadores.controller */ "./src/modules/empresas/modules/fundadores/api/fundadores.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const fundador_entity_1 = __webpack_require__(/*! ./entities/fundador.entity */ "./src/modules/empresas/modules/fundadores/entities/fundador.entity.ts");
let FundadoresModule = class FundadoresModule {
};
exports.FundadoresModule = FundadoresModule;
exports.FundadoresModule = FundadoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([fundador_entity_1.Fundador])
        ],
        controllers: [fundadores_controller_1.FundadoresController],
        providers: [fundadores_service_1.FundadoresService],
        exports: [fundadores_service_1.FundadoresService]
    })
], FundadoresModule);


/***/ }),

/***/ "./src/modules/empresas/modules/fundadores/services/fundadores.service.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/empresas/modules/fundadores/services/fundadores.service.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FundadoresService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const fundador_entity_1 = __webpack_require__(/*! ../entities/fundador.entity */ "./src/modules/empresas/modules/fundadores/entities/fundador.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let FundadoresService = class FundadoresService {
    fundadorRepository;
    constructor(fundadorRepository) {
        this.fundadorRepository = fundadorRepository;
    }
    async createTransaction(maneger, data) {
        let fundadores = data.fundadores.map((fundador) => ({
            idEmpresa: data.idEmpresa,
            nombre: fundador
        }));
        const repo = await maneger.getRepository(fundador_entity_1.Fundador);
        const newFundadores = await repo.save(fundadores);
        return newFundadores;
    }
    findAll() {
        return `This action returns all fundadores`;
    }
    findOne(id) {
        return `This action returns a #${id} fundadore`;
    }
    update(id, updateFundadoreDto) {
        return `This action updates a #${id} fundadore`;
    }
    remove(id) {
        return `This action removes a #${id} fundadore`;
    }
};
exports.FundadoresService = FundadoresService;
exports.FundadoresService = FundadoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fundador_entity_1.Fundador)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], FundadoresService);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/api/hitos.controller.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/api/hitos.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const hitos_service_1 = __webpack_require__(/*! ../services/hitos.service */ "./src/modules/empresas/modules/hitos/services/hitos.service.ts");
const create_hito_dto_1 = __webpack_require__(/*! ../dto/create-hito.dto */ "./src/modules/empresas/modules/hitos/dto/create-hito.dto.ts");
const update_hito_dto_1 = __webpack_require__(/*! ../dto/update-hito.dto */ "./src/modules/empresas/modules/hitos/dto/update-hito.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let HitosController = class HitosController {
    hitosService;
    constructor(hitosService) {
        this.hitosService = hitosService;
    }
    create(createHitoDto) {
        return this.hitosService.create(createHitoDto);
    }
    findAll() {
        return this.hitosService.findAll();
    }
    findOne(id) {
        return this.hitosService.findOne(+id);
    }
    update(id, updateHitoDto) {
        return this.hitosService.update(+id, updateHitoDto);
    }
    remove(id) {
        return this.hitosService.remove(+id);
    }
};
exports.HitosController = HitosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_hito_dto_1.CreateHitoDto !== "undefined" && create_hito_dto_1.CreateHitoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], HitosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HitosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HitosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_hito_dto_1.UpdateHitoDto !== "undefined" && update_hito_dto_1.UpdateHitoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], HitosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HitosController.prototype, "remove", null);
exports.HitosController = HitosController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/hitos'),
    __metadata("design:paramtypes", [typeof (_a = typeof hitos_service_1.HitosService !== "undefined" && hitos_service_1.HitosService) === "function" ? _a : Object])
], HitosController);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/dto/create-hito.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/dto/create-hito.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateHitoDto = void 0;
class CreateHitoDto {
    idEmpresa;
    hitos;
}
exports.CreateHitoDto = CreateHitoDto;


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/dto/hito-public.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/dto/hito-public.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitoPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class HitoPublicDto {
    id;
    nombre;
    fecha;
}
exports.HitoPublicDto = HitoPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del hito de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], HitoPublicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del hito',
        type: String
    }),
    __metadata("design:type", String)
], HitoPublicDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha del hito',
        type: String
    }),
    __metadata("design:type", String)
], HitoPublicDto.prototype, "fecha", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/dto/update-hito.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/dto/update-hito.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateHitoDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_hito_dto_1 = __webpack_require__(/*! ./create-hito.dto */ "./src/modules/empresas/modules/hitos/dto/create-hito.dto.ts");
class UpdateHitoDto extends (0, mapped_types_1.PartialType)(create_hito_dto_1.CreateHitoDto) {
}
exports.UpdateHitoDto = UpdateHitoDto;


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/entities/hito.entity.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/entities/hito.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hito = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Hito = class Hito {
    id;
    idEmpresa;
    descripcion;
    fecha;
    nombre;
    empresa;
};
exports.Hito = Hito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_hito' }),
    __metadata("design:type", Number)
], Hito.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Hito.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'descripcion' }),
    __metadata("design:type", String)
], Hito.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_h' }),
    __metadata("design:type", String)
], Hito.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, name: 'nombre' }),
    __metadata("design:type", String)
], Hito.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa => empresa.hitos)),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Hito.prototype, "empresa", void 0);
exports.Hito = Hito = __decorate([
    (0, typeorm_1.Entity)('hitos')
], Hito);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/hitos.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/hitos.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const hitos_service_1 = __webpack_require__(/*! ./services/hitos.service */ "./src/modules/empresas/modules/hitos/services/hitos.service.ts");
const hitos_controller_1 = __webpack_require__(/*! ./api/hitos.controller */ "./src/modules/empresas/modules/hitos/api/hitos.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const hito_entity_1 = __webpack_require__(/*! ./entities/hito.entity */ "./src/modules/empresas/modules/hitos/entities/hito.entity.ts");
const hitos_statistic_service_1 = __webpack_require__(/*! ./services/hitos-statistic.service */ "./src/modules/empresas/modules/hitos/services/hitos-statistic.service.ts");
let HitosModule = class HitosModule {
};
exports.HitosModule = HitosModule;
exports.HitosModule = HitosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([hito_entity_1.Hito])
        ],
        controllers: [hitos_controller_1.HitosController],
        providers: [hitos_service_1.HitosService, hitos_statistic_service_1.HitosStatisticService],
        exports: [hitos_service_1.HitosService, hitos_statistic_service_1.HitosStatisticService]
    })
], HitosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/services/hitos-statistic.service.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/services/hitos-statistic.service.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitosStatisticService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const hito_entity_1 = __webpack_require__(/*! ../entities/hito.entity */ "./src/modules/empresas/modules/hitos/entities/hito.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let HitosStatisticService = class HitosStatisticService {
    hitoRepository;
    constructor(hitoRepository) {
        this.hitoRepository = hitoRepository;
    }
    async obtenerTotalesPorAnio() {
        const resultados = await this.hitoRepository
            .createQueryBuilder('hito')
            .select("EXTRACT(YEAR FROM hito.fecha)", "anio")
            .addSelect("COUNT(*)", "total")
            .groupBy("anio")
            .orderBy("anio", "ASC")
            .getRawMany();
        return resultados.map(r => ({
            anio: Number(r.anio),
            total: Number(r.total),
        }));
    }
};
exports.HitosStatisticService = HitosStatisticService;
exports.HitosStatisticService = HitosStatisticService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hito_entity_1.Hito)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], HitosStatisticService);


/***/ }),

/***/ "./src/modules/empresas/modules/hitos/services/hitos.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/hitos/services/hitos.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const hito_entity_1 = __webpack_require__(/*! ../entities/hito.entity */ "./src/modules/empresas/modules/hitos/entities/hito.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let HitosService = class HitosService {
    hitoRepository;
    constructor(hitoRepository) {
        this.hitoRepository = hitoRepository;
    }
    create(createHitoDto) {
        return 'This action adds a new hito';
    }
    async createTransaction(manager, data) {
        const hitos = data.hitos.map(h => ({
            idEmpresa: data.idEmpresa,
            ...h
        }));
        return await manager.getRepository(hito_entity_1.Hito).save(hitos);
    }
    findAll() {
        return `This action returns all hitos`;
    }
    findOne(id) {
        return `This action returns a #${id} hito`;
    }
    update(id, updateHitoDto) {
        return `This action updates a #${id} hito`;
    }
    remove(id) {
        return `This action removes a #${id} hito`;
    }
};
exports.HitosService = HitosService;
exports.HitosService = HitosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hito_entity_1.Hito)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], HitosService);


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/api/imagenes.controller.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/api/imagenes.controller.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagenesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const imagenes_service_1 = __webpack_require__(/*! ../services/imagenes.service */ "./src/modules/empresas/modules/imagenes/services/imagenes.service.ts");
const create_imagene_dto_1 = __webpack_require__(/*! ../dto/create-imagene.dto */ "./src/modules/empresas/modules/imagenes/dto/create-imagene.dto.ts");
const update_imagene_dto_1 = __webpack_require__(/*! ../dto/update-imagene.dto */ "./src/modules/empresas/modules/imagenes/dto/update-imagene.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ImagenesController = class ImagenesController {
    imagenesService;
    constructor(imagenesService) {
        this.imagenesService = imagenesService;
    }
    create(createImageneDto) {
        return this.imagenesService.create(createImageneDto);
    }
    findAll() {
        return this.imagenesService.findAll();
    }
    findOne(id) {
        return this.imagenesService.findOne(+id);
    }
    update(id, updateImageneDto) {
        return this.imagenesService.update(+id, updateImageneDto);
    }
    remove(id) {
        return this.imagenesService.remove(+id);
    }
    getByEmpresa(idEmpresa) {
        return this.imagenesService.getByEmpresaId(+idEmpresa);
    }
};
exports.ImagenesController = ImagenesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_imagene_dto_1.CreateImageneDto !== "undefined" && create_imagene_dto_1.CreateImageneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_imagene_dto_1.UpdateImageneDto !== "undefined" && update_imagene_dto_1.UpdateImageneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('empresa/:idEmpresa'),
    __param(0, (0, common_1.Param)('idEmpresa')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImagenesController.prototype, "getByEmpresa", null);
exports.ImagenesController = ImagenesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/imagenes'),
    __metadata("design:paramtypes", [typeof (_a = typeof imagenes_service_1.ImagenesService !== "undefined" && imagenes_service_1.ImagenesService) === "function" ? _a : Object])
], ImagenesController);


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/dto/create-imagene.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/dto/create-imagene.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateImageneDto = void 0;
class CreateImageneDto {
    idEmpresa;
    imagenes;
}
exports.CreateImageneDto = CreateImageneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/dto/imagen-card.dto.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/dto/imagen-card.dto.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagenCardDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ImagenCardDto {
    id;
    url;
}
exports.ImagenCardDto = ImagenCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la imagen de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], ImagenCardDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Url de la imagen',
        type: String
    }),
    __metadata("design:type", String)
], ImagenCardDto.prototype, "url", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/dto/update-imagene.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/dto/update-imagene.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateImageneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_imagene_dto_1 = __webpack_require__(/*! ./create-imagene.dto */ "./src/modules/empresas/modules/imagenes/dto/create-imagene.dto.ts");
class UpdateImageneDto extends (0, mapped_types_1.PartialType)(create_imagene_dto_1.CreateImageneDto) {
}
exports.UpdateImageneDto = UpdateImageneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/entities/imagen.entity.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/entities/imagen.entity.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Imagen = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Imagen = class Imagen {
    id;
    idEmpresa;
    url;
    empresa;
};
exports.Imagen = Imagen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_imagen' }),
    __metadata("design:type", Number)
], Imagen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Imagen.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, name: 'url' }),
    __metadata("design:type", String)
], Imagen.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.imagenes),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Imagen.prototype, "empresa", void 0);
exports.Imagen = Imagen = __decorate([
    (0, typeorm_1.Entity)('imagenes')
], Imagen);


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/imagenes.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/imagenes.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagenesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const imagenes_service_1 = __webpack_require__(/*! ./services/imagenes.service */ "./src/modules/empresas/modules/imagenes/services/imagenes.service.ts");
const imagenes_controller_1 = __webpack_require__(/*! ./api/imagenes.controller */ "./src/modules/empresas/modules/imagenes/api/imagenes.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const imagen_entity_1 = __webpack_require__(/*! ./entities/imagen.entity */ "./src/modules/empresas/modules/imagenes/entities/imagen.entity.ts");
let ImagenesModule = class ImagenesModule {
};
exports.ImagenesModule = ImagenesModule;
exports.ImagenesModule = ImagenesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([imagen_entity_1.Imagen])
        ],
        controllers: [imagenes_controller_1.ImagenesController],
        providers: [imagenes_service_1.ImagenesService],
        exports: [imagenes_service_1.ImagenesService]
    })
], ImagenesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/imagenes/services/imagenes.service.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/imagenes/services/imagenes.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagenesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const imagen_entity_1 = __webpack_require__(/*! ../entities/imagen.entity */ "./src/modules/empresas/modules/imagenes/entities/imagen.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let ImagenesService = class ImagenesService {
    imagenRepository;
    constructor(imagenRepository) {
        this.imagenRepository = imagenRepository;
    }
    create(createImageneDto) {
        return 'This action adds a new imagene';
    }
    async createTransaction(manger, data) {
        const repo = manger.getRepository(imagen_entity_1.Imagen);
        const imagenes = data.imagenes.map((imagen) => ({
            idEmpresa: data.idEmpresa,
            url: imagen
        }));
        return await repo.save(imagenes);
    }
    findAll() {
        return `This action returns all imagenes`;
    }
    findOne(id) {
        return `This action returns a #${id} imagene`;
    }
    update(id, updateImageneDto) {
        return `This action updates a #${id} imagene`;
    }
    remove(id) {
        return `This action removes a #${id} imagene`;
    }
    async getByEmpresaId(idEmpresa) {
        const imagenes = await this.imagenRepository.find({
            where: { idEmpresa },
        });
        if (!imagenes || imagenes.length === 0) {
            return { mensaje: `No se encontraron imágenes para la empresa con id ${idEmpresa}` };
        }
        return imagenes;
    }
};
exports.ImagenesService = ImagenesService;
exports.ImagenesService = ImagenesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(imagen_entity_1.Imagen)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ImagenesService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/api/implementaciones.controller.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/api/implementaciones.controller.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const implementaciones_service_1 = __webpack_require__(/*! ../services/implementaciones.service */ "./src/modules/empresas/modules/implementaciones/services/implementaciones.service.ts");
const create_implementacione_dto_1 = __webpack_require__(/*! ../dto/create-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/dto/create-implementacione.dto.ts");
const update_implementacione_dto_1 = __webpack_require__(/*! ../dto/update-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/dto/update-implementacione.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ImplementacionesController = class ImplementacionesController {
    implementacionesService;
    constructor(implementacionesService) {
        this.implementacionesService = implementacionesService;
    }
    create(createImplementacioneDto) {
        return this.implementacionesService.create(createImplementacioneDto);
    }
    findAll() {
        return this.implementacionesService.findAll();
    }
    findOne(id) {
        return this.implementacionesService.findOne(+id);
    }
    update(id, updateImplementacioneDto) {
        return this.implementacionesService.update(+id, updateImplementacioneDto);
    }
    remove(id) {
        return this.implementacionesService.remove(+id);
    }
};
exports.ImplementacionesController = ImplementacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_implementacione_dto_1.CreateImplementacioneDto !== "undefined" && create_implementacione_dto_1.CreateImplementacioneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ImplementacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImplementacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImplementacionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_implementacione_dto_1.UpdateImplementacioneDto !== "undefined" && update_implementacione_dto_1.UpdateImplementacioneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ImplementacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImplementacionesController.prototype, "remove", null);
exports.ImplementacionesController = ImplementacionesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/implementaciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof implementaciones_service_1.ImplementacionesService !== "undefined" && implementaciones_service_1.ImplementacionesService) === "function" ? _a : Object])
], ImplementacionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/dto/create-implementacione.dto.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/dto/create-implementacione.dto.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateImplementacioneDto = void 0;
const register_implementacion_dto_1 = __webpack_require__(/*! src/app/services/formulario/dto/implementacion/register-implementacion.dto */ "./src/app/services/formulario/dto/implementacion/register-implementacion.dto.ts");
class CreateImplementacioneDto extends register_implementacion_dto_1.RegisterImplementacionDto {
    idEmpresa;
}
exports.CreateImplementacioneDto = CreateImplementacioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/dto/implementacion-private.dto.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/dto/implementacion-private.dto.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const implementacion_accion_dto_1 = __webpack_require__(/*! ../modules/acciones/modules/implementaciones-acciones/dto/implementacion-accion.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/implementacion-accion.dto.ts");
const tipo_accion_dto_1 = __webpack_require__(/*! ../modules/tipos-acciones/dto/tipo-accion.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/tipo-accion.dto.ts");
class ImplementacionPrivateDto {
    id;
    anio;
    implementacionesAcciones;
    tiposAcciones;
}
exports.ImplementacionPrivateDto = ImplementacionPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la implemantacion de la empresas',
        type: Number
    }),
    __metadata("design:type", Number)
], ImplementacionPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Anio de implementacion',
        type: Number
    }),
    __metadata("design:type", Number)
], ImplementacionPrivateDto.prototype, "anio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Implemantaciones de acciones',
        type: [implementacion_accion_dto_1.ImplementacionAccionDto]
    }),
    __metadata("design:type", typeof (_a = typeof implementacion_accion_dto_1.ImplementacionAccionDto !== "undefined" && implementacion_accion_dto_1.ImplementacionAccionDto) === "function" ? _a : Object)
], ImplementacionPrivateDto.prototype, "implementacionesAcciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipos de acciones relacionada',
        type: [tipo_accion_dto_1.TipoAccionDto]
    }),
    __metadata("design:type", Array)
], ImplementacionPrivateDto.prototype, "tiposAcciones", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/dto/update-implementacione.dto.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/dto/update-implementacione.dto.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateImplementacioneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_implementacione_dto_1 = __webpack_require__(/*! ./create-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/dto/create-implementacione.dto.ts");
class UpdateImplementacioneDto extends (0, mapped_types_1.PartialType)(create_implementacione_dto_1.CreateImplementacioneDto) {
}
exports.UpdateImplementacioneDto = UpdateImplementacioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Implementacion = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const implementacion_accion_entity_1 = __webpack_require__(/*! ../modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts");
const tipo_accion_implementacion_entity_1 = __webpack_require__(/*! ../modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts");
const tipo_accion_entity_1 = __webpack_require__(/*! ../modules/tipos-acciones/entities/tipo-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts");
let Implementacion = class Implementacion {
    id;
    anio;
    idEmpresa;
    empresa;
    implementacionesAcciones;
    tiposAccionesImplementaciones;
    tiposAcciones;
};
exports.Implementacion = Implementacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_implementacion' }),
    __metadata("design:type", Number)
], Implementacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'anio' }),
    __metadata("design:type", Number)
], Implementacion.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Implementacion.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.implementacion),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Implementacion.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => implementacion_accion_entity_1.ImplementacionAccion, (impleAcc) => impleAcc.implementacion),
    __metadata("design:type", Array)
], Implementacion.prototype, "implementacionesAcciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tipo_accion_implementacion_entity_1.TipoAccionImplementacion, (tiAccImple) => tiAccImple.implementacion),
    __metadata("design:type", Array)
], Implementacion.prototype, "tiposAccionesImplementaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tipo_accion_entity_1.TipoAccion, (tipoAccion) => tipoAccion.implementaciones),
    (0, typeorm_1.JoinTable)({
        name: 'tipos_acciones_implementaciones',
        joinColumn: { name: 'id_implementacion' },
        inverseJoinColumn: { name: 'id_tipo_accion' }
    }),
    __metadata("design:type", Array)
], Implementacion.prototype, "tiposAcciones", void 0);
exports.Implementacion = Implementacion = __decorate([
    (0, typeorm_1.Entity)('implementaciones')
], Implementacion);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/implementaciones.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/implementaciones.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const implementaciones_service_1 = __webpack_require__(/*! ./services/implementaciones.service */ "./src/modules/empresas/modules/implementaciones/services/implementaciones.service.ts");
const implementaciones_controller_1 = __webpack_require__(/*! ./api/implementaciones.controller */ "./src/modules/empresas/modules/implementaciones/api/implementaciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const implementacion_entity_1 = __webpack_require__(/*! ./entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
const tipos_acciones_implementaciones_module_1 = __webpack_require__(/*! ./modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module.ts");
const implementaciones_acciones_module_1 = __webpack_require__(/*! ./modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module.ts");
let ImplementacionesModule = class ImplementacionesModule {
};
exports.ImplementacionesModule = ImplementacionesModule;
exports.ImplementacionesModule = ImplementacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([implementacion_entity_1.Implementacion]),
            tipos_acciones_implementaciones_module_1.TiposAccionesImplementacionesModule,
            implementaciones_acciones_module_1.ImplementacionesAccionesModule
        ],
        controllers: [implementaciones_controller_1.ImplementacionesController],
        providers: [implementaciones_service_1.ImplementacionesService],
        exports: [implementaciones_service_1.ImplementacionesService]
    })
], ImplementacionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/acciones.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/acciones.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acciones_service_1 = __webpack_require__(/*! ./services/acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/services/acciones.service.ts");
const acciones_controller_1 = __webpack_require__(/*! ./api/acciones.controller */ "./src/modules/empresas/modules/implementaciones/modules/acciones/api/acciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const accion_entity_1 = __webpack_require__(/*! ./entities/accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/entities/accion.entity.ts");
let AccionesModule = class AccionesModule {
};
exports.AccionesModule = AccionesModule;
exports.AccionesModule = AccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([accion_entity_1.Accion])
        ],
        controllers: [acciones_controller_1.AccionesController],
        providers: [acciones_service_1.AccionesService],
        exports: [acciones_service_1.AccionesService]
    })
], AccionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/api/acciones.controller.ts":
/*!***************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/api/acciones.controller.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const acciones_service_1 = __webpack_require__(/*! ../services/acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/services/acciones.service.ts");
const create_accione_dto_1 = __webpack_require__(/*! ../dto/create-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/create-accione.dto.ts");
const update_accione_dto_1 = __webpack_require__(/*! ../dto/update-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/update-accione.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let AccionesController = class AccionesController {
    accionesService;
    constructor(accionesService) {
        this.accionesService = accionesService;
    }
    create(createAccioneDto) {
        return this.accionesService.create(createAccioneDto);
    }
    findAll() {
        return this.accionesService.findAll();
    }
    findOne(id) {
        return this.accionesService.findOne(+id);
    }
    update(id, updateAccioneDto) {
        return this.accionesService.update(+id, updateAccioneDto);
    }
    remove(id) {
        return this.accionesService.remove(+id);
    }
};
exports.AccionesController = AccionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_accione_dto_1.CreateAccioneDto !== "undefined" && create_accione_dto_1.CreateAccioneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_accione_dto_1.UpdateAccioneDto !== "undefined" && update_accione_dto_1.UpdateAccioneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AccionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccionesController.prototype, "remove", null);
exports.AccionesController = AccionesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/acciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof acciones_service_1.AccionesService !== "undefined" && acciones_service_1.AccionesService) === "function" ? _a : Object])
], AccionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/accion.dto.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/dto/accion.dto.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class AccionDto {
    id;
    nombre;
}
exports.AccionDto = AccionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id de la accion',
        type: Number
    }),
    __metadata("design:type", Number)
], AccionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la accion',
        type: String
    }),
    __metadata("design:type", String)
], AccionDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/create-accione.dto.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/dto/create-accione.dto.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAccioneDto = void 0;
class CreateAccioneDto {
}
exports.CreateAccioneDto = CreateAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/update-accione.dto.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/dto/update-accione.dto.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAccioneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_accione_dto_1 = __webpack_require__(/*! ./create-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/create-accione.dto.ts");
class UpdateAccioneDto extends (0, mapped_types_1.PartialType)(create_accione_dto_1.CreateAccioneDto) {
}
exports.UpdateAccioneDto = UpdateAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/entities/accion.entity.ts":
/*!**************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/entities/accion.entity.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Accion = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const implementacion_accion_entity_1 = __webpack_require__(/*! ../modules/implementaciones-acciones/entities/implementacion-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts");
let Accion = class Accion {
    id;
    nombre;
    implementacionesAcciones;
};
exports.Accion = Accion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_accion' }),
    __metadata("design:type", Number)
], Accion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, name: 'nombre' }),
    __metadata("design:type", String)
], Accion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => implementacion_accion_entity_1.ImplementacionAccion, (impleAcc) => impleAcc.accion),
    __metadata("design:type", Array)
], Accion.prototype, "implementacionesAcciones", void 0);
exports.Accion = Accion = __decorate([
    (0, typeorm_1.Entity)('acciones')
], Accion);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/api/implementaciones-acciones.controller.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/api/implementaciones-acciones.controller.ts ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesAccionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const implementaciones_acciones_service_1 = __webpack_require__(/*! ../services/implementaciones-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service.ts");
const create_implementaciones_accione_dto_1 = __webpack_require__(/*! ../dto/create-implementaciones-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/create-implementaciones-accione.dto.ts");
const update_implementaciones_accione_dto_1 = __webpack_require__(/*! ../dto/update-implementaciones-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/update-implementaciones-accione.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ImplementacionesAccionesController = class ImplementacionesAccionesController {
    implementacionesAccionesService;
    constructor(implementacionesAccionesService) {
        this.implementacionesAccionesService = implementacionesAccionesService;
    }
    create(createImplementacionesAccioneDto) {
        return this.implementacionesAccionesService.create(createImplementacionesAccioneDto);
    }
    findAll() {
        return this.implementacionesAccionesService.findAll();
    }
    findOne(id) {
        return this.implementacionesAccionesService.findOne(+id);
    }
    update(id, updateImplementacionesAccioneDto) {
        return this.implementacionesAccionesService.update(+id, updateImplementacionesAccioneDto);
    }
    remove(id) {
        return this.implementacionesAccionesService.remove(+id);
    }
};
exports.ImplementacionesAccionesController = ImplementacionesAccionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_implementaciones_accione_dto_1.CreateImplementacionesAccioneDto !== "undefined" && create_implementaciones_accione_dto_1.CreateImplementacionesAccioneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ImplementacionesAccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImplementacionesAccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImplementacionesAccionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_implementaciones_accione_dto_1.UpdateImplementacionesAccioneDto !== "undefined" && update_implementaciones_accione_dto_1.UpdateImplementacionesAccioneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ImplementacionesAccionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImplementacionesAccionesController.prototype, "remove", null);
exports.ImplementacionesAccionesController = ImplementacionesAccionesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/implementaciones-acciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof implementaciones_acciones_service_1.ImplementacionesAccionesService !== "undefined" && implementaciones_acciones_service_1.ImplementacionesAccionesService) === "function" ? _a : Object])
], ImplementacionesAccionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/create-implementaciones-accione.dto.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/create-implementaciones-accione.dto.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateImplementacionesAccioneDto = void 0;
class CreateImplementacionesAccioneDto {
    idImplementacion;
    acciones;
}
exports.CreateImplementacionesAccioneDto = CreateImplementacionesAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/implementacion-accion.dto.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/implementacion-accion.dto.ts ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionAccionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const accion_dto_1 = __webpack_require__(/*! ../../../dto/accion.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/dto/accion.dto.ts");
const proyecto_dto_1 = __webpack_require__(/*! ../../proyectos/dto/proyecto.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/proyecto.dto.ts");
class ImplementacionAccionDto {
    id;
    accion;
    proyectos;
}
exports.ImplementacionAccionDto = ImplementacionAccionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la accion implentada',
        type: Number
    }),
    __metadata("design:type", Number)
], ImplementacionAccionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Implemantacion de acciones',
        type: accion_dto_1.AccionDto
    }),
    __metadata("design:type", typeof (_a = typeof accion_dto_1.AccionDto !== "undefined" && accion_dto_1.AccionDto) === "function" ? _a : Object)
], ImplementacionAccionDto.prototype, "accion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Proyectos relacionados a la accion',
        type: [proyecto_dto_1.ProyectoDto]
    }),
    __metadata("design:type", Array)
], ImplementacionAccionDto.prototype, "proyectos", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/update-implementaciones-accione.dto.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/update-implementaciones-accione.dto.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateImplementacionesAccioneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_implementaciones_accione_dto_1 = __webpack_require__(/*! ./create-implementaciones-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/dto/create-implementaciones-accione.dto.ts");
class UpdateImplementacionesAccioneDto extends (0, mapped_types_1.PartialType)(create_implementaciones_accione_dto_1.CreateImplementacionesAccioneDto) {
}
exports.UpdateImplementacionesAccioneDto = UpdateImplementacionesAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionAccion = void 0;
const implementacion_entity_1 = __webpack_require__(/*! src/modules/empresas/modules/implementaciones/entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const accion_entity_1 = __webpack_require__(/*! ../../../entities/accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/entities/accion.entity.ts");
const proyecto_entity_1 = __webpack_require__(/*! ../../proyectos/entities/proyecto.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/entities/proyecto.entity.ts");
let ImplementacionAccion = class ImplementacionAccion {
    id;
    idAccion;
    idImplementacion;
    implementacion;
    accion;
    proyectos;
};
exports.ImplementacionAccion = ImplementacionAccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_implementacion_accion' }),
    __metadata("design:type", Number)
], ImplementacionAccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_accion' }),
    __metadata("design:type", Number)
], ImplementacionAccion.prototype, "idAccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_implementacion' }),
    __metadata("design:type", Number)
], ImplementacionAccion.prototype, "idImplementacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => implementacion_entity_1.Implementacion, (imple) => imple.implementacionesAcciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_implementacion' }),
    __metadata("design:type", typeof (_a = typeof implementacion_entity_1.Implementacion !== "undefined" && implementacion_entity_1.Implementacion) === "function" ? _a : Object)
], ImplementacionAccion.prototype, "implementacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => accion_entity_1.Accion, (accion) => accion.implementacionesAcciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_accion' }),
    __metadata("design:type", typeof (_b = typeof accion_entity_1.Accion !== "undefined" && accion_entity_1.Accion) === "function" ? _b : Object)
], ImplementacionAccion.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_entity_1.Proyecto, (proy) => proy.implementacionAccion),
    __metadata("design:type", Array)
], ImplementacionAccion.prototype, "proyectos", void 0);
exports.ImplementacionAccion = ImplementacionAccion = __decorate([
    (0, typeorm_1.Entity)('implementaciones_acciones')
], ImplementacionAccion);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module.ts ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesAccionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const implementaciones_acciones_service_1 = __webpack_require__(/*! ./services/implementaciones-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service.ts");
const implementaciones_acciones_controller_1 = __webpack_require__(/*! ./api/implementaciones-acciones.controller */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/api/implementaciones-acciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const implementacion_accion_entity_1 = __webpack_require__(/*! ./entities/implementacion-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts");
const acciones_module_1 = __webpack_require__(/*! ../../acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/acciones.module.ts");
const proyectos_module_1 = __webpack_require__(/*! ../proyectos/proyectos.module */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module.ts");
let ImplementacionesAccionesModule = class ImplementacionesAccionesModule {
};
exports.ImplementacionesAccionesModule = ImplementacionesAccionesModule;
exports.ImplementacionesAccionesModule = ImplementacionesAccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([implementacion_accion_entity_1.ImplementacionAccion]),
            acciones_module_1.AccionesModule,
            proyectos_module_1.ProyectosModule
        ],
        controllers: [implementaciones_acciones_controller_1.ImplementacionesAccionesController],
        providers: [implementaciones_acciones_service_1.ImplementacionesAccionesService],
        exports: [implementaciones_acciones_service_1.ImplementacionesAccionesService]
    })
], ImplementacionesAccionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service.ts ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesAccionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const implementacion_accion_entity_1 = __webpack_require__(/*! ../entities/implementacion-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const acciones_service_1 = __webpack_require__(/*! ../../../services/acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/services/acciones.service.ts");
const proyectos_service_1 = __webpack_require__(/*! ../../proyectos/services/proyectos.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/services/proyectos.service.ts");
let ImplementacionesAccionesService = class ImplementacionesAccionesService {
    implementacionAccionRepository;
    accionesService;
    proyectosService;
    constructor(implementacionAccionRepository, accionesService, proyectosService) {
        this.implementacionAccionRepository = implementacionAccionRepository;
        this.accionesService = accionesService;
        this.proyectosService = proyectosService;
    }
    create(createImplementacionesAccioneDto) {
        return 'This action adds a new implementacionesAccione';
    }
    async createTransaction(manager, data) {
        await this.accionesService.findManyByIds(data.acciones.map(a => a.id));
        const accionesSaved = [];
        for (const accion of data.acciones) {
            const implementacionAccionSaved = await this.saveImplementacionAccion(manager, data, accion);
            await this.proyectosService.createTransaction(manager, {
                idImplementacionAccion: implementacionAccionSaved.id,
                proyectos: accion.proyectos
            });
            accionesSaved.push(implementacionAccionSaved);
        }
        return accionesSaved;
    }
    async saveImplementacionAccion(manager, data, accion) {
        return manager.getRepository(implementacion_accion_entity_1.ImplementacionAccion).save({
            idImplementacion: data.idImplementacion,
            idAccion: accion.id
        });
    }
    findAll() {
        return `This action returns all implementacionesAcciones`;
    }
    findOne(id) {
        return `This action returns a #${id} implementacionesAccione`;
    }
    update(id, updateImplementacionesAccioneDto) {
        return `This action updates a #${id} implementacionesAccione`;
    }
    remove(id) {
        return `This action removes a #${id} implementacionesAccione`;
    }
};
exports.ImplementacionesAccionesService = ImplementacionesAccionesService;
exports.ImplementacionesAccionesService = ImplementacionesAccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(implementacion_accion_entity_1.ImplementacionAccion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof acciones_service_1.AccionesService !== "undefined" && acciones_service_1.AccionesService) === "function" ? _b : Object, typeof (_c = typeof proyectos_service_1.ProyectosService !== "undefined" && proyectos_service_1.ProyectosService) === "function" ? _c : Object])
], ImplementacionesAccionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/api/proyectos.controller.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/api/proyectos.controller.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const proyectos_service_1 = __webpack_require__(/*! ../services/proyectos.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/services/proyectos.service.ts");
const create_proyecto_dto_1 = __webpack_require__(/*! ../dto/create-proyecto.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/create-proyecto.dto.ts");
const update_proyecto_dto_1 = __webpack_require__(/*! ../dto/update-proyecto.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/update-proyecto.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ProyectosController = class ProyectosController {
    proyectosService;
    constructor(proyectosService) {
        this.proyectosService = proyectosService;
    }
    create(createProyectoDto) {
        return this.proyectosService.create(createProyectoDto);
    }
    findAll() {
        return this.proyectosService.findAll();
    }
    findOne(id) {
        return this.proyectosService.findOne(+id);
    }
    update(id, updateProyectoDto) {
        return this.proyectosService.update(+id, updateProyectoDto);
    }
    remove(id) {
        return this.proyectosService.remove(+id);
    }
};
exports.ProyectosController = ProyectosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_proyecto_dto_1.CreateProyectoDto !== "undefined" && create_proyecto_dto_1.CreateProyectoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_proyecto_dto_1.UpdateProyectoDto !== "undefined" && update_proyecto_dto_1.UpdateProyectoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "remove", null);
exports.ProyectosController = ProyectosController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/proyectos'),
    __metadata("design:paramtypes", [typeof (_a = typeof proyectos_service_1.ProyectosService !== "undefined" && proyectos_service_1.ProyectosService) === "function" ? _a : Object])
], ProyectosController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/create-proyecto.dto.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/create-proyecto.dto.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProyectoDto = void 0;
class CreateProyectoDto {
    idImplementacionAccion;
    proyectos;
}
exports.CreateProyectoDto = CreateProyectoDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/proyecto.dto.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/proyecto.dto.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectoDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ProyectoDto {
    id;
    nombre;
}
exports.ProyectoDto = ProyectoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del proyecto',
        type: Number
    }),
    __metadata("design:type", Number)
], ProyectoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del proyecto',
        type: String
    }),
    __metadata("design:type", String)
], ProyectoDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/update-proyecto.dto.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/update-proyecto.dto.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProyectoDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_proyecto_dto_1 = __webpack_require__(/*! ./create-proyecto.dto */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/dto/create-proyecto.dto.ts");
class UpdateProyectoDto extends (0, mapped_types_1.PartialType)(create_proyecto_dto_1.CreateProyectoDto) {
}
exports.UpdateProyectoDto = UpdateProyectoDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/entities/proyecto.entity.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/entities/proyecto.entity.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Proyecto = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const implementacion_accion_entity_1 = __webpack_require__(/*! ../../implementaciones-acciones/entities/implementacion-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/entities/implementacion-accion.entity.ts");
let Proyecto = class Proyecto {
    id;
    nombre;
    idImplementacionAccion;
    implementacionAccion;
};
exports.Proyecto = Proyecto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_proyecto' }),
    __metadata("design:type", Number)
], Proyecto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, name: 'nombre' }),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_implementacion_accion' }),
    __metadata("design:type", Number)
], Proyecto.prototype, "idImplementacionAccion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => implementacion_accion_entity_1.ImplementacionAccion, (impleAcc) => impleAcc.proyectos),
    (0, typeorm_1.JoinColumn)({ name: 'id_implementacion_accion' }),
    __metadata("design:type", typeof (_a = typeof implementacion_accion_entity_1.ImplementacionAccion !== "undefined" && implementacion_accion_entity_1.ImplementacionAccion) === "function" ? _a : Object)
], Proyecto.prototype, "implementacionAccion", void 0);
exports.Proyecto = Proyecto = __decorate([
    (0, typeorm_1.Entity)('proyectos')
], Proyecto);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const proyectos_service_1 = __webpack_require__(/*! ./services/proyectos.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/services/proyectos.service.ts");
const proyectos_controller_1 = __webpack_require__(/*! ./api/proyectos.controller */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/api/proyectos.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const proyecto_entity_1 = __webpack_require__(/*! ./entities/proyecto.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/entities/proyecto.entity.ts");
let ProyectosModule = class ProyectosModule {
};
exports.ProyectosModule = ProyectosModule;
exports.ProyectosModule = ProyectosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([proyecto_entity_1.Proyecto])
        ],
        controllers: [proyectos_controller_1.ProyectosController],
        providers: [proyectos_service_1.ProyectosService],
        exports: [proyectos_service_1.ProyectosService]
    })
], ProyectosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/services/proyectos.service.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/services/proyectos.service.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProyectosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const proyecto_entity_1 = __webpack_require__(/*! ../entities/proyecto.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/entities/proyecto.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let ProyectosService = class ProyectosService {
    proyectosRepository;
    constructor(proyectosRepository) {
        this.proyectosRepository = proyectosRepository;
    }
    create(createProyectoDto) {
        return 'This action adds a new proyecto';
    }
    async createTransaction(manager, data) {
        const proyectos = data.proyectos.map(p => ({
            idImplementacionAccion: data.idImplementacionAccion,
            nombre: p
        }));
        return await manager.getRepository(proyecto_entity_1.Proyecto).save(proyectos);
    }
    findAll() {
        return `This action returns all proyectos`;
    }
    findOne(id) {
        return `This action returns a #${id} proyecto`;
    }
    update(id, updateProyectoDto) {
        return `This action updates a #${id} proyecto`;
    }
    remove(id) {
        return `This action removes a #${id} proyecto`;
    }
};
exports.ProyectosService = ProyectosService;
exports.ProyectosService = ProyectosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proyecto_entity_1.Proyecto)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProyectosService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/acciones/services/acciones.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/acciones/services/acciones.service.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const accion_entity_1 = __webpack_require__(/*! ../entities/accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/acciones/entities/accion.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let AccionesService = class AccionesService {
    accionRepository;
    constructor(accionRepository) {
        this.accionRepository = accionRepository;
    }
    create(createAccioneDto) {
        return 'This action adds a new accione';
    }
    async findManyByIds(ids) {
        const acciones = await this.accionRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        const foundIds = acciones.map(a => a.id);
        const notFoundIds = ids.filter(id => !foundIds.includes(id));
        if (notFoundIds.length > 0) {
            throw new common_1.NotFoundException({
                message: `No se encontraron los siguientes ids: ${notFoundIds.join(', ')}`
            });
        }
        return acciones;
    }
    findAll() {
        return `This action returns all acciones`;
    }
    findOne(id) {
        return `This action returns a #${id} accione`;
    }
    update(id, updateAccioneDto) {
        return `This action updates a #${id} accione`;
    }
    remove(id) {
        return `This action removes a #${id} accione`;
    }
};
exports.AccionesService = AccionesService;
exports.AccionesService = AccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(accion_entity_1.Accion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AccionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/api/tipos-acciones.controller.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/api/tipos-acciones.controller.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_acciones_service_1 = __webpack_require__(/*! ../services/tipos-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/services/tipos-acciones.service.ts");
const create_tipos_accione_dto_1 = __webpack_require__(/*! ../dto/create-tipos-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/create-tipos-accione.dto.ts");
const update_tipos_accione_dto_1 = __webpack_require__(/*! ../dto/update-tipos-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/update-tipos-accione.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let TiposAccionesController = class TiposAccionesController {
    tiposAccionesService;
    constructor(tiposAccionesService) {
        this.tiposAccionesService = tiposAccionesService;
    }
    create(createTiposAccioneDto) {
        return this.tiposAccionesService.create(createTiposAccioneDto);
    }
    findAll() {
        return this.tiposAccionesService.findAll();
    }
    findOne(id) {
        return this.tiposAccionesService.findOne(+id);
    }
    update(id, updateTiposAccioneDto) {
        return this.tiposAccionesService.update(+id, updateTiposAccioneDto);
    }
    remove(id) {
        return this.tiposAccionesService.remove(+id);
    }
};
exports.TiposAccionesController = TiposAccionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_tipos_accione_dto_1.CreateTiposAccioneDto !== "undefined" && create_tipos_accione_dto_1.CreateTiposAccioneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TiposAccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposAccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposAccionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_tipos_accione_dto_1.UpdateTiposAccioneDto !== "undefined" && update_tipos_accione_dto_1.UpdateTiposAccioneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TiposAccionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposAccionesController.prototype, "remove", null);
exports.TiposAccionesController = TiposAccionesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/tipos-acciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof tipos_acciones_service_1.TiposAccionesService !== "undefined" && tipos_acciones_service_1.TiposAccionesService) === "function" ? _a : Object])
], TiposAccionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/create-tipos-accione.dto.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/create-tipos-accione.dto.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTiposAccioneDto = void 0;
class CreateTiposAccioneDto {
}
exports.CreateTiposAccioneDto = CreateTiposAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/tipo-accion.dto.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/tipo-accion.dto.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TipoAccionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class TipoAccionDto {
    id;
    nombre;
}
exports.TipoAccionDto = TipoAccionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de l tipo de accion',
        type: Number
    }),
    __metadata("design:type", Number)
], TipoAccionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del tipo de Accion',
        type: String
    }),
    __metadata("design:type", String)
], TipoAccionDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/update-tipos-accione.dto.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/update-tipos-accione.dto.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTiposAccioneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_tipos_accione_dto_1 = __webpack_require__(/*! ./create-tipos-accione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/dto/create-tipos-accione.dto.ts");
class UpdateTiposAccioneDto extends (0, mapped_types_1.PartialType)(create_tipos_accione_dto_1.CreateTiposAccioneDto) {
}
exports.UpdateTiposAccioneDto = UpdateTiposAccioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TipoAccion = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const tipo_accion_implementacion_entity_1 = __webpack_require__(/*! ../modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts");
const implementacion_entity_1 = __webpack_require__(/*! ../../../entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
let TipoAccion = class TipoAccion {
    id;
    nombre;
    tiposAccionesImplementaciones;
    implementaciones;
};
exports.TipoAccion = TipoAccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_tipo_accion' }),
    __metadata("design:type", Number)
], TipoAccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre' }),
    __metadata("design:type", String)
], TipoAccion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tipo_accion_implementacion_entity_1.TipoAccionImplementacion, (tipoAccionImplementacion) => tipoAccionImplementacion.tipoAccion),
    __metadata("design:type", Array)
], TipoAccion.prototype, "tiposAccionesImplementaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => implementacion_entity_1.Implementacion, (imple) => imple.tiposAcciones),
    __metadata("design:type", Array)
], TipoAccion.prototype, "implementaciones", void 0);
exports.TipoAccion = TipoAccion = __decorate([
    (0, typeorm_1.Entity)('tipos_acciones')
], TipoAccion);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/api/tipos-acciones-implementaciones.controller.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/api/tipos-acciones-implementaciones.controller.ts ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesImplementacionesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_acciones_implementaciones_service_1 = __webpack_require__(/*! ../services/tipos-acciones-implementaciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service.ts");
const create_tipos_acciones_implementacione_dto_1 = __webpack_require__(/*! ../dto/create-tipos-acciones-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/create-tipos-acciones-implementacione.dto.ts");
const update_tipos_acciones_implementacione_dto_1 = __webpack_require__(/*! ../dto/update-tipos-acciones-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/update-tipos-acciones-implementacione.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let TiposAccionesImplementacionesController = class TiposAccionesImplementacionesController {
    tiposAccionesImplementacionesService;
    constructor(tiposAccionesImplementacionesService) {
        this.tiposAccionesImplementacionesService = tiposAccionesImplementacionesService;
    }
    create(createTiposAccionesImplementacioneDto) {
        return this.tiposAccionesImplementacionesService.create(createTiposAccionesImplementacioneDto);
    }
    findAll() {
        return this.tiposAccionesImplementacionesService.findAll();
    }
    findOne(id) {
        return this.tiposAccionesImplementacionesService.findOne(+id);
    }
    update(id, updateTiposAccionesImplementacioneDto) {
        return this.tiposAccionesImplementacionesService.update(+id, updateTiposAccionesImplementacioneDto);
    }
    remove(id) {
        return this.tiposAccionesImplementacionesService.remove(+id);
    }
};
exports.TiposAccionesImplementacionesController = TiposAccionesImplementacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_tipos_acciones_implementacione_dto_1.CreateTiposAccionesImplementacioneDto !== "undefined" && create_tipos_acciones_implementacione_dto_1.CreateTiposAccionesImplementacioneDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TiposAccionesImplementacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposAccionesImplementacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposAccionesImplementacionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_tipos_acciones_implementacione_dto_1.UpdateTiposAccionesImplementacioneDto !== "undefined" && update_tipos_acciones_implementacione_dto_1.UpdateTiposAccionesImplementacioneDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TiposAccionesImplementacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposAccionesImplementacionesController.prototype, "remove", null);
exports.TiposAccionesImplementacionesController = TiposAccionesImplementacionesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/tipos-acciones-implementaciones'),
    __metadata("design:paramtypes", [typeof (_a = typeof tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService !== "undefined" && tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService) === "function" ? _a : Object])
], TiposAccionesImplementacionesController);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/create-tipos-acciones-implementacione.dto.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/create-tipos-acciones-implementacione.dto.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTiposAccionesImplementacioneDto = void 0;
class CreateTiposAccionesImplementacioneDto {
    idImplementacion;
    tiposAcciones;
}
exports.CreateTiposAccionesImplementacioneDto = CreateTiposAccionesImplementacioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/update-tipos-acciones-implementacione.dto.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/update-tipos-acciones-implementacione.dto.ts ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTiposAccionesImplementacioneDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_tipos_acciones_implementacione_dto_1 = __webpack_require__(/*! ./create-tipos-acciones-implementacione.dto */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/dto/create-tipos-acciones-implementacione.dto.ts");
class UpdateTiposAccionesImplementacioneDto extends (0, mapped_types_1.PartialType)(create_tipos_acciones_implementacione_dto_1.CreateTiposAccionesImplementacioneDto) {
}
exports.UpdateTiposAccionesImplementacioneDto = UpdateTiposAccionesImplementacioneDto;


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TipoAccionImplementacion = void 0;
const implementacion_entity_1 = __webpack_require__(/*! src/modules/empresas/modules/implementaciones/entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const tipo_accion_entity_1 = __webpack_require__(/*! ../../../entities/tipo-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts");
let TipoAccionImplementacion = class TipoAccionImplementacion {
    id;
    idTipoAccion;
    idImplementacion;
    implementacion;
    tipoAccion;
};
exports.TipoAccionImplementacion = TipoAccionImplementacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_tipo_accion_implementacion' }),
    __metadata("design:type", Number)
], TipoAccionImplementacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_tipo_accion' }),
    __metadata("design:type", Number)
], TipoAccionImplementacion.prototype, "idTipoAccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_implementacion' }),
    __metadata("design:type", Number)
], TipoAccionImplementacion.prototype, "idImplementacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => implementacion_entity_1.Implementacion, (imple) => imple.tiposAccionesImplementaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_implementacion' }),
    __metadata("design:type", typeof (_a = typeof implementacion_entity_1.Implementacion !== "undefined" && implementacion_entity_1.Implementacion) === "function" ? _a : Object)
], TipoAccionImplementacion.prototype, "implementacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_accion_entity_1.TipoAccion, (tipoAccion) => tipoAccion.tiposAccionesImplementaciones),
    (0, typeorm_1.JoinColumn)({ name: 'id_tipo_accion' }),
    __metadata("design:type", typeof (_b = typeof tipo_accion_entity_1.TipoAccion !== "undefined" && tipo_accion_entity_1.TipoAccion) === "function" ? _b : Object)
], TipoAccionImplementacion.prototype, "tipoAccion", void 0);
exports.TipoAccionImplementacion = TipoAccionImplementacion = __decorate([
    (0, typeorm_1.Entity)('tipos_acciones_implementaciones')
], TipoAccionImplementacion);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service.ts":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service.ts ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesImplementacionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_accion_implementacion_entity_1 = __webpack_require__(/*! ../entities/tipo-accion-implementacion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const tipos_acciones_service_1 = __webpack_require__(/*! ../../../services/tipos-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/services/tipos-acciones.service.ts");
let TiposAccionesImplementacionesService = class TiposAccionesImplementacionesService {
    tipoAccionImplementacionRepository;
    tiposAccionesService;
    constructor(tipoAccionImplementacionRepository, tiposAccionesService) {
        this.tipoAccionImplementacionRepository = tipoAccionImplementacionRepository;
        this.tiposAccionesService = tiposAccionesService;
    }
    create(createTiposAccionesImplementacioneDto) {
        return 'This action adds a new tiposAccionesImplementacione';
    }
    async createTransaction(manager, data) {
        if (!data.tiposAcciones || data.tiposAcciones.length === 0) {
            return [];
        }
        const tiposAccionesImplementaciones = data.tiposAcciones.map(t => ({
            idImplementacion: data.idImplementacion,
            idTipoAccion: t
        }));
        return await manager.getRepository(tipo_accion_implementacion_entity_1.TipoAccionImplementacion).save(tiposAccionesImplementaciones);
    }
    findAll() {
        return `This action returns all tiposAccionesImplementaciones`;
    }
    findOne(id) {
        return `This action returns a #${id} tiposAccionesImplementacione`;
    }
    update(id, updateTiposAccionesImplementacioneDto) {
        return `This action updates a #${id} tiposAccionesImplementacione`;
    }
    remove(id) {
        return `This action removes a #${id} tiposAccionesImplementacione`;
    }
};
exports.TiposAccionesImplementacionesService = TiposAccionesImplementacionesService;
exports.TiposAccionesImplementacionesService = TiposAccionesImplementacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_accion_implementacion_entity_1.TipoAccionImplementacion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof tipos_acciones_service_1.TiposAccionesService !== "undefined" && tipos_acciones_service_1.TiposAccionesService) === "function" ? _b : Object])
], TiposAccionesImplementacionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module.ts ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesImplementacionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_acciones_implementaciones_service_1 = __webpack_require__(/*! ./services/tipos-acciones-implementaciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service.ts");
const tipos_acciones_implementaciones_controller_1 = __webpack_require__(/*! ./api/tipos-acciones-implementaciones.controller */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/api/tipos-acciones-implementaciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_accion_implementacion_entity_1 = __webpack_require__(/*! ./entities/tipo-accion-implementacion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/entities/tipo-accion-implementacion.entity.ts");
const tipos_acciones_module_1 = __webpack_require__(/*! ../../tipos-acciones.module */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module.ts");
let TiposAccionesImplementacionesModule = class TiposAccionesImplementacionesModule {
};
exports.TiposAccionesImplementacionesModule = TiposAccionesImplementacionesModule;
exports.TiposAccionesImplementacionesModule = TiposAccionesImplementacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_accion_implementacion_entity_1.TipoAccionImplementacion]),
            tipos_acciones_module_1.TiposAccionesModule
        ],
        controllers: [tipos_acciones_implementaciones_controller_1.TiposAccionesImplementacionesController],
        providers: [tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService],
        exports: [tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService]
    })
], TiposAccionesImplementacionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/services/tipos-acciones.service.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/services/tipos-acciones.service.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_accion_entity_1 = __webpack_require__(/*! ../entities/tipo-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let TiposAccionesService = class TiposAccionesService {
    tipoAccionRepository;
    constructor(tipoAccionRepository) {
        this.tipoAccionRepository = tipoAccionRepository;
    }
    create(createTiposAccioneDto) {
        return 'This action adds a new tiposAccione';
    }
    findAll() {
        return `This action returns all tiposAcciones`;
    }
    findOne(id) {
        return `This action returns a #${id} tiposAccione`;
    }
    update(id, updateTiposAccioneDto) {
        return `This action updates a #${id} tiposAccione`;
    }
    remove(id) {
        return `This action removes a #${id} tiposAccione`;
    }
};
exports.TiposAccionesService = TiposAccionesService;
exports.TiposAccionesService = TiposAccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_accion_entity_1.TipoAccion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TiposAccionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposAccionesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_acciones_service_1 = __webpack_require__(/*! ./services/tipos-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/services/tipos-acciones.service.ts");
const tipos_acciones_controller_1 = __webpack_require__(/*! ./api/tipos-acciones.controller */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/api/tipos-acciones.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_accion_entity_1 = __webpack_require__(/*! ./entities/tipo-accion.entity */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/entities/tipo-accion.entity.ts");
let TiposAccionesModule = class TiposAccionesModule {
};
exports.TiposAccionesModule = TiposAccionesModule;
exports.TiposAccionesModule = TiposAccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_accion_entity_1.TipoAccion])
        ],
        controllers: [tipos_acciones_controller_1.TiposAccionesController],
        providers: [tipos_acciones_service_1.TiposAccionesService],
        exports: [tipos_acciones_service_1.TiposAccionesService]
    })
], TiposAccionesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/implementaciones/services/implementaciones.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/implementaciones/services/implementaciones.service.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImplementacionesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const implementacion_entity_1 = __webpack_require__(/*! ../entities/implementacion.entity */ "./src/modules/empresas/modules/implementaciones/entities/implementacion.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const tipos_acciones_implementaciones_service_1 = __webpack_require__(/*! ../modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service */ "./src/modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/services/tipos-acciones-implementaciones.service.ts");
const implementaciones_acciones_service_1 = __webpack_require__(/*! ../modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service */ "./src/modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/services/implementaciones-acciones.service.ts");
let ImplementacionesService = class ImplementacionesService {
    implementacionRepository;
    tiposAccionesImplementacionesService;
    implementacionesAccionesService;
    constructor(implementacionRepository, tiposAccionesImplementacionesService, implementacionesAccionesService) {
        this.implementacionRepository = implementacionRepository;
        this.tiposAccionesImplementacionesService = tiposAccionesImplementacionesService;
        this.implementacionesAccionesService = implementacionesAccionesService;
    }
    create(data) {
        return 'This action adds a new implementacione';
    }
    async createTransaction(manager, data) {
        const implementacion = new implementacion_entity_1.Implementacion();
        implementacion.anio = data.anio || new Date().getFullYear();
        implementacion.idEmpresa = data.idEmpresa;
        const implementacionSaved = await manager.getRepository(implementacion_entity_1.Implementacion).save(implementacion);
        if (data.tiposAccion && data.tiposAccion.length > 0) {
            await this.tiposAccionesImplementacionesService.createTransaction(manager, {
                idImplementacion: implementacionSaved.id,
                tiposAcciones: data.tiposAccion
            });
        }
        if (data.acciones && data.acciones.length > 0) {
            await this.implementacionesAccionesService.createTransaction(manager, {
                idImplementacion: implementacionSaved.id,
                acciones: data.acciones
            });
        }
        return implementacionSaved;
    }
    findAll() {
        return `This action returns all implementaciones`;
    }
    findOne(id) {
        return `This action returns a #${id} implementacione`;
    }
    update(id, updateImplementacioneDto) {
        return `This action updates a #${id} implementacione`;
    }
    remove(id) {
        return `This action removes a #${id} implementacione`;
    }
};
exports.ImplementacionesService = ImplementacionesService;
exports.ImplementacionesService = ImplementacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(implementacion_entity_1.Implementacion)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService !== "undefined" && tipos_acciones_implementaciones_service_1.TiposAccionesImplementacionesService) === "function" ? _b : Object, typeof (_c = typeof implementaciones_acciones_service_1.ImplementacionesAccionesService !== "undefined" && implementaciones_acciones_service_1.ImplementacionesAccionesService) === "function" ? _c : Object])
], ImplementacionesService);


/***/ }),

/***/ "./src/modules/empresas/modules/items/api/items.controller.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/items/api/items.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const items_service_1 = __webpack_require__(/*! ../services/items.service */ "./src/modules/empresas/modules/items/services/items.service.ts");
const create_item_dto_1 = __webpack_require__(/*! ../dto/create-item.dto */ "./src/modules/empresas/modules/items/dto/create-item.dto.ts");
const update_item_dto_1 = __webpack_require__(/*! ../dto/update-item.dto */ "./src/modules/empresas/modules/items/dto/update-item.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ItemsController = class ItemsController {
    itemsService;
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(+id);
    }
    update(id, updateItemDto) {
        return this.itemsService.update(+id, updateItemDto);
    }
    remove(id) {
        return this.itemsService.remove(+id);
    }
};
exports.ItemsController = ItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_item_dto_1.CreateItemDto !== "undefined" && create_item_dto_1.CreateItemDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_item_dto_1.UpdateItemDto !== "undefined" && update_item_dto_1.UpdateItemDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "remove", null);
exports.ItemsController = ItemsController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/items'),
    __metadata("design:paramtypes", [typeof (_a = typeof items_service_1.ItemsService !== "undefined" && items_service_1.ItemsService) === "function" ? _a : Object])
], ItemsController);


/***/ }),

/***/ "./src/modules/empresas/modules/items/dto/create-item.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/items/dto/create-item.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateItemDto = void 0;
class CreateItemDto {
    idEmpresa;
    items;
}
exports.CreateItemDto = CreateItemDto;


/***/ }),

/***/ "./src/modules/empresas/modules/items/dto/item-private.dto.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/items/dto/item-private.dto.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ItemPrivateDto {
    id;
    nombre;
}
exports.ItemPrivateDto = ItemPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del item de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], ItemPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del item',
        type: String
    }),
    __metadata("design:type", String)
], ItemPrivateDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/items/dto/update-item.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/items/dto/update-item.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateItemDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_item_dto_1 = __webpack_require__(/*! ./create-item.dto */ "./src/modules/empresas/modules/items/dto/create-item.dto.ts");
class UpdateItemDto extends (0, mapped_types_1.PartialType)(create_item_dto_1.CreateItemDto) {
}
exports.UpdateItemDto = UpdateItemDto;


/***/ }),

/***/ "./src/modules/empresas/modules/items/entities/item.entity.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/items/entities/item.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Item = class Item {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.Item = Item;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_item' }),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'nombre_item' }),
    __metadata("design:type", String)
], Item.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_empresa', type: 'int' }),
    __metadata("design:type", Number)
], Item.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.items),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Item.prototype, "empresa", void 0);
exports.Item = Item = __decorate([
    (0, typeorm_1.Entity)('items')
], Item);


/***/ }),

/***/ "./src/modules/empresas/modules/items/items.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/empresas/modules/items/items.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const items_service_1 = __webpack_require__(/*! ./services/items.service */ "./src/modules/empresas/modules/items/services/items.service.ts");
const items_controller_1 = __webpack_require__(/*! ./api/items.controller */ "./src/modules/empresas/modules/items/api/items.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const item_entity_1 = __webpack_require__(/*! ./entities/item.entity */ "./src/modules/empresas/modules/items/entities/item.entity.ts");
let ItemsModule = class ItemsModule {
};
exports.ItemsModule = ItemsModule;
exports.ItemsModule = ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([item_entity_1.Item])
        ],
        controllers: [items_controller_1.ItemsController],
        providers: [items_service_1.ItemsService],
        exports: [items_service_1.ItemsService]
    })
], ItemsModule);


/***/ }),

/***/ "./src/modules/empresas/modules/items/services/items.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/items/services/items.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const item_entity_1 = __webpack_require__(/*! ../entities/item.entity */ "./src/modules/empresas/modules/items/entities/item.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let ItemsService = class ItemsService {
    itemRepository;
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    create(createItemDto) {
        return 'This action adds a new item';
    }
    async createTransaction(manager, data) {
        const items = data.items.map((i) => ({
            idEmpresa: data.idEmpresa,
            nombre: i
        }));
        return await manager.getRepository(item_entity_1.Item).save(items);
    }
    findAll() {
        return `This action returns all items`;
    }
    findOne(id) {
        return `This action returns a #${id} item`;
    }
    update(id, updateItemDto) {
        return `This action updates a #${id} item`;
    }
    remove(id) {
        return `This action removes a #${id} item`;
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ItemsService);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/api/municipios.controller.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/api/municipios.controller.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const municipios_service_1 = __webpack_require__(/*! ../services/municipios.service */ "./src/modules/empresas/modules/municipios/services/municipios.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let MunicipiosController = class MunicipiosController {
    municipiosService;
    constructor(municipiosService) {
        this.municipiosService = municipiosService;
    }
    async findAll(departamentos, res) {
        const municipios = await this.municipiosService.findAll({
            filters: {
                departamentos: departamentos
            }
        });
        return (0, utils_1.OkRes)(res, {
            municipios: municipios
        });
    }
};
exports.MunicipiosController = MunicipiosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener los municipios'
    }),
    (0, swagger_1.ApiQuery)({ description: 'Para fultrar municipios por departamentos seleccionados', name: 'idsDepartamentos', type: [Number], required: false }),
    __param(0, (0, common_1.Query)('idsDepartamentos')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], MunicipiosController.prototype, "findAll", null);
exports.MunicipiosController = MunicipiosController = __decorate([
    (0, swagger_1.ApiTags)('Municipios'),
    (0, common_1.Controller)('api/municipios'),
    __metadata("design:paramtypes", [typeof (_a = typeof municipios_service_1.MunicipiosService !== "undefined" && municipios_service_1.MunicipiosService) === "function" ? _a : Object])
], MunicipiosController);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/dto/municipio-private.dto.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/dto/municipio-private.dto.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipioPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class MunicipioPrivateDto {
    id;
    nombreMunicipio;
}
exports.MunicipioPrivateDto = MunicipioPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del municipio',
        type: Number
    }),
    __metadata("design:type", Number)
], MunicipioPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del municipio',
        type: String
    }),
    __metadata("design:type", String)
], MunicipioPrivateDto.prototype, "nombreMunicipio", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/entities/municipio.entity.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/entities/municipio.entity.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Municipio = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const municipio_empresa_entity_1 = __webpack_require__(/*! ../modules/municipios-empresa/entities/municipio-empresa.entity */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts");
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
let Municipio = class Municipio {
    id;
    idDepartamento;
    nombreMunicipio;
    municipiosEmpresas;
    empresas;
};
exports.Municipio = Municipio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_municipio' }),
    __metadata("design:type", Number)
], Municipio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_departamento' }),
    __metadata("design:type", Number)
], Municipio.prototype, "idDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_municipio' }),
    __metadata("design:type", String)
], Municipio.prototype, "nombreMunicipio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => municipio_empresa_entity_1.MunicipioEmpresa, (municipioEmpresa) => municipioEmpresa.municipio),
    __metadata("design:type", Array)
], Municipio.prototype, "municipiosEmpresas", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => empresa_entity_1.Empresa, (empresa) => empresa.municipios),
    __metadata("design:type", Array)
], Municipio.prototype, "empresas", void 0);
exports.Municipio = Municipio = __decorate([
    (0, typeorm_1.Entity)('municipios')
], Municipio);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/api/municipios-empresa.controller.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/api/municipios-empresa.controller.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosEmpresaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const municipios_empresa_service_1 = __webpack_require__(/*! ../services/municipios-empresa.service */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service.ts");
const create_municipios_empresa_dto_1 = __webpack_require__(/*! ../dto/create-municipios-empresa.dto */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/create-municipios-empresa.dto.ts");
const update_municipios_empresa_dto_1 = __webpack_require__(/*! ../dto/update-municipios-empresa.dto */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/update-municipios-empresa.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let MunicipiosEmpresaController = class MunicipiosEmpresaController {
    municipiosEmpresaService;
    constructor(municipiosEmpresaService) {
        this.municipiosEmpresaService = municipiosEmpresaService;
    }
    create(createMunicipiosEmpresaDto) {
        return this.municipiosEmpresaService.create(createMunicipiosEmpresaDto);
    }
    findAll() {
        return this.municipiosEmpresaService.findAll();
    }
    findOne(id) {
        return this.municipiosEmpresaService.findOne(+id);
    }
    update(id, updateMunicipiosEmpresaDto) {
        return this.municipiosEmpresaService.update(+id, updateMunicipiosEmpresaDto);
    }
    remove(id) {
        return this.municipiosEmpresaService.remove(+id);
    }
};
exports.MunicipiosEmpresaController = MunicipiosEmpresaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_municipios_empresa_dto_1.CreateMunicipiosEmpresaDto !== "undefined" && create_municipios_empresa_dto_1.CreateMunicipiosEmpresaDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MunicipiosEmpresaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MunicipiosEmpresaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MunicipiosEmpresaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_municipios_empresa_dto_1.UpdateMunicipiosEmpresaDto !== "undefined" && update_municipios_empresa_dto_1.UpdateMunicipiosEmpresaDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], MunicipiosEmpresaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MunicipiosEmpresaController.prototype, "remove", null);
exports.MunicipiosEmpresaController = MunicipiosEmpresaController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/municipios-empresa'),
    __metadata("design:paramtypes", [typeof (_a = typeof municipios_empresa_service_1.MunicipiosEmpresaService !== "undefined" && municipios_empresa_service_1.MunicipiosEmpresaService) === "function" ? _a : Object])
], MunicipiosEmpresaController);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/create-municipios-empresa.dto.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/create-municipios-empresa.dto.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMunicipiosEmpresaDto = void 0;
class CreateMunicipiosEmpresaDto {
    idEmpresa;
    municipios;
}
exports.CreateMunicipiosEmpresaDto = CreateMunicipiosEmpresaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/update-municipios-empresa.dto.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/update-municipios-empresa.dto.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMunicipiosEmpresaDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_municipios_empresa_dto_1 = __webpack_require__(/*! ./create-municipios-empresa.dto */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/dto/create-municipios-empresa.dto.ts");
class UpdateMunicipiosEmpresaDto extends (0, mapped_types_1.PartialType)(create_municipios_empresa_dto_1.CreateMunicipiosEmpresaDto) {
}
exports.UpdateMunicipiosEmpresaDto = UpdateMunicipiosEmpresaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipioEmpresa = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const municipio_entity_1 = __webpack_require__(/*! ../../../entities/municipio.entity */ "./src/modules/empresas/modules/municipios/entities/municipio.entity.ts");
let MunicipioEmpresa = class MunicipioEmpresa {
    id;
    idEmpresa;
    idMunicipio;
    empresa;
    municipio;
};
exports.MunicipioEmpresa = MunicipioEmpresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_municipio_empresa' }),
    __metadata("design:type", Number)
], MunicipioEmpresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], MunicipioEmpresa.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_municipio' }),
    __metadata("design:type", Number)
], MunicipioEmpresa.prototype, "idMunicipio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.municipiosEmpresas),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], MunicipioEmpresa.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => municipio_entity_1.Municipio, (municipio) => municipio.municipiosEmpresas),
    (0, typeorm_1.JoinColumn)({ name: 'id_municipio' }),
    __metadata("design:type", typeof (_b = typeof municipio_entity_1.Municipio !== "undefined" && municipio_entity_1.Municipio) === "function" ? _b : Object)
], MunicipioEmpresa.prototype, "municipio", void 0);
exports.MunicipioEmpresa = MunicipioEmpresa = __decorate([
    (0, typeorm_1.Entity)('municipios_empresas')
], MunicipioEmpresa);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosEmpresaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const municipios_empresa_service_1 = __webpack_require__(/*! ./services/municipios-empresa.service */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service.ts");
const municipios_empresa_controller_1 = __webpack_require__(/*! ./api/municipios-empresa.controller */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/api/municipios-empresa.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const municipio_empresa_entity_1 = __webpack_require__(/*! ./entities/municipio-empresa.entity */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts");
const municipios_module_1 = __webpack_require__(/*! ../../municipios.module */ "./src/modules/empresas/modules/municipios/municipios.module.ts");
let MunicipiosEmpresaModule = class MunicipiosEmpresaModule {
};
exports.MunicipiosEmpresaModule = MunicipiosEmpresaModule;
exports.MunicipiosEmpresaModule = MunicipiosEmpresaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([municipio_empresa_entity_1.MunicipioEmpresa]),
            municipios_module_1.MunicipiosModule
        ],
        controllers: [municipios_empresa_controller_1.MunicipiosEmpresaController],
        providers: [municipios_empresa_service_1.MunicipiosEmpresaService],
        exports: [municipios_empresa_service_1.MunicipiosEmpresaService]
    })
], MunicipiosEmpresaModule);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/modules/municipios-empresa/services/municipios-empresa.service.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosEmpresaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const municipio_empresa_entity_1 = __webpack_require__(/*! ../entities/municipio-empresa.entity */ "./src/modules/empresas/modules/municipios/modules/municipios-empresa/entities/municipio-empresa.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const municipios_service_1 = __webpack_require__(/*! ../../../services/municipios.service */ "./src/modules/empresas/modules/municipios/services/municipios.service.ts");
let MunicipiosEmpresaService = class MunicipiosEmpresaService {
    municipioEmpresaRepository;
    municipiosService;
    constructor(municipioEmpresaRepository, municipiosService) {
        this.municipioEmpresaRepository = municipioEmpresaRepository;
        this.municipiosService = municipiosService;
    }
    create(createMunicipiosEmpresaDto) {
        return 'This action adds a new municipiosEmpresa';
    }
    async createTransaction(manager, data) {
        await this.municipiosService.findManybyIds(data.municipios);
        const muncipios = data.municipios.map(m => ({
            idEmpresa: data.idEmpresa,
            idMunicipio: m
        }));
        return await manager.getRepository(municipio_empresa_entity_1.MunicipioEmpresa).save(muncipios);
    }
    findAll() {
        return `This action returns all municipiosEmpresa`;
    }
    findOne(id) {
        return `This action returns a #${id} municipiosEmpresa`;
    }
    update(id, updateMunicipiosEmpresaDto) {
        return `This action updates a #${id} municipiosEmpresa`;
    }
    remove(id) {
        return `This action removes a #${id} municipiosEmpresa`;
    }
};
exports.MunicipiosEmpresaService = MunicipiosEmpresaService;
exports.MunicipiosEmpresaService = MunicipiosEmpresaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(municipio_empresa_entity_1.MunicipioEmpresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof municipios_service_1.MunicipiosService !== "undefined" && municipios_service_1.MunicipiosService) === "function" ? _b : Object])
], MunicipiosEmpresaService);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/municipios.module.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/municipios.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const municipios_service_1 = __webpack_require__(/*! ./services/municipios.service */ "./src/modules/empresas/modules/municipios/services/municipios.service.ts");
const municipios_controller_1 = __webpack_require__(/*! ./api/municipios.controller */ "./src/modules/empresas/modules/municipios/api/municipios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const municipio_entity_1 = __webpack_require__(/*! ./entities/municipio.entity */ "./src/modules/empresas/modules/municipios/entities/municipio.entity.ts");
let MunicipiosModule = class MunicipiosModule {
};
exports.MunicipiosModule = MunicipiosModule;
exports.MunicipiosModule = MunicipiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([municipio_entity_1.Municipio])
        ],
        controllers: [municipios_controller_1.MunicipiosController],
        providers: [municipios_service_1.MunicipiosService],
        exports: [municipios_service_1.MunicipiosService]
    })
], MunicipiosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/municipios/services/municipios.service.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/empresas/modules/municipios/services/municipios.service.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MunicipiosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const municipio_entity_1 = __webpack_require__(/*! ../entities/municipio.entity */ "./src/modules/empresas/modules/municipios/entities/municipio.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let MunicipiosService = class MunicipiosService {
    muncipioRepository;
    constructor(muncipioRepository) {
        this.muncipioRepository = muncipioRepository;
    }
    create(createMunicipioDto) {
        return 'This action adds a new municipio';
    }
    async findManybyIds(ids) {
        const muncipios = await this.muncipioRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        return muncipios;
    }
    async findAll(options) {
        const municipios = await this.muncipioRepository.find({
            ...(options ? {
                where: {
                    ...(options.filters ? {
                        ...(options.filters.departamentos ? {
                            idDepartamento: (0, typeorm_2.In)(options.filters.departamentos)
                        } : {})
                    } : {})
                }
            } : {}),
            select: {
                id: true,
                nombreMunicipio: true,
                idDepartamento: true
            }
        });
        return municipios;
    }
    findOne(id) {
        return `This action returns a #${id} municipio`;
    }
    update(id, updateMunicipioDto) {
        return `This action updates a #${id} municipio`;
    }
    remove(id) {
        return `This action removes a #${id} municipio`;
    }
};
exports.MunicipiosService = MunicipiosService;
exports.MunicipiosService = MunicipiosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(municipio_entity_1.Municipio)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MunicipiosService);


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/api/operaciones-internacionales.controller.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/api/operaciones-internacionales.controller.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperacionesInternacionalesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operaciones_internacionales_service_1 = __webpack_require__(/*! ../services/operaciones-internacionales.service */ "./src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service.ts");
const create_operaciones_internacionale_dto_1 = __webpack_require__(/*! ../dto/create-operaciones-internacionale.dto */ "./src/modules/empresas/modules/operaciones-internacionales/dto/create-operaciones-internacionale.dto.ts");
const update_operaciones_internacionale_dto_1 = __webpack_require__(/*! ../dto/update-operaciones-internacionale.dto */ "./src/modules/empresas/modules/operaciones-internacionales/dto/update-operaciones-internacionale.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let OperacionesInternacionalesController = class OperacionesInternacionalesController {
    operacionesInternacionalesService;
    constructor(operacionesInternacionalesService) {
        this.operacionesInternacionalesService = operacionesInternacionalesService;
    }
    create(createOperacionesInternacionaleDto) {
        return this.operacionesInternacionalesService.create(createOperacionesInternacionaleDto);
    }
    findAll() {
        return this.operacionesInternacionalesService.findAll();
    }
    findOne(id) {
        return this.operacionesInternacionalesService.findOne(+id);
    }
    update(id, updateOperacionesInternacionaleDto) {
        return this.operacionesInternacionalesService.update(+id, updateOperacionesInternacionaleDto);
    }
    remove(id) {
        return this.operacionesInternacionalesService.remove(+id);
    }
};
exports.OperacionesInternacionalesController = OperacionesInternacionalesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_operaciones_internacionale_dto_1.CreateOperacionesInternacionaleDto !== "undefined" && create_operaciones_internacionale_dto_1.CreateOperacionesInternacionaleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OperacionesInternacionalesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperacionesInternacionalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperacionesInternacionalesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_operaciones_internacionale_dto_1.UpdateOperacionesInternacionaleDto !== "undefined" && update_operaciones_internacionale_dto_1.UpdateOperacionesInternacionaleDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OperacionesInternacionalesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperacionesInternacionalesController.prototype, "remove", null);
exports.OperacionesInternacionalesController = OperacionesInternacionalesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/operaciones-internacionales'),
    __metadata("design:paramtypes", [typeof (_a = typeof operaciones_internacionales_service_1.OperacionesInternacionalesService !== "undefined" && operaciones_internacionales_service_1.OperacionesInternacionalesService) === "function" ? _a : Object])
], OperacionesInternacionalesController);


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/dto/create-operaciones-internacionale.dto.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/dto/create-operaciones-internacionale.dto.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOperacionesInternacionaleDto = void 0;
class CreateOperacionesInternacionaleDto {
    idEmpresa;
    paisesOperaInternacionalmente;
}
exports.CreateOperacionesInternacionaleDto = CreateOperacionesInternacionaleDto;


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/dto/update-operaciones-internacionale.dto.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/dto/update-operaciones-internacionale.dto.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOperacionesInternacionaleDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_operaciones_internacionale_dto_1 = __webpack_require__(/*! ./create-operaciones-internacionale.dto */ "./src/modules/empresas/modules/operaciones-internacionales/dto/create-operaciones-internacionale.dto.ts");
class UpdateOperacionesInternacionaleDto extends (0, mapped_types_1.PartialType)(create_operaciones_internacionale_dto_1.CreateOperacionesInternacionaleDto) {
}
exports.UpdateOperacionesInternacionaleDto = UpdateOperacionesInternacionaleDto;


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperacionInternacional = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const pais_entity_1 = __webpack_require__(/*! ../../paises/entities/pais.entity */ "./src/modules/empresas/modules/paises/entities/pais.entity.ts");
let OperacionInternacional = class OperacionInternacional {
    id;
    idPais;
    idEmpresa;
    url;
    empresa;
    pais;
};
exports.OperacionInternacional = OperacionInternacional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_operacion' }),
    __metadata("design:type", Number)
], OperacionInternacional.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_pais', type: 'int' }),
    __metadata("design:type", Number)
], OperacionInternacional.prototype, "idPais", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], OperacionInternacional.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, name: 'url', nullable: true }),
    __metadata("design:type", String)
], OperacionInternacional.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.operacionesInternacionales),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], OperacionInternacional.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais, (pais) => pais.operacionesInternacionales),
    (0, typeorm_1.JoinColumn)({ name: 'id_pais' }),
    __metadata("design:type", typeof (_b = typeof pais_entity_1.Pais !== "undefined" && pais_entity_1.Pais) === "function" ? _b : Object)
], OperacionInternacional.prototype, "pais", void 0);
exports.OperacionInternacional = OperacionInternacional = __decorate([
    (0, typeorm_1.Entity)('operaciones_internacionales')
], OperacionInternacional);


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperacionesInternacionalesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operaciones_internacionales_service_1 = __webpack_require__(/*! ./services/operaciones-internacionales.service */ "./src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service.ts");
const operaciones_internacionales_controller_1 = __webpack_require__(/*! ./api/operaciones-internacionales.controller */ "./src/modules/empresas/modules/operaciones-internacionales/api/operaciones-internacionales.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const operacion_internacional_entity_1 = __webpack_require__(/*! ./entities/operacion-internacional.entity */ "./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts");
const paises_module_1 = __webpack_require__(/*! ../paises/paises.module */ "./src/modules/empresas/modules/paises/paises.module.ts");
let OperacionesInternacionalesModule = class OperacionesInternacionalesModule {
};
exports.OperacionesInternacionalesModule = OperacionesInternacionalesModule;
exports.OperacionesInternacionalesModule = OperacionesInternacionalesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([operacion_internacional_entity_1.OperacionInternacional]),
            paises_module_1.PaisesModule
        ],
        controllers: [operaciones_internacionales_controller_1.OperacionesInternacionalesController],
        providers: [operaciones_internacionales_service_1.OperacionesInternacionalesService],
        exports: [operaciones_internacionales_service_1.OperacionesInternacionalesService]
    })
], OperacionesInternacionalesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/operaciones-internacionales/services/operaciones-internacionales.service.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperacionesInternacionalesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const operacion_internacional_entity_1 = __webpack_require__(/*! ../entities/operacion-internacional.entity */ "./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const paises_service_1 = __webpack_require__(/*! ../../paises/services/paises.service */ "./src/modules/empresas/modules/paises/services/paises.service.ts");
let OperacionesInternacionalesService = class OperacionesInternacionalesService {
    operacionInternacionalRepository;
    paisesService;
    constructor(operacionInternacionalRepository, paisesService) {
        this.operacionInternacionalRepository = operacionInternacionalRepository;
        this.paisesService = paisesService;
    }
    create(createOperacionesInternacionaleDto) {
        return 'This action adds a new operacionesInternacionale';
    }
    async createTransaction(manager, data) {
        await this.paisesService.findManyByIds(data.paisesOperaInternacionalmente);
        const paisesOperaInternacionalente = data.paisesOperaInternacionalmente.map(p => ({
            idEmpresa: data.idEmpresa,
            idPais: p
        }));
        return await manager.getRepository(operacion_internacional_entity_1.OperacionInternacional).save(paisesOperaInternacionalente);
    }
    findAll() {
        return `This action returns all operacionesInternacionales`;
    }
    findOne(id) {
        return `This action returns a #${id} operacionesInternacionale`;
    }
    update(id, updateOperacionesInternacionaleDto) {
        return `This action updates a #${id} operacionesInternacionale`;
    }
    remove(id) {
        return `This action removes a #${id} operacionesInternacionale`;
    }
};
exports.OperacionesInternacionalesService = OperacionesInternacionalesService;
exports.OperacionesInternacionalesService = OperacionesInternacionalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(operacion_internacional_entity_1.OperacionInternacional)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof paises_service_1.PaisesService !== "undefined" && paises_service_1.PaisesService) === "function" ? _b : Object])
], OperacionesInternacionalesService);


/***/ }),

/***/ "./src/modules/empresas/modules/paises/api/paises.controller.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/paises/api/paises.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const paises_service_1 = __webpack_require__(/*! ../services/paises.service */ "./src/modules/empresas/modules/paises/services/paises.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let PaisesController = class PaisesController {
    paisesService;
    constructor(paisesService) {
        this.paisesService = paisesService;
    }
    async findAll(res) {
        const paises = await this.paisesService.findAll();
        return (0, utils_1.OkRes)(res, {
            paises: paises
        });
    }
};
exports.PaisesController = PaisesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener los paises'
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PaisesController.prototype, "findAll", null);
exports.PaisesController = PaisesController = __decorate([
    (0, swagger_1.ApiTags)('Paises'),
    (0, common_1.Controller)('api/paises'),
    __metadata("design:paramtypes", [typeof (_a = typeof paises_service_1.PaisesService !== "undefined" && paises_service_1.PaisesService) === "function" ? _a : Object])
], PaisesController);


/***/ }),

/***/ "./src/modules/empresas/modules/paises/dto/pais.dto.ts":
/*!*************************************************************!*\
  !*** ./src/modules/empresas/modules/paises/dto/pais.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PaisDto {
    id;
    nombre;
}
exports.PaisDto = PaisDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del pais',
        type: Number
    }),
    __metadata("design:type", Number)
], PaisDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del pais',
        type: String
    }),
    __metadata("design:type", String)
], PaisDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/paises/entities/pais.entity.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/empresas/modules/paises/entities/pais.entity.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pais = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const operacion_internacional_entity_1 = __webpack_require__(/*! ../../operaciones-internacionales/entities/operacion-internacional.entity */ "./src/modules/empresas/modules/operaciones-internacionales/entities/operacion-internacional.entity.ts");
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
let Pais = class Pais {
    id;
    nombre;
    operacionesInternacionales;
    empresas;
};
exports.Pais = Pais;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_pais' }),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre' }),
    __metadata("design:type", String)
], Pais.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => operacion_internacional_entity_1.OperacionInternacional, (opeInter) => opeInter.pais),
    __metadata("design:type", Array)
], Pais.prototype, "operacionesInternacionales", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => empresa_entity_1.Empresa, (empresa) => empresa.paisesOperaInteranacionalmente),
    __metadata("design:type", Array)
], Pais.prototype, "empresas", void 0);
exports.Pais = Pais = __decorate([
    (0, typeorm_1.Entity)('paises')
], Pais);


/***/ }),

/***/ "./src/modules/empresas/modules/paises/paises.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/empresas/modules/paises/paises.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const paises_service_1 = __webpack_require__(/*! ./services/paises.service */ "./src/modules/empresas/modules/paises/services/paises.service.ts");
const paises_controller_1 = __webpack_require__(/*! ./api/paises.controller */ "./src/modules/empresas/modules/paises/api/paises.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const pais_entity_1 = __webpack_require__(/*! ./entities/pais.entity */ "./src/modules/empresas/modules/paises/entities/pais.entity.ts");
let PaisesModule = class PaisesModule {
};
exports.PaisesModule = PaisesModule;
exports.PaisesModule = PaisesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pais_entity_1.Pais])
        ],
        controllers: [paises_controller_1.PaisesController],
        providers: [paises_service_1.PaisesService],
        exports: [paises_service_1.PaisesService]
    })
], PaisesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/paises/services/paises.service.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/modules/paises/services/paises.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaisesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const pais_entity_1 = __webpack_require__(/*! ../entities/pais.entity */ "./src/modules/empresas/modules/paises/entities/pais.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let PaisesService = class PaisesService {
    paisRepository;
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
    }
    create(createPaiseDto) {
        return 'This action adds a new paise';
    }
    async findManyByIds(ids) {
        const paises = await this.paisRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        const foundIds = paises.map(pais => pais.id);
        const notFoundIds = ids.filter(id => !foundIds.includes(id));
        if (notFoundIds.length > 0) {
            throw new common_1.NotFoundException({
                message: `No se encontraron los siguientes ids: ${notFoundIds.join(', ')}`
            });
        }
        return paises;
    }
    async findAll() {
        const paises = await this.paisRepository.find({
            select: {
                id: true,
                nombre: true
            }
        });
        return paises;
    }
    findOne(id) {
        return `This action returns a #${id} paise`;
    }
    update(id, updatePaiseDto) {
        return `This action updates a #${id} paise`;
    }
    remove(id) {
        return `This action removes a #${id} paise`;
    }
};
exports.PaisesService = PaisesService;
exports.PaisesService = PaisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PaisesService);


/***/ }),

/***/ "./src/modules/empresas/modules/premios/api/premios.controller.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/api/premios.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PremiosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const premios_service_1 = __webpack_require__(/*! ../services/premios.service */ "./src/modules/empresas/modules/premios/services/premios.service.ts");
const create_premio_dto_1 = __webpack_require__(/*! ../dto/create-premio.dto */ "./src/modules/empresas/modules/premios/dto/create-premio.dto.ts");
const update_premio_dto_1 = __webpack_require__(/*! ../dto/update-premio.dto */ "./src/modules/empresas/modules/premios/dto/update-premio.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let PremiosController = class PremiosController {
    premiosService;
    constructor(premiosService) {
        this.premiosService = premiosService;
    }
    create(createPremioDto) {
        return this.premiosService.create(createPremioDto);
    }
    findAll() {
        return this.premiosService.findAll();
    }
    findOne(id) {
        return this.premiosService.findOne(+id);
    }
    update(id, updatePremioDto) {
        return this.premiosService.update(+id, updatePremioDto);
    }
    remove(id) {
        return this.premiosService.remove(+id);
    }
};
exports.PremiosController = PremiosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_premio_dto_1.CreatePremioDto !== "undefined" && create_premio_dto_1.CreatePremioDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PremiosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PremiosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PremiosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_premio_dto_1.UpdatePremioDto !== "undefined" && update_premio_dto_1.UpdatePremioDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PremiosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PremiosController.prototype, "remove", null);
exports.PremiosController = PremiosController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/premios'),
    __metadata("design:paramtypes", [typeof (_a = typeof premios_service_1.PremiosService !== "undefined" && premios_service_1.PremiosService) === "function" ? _a : Object])
], PremiosController);


/***/ }),

/***/ "./src/modules/empresas/modules/premios/dto/create-premio.dto.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/dto/create-premio.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePremioDto = void 0;
class CreatePremioDto {
    idEmpresa;
    reconocimientos;
}
exports.CreatePremioDto = CreatePremioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/premios/dto/premio-private.dto.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/dto/premio-private.dto.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PremioPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PremioPrivateDto {
    id;
    nombre;
    esPremio;
    esNacional;
}
exports.PremioPrivateDto = PremioPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del premio',
        type: Number
    }),
    __metadata("design:type", Number)
], PremioPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del premio',
        type: String
    }),
    __metadata("design:type", String)
], PremioPrivateDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si es premio o reconocimiento',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], PremioPrivateDto.prototype, "esPremio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si es nacional',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], PremioPrivateDto.prototype, "esNacional", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/premios/dto/update-premio.dto.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/dto/update-premio.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePremioDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_premio_dto_1 = __webpack_require__(/*! ./create-premio.dto */ "./src/modules/empresas/modules/premios/dto/create-premio.dto.ts");
class UpdatePremioDto extends (0, mapped_types_1.PartialType)(create_premio_dto_1.CreatePremioDto) {
}
exports.UpdatePremioDto = UpdatePremioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/premios/entities/premio.entity.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/entities/premio.entity.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Premio = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Premio = class Premio {
    id;
    nombre;
    esPremio;
    esNacional;
    anio;
    idEmpresa;
    empresa;
};
exports.Premio = Premio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_premio' }),
    __metadata("design:type", Number)
], Premio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'nombre' }),
    __metadata("design:type", String)
], Premio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_premio' }),
    __metadata("design:type", Boolean)
], Premio.prototype, "esPremio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_nacional' }),
    __metadata("design:type", Boolean)
], Premio.prototype, "esNacional", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'anio' }),
    __metadata("design:type", Number)
], Premio.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Premio.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.premios),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Premio.prototype, "empresa", void 0);
exports.Premio = Premio = __decorate([
    (0, typeorm_1.Entity)('premios')
], Premio);


/***/ }),

/***/ "./src/modules/empresas/modules/premios/premios.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/premios.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PremiosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const premios_service_1 = __webpack_require__(/*! ./services/premios.service */ "./src/modules/empresas/modules/premios/services/premios.service.ts");
const premios_controller_1 = __webpack_require__(/*! ./api/premios.controller */ "./src/modules/empresas/modules/premios/api/premios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const premio_entity_1 = __webpack_require__(/*! ./entities/premio.entity */ "./src/modules/empresas/modules/premios/entities/premio.entity.ts");
let PremiosModule = class PremiosModule {
};
exports.PremiosModule = PremiosModule;
exports.PremiosModule = PremiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([premio_entity_1.Premio])
        ],
        controllers: [premios_controller_1.PremiosController],
        providers: [premios_service_1.PremiosService],
        exports: [premios_service_1.PremiosService]
    })
], PremiosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/premios/services/premios.service.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/empresas/modules/premios/services/premios.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PremiosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const premio_entity_1 = __webpack_require__(/*! ../entities/premio.entity */ "./src/modules/empresas/modules/premios/entities/premio.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let PremiosService = class PremiosService {
    premioRepository;
    constructor(premioRepository) {
        this.premioRepository = premioRepository;
    }
    create(createPremioDto) {
        return 'This action adds a new premio';
    }
    async createTransaction(manager, data) {
        const reconocimientos = data.reconocimientos.map(r => ({
            idEmpresa: data.idEmpresa,
            nombre: r.nombre,
            esPremio: r.esPremio,
            esNacional: r.esNacional,
            anio: r.anio
        }));
        return await manager.getRepository(premio_entity_1.Premio).save(reconocimientos);
    }
    findAll() {
        return `This action returns all premios`;
    }
    findOne(id) {
        return `This action returns a #${id} premio`;
    }
    update(id, updatePremioDto) {
        return `This action updates a #${id} premio`;
    }
    remove(id) {
        return `This action removes a #${id} premio`;
    }
};
exports.PremiosService = PremiosService;
exports.PremiosService = PremiosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(premio_entity_1.Premio)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PremiosService);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/api/rubros.controller.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/api/rubros.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rubros_service_1 = __webpack_require__(/*! ../services/rubros.service */ "./src/modules/empresas/modules/rubros/services/rubros.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let RubrosController = class RubrosController {
    rubrosService;
    constructor(rubrosService) {
        this.rubrosService = rubrosService;
    }
    async findAll(res) {
        const rubros = await this.rubrosService.findAll();
        return (0, utils_1.OkRes)(res, {
            rubros: rubros
        });
    }
};
exports.RubrosController = RubrosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener los rubros seleccinables'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener los rubros exitosamente',
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RubrosController.prototype, "findAll", null);
exports.RubrosController = RubrosController = __decorate([
    (0, swagger_1.ApiTags)('Rubros'),
    (0, common_1.Controller)('api/rubros'),
    __metadata("design:paramtypes", [typeof (_a = typeof rubros_service_1.RubrosService !== "undefined" && rubros_service_1.RubrosService) === "function" ? _a : Object])
], RubrosController);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/dto/rubro-private.dto.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/dto/rubro-private.dto.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubroPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RubroPrivateDto {
    id;
    nombre;
    esPropio;
}
exports.RubroPrivateDto = RubroPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rubro',
        type: Number
    }),
    __metadata("design:type", Number)
], RubroPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del rubro',
        type: String
    }),
    __metadata("design:type", String)
], RubroPrivateDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si el rubro es propio',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RubroPrivateDto.prototype, "esPropio", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/dto/rubro-public.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/dto/rubro-public.dto.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubroPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RubroPublicDto {
    id;
    nombre;
}
exports.RubroPublicDto = RubroPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rubro',
        type: Number
    }),
    __metadata("design:type", Number)
], RubroPublicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del rubro',
        type: String
    }),
    __metadata("design:type", String)
], RubroPublicDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/entities/rubro.entity.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/entities/rubro.entity.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rubro = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const rubro_empresa_entity_1 = __webpack_require__(/*! ../modules/rubros-empresas/entities/rubro-empresa.entity */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts");
let Rubro = class Rubro {
    id;
    nombre;
    esPropio;
    rubroEmpresas;
};
exports.Rubro = Rubro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rubro' }),
    __metadata("design:type", Number)
], Rubro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_rubro' }),
    __metadata("design:type", String)
], Rubro.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_propio', default: false }),
    __metadata("design:type", Boolean)
], Rubro.prototype, "esPropio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rubro_empresa_entity_1.RubroEmpresa, (rubroEmpresa) => rubroEmpresa.rubro),
    __metadata("design:type", Array)
], Rubro.prototype, "rubroEmpresas", void 0);
exports.Rubro = Rubro = __decorate([
    (0, typeorm_1.Entity)('rubros')
], Rubro);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/api/rubros-empresas.controller.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/api/rubros-empresas.controller.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosEmpresasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rubros_empresas_service_1 = __webpack_require__(/*! ../services/rubros-empresas.service */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service.ts");
const create_rubros_empresa_dto_1 = __webpack_require__(/*! ../dto/create-rubros-empresa.dto */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/create-rubros-empresa.dto.ts");
const update_rubros_empresa_dto_1 = __webpack_require__(/*! ../dto/update-rubros-empresa.dto */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/update-rubros-empresa.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let RubrosEmpresasController = class RubrosEmpresasController {
    rubrosEmpresasService;
    constructor(rubrosEmpresasService) {
        this.rubrosEmpresasService = rubrosEmpresasService;
    }
    create(createRubrosEmpresaDto) {
        return this.rubrosEmpresasService.create(createRubrosEmpresaDto);
    }
    findAll() {
        return this.rubrosEmpresasService.findAll();
    }
    findOne(id) {
        return this.rubrosEmpresasService.findOne(+id);
    }
    update(id, updateRubrosEmpresaDto) {
        return this.rubrosEmpresasService.update(+id, updateRubrosEmpresaDto);
    }
    remove(id) {
        return this.rubrosEmpresasService.remove(+id);
    }
};
exports.RubrosEmpresasController = RubrosEmpresasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_rubros_empresa_dto_1.CreateRubrosEmpresaDto !== "undefined" && create_rubros_empresa_dto_1.CreateRubrosEmpresaDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RubrosEmpresasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RubrosEmpresasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RubrosEmpresasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_rubros_empresa_dto_1.UpdateRubrosEmpresaDto !== "undefined" && update_rubros_empresa_dto_1.UpdateRubrosEmpresaDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RubrosEmpresasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RubrosEmpresasController.prototype, "remove", null);
exports.RubrosEmpresasController = RubrosEmpresasController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/rubros-empresas'),
    __metadata("design:paramtypes", [typeof (_a = typeof rubros_empresas_service_1.RubrosEmpresasService !== "undefined" && rubros_empresas_service_1.RubrosEmpresasService) === "function" ? _a : Object])
], RubrosEmpresasController);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/create-rubros-empresa.dto.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/create-rubros-empresa.dto.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRubrosEmpresaDto = void 0;
const register_rubros_dto_1 = __webpack_require__(/*! src/app/services/formulario/dto/rubros/register-rubros.dto */ "./src/app/services/formulario/dto/rubros/register-rubros.dto.ts");
class CreateRubrosEmpresaDto extends register_rubros_dto_1.RegisterRubrosDto {
    idEmpresa;
}
exports.CreateRubrosEmpresaDto = CreateRubrosEmpresaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-private.dto.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-private.dto.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubroEmpresaPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rubro_private_dto_1 = __webpack_require__(/*! ../../../dto/rubro-private.dto */ "./src/modules/empresas/modules/rubros/dto/rubro-private.dto.ts");
class RubroEmpresaPrivateDto {
    id;
    rubro;
    esActivo;
}
exports.RubroEmpresaPrivateDto = RubroEmpresaPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del rubro de la emrpesa',
        type: Number
    }),
    __metadata("design:type", Number)
], RubroEmpresaPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rubro de le empresa',
        type: rubro_private_dto_1.RubroPrivateDto
    }),
    __metadata("design:type", typeof (_a = typeof rubro_private_dto_1.RubroPrivateDto !== "undefined" && rubro_private_dto_1.RubroPrivateDto) === "function" ? _a : Object)
], RubroEmpresaPrivateDto.prototype, "rubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define que si esta activo',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RubroEmpresaPrivateDto.prototype, "esActivo", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-public.dto.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/rubro-empresa-public.dto.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubroEmpresaPublicDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rubro_public_dto_1 = __webpack_require__(/*! ../../../dto/rubro-public.dto */ "./src/modules/empresas/modules/rubros/dto/rubro-public.dto.ts");
class RubroEmpresaPublicDto {
    rubro;
    esActivo;
}
exports.RubroEmpresaPublicDto = RubroEmpresaPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Rubro relacionado',
        type: rubro_public_dto_1.RubroPublicDto
    }),
    __metadata("design:type", typeof (_a = typeof rubro_public_dto_1.RubroPublicDto !== "undefined" && rubro_public_dto_1.RubroPublicDto) === "function" ? _a : Object)
], RubroEmpresaPublicDto.prototype, "rubro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del rubro',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], RubroEmpresaPublicDto.prototype, "esActivo", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/update-rubros-empresa.dto.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/update-rubros-empresa.dto.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRubrosEmpresaDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_rubros_empresa_dto_1 = __webpack_require__(/*! ./create-rubros-empresa.dto */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/dto/create-rubros-empresa.dto.ts");
class UpdateRubrosEmpresaDto extends (0, mapped_types_1.PartialType)(create_rubros_empresa_dto_1.CreateRubrosEmpresaDto) {
}
exports.UpdateRubrosEmpresaDto = UpdateRubrosEmpresaDto;


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts":
/*!******************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubroEmpresa = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const rubro_entity_1 = __webpack_require__(/*! ../../../entities/rubro.entity */ "./src/modules/empresas/modules/rubros/entities/rubro.entity.ts");
let RubroEmpresa = class RubroEmpresa {
    id;
    idRubro;
    idEmpresa;
    esActivo;
    empresa;
    rubro;
};
exports.RubroEmpresa = RubroEmpresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rubro_empresa' }),
    __metadata("design:type", Number)
], RubroEmpresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_rubro' }),
    __metadata("design:type", Number)
], RubroEmpresa.prototype, "idRubro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], RubroEmpresa.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_activo', default: true }),
    __metadata("design:type", Boolean)
], RubroEmpresa.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.rubrosEmpresa),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], RubroEmpresa.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rubro_entity_1.Rubro, (rubro) => rubro.rubroEmpresas),
    (0, typeorm_1.JoinColumn)({ name: 'id_rubro' }),
    __metadata("design:type", typeof (_b = typeof rubro_entity_1.Rubro !== "undefined" && rubro_entity_1.Rubro) === "function" ? _b : Object)
], RubroEmpresa.prototype, "rubro", void 0);
exports.RubroEmpresa = RubroEmpresa = __decorate([
    (0, typeorm_1.Entity)('rubros_empresas')
], RubroEmpresa);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosEmpresasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rubros_empresas_service_1 = __webpack_require__(/*! ./services/rubros-empresas.service */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service.ts");
const rubros_empresas_controller_1 = __webpack_require__(/*! ./api/rubros-empresas.controller */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/api/rubros-empresas.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rubro_empresa_entity_1 = __webpack_require__(/*! ./entities/rubro-empresa.entity */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts");
const rubros_module_1 = __webpack_require__(/*! ../../rubros.module */ "./src/modules/empresas/modules/rubros/rubros.module.ts");
let RubrosEmpresasModule = class RubrosEmpresasModule {
};
exports.RubrosEmpresasModule = RubrosEmpresasModule;
exports.RubrosEmpresasModule = RubrosEmpresasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rubro_empresa_entity_1.RubroEmpresa]),
            rubros_module_1.RubrosModule
        ],
        controllers: [rubros_empresas_controller_1.RubrosEmpresasController],
        providers: [rubros_empresas_service_1.RubrosEmpresasService],
        exports: [rubros_empresas_service_1.RubrosEmpresasService]
    })
], RubrosEmpresasModule);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/modules/rubros-empresas/services/rubros-empresas.service.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosEmpresasService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rubro_empresa_entity_1 = __webpack_require__(/*! ../entities/rubro-empresa.entity */ "./src/modules/empresas/modules/rubros/modules/rubros-empresas/entities/rubro-empresa.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const rubros_service_1 = __webpack_require__(/*! ../../../services/rubros.service */ "./src/modules/empresas/modules/rubros/services/rubros.service.ts");
let RubrosEmpresasService = class RubrosEmpresasService {
    rubroEmpresaRepository;
    rubrosService;
    constructor(rubroEmpresaRepository, rubrosService) {
        this.rubroEmpresaRepository = rubroEmpresaRepository;
        this.rubrosService = rubrosService;
    }
    create(createRubrosEmpresaDto) {
        return 'This action adds a new rubrosEmpresa';
    }
    async createTransaction(manager, data) {
        if (data.data && data.data.length > 0) {
            await this.rubrosService.findManyByIds(data.data.map(d => d.idRubro));
        }
        const rubrosOtro = (data.otros && data.otros.length > 0)
            ? await this.rubrosService.createTransaccion(manager, data.otros)
            : [];
        let rubrosEmpresa = [];
        data.data?.map(d => {
            rubrosEmpresa.push({
                idEmpresa: data.idEmpresa,
                idRubro: d.idRubro,
                esActivo: d.esActivo
            });
        });
        rubrosOtro.map(o => {
            rubrosEmpresa.push({
                idEmpresa: data.idEmpresa,
                idRubro: o.idRubro,
                esActivo: o.esActivo
            });
        });
        if (rubrosEmpresa.length > 0) {
            return await manager.getRepository(rubro_empresa_entity_1.RubroEmpresa).save(rubrosEmpresa);
        }
        return [];
    }
    findAll() {
        return `This action returns all rubrosEmpresas`;
    }
    findOne(id) {
        return `This action returns a #${id} rubrosEmpresa`;
    }
    update(id, updateRubrosEmpresaDto) {
        return `This action updates a #${id} rubrosEmpresa`;
    }
    remove(id) {
        return `This action removes a #${id} rubrosEmpresa`;
    }
};
exports.RubrosEmpresasService = RubrosEmpresasService;
exports.RubrosEmpresasService = RubrosEmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rubro_empresa_entity_1.RubroEmpresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof rubros_service_1.RubrosService !== "undefined" && rubros_service_1.RubrosService) === "function" ? _b : Object])
], RubrosEmpresasService);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/rubros.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/rubros.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rubros_service_1 = __webpack_require__(/*! ./services/rubros.service */ "./src/modules/empresas/modules/rubros/services/rubros.service.ts");
const rubros_controller_1 = __webpack_require__(/*! ./api/rubros.controller */ "./src/modules/empresas/modules/rubros/api/rubros.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rubro_entity_1 = __webpack_require__(/*! ./entities/rubro.entity */ "./src/modules/empresas/modules/rubros/entities/rubro.entity.ts");
const rubros_statistics_service_1 = __webpack_require__(/*! ./services/rubros-statistics.service */ "./src/modules/empresas/modules/rubros/services/rubros-statistics.service.ts");
let RubrosModule = class RubrosModule {
};
exports.RubrosModule = RubrosModule;
exports.RubrosModule = RubrosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rubro_entity_1.Rubro])
        ],
        controllers: [rubros_controller_1.RubrosController],
        providers: [rubros_service_1.RubrosService, rubros_statistics_service_1.RubrosStatisticsService],
        exports: [rubros_service_1.RubrosService, rubros_statistics_service_1.RubrosStatisticsService]
    })
], RubrosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/services/rubros-statistics.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/services/rubros-statistics.service.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosStatisticsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const rubro_entity_1 = __webpack_require__(/*! ../entities/rubro.entity */ "./src/modules/empresas/modules/rubros/entities/rubro.entity.ts");
let RubrosStatisticsService = class RubrosStatisticsService {
    rubroRepository;
    constructor(rubroRepository) {
        this.rubroRepository = rubroRepository;
    }
    async getPorcentajesRubro(params) {
        const query = this.rubroRepository
            .createQueryBuilder('r')
            .select('r.id_rubro', 'idRubro')
            .addSelect('r.nombre_rubro', 'nombreRubro')
            .addSelect('COUNT(DISTINCT re.id_empresa)', 'totalEmpresas')
            .addSelect(`(COUNT(DISTINCT re.id_empresa) * 100.0) / NULLIF((
                    SELECT COUNT(DISTINCT e.id_empresa) 
                    FROM empresas e
                    ${params.familiar === true ? 'WHERE EXISTS (SELECT 1 FROM familias f WHERE f.id_empresa = e.id_empresa AND f.es_familiar = true)' : ''}
                ), 0)`, 'porcentaje')
            .innerJoin('r.rubroEmpresas', 're')
            .where('r.es_propio = false')
            .andWhere('re.es_activo = true');
        if (params.familiar === true) {
            query.andWhere(`
                EXISTS (
                    SELECT 1 
                    FROM familias f 
                    WHERE f.id_empresa = re.id_empresa
                    AND f.es_familiar = true
                )
            `);
        }
        query.groupBy('r.id_rubro')
            .addGroupBy('r.nombre_rubro')
            .orderBy('COUNT(DISTINCT re.id_empresa)', 'DESC');
        const result = await query.getRawMany();
        return result.map(r => ({
            idRubro: parseInt(r.idRubro, 10),
            nombreRubro: r.nombreRubro,
            totalEmpresas: parseInt(r.totalEmpresas, 10),
            porcentaje: parseFloat(r.porcentaje),
        }));
    }
};
exports.RubrosStatisticsService = RubrosStatisticsService;
exports.RubrosStatisticsService = RubrosStatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rubro_entity_1.Rubro)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RubrosStatisticsService);


/***/ }),

/***/ "./src/modules/empresas/modules/rubros/services/rubros.service.ts":
/*!************************************************************************!*\
  !*** ./src/modules/empresas/modules/rubros/services/rubros.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubrosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rubro_entity_1 = __webpack_require__(/*! ../entities/rubro.entity */ "./src/modules/empresas/modules/rubros/entities/rubro.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let RubrosService = class RubrosService {
    rubroRepository;
    constructor(rubroRepository) {
        this.rubroRepository = rubroRepository;
    }
    create(createRubroDto) {
        return 'This action adds a new rubro';
    }
    async createTransaccion(manager, data) {
        const rubros = data.map((rubro) => ({
            nombre: rubro.nombre,
            esPropio: true
        }));
        const result = await manager.getRepository(rubro_entity_1.Rubro).save(rubros);
        return result.map((r) => ({
            idRubro: r.id,
            esActivo: data.find(ru => ru.nombre === r.nombre).esActivo
        }));
    }
    async findManyByIds(ids) {
        const rubros = await this.rubroRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        const foundIds = rubros.map(r => r.id);
        const missingId = ids.find(id => !foundIds.includes(id));
        if (missingId !== undefined) {
            throw new common_1.NotFoundException(`El rubro con id ${missingId} no fue encontrado`);
        }
        return rubros;
    }
    async findAll() {
        const rubros = await this.rubroRepository.find({
            where: {
                esPropio: false
            },
            select: {
                id: true,
                nombre: true
            }
        });
        return rubros;
    }
    findOne(id) {
        return `This action returns a #${id} rubro`;
    }
    update(id, updateRubroDto) {
        return `This action updates a #${id} rubro`;
    }
    remove(id) {
        return `This action removes a #${id} rubro`;
    }
};
exports.RubrosService = RubrosService;
exports.RubrosService = RubrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rubro_entity_1.Rubro)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RubrosService);


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/api/sedes.controller.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/api/sedes.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sedes_service_1 = __webpack_require__(/*! ../services/sedes.service */ "./src/modules/empresas/modules/sedes/services/sedes.service.ts");
const create_sede_dto_1 = __webpack_require__(/*! ../dto/create-sede.dto */ "./src/modules/empresas/modules/sedes/dto/create-sede.dto.ts");
const update_sede_dto_1 = __webpack_require__(/*! ../dto/update-sede.dto */ "./src/modules/empresas/modules/sedes/dto/update-sede.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let SedesController = class SedesController {
    sedesService;
    constructor(sedesService) {
        this.sedesService = sedesService;
    }
    create(createSedeDto) {
        return this.sedesService.create(createSedeDto);
    }
    findAll() {
        return this.sedesService.findAll();
    }
    findOne(id) {
        return this.sedesService.findOne(+id);
    }
    update(id, updateSedeDto) {
        return this.sedesService.update(+id, updateSedeDto);
    }
    remove(id) {
        return this.sedesService.remove(+id);
    }
};
exports.SedesController = SedesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_sede_dto_1.CreateSedeDto !== "undefined" && create_sede_dto_1.CreateSedeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_sede_dto_1.UpdateSedeDto !== "undefined" && update_sede_dto_1.UpdateSedeDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SedesController.prototype, "remove", null);
exports.SedesController = SedesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/sedes'),
    __metadata("design:paramtypes", [typeof (_a = typeof sedes_service_1.SedesService !== "undefined" && sedes_service_1.SedesService) === "function" ? _a : Object])
], SedesController);


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/dto/create-sede.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/dto/create-sede.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSedeDto = void 0;
class CreateSedeDto {
    idEmpresa;
    sedes;
}
exports.CreateSedeDto = CreateSedeDto;


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/dto/sede-private.dto.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/dto/sede-private.dto.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedePrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const departamento_public_dto_1 = __webpack_require__(/*! ../../departamentos/dto/departamento-public.dto */ "./src/modules/empresas/modules/departamentos/dto/departamento-public.dto.ts");
class SedePrivateDto {
    id;
    departamento;
    esCentral;
}
exports.SedePrivateDto = SedePrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la sede de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], SedePrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Departamento de la sede',
        type: departamento_public_dto_1.DepartamentoPublicDto
    }),
    __metadata("design:type", typeof (_a = typeof departamento_public_dto_1.DepartamentoPublicDto !== "undefined" && departamento_public_dto_1.DepartamentoPublicDto) === "function" ? _a : Object)
], SedePrivateDto.prototype, "departamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si la sede es central',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], SedePrivateDto.prototype, "esCentral", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/dto/update-sede.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/dto/update-sede.dto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSedeDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_sede_dto_1 = __webpack_require__(/*! ./create-sede.dto */ "./src/modules/empresas/modules/sedes/dto/create-sede.dto.ts");
class UpdateSedeDto extends (0, mapped_types_1.PartialType)(create_sede_dto_1.CreateSedeDto) {
}
exports.UpdateSedeDto = UpdateSedeDto;


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/entities/sede.entity.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/entities/sede.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sede = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const departamento_entity_1 = __webpack_require__(/*! ../../departamentos/entities/departamento.entity */ "./src/modules/empresas/modules/departamentos/entities/departamento.entity.ts");
let Sede = class Sede {
    id;
    idDepartamento;
    idEmpresa;
    esCentral;
    empresa;
    departamento;
};
exports.Sede = Sede;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_ubicacion' }),
    __metadata("design:type", Number)
], Sede.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_departamento' }),
    __metadata("design:type", Number)
], Sede.prototype, "idDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], Sede.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_central', default: false }),
    __metadata("design:type", Boolean)
], Sede.prototype, "esCentral", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.sedes),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Sede.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_entity_1.Departamento, (depa) => depa.sedes),
    (0, typeorm_1.JoinColumn)({ name: 'id_departamento' }),
    __metadata("design:type", typeof (_b = typeof departamento_entity_1.Departamento !== "undefined" && departamento_entity_1.Departamento) === "function" ? _b : Object)
], Sede.prototype, "departamento", void 0);
exports.Sede = Sede = __decorate([
    (0, typeorm_1.Entity)('sedes')
], Sede);


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/sedes.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/sedes.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sedes_service_1 = __webpack_require__(/*! ./services/sedes.service */ "./src/modules/empresas/modules/sedes/services/sedes.service.ts");
const sedes_controller_1 = __webpack_require__(/*! ./api/sedes.controller */ "./src/modules/empresas/modules/sedes/api/sedes.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const sede_entity_1 = __webpack_require__(/*! ./entities/sede.entity */ "./src/modules/empresas/modules/sedes/entities/sede.entity.ts");
const departamentos_module_1 = __webpack_require__(/*! ../departamentos/departamentos.module */ "./src/modules/empresas/modules/departamentos/departamentos.module.ts");
let SedesModule = class SedesModule {
};
exports.SedesModule = SedesModule;
exports.SedesModule = SedesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sede_entity_1.Sede]),
            departamentos_module_1.DepartamentosModule,
        ],
        controllers: [sedes_controller_1.SedesController],
        providers: [sedes_service_1.SedesService],
        exports: [sedes_service_1.SedesService]
    })
], SedesModule);


/***/ }),

/***/ "./src/modules/empresas/modules/sedes/services/sedes.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/modules/sedes/services/sedes.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SedesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const sede_entity_1 = __webpack_require__(/*! ../entities/sede.entity */ "./src/modules/empresas/modules/sedes/entities/sede.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const departamentos_service_1 = __webpack_require__(/*! ../../departamentos/services/departamentos.service */ "./src/modules/empresas/modules/departamentos/services/departamentos.service.ts");
let SedesService = class SedesService {
    sedeRepository;
    departamentosService;
    constructor(sedeRepository, departamentosService) {
        this.sedeRepository = sedeRepository;
        this.departamentosService = departamentosService;
    }
    create(createSedeDto) {
        return 'This action adds a new sede';
    }
    async createTransaction(manager, data) {
        await this.departamentosService.findManyByIds(data.sedes.map(s => s.idDepartamento));
        const sedes = data.sedes.map(s => ({
            idEmpresa: data.idEmpresa,
            idDepartamento: s.idDepartamento,
            esCentral: s.esCentral
        }));
        return await manager.getRepository(sede_entity_1.Sede).save(sedes);
    }
    findAll() {
        return `This action returns all sedes`;
    }
    findOne(id) {
        return `This action returns a #${id} sede`;
    }
    update(id, updateSedeDto) {
        return `This action updates a #${id} sede`;
    }
    remove(id) {
        return `This action removes a #${id} sede`;
    }
};
exports.SedesService = SedesService;
exports.SedesService = SedesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sede_entity_1.Sede)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof departamentos_service_1.DepartamentosService !== "undefined" && departamentos_service_1.DepartamentosService) === "function" ? _b : Object])
], SedesService);


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/api/servicios.controller.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/api/servicios.controller.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiciosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const servicios_service_1 = __webpack_require__(/*! ../services/servicios.service */ "./src/modules/empresas/modules/servicios/services/servicios.service.ts");
const create_servicio_dto_1 = __webpack_require__(/*! ../dto/create-servicio.dto */ "./src/modules/empresas/modules/servicios/dto/create-servicio.dto.ts");
const update_servicio_dto_1 = __webpack_require__(/*! ../dto/update-servicio.dto */ "./src/modules/empresas/modules/servicios/dto/update-servicio.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ServiciosController = class ServiciosController {
    serviciosService;
    constructor(serviciosService) {
        this.serviciosService = serviciosService;
    }
    create(createServicioDto) {
        return this.serviciosService.create(createServicioDto);
    }
    findAll() {
        return this.serviciosService.findAll();
    }
    findOne(id) {
        return this.serviciosService.findOne(+id);
    }
    update(id, updateServicioDto) {
        return this.serviciosService.update(+id, updateServicioDto);
    }
    remove(id) {
        return this.serviciosService.remove(+id);
    }
};
exports.ServiciosController = ServiciosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_servicio_dto_1.CreateServicioDto !== "undefined" && create_servicio_dto_1.CreateServicioDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_servicio_dto_1.UpdateServicioDto !== "undefined" && update_servicio_dto_1.UpdateServicioDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "remove", null);
exports.ServiciosController = ServiciosController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('servicios'),
    __metadata("design:paramtypes", [typeof (_a = typeof servicios_service_1.ServiciosService !== "undefined" && servicios_service_1.ServiciosService) === "function" ? _a : Object])
], ServiciosController);


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/dto/create-servicio.dto.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/dto/create-servicio.dto.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateServicioDto = void 0;
class CreateServicioDto {
    idEmpresa;
    servicio;
}
exports.CreateServicioDto = CreateServicioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/dto/servicio-private.dto.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/dto/servicio-private.dto.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ServicioPrivateDto {
    id;
    nombre;
}
exports.ServicioPrivateDto = ServicioPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del servicio de la empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], ServicioPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del servicio',
        type: String
    }),
    __metadata("design:type", String)
], ServicioPrivateDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/dto/update-servicio.dto.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/dto/update-servicio.dto.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateServicioDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_servicio_dto_1 = __webpack_require__(/*! ./create-servicio.dto */ "./src/modules/empresas/modules/servicios/dto/create-servicio.dto.ts");
class UpdateServicioDto extends (0, swagger_1.PartialType)(create_servicio_dto_1.CreateServicioDto) {
}
exports.UpdateServicioDto = UpdateServicioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/entities/servicio.entity.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/entities/servicio.entity.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Servicio = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Servicio = class Servicio {
    id;
    nombre;
    idEmpresa;
    empresa;
};
exports.Servicio = Servicio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_servicio' }),
    __metadata("design:type", Number)
], Servicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre' }),
    __metadata("design:type", String)
], Servicio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_empresa', type: 'int' }),
    __metadata("design:type", Number)
], Servicio.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.servicios),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], Servicio.prototype, "empresa", void 0);
exports.Servicio = Servicio = __decorate([
    (0, typeorm_1.Entity)('servicios')
], Servicio);


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/services/servicios.service.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/services/servicios.service.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiciosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const servicio_entity_1 = __webpack_require__(/*! ../entities/servicio.entity */ "./src/modules/empresas/modules/servicios/entities/servicio.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let ServiciosService = class ServiciosService {
    servicioRepository;
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    create(createServicioDto) {
        return 'This action adds a new servicio';
    }
    async createTransaction(manger, data) {
        const repo = manger.getRepository(servicio_entity_1.Servicio);
        const servicios = data.servicio.map((servicio) => ({
            idEmpresa: data.idEmpresa,
            nombre: servicio
        }));
        return await repo.save(servicios);
    }
    findAll() {
        return `This action returns all servicios`;
    }
    findOne(id) {
        return `This action returns a #${id} servicio`;
    }
    update(id, updateServicioDto) {
        return `This action updates a #${id} servicio`;
    }
    remove(id) {
        return `This action removes a #${id} servicio`;
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ServiciosService);


/***/ }),

/***/ "./src/modules/empresas/modules/servicios/servicios.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/empresas/modules/servicios/servicios.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiciosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const servicios_service_1 = __webpack_require__(/*! ./services/servicios.service */ "./src/modules/empresas/modules/servicios/services/servicios.service.ts");
const servicios_controller_1 = __webpack_require__(/*! ./api/servicios.controller */ "./src/modules/empresas/modules/servicios/api/servicios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const servicio_entity_1 = __webpack_require__(/*! ./entities/servicio.entity */ "./src/modules/empresas/modules/servicios/entities/servicio.entity.ts");
let ServiciosModule = class ServiciosModule {
};
exports.ServiciosModule = ServiciosModule;
exports.ServiciosModule = ServiciosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([servicio_entity_1.Servicio])
        ],
        controllers: [servicios_controller_1.ServiciosController],
        providers: [servicios_service_1.ServiciosService],
        exports: [servicios_service_1.ServiciosService]
    })
], ServiciosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/tamanios-empresas/api/tamanios-empresas.controller.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tamanios-empresas/api/tamanios-empresas.controller.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TamaniosEmpresasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tamanios_empresas_service_1 = __webpack_require__(/*! ../services/tamanios-empresas.service */ "./src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let TamaniosEmpresasController = class TamaniosEmpresasController {
    tamaniosEmpresasService;
    constructor(tamaniosEmpresasService) {
        this.tamaniosEmpresasService = tamaniosEmpresasService;
    }
    async findAll(res) {
        const tamaniosEmpresas = await this.tamaniosEmpresasService.findAll();
        return (0, utils_1.OkRes)(res, {
            tamaniosEmpresas: tamaniosEmpresas
        });
    }
};
exports.TamaniosEmpresasController = TamaniosEmpresasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TamaniosEmpresasController.prototype, "findAll", null);
exports.TamaniosEmpresasController = TamaniosEmpresasController = __decorate([
    (0, swagger_1.ApiTags)('Tamanios de empresas'),
    (0, common_1.Controller)('api/tamanios-empresas'),
    __metadata("design:paramtypes", [typeof (_a = typeof tamanios_empresas_service_1.TamaniosEmpresasService !== "undefined" && tamanios_empresas_service_1.TamaniosEmpresasService) === "function" ? _a : Object])
], TamaniosEmpresasController);


/***/ }),

/***/ "./src/modules/empresas/modules/tamanios-empresas/dto/tamanio-empresa-private.dto.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tamanios-empresas/dto/tamanio-empresa-private.dto.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TamanioEmpresaPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class TamanioEmpresaPrivateDto {
    id;
    nombre;
}
exports.TamanioEmpresaPrivateDto = TamanioEmpresaPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del tipo de empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], TamanioEmpresaPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del tamanio de empresa',
        type: String
    }),
    __metadata("design:type", String)
], TamanioEmpresaPrivateDto.prototype, "nombre", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/tamanios-empresas/entities/tamanio-empresa.entity.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tamanios-empresas/entities/tamanio-empresa.entity.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TamanioEmpresa = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TamanioEmpresa = class TamanioEmpresa {
    id;
    nombre;
    empresas;
};
exports.TamanioEmpresa = TamanioEmpresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_tamanio' }),
    __metadata("design:type", Number)
], TamanioEmpresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_tamanio' }),
    __metadata("design:type", String)
], TamanioEmpresa.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => empresa_entity_1.Empresa, (empresa) => empresa.tamanioEmpresa),
    __metadata("design:type", Array)
], TamanioEmpresa.prototype, "empresas", void 0);
exports.TamanioEmpresa = TamanioEmpresa = __decorate([
    (0, typeorm_1.Entity)('tamanios_empresas')
], TamanioEmpresa);


/***/ }),

/***/ "./src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TamaniosEmpresasService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tamanio_empresa_entity_1 = __webpack_require__(/*! ../entities/tamanio-empresa.entity */ "./src/modules/empresas/modules/tamanios-empresas/entities/tamanio-empresa.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let TamaniosEmpresasService = class TamaniosEmpresasService {
    tamanioEmpresaRepository;
    constructor(tamanioEmpresaRepository) {
        this.tamanioEmpresaRepository = tamanioEmpresaRepository;
    }
    create(createTamaniosEmpresaDto) {
        return 'This action adds a new tamaniosEmpresa';
    }
    async findAll() {
        const tama = await this.tamanioEmpresaRepository.find({
            select: {
                id: true,
                nombre: true
            }
        });
        return tama;
    }
    async findOne(id, options = {}) {
        if (Number.isNaN(id) || id === 0) {
            throw new common_1.BadRequestException({
                message: 'Id de tamanio de empresa invalido'
            });
        }
        const tamanio = await this.tamanioEmpresaRepository.findOne({
            where: {
                id: id
            }
        });
        if (!tamanio && options.throwException) {
            throw new common_1.NotFoundException({
                message: 'No se encontro el tamanio de la empresa'
            });
        }
        return tamanio;
    }
    update(id, updateTamaniosEmpresaDto) {
        return `This action updates a #${id} tamaniosEmpresa`;
    }
    remove(id) {
        return `This action removes a #${id} tamaniosEmpresa`;
    }
};
exports.TamaniosEmpresasService = TamaniosEmpresasService;
exports.TamaniosEmpresasService = TamaniosEmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tamanio_empresa_entity_1.TamanioEmpresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TamaniosEmpresasService);


/***/ }),

/***/ "./src/modules/empresas/modules/tamanios-empresas/tamanios-empresas.module.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tamanios-empresas/tamanios-empresas.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TamaniosEmpresasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tamanios_empresas_service_1 = __webpack_require__(/*! ./services/tamanios-empresas.service */ "./src/modules/empresas/modules/tamanios-empresas/services/tamanios-empresas.service.ts");
const tamanios_empresas_controller_1 = __webpack_require__(/*! ./api/tamanios-empresas.controller */ "./src/modules/empresas/modules/tamanios-empresas/api/tamanios-empresas.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tamanio_empresa_entity_1 = __webpack_require__(/*! ./entities/tamanio-empresa.entity */ "./src/modules/empresas/modules/tamanios-empresas/entities/tamanio-empresa.entity.ts");
let TamaniosEmpresasModule = class TamaniosEmpresasModule {
};
exports.TamaniosEmpresasModule = TamaniosEmpresasModule;
exports.TamaniosEmpresasModule = TamaniosEmpresasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tamanio_empresa_entity_1.TamanioEmpresa])
        ],
        controllers: [tamanios_empresas_controller_1.TamaniosEmpresasController],
        providers: [tamanios_empresas_service_1.TamaniosEmpresasService],
        exports: [tamanios_empresas_service_1.TamaniosEmpresasService]
    })
], TamaniosEmpresasModule);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/api/tipos-societarios.controller.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/api/tipos-societarios.controller.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposSocietariosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_societarios_service_1 = __webpack_require__(/*! ../services/tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/services/tipos-societarios.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
let TiposSocietariosController = class TiposSocietariosController {
    tiposSocietariosService;
    constructor(tiposSocietariosService) {
        this.tiposSocietariosService = tiposSocietariosService;
    }
    async findAll(res) {
        const ts = await this.tiposSocietariosService.findAll();
        return (0, utils_1.OkRes)(res, {
            tiposSocietarios: ts
        });
    }
};
exports.TiposSocietariosController = TiposSocietariosController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Api para obtener los tipos de societarios'
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Respuesta en caso de obtener los tipos de societario exitosamente'
    }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TiposSocietariosController.prototype, "findAll", null);
exports.TiposSocietariosController = TiposSocietariosController = __decorate([
    (0, swagger_1.ApiTags)('Tipos de societarios'),
    (0, common_1.Controller)('api/tipos-societarios'),
    __metadata("design:paramtypes", [typeof (_a = typeof tipos_societarios_service_1.TiposSocietariosService !== "undefined" && tipos_societarios_service_1.TiposSocietariosService) === "function" ? _a : Object])
], TiposSocietariosController);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/dto/tipo-societario-private.dto.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/dto/tipo-societario-private.dto.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TipoSocietarioPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class TipoSocietarioPrivateDto {
    id;
    nombre;
    esPropio;
}
exports.TipoSocietarioPrivateDto = TipoSocietarioPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id del tipo de societario',
        type: Number
    }),
    __metadata("design:type", Number)
], TipoSocietarioPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del tipo societario',
        type: String
    }),
    __metadata("design:type", String)
], TipoSocietarioPrivateDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si es prpio el tipo de societario',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], TipoSocietarioPrivateDto.prototype, "esPropio", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/entities/tipo-societario.entity.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/entities/tipo-societario.entity.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TipoSocietario = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const empresa_tipo_societario_entity_1 = __webpack_require__(/*! ../modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts");
let TipoSocietario = class TipoSocietario {
    id;
    nombre;
    esPropio;
    tiposSocietariosEmpresa;
};
exports.TipoSocietario = TipoSocietario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_tipsoc' }),
    __metadata("design:type", Number)
], TipoSocietario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'nombre_tipsoc' }),
    __metadata("design:type", String)
], TipoSocietario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'es_propio', default: false }),
    __metadata("design:type", Boolean)
], TipoSocietario.prototype, "esPropio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => empresa_tipo_societario_entity_1.EmpresaTipoSocietario, (empre) => empre.tipoSocietario),
    __metadata("design:type", Array)
], TipoSocietario.prototype, "tiposSocietariosEmpresa", void 0);
exports.TipoSocietario = TipoSocietario = __decorate([
    (0, typeorm_1.Entity)('tipos_societarios')
], TipoSocietario);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/api/empresas-tipos-societarios.controller.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/api/empresas-tipos-societarios.controller.ts ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasTiposSocietariosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_tipos_societarios_service_1 = __webpack_require__(/*! ../services/empresas-tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service.ts");
const create_empresas_tipos_societario_dto_1 = __webpack_require__(/*! ../dto/create-empresas-tipos-societario.dto */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/create-empresas-tipos-societario.dto.ts");
const update_empresas_tipos_societario_dto_1 = __webpack_require__(/*! ../dto/update-empresas-tipos-societario.dto */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/update-empresas-tipos-societario.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let EmpresasTiposSocietariosController = class EmpresasTiposSocietariosController {
    empresasTiposSocietariosService;
    constructor(empresasTiposSocietariosService) {
        this.empresasTiposSocietariosService = empresasTiposSocietariosService;
    }
    create(createEmpresasTiposSocietarioDto) {
        return this.empresasTiposSocietariosService.create(createEmpresasTiposSocietarioDto);
    }
    findAll() {
        return this.empresasTiposSocietariosService.findAll();
    }
    findOne(id) {
        return this.empresasTiposSocietariosService.findOne(+id);
    }
    update(id, updateEmpresasTiposSocietarioDto) {
        return this.empresasTiposSocietariosService.update(+id, updateEmpresasTiposSocietarioDto);
    }
    remove(id) {
        return this.empresasTiposSocietariosService.remove(+id);
    }
};
exports.EmpresasTiposSocietariosController = EmpresasTiposSocietariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_empresas_tipos_societario_dto_1.CreateEmpresasTiposSocietarioDto !== "undefined" && create_empresas_tipos_societario_dto_1.CreateEmpresasTiposSocietarioDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EmpresasTiposSocietariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpresasTiposSocietariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpresasTiposSocietariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_empresas_tipos_societario_dto_1.UpdateEmpresasTiposSocietarioDto !== "undefined" && update_empresas_tipos_societario_dto_1.UpdateEmpresasTiposSocietarioDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], EmpresasTiposSocietariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpresasTiposSocietariosController.prototype, "remove", null);
exports.EmpresasTiposSocietariosController = EmpresasTiposSocietariosController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/empresas-tipos-societarios'),
    __metadata("design:paramtypes", [typeof (_a = typeof empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService !== "undefined" && empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService) === "function" ? _a : Object])
], EmpresasTiposSocietariosController);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/create-empresas-tipos-societario.dto.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/create-empresas-tipos-societario.dto.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateEmpresasTiposSocietarioDto = void 0;
const register_tipos_societarios_dto_1 = __webpack_require__(/*! src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios.dto */ "./src/app/services/formulario/dto/tipos-societarios/register-tipos-societarios.dto.ts");
class CreateEmpresasTiposSocietarioDto extends register_tipos_societarios_dto_1.RegisterTiposSocietariosDto {
    idEmpresa;
}
exports.CreateEmpresasTiposSocietarioDto = CreateEmpresasTiposSocietarioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/empresa-tipo-societario-private.dto.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/empresa-tipo-societario-private.dto.ts ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaTipoSocietarioPrivateDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const tipo_societario_private_dto_1 = __webpack_require__(/*! ../../../dto/tipo-societario-private.dto */ "./src/modules/empresas/modules/tipos-societarios/dto/tipo-societario-private.dto.ts");
class EmpresaTipoSocietarioPrivateDto {
    id;
    tipoSocietario;
    esActivo;
    fechaCambio;
}
exports.EmpresaTipoSocietarioPrivateDto = EmpresaTipoSocietarioPrivateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id de la relacion entre tipo societario y empresa',
        type: Number
    }),
    __metadata("design:type", Number)
], EmpresaTipoSocietarioPrivateDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de societario',
        type: tipo_societario_private_dto_1.TipoSocietarioPrivateDto
    }),
    __metadata("design:type", typeof (_a = typeof tipo_societario_private_dto_1.TipoSocietarioPrivateDto !== "undefined" && tipo_societario_private_dto_1.TipoSocietarioPrivateDto) === "function" ? _a : Object)
], EmpresaTipoSocietarioPrivateDto.prototype, "tipoSocietario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Define si esta activo',
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], EmpresaTipoSocietarioPrivateDto.prototype, "esActivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de cambio del rubro',
        type: String
    }),
    __metadata("design:type", String)
], EmpresaTipoSocietarioPrivateDto.prototype, "fechaCambio", void 0);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/update-empresas-tipos-societario.dto.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/update-empresas-tipos-societario.dto.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateEmpresasTiposSocietarioDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_empresas_tipos_societario_dto_1 = __webpack_require__(/*! ./create-empresas-tipos-societario.dto */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/dto/create-empresas-tipos-societario.dto.ts");
class UpdateEmpresasTiposSocietarioDto extends (0, mapped_types_1.PartialType)(create_empresas_tipos_societario_dto_1.CreateEmpresasTiposSocietarioDto) {
}
exports.UpdateEmpresasTiposSocietarioDto = UpdateEmpresasTiposSocietarioDto;


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasTiposSocietariosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const empresas_tipos_societarios_service_1 = __webpack_require__(/*! ./services/empresas-tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service.ts");
const empresas_tipos_societarios_controller_1 = __webpack_require__(/*! ./api/empresas-tipos-societarios.controller */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/api/empresas-tipos-societarios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_tipo_societario_entity_1 = __webpack_require__(/*! ./entities/empresa-tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts");
const tipos_societarios_module_1 = __webpack_require__(/*! ../../tipos-societarios.module */ "./src/modules/empresas/modules/tipos-societarios/tipos-societarios.module.ts");
let EmpresasTiposSocietariosModule = class EmpresasTiposSocietariosModule {
};
exports.EmpresasTiposSocietariosModule = EmpresasTiposSocietariosModule;
exports.EmpresasTiposSocietariosModule = EmpresasTiposSocietariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([empresa_tipo_societario_entity_1.EmpresaTipoSocietario]),
            tipos_societarios_module_1.TiposSocietariosModule,
        ],
        controllers: [empresas_tipos_societarios_controller_1.EmpresasTiposSocietariosController],
        providers: [empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService],
        exports: [empresas_tipos_societarios_service_1.EmpresasTiposSocietariosService]
    })
], EmpresasTiposSocietariosModule);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresaTipoSocietario = void 0;
const empresa_entity_1 = __webpack_require__(/*! src/modules/empresas/entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const tipo_societario_entity_1 = __webpack_require__(/*! ../../../entities/tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/entities/tipo-societario.entity.ts");
let EmpresaTipoSocietario = class EmpresaTipoSocietario {
    id;
    idEmpresa;
    idTipsoc;
    esActivo;
    fechaCambio;
    empresa;
    tipoSocietario;
};
exports.EmpresaTipoSocietario = EmpresaTipoSocietario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_empresas_tipos_societarios' }),
    __metadata("design:type", Number)
], EmpresaTipoSocietario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_empresa' }),
    __metadata("design:type", Number)
], EmpresaTipoSocietario.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_tipsoc' }),
    __metadata("design:type", Number)
], EmpresaTipoSocietario.prototype, "idTipsoc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'es_activo', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], EmpresaTipoSocietario.prototype, "esActivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_cambio', type: 'date' }),
    __metadata("design:type", String)
], EmpresaTipoSocietario.prototype, "fechaCambio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.tiposSocietariosEmpresa),
    (0, typeorm_1.JoinColumn)({ name: 'id_empresa' }),
    __metadata("design:type", typeof (_a = typeof empresa_entity_1.Empresa !== "undefined" && empresa_entity_1.Empresa) === "function" ? _a : Object)
], EmpresaTipoSocietario.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_societario_entity_1.TipoSocietario, (tipoSocietario) => tipoSocietario.tiposSocietariosEmpresa),
    (0, typeorm_1.JoinColumn)({ name: 'id_tipsoc' }),
    __metadata("design:type", typeof (_b = typeof tipo_societario_entity_1.TipoSocietario !== "undefined" && tipo_societario_entity_1.TipoSocietario) === "function" ? _b : Object)
], EmpresaTipoSocietario.prototype, "tipoSocietario", void 0);
exports.EmpresaTipoSocietario = EmpresaTipoSocietario = __decorate([
    (0, typeorm_1.Entity)('empresas_tipos_societarios')
], EmpresaTipoSocietario);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/services/empresas-tipos-societarios.service.ts ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasTiposSocietariosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_tipo_societario_entity_1 = __webpack_require__(/*! ../entities/empresa-tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/entities/empresa-tipo-societario.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const tipos_societarios_service_1 = __webpack_require__(/*! ../../../services/tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/services/tipos-societarios.service.ts");
let EmpresasTiposSocietariosService = class EmpresasTiposSocietariosService {
    empresaTipoSocietario;
    tiposSocietariosService;
    constructor(empresaTipoSocietario, tiposSocietariosService) {
        this.empresaTipoSocietario = empresaTipoSocietario;
        this.tiposSocietariosService = tiposSocietariosService;
    }
    create(createEmpresasTiposSocietarioDto) {
        return 'This action adds a new empresasTiposSocietario';
    }
    async createTransaction(manager, data) {
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            await this.tiposSocietariosService.findManyByIds(data.data.map(d => d.idTipoSocietario));
        }
        const tipoSocOtros = (data.otros && Array.isArray(data.otros) && data.otros.length > 0)
            ? await this.tiposSocietariosService.createTransaccion(manager, data.otros)
            : [];
        const tiposSocParaGuardar = [];
        if (data.data) {
            for (const d of data.data) {
                tiposSocParaGuardar.push({
                    idEmpresa: data.idEmpresa,
                    idTipsoc: d.idTipoSocietario,
                    esActivo: d.esActivo,
                    fechaCambio: d.fechaCambio || undefined
                });
            }
        }
        for (const o of tipoSocOtros) {
            tiposSocParaGuardar.push({
                idEmpresa: data.idEmpresa,
                ...o
            });
        }
        if (tiposSocParaGuardar.length > 0) {
            return await manager.getRepository(empresa_tipo_societario_entity_1.EmpresaTipoSocietario).save(tiposSocParaGuardar);
        }
        return [];
    }
    findAll() {
        return `This action returns all empresasTiposSocietarios`;
    }
    findOne(id) {
        return `This action returns a #${id} empresasTiposSocietario`;
    }
    update(id, updateEmpresasTiposSocietarioDto) {
        return `This action updates a #${id} empresasTiposSocietario`;
    }
    remove(id) {
        return `This action removes a #${id} empresasTiposSocietario`;
    }
};
exports.EmpresasTiposSocietariosService = EmpresasTiposSocietariosService;
exports.EmpresasTiposSocietariosService = EmpresasTiposSocietariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_tipo_societario_entity_1.EmpresaTipoSocietario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof tipos_societarios_service_1.TiposSocietariosService !== "undefined" && tipos_societarios_service_1.TiposSocietariosService) === "function" ? _b : Object])
], EmpresasTiposSocietariosService);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/services/tipos-societarios.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/services/tipos-societarios.service.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposSocietariosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_societario_entity_1 = __webpack_require__(/*! ../entities/tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/entities/tipo-societario.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let TiposSocietariosService = class TiposSocietariosService {
    tipoSocietarioRepository;
    constructor(tipoSocietarioRepository) {
        this.tipoSocietarioRepository = tipoSocietarioRepository;
    }
    create(createTiposSocietarioDto) {
        return 'This action adds a new tiposSocietario';
    }
    async createTransaccion(manager, data) {
        console.log(data);
        const tiposSocietarios = data.map((tipoSoc) => ({
            nombre: tipoSoc.nombre,
            esPropio: true
        }));
        const result = await manager.getRepository(tipo_societario_entity_1.TipoSocietario).save(tiposSocietarios);
        return result.map((tp) => ({
            idTipsoc: tp.id,
            esActivo: data.find(t => t.nombre === tp.nombre).esActivo,
            fechaCambio: data.find(ti => ti.nombre === tp.nombre).fechaCambio
        }));
    }
    async findManyByIds(ids) {
        const rubros = await this.tipoSocietarioRepository.find({
            where: {
                id: (0, typeorm_2.In)(ids)
            }
        });
        const foundIds = rubros.map(r => r.id);
        const missingId = ids.find(id => !foundIds.includes(id));
        if (missingId !== undefined) {
            throw new common_1.NotFoundException(`El tipo de societario con id ${missingId} no fue encontrado`);
        }
        return rubros;
    }
    async findAll() {
        const tiposSocietarios = await this.tipoSocietarioRepository.find({
            where: {
                esPropio: false
            },
            select: {
                id: true,
                nombre: true,
            }
        });
        return tiposSocietarios;
    }
    findOne(id) {
        return `This action returns a #${id} tiposSocietario`;
    }
    update(id, updateTiposSocietarioDto) {
        return `This action updates a #${id} tiposSocietario`;
    }
    remove(id) {
        return `This action removes a #${id} tiposSocietario`;
    }
};
exports.TiposSocietariosService = TiposSocietariosService;
exports.TiposSocietariosService = TiposSocietariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_societario_entity_1.TipoSocietario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TiposSocietariosService);


/***/ }),

/***/ "./src/modules/empresas/modules/tipos-societarios/tipos-societarios.module.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/empresas/modules/tipos-societarios/tipos-societarios.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposSocietariosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_societarios_service_1 = __webpack_require__(/*! ./services/tipos-societarios.service */ "./src/modules/empresas/modules/tipos-societarios/services/tipos-societarios.service.ts");
const tipos_societarios_controller_1 = __webpack_require__(/*! ./api/tipos-societarios.controller */ "./src/modules/empresas/modules/tipos-societarios/api/tipos-societarios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const tipo_societario_entity_1 = __webpack_require__(/*! ./entities/tipo-societario.entity */ "./src/modules/empresas/modules/tipos-societarios/entities/tipo-societario.entity.ts");
let TiposSocietariosModule = class TiposSocietariosModule {
};
exports.TiposSocietariosModule = TiposSocietariosModule;
exports.TiposSocietariosModule = TiposSocietariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tipo_societario_entity_1.TipoSocietario])
        ],
        controllers: [tipos_societarios_controller_1.TiposSocietariosController],
        providers: [tipos_societarios_service_1.TiposSocietariosService],
        exports: [tipos_societarios_service_1.TiposSocietariosService]
    })
], TiposSocietariosModule);


/***/ }),

/***/ "./src/modules/empresas/services/empresas-statistics.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/empresas/services/empresas-statistics.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasStatisticsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_entity_1 = __webpack_require__(/*! ../entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let EmpresasStatisticsService = class EmpresasStatisticsService {
    empresaRepository;
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async getAverageAntiguedad(params) {
        const query = await this.empresaRepository
            .createQueryBuilder('empresa')
            .select('AVG(EXTRACT(YEAR FROM AGE(CURRENT_DATE, empresa.fechaFundacion)))', 'avg');
        if (params.familiar === true) {
            query.andWhere(`EXISTS (SELECT 1 FROM familias f WHERE f.id_empresa = empresa.id AND f.es_familiar = true)`);
        }
        const result = await query.getRawOne();
        return result && result.avg ? parseFloat(result.avg) : 0;
    }
    async getEmpresasPorAnio(params) {
        const query = this.empresaRepository
            .createQueryBuilder('e')
            .select('EXTRACT(YEAR FROM e.fechaFundacion)', 'anio')
            .addSelect('COUNT(*)', 'total')
            .where('e.id > 0');
        if (!isNaN(params.inicio)) {
            query.andWhere('EXTRACT(YEAR FROM e.fechaFundacion) >= :inicio', { inicio: params.inicio });
        }
        if (!isNaN(params.fin)) {
            query.andWhere('EXTRACT(YEAR FROM e.fechaFundacion) <= :fin', { fin: params.fin });
        }
        if (params.familiar === true) {
            query.andWhere(`EXISTS (SELECT 1 FROM familias f WHERE f.id_empresa = e.id AND f.es_familiar = true)`);
        }
        query.groupBy('anio').orderBy('anio', 'ASC');
        const result = await query.getRawMany();
        return result.map(r => ({
            anio: parseInt(r.anio, 10),
            total: parseInt(r.total, 10),
        }));
    }
    async getEmpresasPorTamanio(params) {
        const query = await this.empresaRepository
            .createQueryBuilder('e')
            .innerJoin('e.tamanioEmpresa', 't')
            .select('t.id', 'idTamanio')
            .addSelect('t.nombre', 'nombreTamanio')
            .addSelect('COUNT(*)', 'total')
            .groupBy('t.id')
            .addGroupBy('t.nombre');
        if (params.familiar === true) {
            query.andWhere(`EXISTS (SELECT 1 FROM familias f WHERE f.id_empresa = e.id AND f.es_familiar = true)`);
        }
        const result = await query.getRawMany();
        const totalEmpresas = result.reduce((acc, r) => acc + parseInt(r.total, 10), 0);
        return result.map(r => ({
            idTamanio: parseInt(r.idTamanio, 10),
            nombreTamanio: r.nombreTamanio,
            total: parseInt(r.total, 10),
            porcentaje: totalEmpresas > 0
                ? parseFloat(((parseInt(r.total, 10) / totalEmpresas) * 100).toFixed(2))
                : 0
        }));
    }
    async getPromedioSedes(params) {
        const query = this.empresaRepository
            .createQueryBuilder('e')
            .select('AVG(sub.total_sedes)', 'promedio')
            .from(subQb => {
            return subQb
                .select('e.id', 'empresa_id')
                .addSelect('COUNT(s.id)', 'total_sedes')
                .from('empresas', 'e')
                .leftJoin('sedes', 's', 's.id_empresa = e.id')
                .groupBy('e.id')
                .where('1=1')
                .andWhere(params.familiar === true
                ? `EXISTS (
                                SELECT 1 FROM familias f 
                                WHERE f.id_empresa = e.id 
                                    AND f.es_familiar = true
                                )`
                : '1=1');
        }, 'sub');
        const result = await query.getRawOne();
        return parseFloat(result.promedio) || 0;
    }
    async getEmpresasAcciones(params) {
        const query = this.empresaRepository
            .createQueryBuilder('e')
            .select([
            `COUNT(DISTINCT e.id_empresa) FILTER (
                WHERE EXISTS (
                    SELECT 1
                    FROM implementaciones i
                    JOIN implementaciones_acciones ia ON ia.id_implementacion = i.id_implementacion
                    WHERE i.id_empresa = e.id_empresa
                )
                )::float * 100 / NULLIF(COUNT(DISTINCT e.id_empresa), 0) AS "conAcciones"`,
            `COUNT(DISTINCT e.id_empresa) FILTER (
                WHERE NOT EXISTS (
                    SELECT 1
                    FROM implementaciones i
                    JOIN implementaciones_acciones ia ON ia.id_implementacion = i.id_implementacion
                    WHERE i.id_empresa = e.id_empresa
                )
                )::float * 100 / NULLIF(COUNT(DISTINCT e.id_empresa), 0) AS "sinAcciones"`
        ]);
        if (params.familiar === true) {
            query.andWhere(`EXISTS (
                    SELECT 1 FROM familias f
                    WHERE f.id_empresa = e.id_empresa
                    AND f.es_familiar = true
                )`);
        }
        const result = await query.getRawOne();
        return {
            conAcciones: parseFloat(result?.conAcciones || '0'),
            sinAcciones: parseFloat(result?.sinAcciones || '0'),
        };
    }
};
exports.EmpresasStatisticsService = EmpresasStatisticsService;
exports.EmpresasStatisticsService = EmpresasStatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EmpresasStatisticsService);


/***/ }),

/***/ "./src/modules/empresas/services/empresas.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/empresas/services/empresas.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmpresasService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const empresa_entity_1 = __webpack_require__(/*! ../entities/empresa.entity */ "./src/modules/empresas/entities/empresa.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const find_all_empresas_cards_pagination_response_dto_1 = __webpack_require__(/*! ../dto/outputs/find-all-empresas-cards-pagination-response.dto */ "./src/modules/empresas/dto/outputs/find-all-empresas-cards-pagination-response.dto.ts");
const empresa_public_template_1 = __webpack_require__(/*! ../find-templates/empresa-public.template */ "./src/modules/empresas/find-templates/empresa-public.template.ts");
const empresa_not_found_exception_1 = __webpack_require__(/*! ../exceptions/empresa-not-found.exception */ "./src/modules/empresas/exceptions/empresa-not-found.exception.ts");
const empresa_private_template_1 = __webpack_require__(/*! ../find-templates/empresa-private.template */ "./src/modules/empresas/find-templates/empresa-private.template.ts");
const investigador_empresa_entity_1 = __webpack_require__(/*! src/modules/usuarios/entities/investigador-empresa.entity */ "./src/modules/usuarios/entities/investigador-empresa.entity.ts");
let EmpresasService = class EmpresasService {
    empresaRepository;
    investigadorEmpresaRepository;
    constructor(empresaRepository, investigadorEmpresaRepository) {
        this.empresaRepository = empresaRepository;
        this.investigadorEmpresaRepository = investigadorEmpresaRepository;
    }
    create(createEmpresaDto) {
        return 'This action adds a new empresa';
    }
    async createTransaction(manager, data) {
        const repo = manager.getRepository(empresa_entity_1.Empresa);
        const empresa = new empresa_entity_1.Empresa();
        empresa.nombreComercial = data.nombre ? data.nombre.trim() : '';
        empresa.vision = data.vision ? data.vision.trim() : '';
        empresa.mision = data.mision ? data.mision.trim() : '';
        empresa.direccionWeb = data.direccionWeb ? data.direccionWeb.trim() : '';
        empresa.mensaje = data.mensajeConmemorativo ? data.mensajeConmemorativo.trim() : '';
        empresa.actividad = data.actividad ? data.actividad.trim() : '';
        empresa.fechaFundacion = data.fechaFundacion;
        empresa.idTamanio = data.tamanioEmpresa;
        return await repo.save(empresa);
    }
    async findAll() {
        const empresas = await this.empresaRepository.find({
            relations: {
                sedes: {
                    departamento: true
                },
                familias: true,
                fundadores: true,
                hitos: true,
                imagenes: true,
                implementacion: {
                    tiposAcciones: true,
                    implementacionesAcciones: {
                        accion: true,
                        proyectos: true
                    }
                },
                items: true,
                municipios: true,
                paisesOperaInteranacionalmente: true,
                premios: true,
                rubrosEmpresa: {
                    rubro: true
                },
                servicios: true,
                tamanioEmpresa: true,
                tiposSocietariosEmpresa: {
                    tipoSocietario: true
                }
            },
        });
        return empresas;
    }
    async findAllCardsPrivate(params, idUsuario) {
        const query = this.empresaRepository
            .createQueryBuilder('empresa')
            .leftJoinAndSelect('empresa.imagenes', 'imagen')
            .leftJoinAndSelect('empresa.hitos', 'hito')
            .leftJoin('empresa.sedes', 'sedeCentral', 'sedeCentral.esCentral = true')
            .leftJoin('sedeCentral.departamento', 'departamento')
            .leftJoin('empresa.rubrosEmpresa', 'rubroEmpresa')
            .leftJoinAndSelect('rubroEmpresa.rubro', 'rubro')
            .leftJoin('empresa.tiposSocietariosEmpresa', 'tipoEmpSoc')
            .leftJoin('tipoEmpSoc.tipoSocietario', 'tipoSocietario')
            .leftJoin('empresa.fundadores', 'fundador');
        if (idUsuario) {
            query.innerJoin('investigador_rubro', 'ir', 'ir.id_rubro = rubro.id AND ir.id_usuario = :idUsuario', { idUsuario });
        }
        query
            .select([
            'empresa.id',
            'empresa.nombreComercial',
            'imagen.id',
            'imagen.url',
            'hito.id',
            'hito.nombre',
            'hito.fecha',
            'sedeCentral.id',
            'sedeCentral.esCentral',
            'departamento.id',
            'departamento.nombre',
            'rubroEmpresa.id',
            'rubro.id',
            'rubro.nombre',
        ]);
        const rubros = params.getRubros();
        if (rubros.length > 0)
            query.andWhere('rubro.id IN (:...rubros)', { rubros });
        const departamentos = params.getDepartamentos();
        if (departamentos.length > 0)
            query.andWhere('departamento.id IN (:...departamentos)', { departamentos });
        const tiposSocietarios = params.getTiposSocietarios();
        if (tiposSocietarios.length > 0)
            query.andWhere('tipoSocietario.id IN (:...tiposSocietarios)', { tiposSocietarios });
        const antiguedad = params.getAntiguedad();
        if (antiguedad)
            query.andWhere('EXTRACT(YEAR FROM empresa.fechaFundacion) <= :antiguedad', { antiguedad });
        const nombre = params.getNombre();
        if (nombre && nombre.trim() !== '') {
            query.andWhere('LOWER(empresa.nombreComercial) LIKE LOWER(:nombre)', {
                nombre: `%${nombre.trim()}%`,
            });
        }
        const fundador = params.getFundador();
        if (fundador && fundador.trim() !== '') {
            query.andWhere('LOWER(fundador.nombre) LIKE LOWER(:fundador)', {
                fundador: `%${fundador.trim()}%`,
            });
        }
        const page = params.page;
        const limit = params.limit;
        const skip = (page - 1) * limit;
        query.orderBy('empresa.nombreComercial', 'ASC')
            .skip(skip)
            .take(limit);
        const [empresas, total] = await query.getManyAndCount();
        const pages = Math.ceil(total / limit);
        const data = empresas.map((empresa) => {
            const sede = empresa.sedes?.[0];
            const depa = sede?.departamento;
            return {
                id: empresa.id,
                nombreComercial: empresa.nombreComercial,
                imagenes: empresa.imagenes?.map((img) => ({
                    id: img.id,
                    url: img.url,
                })) || [],
                hitos: empresa.hitos?.map((h) => ({
                    id: h.id,
                    nombre: h.nombre,
                    fecha: h.fecha,
                })) || [],
                sedeCentral: {
                    id: depa?.id,
                    nombre: depa?.nombre,
                },
                rubros: empresa.rubrosEmpresa?.map((r) => ({
                    id: r.rubro?.id,
                    nombre: r.rubro?.nombre,
                })) || [],
            };
        });
        const response = new find_all_empresas_cards_pagination_response_dto_1.FindAllEmpresasCardsPaginationResponseDto();
        response.data = data;
        response.page = page;
        response.limit = limit;
        response.total = total;
        response.pages = pages;
        return response;
    }
    async findAllCardsPublic(params) {
        const query = this.empresaRepository
            .createQueryBuilder('empresa')
            .leftJoinAndSelect('empresa.imagenes', 'imagen')
            .leftJoinAndSelect('empresa.hitos', 'hito')
            .leftJoinAndSelect('empresa.rubrosEmpresa', 'rubroEmpresa')
            .leftJoinAndSelect('rubroEmpresa.rubro', 'rubro')
            .leftJoinAndSelect('empresa.sedes', 'sedeCentral', 'sedeCentral.esCentral = true')
            .leftJoinAndSelect('sedeCentral.departamento', 'departamento')
            .select([
            'empresa.id',
            'empresa.nombreComercial',
            'imagen.id',
            'imagen.url',
            'hito.id',
            'hito.nombre',
            'hito.fecha',
            'sedeCentral.id',
            'sedeCentral.esCentral',
            'departamento.id',
            'departamento.nombre',
            'rubroEmpresa.id',
            'rubro.id',
            'rubro.nombre',
        ]);
        if (params.nombre && params.nombre.trim() !== '') {
            query.andWhere('LOWER(empresa.nombreComercial) LIKE LOWER(:nombre)', {
                nombre: `%${params.nombre.trim()}%`,
            });
        }
        const page = params.page;
        const limit = params.limit;
        const skip = (page - 1) * limit;
        query.orderBy('empresa.nombreComercial', 'ASC')
            .skip(skip)
            .take(limit);
        const [empresas, total] = await query.getManyAndCount();
        const pages = Math.ceil(total / limit);
        const data = empresas.map((empresa) => {
            const sede = empresa.sedes?.[0];
            const depa = sede?.departamento;
            return {
                id: empresa.id,
                nombreComercial: empresa.nombreComercial,
                imagenes: empresa.imagenes?.map((img) => ({
                    id: img.id,
                    url: img.url,
                })) || [],
                hitos: empresa.hitos?.map((h) => ({
                    id: h.id,
                    nombre: h.nombre,
                    fecha: h.fecha,
                })) || [],
                sedeCentral: {
                    id: depa?.id,
                    nombre: depa?.nombre,
                },
                rubros: empresa.rubrosEmpresa?.map((r) => ({
                    id: r.rubro?.id,
                    nombre: r.rubro?.nombre,
                })) || [],
            };
        });
        const response = new find_all_empresas_cards_pagination_response_dto_1.FindAllEmpresasCardsPaginationResponseDto();
        response.data = data;
        response.page = page;
        response.limit = limit;
        response.total = total;
        response.pages = pages;
        return response;
    }
    async findOne(idEmpresa, selectOptions, relationsOptions) {
        const empresa = await this.empresaRepository.findOne({
            where: {
                id: idEmpresa,
            },
            relations: relationsOptions,
            select: selectOptions,
        });
        if (!empresa) {
            throw new empresa_not_found_exception_1.EmpresaNotFoundException(idEmpresa);
        }
        return empresa;
    }
    async findOnePublic(idEmpresa) {
        const data = await this.findOne(idEmpresa, empresa_public_template_1.EmpresaPublicTemplateSelect, empresa_public_template_1.EmpresaPublicTemplateRelations);
        const empresa = {
            id: data.id,
            nombreComercial: data.nombreComercial,
            mensaje: data.mensaje,
            rubrosEmpresa: data.rubrosEmpresa?.map(r => ({
                rubro: r.rubro,
                esActivo: r.esActivo
            })),
            departamento: data.sedes?.find(s => s.esCentral === true)?.departamento,
            imagenes: data.imagenes?.map(i => i.url),
            hitos: data.hitos,
        };
        return empresa;
    }
    async findOnePrivate(idEmpresa, idUsuario) {
        if (idUsuario) {
            const asignado = await this.investigadorEmpresaRepository.existsBy({ idUsuario, idEmpresa });
            if (!asignado)
                throw new empresa_not_found_exception_1.EmpresaNotFoundException(idEmpresa);
        }
        const data = await this.findOne(idEmpresa, empresa_private_template_1.EmpresaPrivateTemplateSelect, empresa_private_template_1.EmpresaPrivateTemplateRelations);
        return data;
    }
    async updateEmpresa(idEmpresa, data) {
        await this.findOne(idEmpresa);
        const camposBasicos = {};
        if (data.nombreComercial !== undefined)
            camposBasicos.nombreComercial = data.nombreComercial;
        if (data.vision !== undefined)
            camposBasicos.vision = data.vision;
        if (data.mision !== undefined)
            camposBasicos.mision = data.mision;
        if (data.actividad !== undefined)
            camposBasicos.actividad = data.actividad;
        if (data.direccionWeb !== undefined)
            camposBasicos.direccionWeb = data.direccionWeb;
        if (data.mensaje !== undefined)
            camposBasicos.mensaje = data.mensaje;
        if (Object.keys(camposBasicos).length > 0) {
            await this.empresaRepository.update(idEmpresa, camposBasicos);
        }
        return await this.findOnePrivate(idEmpresa);
    }
    async deleteEmpresa(idEmpresa) {
        await this.findOne(idEmpresa);
        await this.empresaRepository.manager.transaction(async (transactionManager) => {
            await transactionManager.query(`DELETE FROM "proyectos" 
                 WHERE "id_implementacion_accion" IN (
                    SELECT "id_implementacion_accion" FROM "implementaciones_acciones" 
                    WHERE "id_implementacion" IN (
                        SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                    )
                 )`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "tipos_acciones_implementaciones" 
                 WHERE "id_implementacion" IN (
                    SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                 )`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "implementaciones_acciones" 
                 WHERE "id_implementacion" IN (
                    SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                 )`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "municipios_empresas" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "premios" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "implementaciones" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "familias" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "fundadores" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "hitos" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "imagenes" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "sedes" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "items" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "servicios" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "investigador_empresa" WHERE "id_empresa" = $1`, [idEmpresa]);
            await transactionManager.query(`DELETE FROM "empresas" WHERE "id_empresa" = $1`, [idEmpresa]);
        });
        return true;
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __param(1, (0, typeorm_1.InjectRepository)(investigador_empresa_entity_1.InvestigadorEmpresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], EmpresasService);


/***/ }),

/***/ "./src/modules/logs/log.entity.ts":
/*!****************************************!*\
  !*** ./src/modules/logs/log.entity.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Log = exports.AccionLog = exports.TipoLog = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var TipoLog;
(function (TipoLog) {
    TipoLog["APLICACION"] = "APLICACION";
    TipoLog["SEGURIDAD"] = "SEGURIDAD";
})(TipoLog || (exports.TipoLog = TipoLog = {}));
var AccionLog;
(function (AccionLog) {
    AccionLog["LOGIN_EXITOSO"] = "LOGIN_EXITOSO";
    AccionLog["LOGIN_FALLIDO"] = "LOGIN_FALLIDO";
    AccionLog["LOGOUT"] = "LOGOUT";
    AccionLog["CUENTA_BLOQUEADA"] = "CUENTA_BLOQUEADA";
    AccionLog["CUENTA_DESBLOQUEADA"] = "CUENTA_DESBLOQUEADA";
    AccionLog["RESET_PASSWORD_SOLICIT"] = "RESET_PASSWORD_SOLICITADO";
    AccionLog["RESET_PASSWORD_OK"] = "RESET_PASSWORD_COMPLETADO";
    AccionLog["CAMBIO_PASSWORD"] = "CAMBIO_PASSWORD";
    AccionLog["TOKEN_INVALIDO"] = "TOKEN_INVALIDO";
    AccionLog["USUARIO_CREADO"] = "USUARIO_CREADO";
    AccionLog["USUARIO_MODIFICADO"] = "USUARIO_MODIFICADO";
    AccionLog["USUARIO_ELIMINADO"] = "USUARIO_ELIMINADO";
    AccionLog["ROL_CAMBIADO"] = "ROL_CAMBIADO";
    AccionLog["EMPRESA_CREADA"] = "EMPRESA_CREADA";
    AccionLog["EMPRESA_MODIFICADA"] = "EMPRESA_MODIFICADA";
    AccionLog["EMPRESA_ELIMINADA"] = "EMPRESA_ELIMINADA";
    AccionLog["RIESGO_CREADO"] = "RIESGO_CREADO";
    AccionLog["RIESGO_MODIFICADO"] = "RIESGO_MODIFICADO";
    AccionLog["RIESGO_ELIMINADO"] = "RIESGO_ELIMINADO";
    AccionLog["ACCESO_DENEGADO"] = "ACCESO_DENEGADO";
    AccionLog["ERROR_SISTEMA"] = "ERROR_SISTEMA";
})(AccionLog || (exports.AccionLog = AccionLog = {}));
let Log = class Log {
    id;
    tipo;
    accion;
    idUsuario;
    nombreUsuario;
    ipOrigen;
    recurso;
    detalles;
    exitoso;
    creadoEn;
};
exports.Log = Log;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_log' }),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TipoLog, name: 'tipo' }),
    __metadata("design:type", String)
], Log.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: AccionLog, name: 'accion' }),
    __metadata("design:type", String)
], Log.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_usuario', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'nombre_usuario', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "nombreUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, name: 'ip_origen', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "ipOrigen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'recurso', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "recurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', name: 'detalles', nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'exitoso', default: true }),
    __metadata("design:type", Boolean)
], Log.prototype, "exitoso", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'creado_en' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Log.prototype, "creadoEn", void 0);
exports.Log = Log = __decorate([
    (0, typeorm_1.Entity)('logs_auditoria'),
    (0, typeorm_1.Index)(['tipo', 'creadoEn']),
    (0, typeorm_1.Index)(['idUsuario', 'creadoEn']),
    (0, typeorm_1.Index)(['accion'])
], Log);


/***/ }),

/***/ "./src/modules/logs/logs.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/logs/logs.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_roles_guard_1 = __webpack_require__(/*! ../../app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const permisos_guard_1 = __webpack_require__(/*! ../../app/services/auth/permisos.guard */ "./src/app/services/auth/permisos.guard.ts");
const requiere_permisos_decorator_1 = __webpack_require__(/*! ../../shared/decorators/requiere-permisos.decorator */ "./src/shared/decorators/requiere-permisos.decorator.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const logs_service_1 = __webpack_require__(/*! ./logs.service */ "./src/modules/logs/logs.service.ts");
const log_entity_1 = __webpack_require__(/*! ./log.entity */ "./src/modules/logs/log.entity.ts");
let LogsController = class LogsController {
    logsService;
    constructor(logsService) {
        this.logsService = logsService;
    }
    getLogsSeguridad(limit) {
        return this.logsService.findByTipo(log_entity_1.TipoLog.SEGURIDAD, limit ? +limit : 100);
    }
    getLogsAplicacion(limit) {
        return this.logsService.findByTipo(log_entity_1.TipoLog.APLICACION, limit ? +limit : 100);
    }
    getHistorialUsuario(idUsuario, limit) {
        return this.logsService.historialUsuario(idUsuario, limit ? +limit : 50);
    }
};
exports.LogsController = LogsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar logs de seguridad (últimos 100)' }),
    (0, common_1.Get)('seguridad'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "getLogsSeguridad", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar logs de aplicación (últimos 100)' }),
    (0, common_1.Get)('aplicacion'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "getLogsAplicacion", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Historial de auditoría de un usuario específico' }),
    (0, common_1.Get)('usuario/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "getHistorialUsuario", null);
exports.LogsController = LogsController = __decorate([
    (0, swagger_1.ApiTags)('Logs de Auditoría'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([]), permisos_guard_1.PermisosGuard),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.LOGS_LEER),
    (0, common_1.Controller)('api/logs'),
    __metadata("design:paramtypes", [typeof (_a = typeof logs_service_1.LogsService !== "undefined" && logs_service_1.LogsService) === "function" ? _a : Object])
], LogsController);


/***/ }),

/***/ "./src/modules/logs/logs.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/logs/logs.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const log_entity_1 = __webpack_require__(/*! ./log.entity */ "./src/modules/logs/log.entity.ts");
const logs_service_1 = __webpack_require__(/*! ./logs.service */ "./src/modules/logs/logs.service.ts");
const logs_controller_1 = __webpack_require__(/*! ./logs.controller */ "./src/modules/logs/logs.controller.ts");
let LogsModule = class LogsModule {
};
exports.LogsModule = LogsModule;
exports.LogsModule = LogsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([log_entity_1.Log])],
        providers: [logs_service_1.LogsService],
        controllers: [logs_controller_1.LogsController],
        exports: [logs_service_1.LogsService],
    })
], LogsModule);


/***/ }),

/***/ "./src/modules/logs/logs.service.ts":
/*!******************************************!*\
  !*** ./src/modules/logs/logs.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LogsService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const log_entity_1 = __webpack_require__(/*! ./log.entity */ "./src/modules/logs/log.entity.ts");
let LogsService = LogsService_1 = class LogsService {
    logsRepository;
    logger = new common_1.Logger(LogsService_1.name);
    constructor(logsRepository) {
        this.logsRepository = logsRepository;
    }
    async registrar(tipo, accion, datos) {
        try {
            const log = this.logsRepository.create({
                tipo,
                accion,
                idUsuario: datos.idUsuario ?? null,
                nombreUsuario: datos.nombreUsuario ?? null,
                ipOrigen: datos.ipOrigen ?? null,
                recurso: datos.recurso ?? null,
                detalles: datos.detalles ?? null,
                exitoso: datos.exitoso ?? true,
            });
            await this.logsRepository.save(log);
        }
        catch (error) {
            const mensaje = error instanceof Error ? error.message : String(error);
            this.logger.error(`Error al persistir log [${tipo}:${accion}]: ${mensaje}`);
        }
    }
    async loginExitoso(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.LOGIN_EXITOSO, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: true,
        });
    }
    async loginFallido(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.LOGIN_FALLIDO, {
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: false,
            detalles: {
                intentosRestantes: params.intentosRestantes,
            },
        });
    }
    async cuentaBloqueada(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.CUENTA_BLOQUEADA, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: false,
            detalles: {
                razon: `Superó ${params.maxIntentos} intentos fallidos consecutivos`,
                maxIntentos: params.maxIntentos,
            },
        });
    }
    async cuentaDesbloqueada(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.CUENTA_DESBLOQUEADA, {
            idUsuario: params.idAdministrador ?? null,
            nombreUsuario: params.nombreAdministrador ?? null,
            recurso: `Usuario #${params.idUsuarioAfectado} (${params.nombreUsuarioAfectado})`,
            exitoso: true,
            detalles: {
                motivo: params.motivo,
                usuarioAfectadoId: params.idUsuarioAfectado,
                usuarioAfectadoNombre: params.nombreUsuarioAfectado,
            },
        });
    }
    async resetPasswordSolicitado(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.RESET_PASSWORD_SOLICIT, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: true,
        });
    }
    async resetPasswordCompletado(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.RESET_PASSWORD_OK, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: true,
        });
    }
    async accesoDenegado(params) {
        await this.registrar(log_entity_1.TipoLog.SEGURIDAD, log_entity_1.AccionLog.ACCESO_DENEGADO, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            exitoso: false,
            detalles: {
                endpoint: params.endpoint,
                permisosRequeridos: params.permisosRequeridos,
            },
        });
    }
    async empresaCreada(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.EMPRESA_CREADA, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso: true,
        });
    }
    async empresaModificada(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.EMPRESA_MODIFICADA, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso: true,
            detalles: {
                camposModificados: params.camposModificados,
            },
        });
    }
    async empresaEliminada(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.EMPRESA_ELIMINADA, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso: true,
        });
    }
    async usuarioCreado(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.USUARIO_CREADO, {
            idUsuario: params.idAdministrador,
            nombreUsuario: params.nombreAdministrador,
            ipOrigen: params.ipOrigen,
            recurso: `Usuario #${params.idUsuarioNuevo} (${params.nombreUsuarioNuevo})`,
            exitoso: true,
            detalles: {
                rolAsignado: params.rolAsignado,
            },
        });
    }
    async riesgoCreado(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.RIESGO_CREADO, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Riesgo #${params.idRiesgo}`,
            exitoso: true,
            detalles: {
                descripcion: params.descripcion,
                nivelRiesgo: params.nivelRiesgo,
            },
        });
    }
    async riesgoModificado(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.RIESGO_MODIFICADO, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Riesgo #${params.idRiesgo}`,
            exitoso: true,
            detalles: {
                nivelRiesgo: params.nivelRiesgo,
            },
        });
    }
    async riesgoEliminado(params) {
        await this.registrar(log_entity_1.TipoLog.APLICACION, log_entity_1.AccionLog.RIESGO_ELIMINADO, {
            idUsuario: params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen: params.ipOrigen,
            recurso: `Riesgo #${params.idRiesgo}`,
            exitoso: true,
        });
    }
    async findByTipo(tipo, limit = 100) {
        return this.logsRepository.find({
            where: { tipo },
            order: { creadoEn: 'DESC' },
            take: limit,
        });
    }
    async historialUsuario(idUsuario, limit = 50) {
        return this.logsRepository.find({
            where: { idUsuario },
            order: { creadoEn: 'DESC' },
            take: limit,
        });
    }
};
exports.LogsService = LogsService;
exports.LogsService = LogsService = LogsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(log_entity_1.Log)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LogsService);


/***/ }),

/***/ "./src/modules/riesgos/riesgo.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/riesgos/riesgo.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRiesgoDto = exports.CreateRiesgoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const riesgo_entity_1 = __webpack_require__(/*! ./riesgo.entity */ "./src/modules/riesgos/riesgo.entity.ts");
class CreateRiesgoDto {
    titulo;
    descripcion;
    categoria;
    probabilidad;
    impacto;
    consecuencias;
    planAccion;
    controlesExistentes;
    fechaIdentificacion;
    fechaRevision;
    idResponsable;
}
exports.CreateRiesgoDto = CreateRiesgoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acceso no autorizado a base de datos de empresas' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Un actor interno podría explotar credenciales débiles...' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: riesgo_entity_1.CategoriaRiesgo, example: riesgo_entity_1.CategoriaRiesgo.SEGURIDAD_INFORMACION }),
    (0, class_validator_1.IsEnum)(riesgo_entity_1.CategoriaRiesgo),
    __metadata("design:type", typeof (_a = typeof riesgo_entity_1.CategoriaRiesgo !== "undefined" && riesgo_entity_1.CategoriaRiesgo) === "function" ? _a : Object)
], CreateRiesgoDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 1, maximum: 5, description: '1=Muy improbable, 5=Casi seguro' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateRiesgoDto.prototype, "probabilidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 1, maximum: 5, description: '1=Insignificante, 5=Catastrófico' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateRiesgoDto.prototype, "impacto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Exposición de datos confidenciales de 200+ empresas.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "consecuencias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Implementar MFA en 30 días, auditoría de accesos mensual.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "planAccion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Política de contraseñas vigente, firewall configurado.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "controlesExistentes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-05-24', description: 'Fecha de identificación del riesgo (ISO 8601)' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "fechaIdentificacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-06-24' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRiesgoDto.prototype, "fechaRevision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario responsable del seguimiento' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRiesgoDto.prototype, "idResponsable", void 0);
class UpdateRiesgoDto extends (0, mapped_types_1.PartialType)(CreateRiesgoDto) {
    estado;
    fechaCierre;
}
exports.UpdateRiesgoDto = UpdateRiesgoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: riesgo_entity_1.EstadoRiesgo }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(riesgo_entity_1.EstadoRiesgo),
    __metadata("design:type", typeof (_b = typeof riesgo_entity_1.EstadoRiesgo !== "undefined" && riesgo_entity_1.EstadoRiesgo) === "function" ? _b : Object)
], UpdateRiesgoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-05-30' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateRiesgoDto.prototype, "fechaCierre", void 0);


/***/ }),

/***/ "./src/modules/riesgos/riesgo.entity.ts":
/*!**********************************************!*\
  !*** ./src/modules/riesgos/riesgo.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Riesgo = exports.CategoriaRiesgo = exports.EstadoRiesgo = exports.NivelRiesgo = void 0;
exports.calcularNivelRiesgo = calcularNivelRiesgo;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const usuario_entity_1 = __webpack_require__(/*! src/modules/usuarios/entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
var NivelRiesgo;
(function (NivelRiesgo) {
    NivelRiesgo["BAJO"] = "BAJO";
    NivelRiesgo["MEDIO"] = "MEDIO";
    NivelRiesgo["ALTO"] = "ALTO";
    NivelRiesgo["CRITICO"] = "CRITICO";
})(NivelRiesgo || (exports.NivelRiesgo = NivelRiesgo = {}));
var EstadoRiesgo;
(function (EstadoRiesgo) {
    EstadoRiesgo["IDENTIFICADO"] = "IDENTIFICADO";
    EstadoRiesgo["EN_ANALISIS"] = "EN_ANALISIS";
    EstadoRiesgo["MITIGADO"] = "MITIGADO";
    EstadoRiesgo["ACEPTADO"] = "ACEPTADO";
    EstadoRiesgo["CERRADO"] = "CERRADO";
})(EstadoRiesgo || (exports.EstadoRiesgo = EstadoRiesgo = {}));
var CategoriaRiesgo;
(function (CategoriaRiesgo) {
    CategoriaRiesgo["SEGURIDAD_INFORMACION"] = "SEGURIDAD_INFORMACION";
    CategoriaRiesgo["OPERACIONAL"] = "OPERACIONAL";
    CategoriaRiesgo["LEGAL_REGULATORIO"] = "LEGAL_REGULATORIO";
    CategoriaRiesgo["FINANCIERO"] = "FINANCIERO";
    CategoriaRiesgo["REPUTACIONAL"] = "REPUTACIONAL";
    CategoriaRiesgo["TECNOLOGICO"] = "TECNOLOGICO";
    CategoriaRiesgo["OTRO"] = "OTRO";
})(CategoriaRiesgo || (exports.CategoriaRiesgo = CategoriaRiesgo = {}));
function calcularNivelRiesgo(probabilidad, impacto) {
    const score = probabilidad * impacto;
    if (score <= 4)
        return NivelRiesgo.BAJO;
    if (score <= 9)
        return NivelRiesgo.MEDIO;
    if (score <= 16)
        return NivelRiesgo.ALTO;
    return NivelRiesgo.CRITICO;
}
let Riesgo = class Riesgo {
    id;
    codigo;
    titulo;
    descripcion;
    categoria;
    probabilidad;
    impacto;
    nivelRiesgo;
    puntuacion;
    consecuencias;
    planAccion;
    controlesExistentes;
    estado;
    fechaIdentificacion;
    fechaRevision;
    fechaCierre;
    idResponsable;
    responsable;
    idCreador;
    creador;
    createdAt;
    updatedAt;
    deletedAt;
    calcularNivel() {
        const p = Math.min(5, Math.max(1, this.probabilidad));
        const i = Math.min(5, Math.max(1, this.impacto));
        this.puntuacion = p * i;
        this.nivelRiesgo = calcularNivelRiesgo(p, i);
    }
};
exports.Riesgo = Riesgo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_riesgo' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, name: 'codigo', unique: true }),
    __metadata("design:type", String)
], Riesgo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, name: 'titulo' }),
    __metadata("design:type", String)
], Riesgo.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'descripcion' }),
    __metadata("design:type", String)
], Riesgo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CategoriaRiesgo,
        name: 'categoria',
        default: CategoriaRiesgo.OTRO,
    }),
    __metadata("design:type", String)
], Riesgo.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'probabilidad' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "probabilidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'impacto' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "impacto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: NivelRiesgo,
        name: 'nivel_riesgo',
    }),
    __metadata("design:type", String)
], Riesgo.prototype, "nivelRiesgo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'puntuacion' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "puntuacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'consecuencias' }),
    __metadata("design:type", String)
], Riesgo.prototype, "consecuencias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'plan_accion' }),
    __metadata("design:type", String)
], Riesgo.prototype, "planAccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'controles_existentes', nullable: true }),
    __metadata("design:type", Object)
], Riesgo.prototype, "controlesExistentes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: EstadoRiesgo,
        name: 'estado',
        default: EstadoRiesgo.IDENTIFICADO,
    }),
    __metadata("design:type", String)
], Riesgo.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_identificacion' }),
    __metadata("design:type", String)
], Riesgo.prototype, "fechaIdentificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_revision', nullable: true }),
    __metadata("design:type", Object)
], Riesgo.prototype, "fechaRevision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_cierre', nullable: true }),
    __metadata("design:type", Object)
], Riesgo.prototype, "fechaCierre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_responsable' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "idResponsable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_responsable' }),
    __metadata("design:type", typeof (_a = typeof usuario_entity_1.Usuario !== "undefined" && usuario_entity_1.Usuario) === "function" ? _a : Object)
], Riesgo.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'id_creador' }),
    __metadata("design:type", Number)
], Riesgo.prototype, "idCreador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_creador' }),
    __metadata("design:type", typeof (_b = typeof usuario_entity_1.Usuario !== "undefined" && usuario_entity_1.Usuario) === "function" ? _b : Object)
], Riesgo.prototype, "creador", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Riesgo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Riesgo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", Object)
], Riesgo.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Riesgo.prototype, "calcularNivel", null);
exports.Riesgo = Riesgo = __decorate([
    (0, typeorm_1.Entity)('riesgos'),
    (0, typeorm_1.Index)(['nivelRiesgo', 'estado']),
    (0, typeorm_1.Index)(['idResponsable']),
    (0, typeorm_1.Index)(['fechaIdentificacion'])
], Riesgo);


/***/ }),

/***/ "./src/modules/riesgos/riesgos.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/riesgos/riesgos.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiesgosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_roles_guard_1 = __webpack_require__(/*! ../../app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const permisos_guard_1 = __webpack_require__(/*! ../../app/services/auth/permisos.guard */ "./src/app/services/auth/permisos.guard.ts");
const requiere_permisos_decorator_1 = __webpack_require__(/*! ../../shared/decorators/requiere-permisos.decorator */ "./src/shared/decorators/requiere-permisos.decorator.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const riesgos_service_1 = __webpack_require__(/*! ./riesgos.service */ "./src/modules/riesgos/riesgos.service.ts");
const riesgo_dto_1 = __webpack_require__(/*! ./riesgo.dto */ "./src/modules/riesgos/riesgo.dto.ts");
const riesgo_entity_1 = __webpack_require__(/*! ./riesgo.entity */ "./src/modules/riesgos/riesgo.entity.ts");
function extractIp(req) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string')
        return forwarded.split(',')[0].trim();
    return req.socket?.remoteAddress ?? 'desconocida';
}
let RiesgosController = class RiesgosController {
    riesgosService;
    constructor(riesgosService) {
        this.riesgosService = riesgosService;
    }
    create(dto, req) {
        return this.riesgosService.create(dto, {
            idUsuario: req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen: extractIp(req),
        });
    }
    findAll(nivel, estado, idResponsable, fechaDesde, fechaHasta) {
        return this.riesgosService.findAll({
            nivel,
            estado,
            idResponsable: idResponsable ? +idResponsable : undefined,
            fechaDesde,
            fechaHasta,
        });
    }
    resumen() {
        return this.riesgosService.resumenPorNivel();
    }
    findOne(id) {
        return this.riesgosService.findOne(id);
    }
    update(id, dto, req) {
        return this.riesgosService.update(id, dto, {
            idUsuario: req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen: extractIp(req),
        });
    }
    remove(id, req) {
        return this.riesgosService.remove(id, {
            idUsuario: req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen: extractIp(req),
        });
    }
};
exports.RiesgosController = RiesgosController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registrar nuevo riesgo' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_CREAR),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof riesgo_dto_1.CreateRiesgoDto !== "undefined" && riesgo_dto_1.CreateRiesgoDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Listar riesgos con filtros opcionales' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_LEER),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('nivel')),
    __param(1, (0, common_1.Query)('estado')),
    __param(2, (0, common_1.Query)('idResponsable')),
    __param(3, (0, common_1.Query)('fechaDesde')),
    __param(4, (0, common_1.Query)('fechaHasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof riesgo_entity_1.NivelRiesgo !== "undefined" && riesgo_entity_1.NivelRiesgo) === "function" ? _d : Object, typeof (_e = typeof riesgo_entity_1.EstadoRiesgo !== "undefined" && riesgo_entity_1.EstadoRiesgo) === "function" ? _e : Object, String, String, String]),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Resumen de riesgos por nivel (para dashboard)' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_LEER, roles_const_1.Permiso.DASHBOARD_LEER),
    (0, common_1.Get)('resumen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "resumen", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener detalle de un riesgo' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_LEER),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar riesgo (recalcula nivel automáticamente)' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_EDITAR),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof riesgo_dto_1.UpdateRiesgoDto !== "undefined" && riesgo_dto_1.UpdateRiesgoDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar riesgo (soft delete)' }),
    (0, requiere_permisos_decorator_1.RequierePermisos)(roles_const_1.Permiso.RIESGOS_ELIMINAR),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], RiesgosController.prototype, "remove", null);
exports.RiesgosController = RiesgosController = __decorate([
    (0, swagger_1.ApiTags)('Análisis de Riesgos'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([]), permisos_guard_1.PermisosGuard),
    (0, common_1.Controller)('api/riesgos'),
    __metadata("design:paramtypes", [typeof (_a = typeof riesgos_service_1.RiesgosService !== "undefined" && riesgos_service_1.RiesgosService) === "function" ? _a : Object])
], RiesgosController);


/***/ }),

/***/ "./src/modules/riesgos/riesgos.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/riesgos/riesgos.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiesgosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const riesgo_entity_1 = __webpack_require__(/*! ./riesgo.entity */ "./src/modules/riesgos/riesgo.entity.ts");
const riesgos_service_1 = __webpack_require__(/*! ./riesgos.service */ "./src/modules/riesgos/riesgos.service.ts");
const riesgos_controller_1 = __webpack_require__(/*! ./riesgos.controller */ "./src/modules/riesgos/riesgos.controller.ts");
let RiesgosModule = class RiesgosModule {
};
exports.RiesgosModule = RiesgosModule;
exports.RiesgosModule = RiesgosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([riesgo_entity_1.Riesgo])],
        providers: [riesgos_service_1.RiesgosService],
        controllers: [riesgos_controller_1.RiesgosController],
        exports: [riesgos_service_1.RiesgosService],
    })
], RiesgosModule);


/***/ }),

/***/ "./src/modules/riesgos/riesgos.service.ts":
/*!************************************************!*\
  !*** ./src/modules/riesgos/riesgos.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RiesgosService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiesgosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const riesgo_entity_1 = __webpack_require__(/*! ./riesgo.entity */ "./src/modules/riesgos/riesgo.entity.ts");
const logs_service_1 = __webpack_require__(/*! ../logs/logs.service */ "./src/modules/logs/logs.service.ts");
let RiesgosService = RiesgosService_1 = class RiesgosService {
    riesgosRepository;
    dataSource;
    logsService;
    logger = new common_1.Logger(RiesgosService_1.name);
    constructor(riesgosRepository, dataSource, logsService) {
        this.riesgosRepository = riesgosRepository;
        this.dataSource = dataSource;
        this.logsService = logsService;
    }
    async generarCodigo() {
        const year = new Date().getFullYear();
        const count = await this.riesgosRepository.count();
        const secuencia = String(count + 1).padStart(3, '0');
        return `RIESGO-${year}-${secuencia}`;
    }
    async findOneOrFail(id) {
        const riesgo = await this.riesgosRepository.findOne({ where: { id } });
        if (!riesgo) {
            throw new common_1.NotFoundException(`Riesgo #${id} no encontrado.`);
        }
        return riesgo;
    }
    async create(dto, actor) {
        if (dto.probabilidad < 1 || dto.probabilidad > 5 || dto.impacto < 1 || dto.impacto > 5) {
            throw new common_1.BadRequestException('Probabilidad e impacto deben estar entre 1 y 5.');
        }
        const codigo = await this.generarCodigo();
        const riesgo = this.riesgosRepository.create({
            ...dto,
            codigo,
            idCreador: actor.idUsuario,
            idResponsable: dto.idResponsable,
        });
        const saved = await this.riesgosRepository.save(riesgo);
        await this.logsService.riesgoCreado({
            idUsuario: actor.idUsuario,
            nombreUsuario: actor.nombreUsuario,
            idRiesgo: saved.id,
            descripcion: saved.titulo,
            nivelRiesgo: saved.nivelRiesgo,
            ipOrigen: actor.ipOrigen,
        });
        this.logger.log(`Riesgo ${saved.codigo} creado por ${actor.nombreUsuario} [${saved.nivelRiesgo}]`);
        return saved;
    }
    async findAll(filtros) {
        const qb = this.riesgosRepository
            .createQueryBuilder('r')
            .leftJoinAndSelect('r.responsable', 'responsable')
            .leftJoinAndSelect('r.creador', 'creador')
            .orderBy('r.puntuacion', 'DESC');
        if (filtros?.nivel) {
            qb.andWhere('r.nivel_riesgo = :nivel', { nivel: filtros.nivel });
        }
        if (filtros?.estado) {
            qb.andWhere('r.estado = :estado', { estado: filtros.estado });
        }
        if (filtros?.idResponsable) {
            qb.andWhere('r.id_responsable = :idResponsable', { idResponsable: filtros.idResponsable });
        }
        if (filtros?.fechaDesde) {
            qb.andWhere('r.fecha_identificacion >= :fechaDesde', { fechaDesde: filtros.fechaDesde });
        }
        if (filtros?.fechaHasta) {
            qb.andWhere('r.fecha_identificacion <= :fechaHasta', { fechaHasta: filtros.fechaHasta });
        }
        return qb.getMany();
    }
    async findOne(id) {
        const riesgo = await this.riesgosRepository.findOne({
            where: { id },
            relations: ['responsable', 'creador'],
        });
        if (!riesgo) {
            throw new common_1.NotFoundException(`Riesgo #${id} no encontrado.`);
        }
        return riesgo;
    }
    async update(id, dto, actor) {
        const riesgo = await this.findOneOrFail(id);
        Object.assign(riesgo, dto);
        const updated = await this.riesgosRepository.save(riesgo);
        await this.logsService.riesgoModificado({
            idRiesgo: riesgo.id,
            nivelRiesgo: updated.nivelRiesgo,
            idUsuario: actor.idUsuario,
            nombreUsuario: actor.nombreUsuario,
            ipOrigen: actor.ipOrigen ?? '127.0.0.1',
        });
        return updated;
    }
    async remove(id, actor) {
        const riesgo = await this.findOneOrFail(id);
        await this.riesgosRepository.softDelete(id);
        await this.logsService.riesgoEliminado({
            idRiesgo: id,
            idUsuario: actor.idUsuario,
            nombreUsuario: actor.nombreUsuario,
            ipOrigen: actor.ipOrigen ?? '127.0.0.1',
        });
    }
    async resumenPorNivel() {
        const rows = await this.riesgosRepository
            .createQueryBuilder('r')
            .select('r.nivel_riesgo', 'nivel')
            .addSelect('COUNT(*)', 'total')
            .where('r.deleted_at IS NULL')
            .groupBy('r.nivel_riesgo')
            .getRawMany();
        const resumen = {
            [riesgo_entity_1.NivelRiesgo.BAJO]: 0,
            [riesgo_entity_1.NivelRiesgo.MEDIO]: 0,
            [riesgo_entity_1.NivelRiesgo.ALTO]: 0,
            [riesgo_entity_1.NivelRiesgo.CRITICO]: 0,
        };
        for (const row of rows) {
            resumen[row.nivel] = parseInt(row.total, 10);
        }
        return resumen;
    }
};
exports.RiesgosService = RiesgosService;
exports.RiesgosService = RiesgosService = RiesgosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(riesgo_entity_1.Riesgo)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object, typeof (_c = typeof logs_service_1.LogsService !== "undefined" && logs_service_1.LogsService) === "function" ? _c : Object])
], RiesgosService);


/***/ }),

/***/ "./src/modules/usuarios/api/usuarios.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/usuarios/api/usuarios.controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_roles_guard_1 = __webpack_require__(/*! src/app/services/auth/guards/auth-roles.guard */ "./src/app/services/auth/guards/auth-roles.guard.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const usuarios_service_1 = __webpack_require__(/*! ../services/usuarios.service */ "./src/modules/usuarios/services/usuarios.service.ts");
const usuarios_auth_service_1 = __webpack_require__(/*! ../services/usuarios-auth.service */ "./src/modules/usuarios/services/usuarios-auth.service.ts");
const password_history_service_1 = __webpack_require__(/*! ../services/password-history.service */ "./src/modules/usuarios/services/password-history.service.ts");
const update_usuario_dto_1 = __webpack_require__(/*! ../dto/update-usuario.dto */ "./src/modules/usuarios/dto/update-usuario.dto.ts");
const create_usuario_nuevo_dto_1 = __webpack_require__(/*! ../dto/create-usuario-nuevo.dto */ "./src/modules/usuarios/dto/create-usuario-nuevo.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const find_all_usuarios_dto_1 = __webpack_require__(/*! ../dto/find-all-usuarios.dto */ "./src/modules/usuarios/dto/find-all-usuarios.dto.ts");
const common_response_dto_1 = __webpack_require__(/*! src/shared/dto/common-response.dto */ "./src/shared/dto/common-response.dto.ts");
let UsuariosController = class UsuariosController {
    usuariosService;
    usuariosAuthService;
    passwordHistoryService;
    constructor(usuariosService, usuariosAuthService, passwordHistoryService) {
        this.usuariosService = usuariosService;
        this.usuariosAuthService = usuariosAuthService;
        this.passwordHistoryService = passwordHistoryService;
    }
    async findAll(res) {
        const usuarios = await this.usuariosService.findAll();
        return (0, utils_1.OkRes)(res, { usuarios });
    }
    async crearUsuario(dto, req, res) {
        await this.usuariosAuthService.crearUsuario(dto, req.user.rol);
        return (0, utils_1.CreatedRes)(res, { message: 'Usuario creado exitosamente. Las credenciales fueron enviadas por correo.' });
    }
    async cambiarPassword(dto, req, res) {
        await this.usuariosService.cambiarPassword(req.user.sub, dto);
        return (0, utils_1.OkRes)(res, { message: 'Contraseña actualizada exitosamente' });
    }
    async updateUsuario(id, dto, res) {
        await this.usuariosAuthService.update(id, dto);
        return (0, utils_1.OkRes)(res, { message: 'El usuario se actualizó exitosamente' });
    }
    async desbloquearCuenta(id, res) {
        await this.usuariosService.desbloquearCuenta(id);
        return (0, utils_1.OkRes)(res, { message: 'Cuenta desbloqueada exitosamente' });
    }
    async restaurarUsuario(id, res) {
        await this.usuariosService.restaurar(id);
        return (0, utils_1.OkRes)(res, { message: 'Usuario restaurado exitosamente' });
    }
    async deleteUsuario(id, res) {
        await this.usuariosAuthService.remove(id);
        return (0, utils_1.OkRes)(res, { message: 'Usuario eliminado' });
    }
    async obtenerHistorialPasswords(id, res) {
        const usuario = await this.usuariosService.findOne(id, { throwException: true });
        const historial = await this.passwordHistoryService.obtenerHistorialFechas(id);
        return (0, utils_1.OkRes)(res, {
            id_usuario: usuario.id,
            usuario: usuario.usuario,
            ...historial,
        });
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(),
    (0, swagger_1.ApiOperation)({ summary: 'Api para obtener los usuarios (solo admins)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Respuesta en caso de obtener usuarios', type: find_all_usuarios_dto_1.FindAllUsuariosDto }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(),
    (0, swagger_1.ApiOperation)({ summary: 'Api para crear un usuario con alias @orbis.com (solo admins)' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Usuario creado y credenciales enviadas por correo', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof create_usuario_nuevo_dto_1.CreateUsuarioNuevoDto !== "undefined" && create_usuario_nuevo_dto_1.CreateUsuarioNuevoDto) === "function" ? _e : Object, Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "crearUsuario", null);
__decorate([
    (0, common_1.Patch)('cambiar-password'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([
        roles_const_1.Rol.SUPERADMIN,
        roles_const_1.Rol.ADMIN_RRHH,
        roles_const_1.Rol.ADMIN_EMPRESAS,
        roles_const_1.Rol.INVESTIGADOR_SENIOR,
        roles_const_1.Rol.INVESTIGADOR_JUNIOR,
        roles_const_1.Rol.TEMPORAL,
        roles_const_1.Rol.VISITANTE
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Api para que el usuario autenticado cambie su propia contraseña' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Contraseña actualizada exitosamente', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof usuarios_service_1.CambiarPasswordDto !== "undefined" && usuarios_service_1.CambiarPasswordDto) === "function" ? _g : Object, Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "cambiarPassword", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_SISTEMA)),
    (0, swagger_1.ApiOperation)({ summary: 'Api para actualizar información de un usuario (solo admins)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Respuesta en caso de actualizar el usuario', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiConflictResponse)((0, utils_1.SwaggerConflictCommon)()),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id del usuario' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_j = typeof update_usuario_dto_1.UpdateUsuarioDto !== "undefined" && update_usuario_dto_1.UpdateUsuarioDto) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "updateUsuario", null);
__decorate([
    (0, common_1.Patch)(':id/desbloquear'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_SISTEMA)),
    (0, swagger_1.ApiOperation)({ summary: 'Api para desbloquear la cuenta de un usuario (solo admins)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Cuenta desbloqueada exitosamente', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id del usuario' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "desbloquearCuenta", null);
__decorate([
    (0, common_1.Patch)(':id/restaurar'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)([roles_const_1.Rol.SUPERADMIN])),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar usuario desactivado (solo SUPERADMIN)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Usuario restaurado exitosamente', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id del usuario' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_m = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "restaurarUsuario", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_SISTEMA)),
    (0, swagger_1.ApiOperation)({ summary: 'Api para eliminar a un usuario (solo admins)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Respuesta en caso de eliminar un usuario', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)((0, utils_1.SwaggerBadRequestCommon)()),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id del usuario' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "deleteUsuario", null);
__decorate([
    (0, common_1.Get)(':id/historial-passwords'),
    (0, common_1.UseGuards)((0, auth_roles_guard_1.AuthRolesGuard)(roles_const_1.ROLES_ADMIN_SISTEMA)),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener historial de fechas de cambio de contraseña (sin hashes)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Historial de fechas obtenido', type: common_response_dto_1.CommonResponseDto }),
    (0, swagger_1.ApiNotFoundResponse)((0, utils_1.SwaggerNotFoundCommon)()),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Id del usuario' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_p = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerHistorialPasswords", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('api/usuarios'),
    __metadata("design:paramtypes", [typeof (_a = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _a : Object, typeof (_b = typeof usuarios_auth_service_1.UsuariosAuthService !== "undefined" && usuarios_auth_service_1.UsuariosAuthService) === "function" ? _b : Object, typeof (_c = typeof password_history_service_1.PasswordHistoryService !== "undefined" && password_history_service_1.PasswordHistoryService) === "function" ? _c : Object])
], UsuariosController);


/***/ }),

/***/ "./src/modules/usuarios/dto/create-usuario-nuevo.dto.ts":
/*!**************************************************************!*\
  !*** ./src/modules/usuarios/dto/create-usuario-nuevo.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsuarioNuevoDto = exports.PermisosAdminDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class PermisosAdminDto {
    panelUsuarios;
    editarEmpresas;
    formularioExterno;
}
exports.PermisosAdminDto = PermisosAdminDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PermisosAdminDto.prototype, "panelUsuarios", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PermisosAdminDto.prototype, "editarEmpresas", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PermisosAdminDto.prototype, "formularioExterno", void 0);
class CreateUsuarioNuevoDto {
    nombre;
    apellidoPaterno;
    apellidoMaterno;
    correoReal;
    tipoRol;
    permisos;
    rubrosAsignados;
}
exports.CreateUsuarioNuevoDto = CreateUsuarioNuevoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Octavio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioNuevoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Luna' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioNuevoDto.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'García' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUsuarioNuevoDto.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'octavio.personal@gmail.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUsuarioNuevoDto.prototype, "correoReal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['admin', 'investigador'] }),
    (0, class_validator_1.IsIn)(['admin', 'investigador']),
    __metadata("design:type", String)
], CreateUsuarioNuevoDto.prototype, "tipoRol", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.tipoRol === 'admin'),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PermisosAdminDto),
    (0, swagger_1.ApiPropertyOptional)({ type: PermisosAdminDto }),
    __metadata("design:type", PermisosAdminDto)
], CreateUsuarioNuevoDto.prototype, "permisos", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.tipoRol === 'investigador'),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ type: [Number] }),
    __metadata("design:type", Array)
], CreateUsuarioNuevoDto.prototype, "rubrosAsignados", void 0);


/***/ }),

/***/ "./src/modules/usuarios/dto/find-all-usuarios.dto.ts":
/*!***********************************************************!*\
  !*** ./src/modules/usuarios/dto/find-all-usuarios.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllUsuariosDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const usuario_dto_1 = __webpack_require__(/*! ./usuario.dto */ "./src/modules/usuarios/dto/usuario.dto.ts");
class FindAllUsuariosDto {
    usuarios;
}
exports.FindAllUsuariosDto = FindAllUsuariosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de usurios',
        type: [usuario_dto_1.UsuarioDto]
    }),
    __metadata("design:type", Array)
], FindAllUsuariosDto.prototype, "usuarios", void 0);


/***/ }),

/***/ "./src/modules/usuarios/dto/update-usuario.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/usuarios/dto/update-usuario.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsuarioDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUsuarioDto {
    usuario;
    correo;
    idRol;
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre de usuario', example: 'jdoe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Correo electrónico válido', example: 'usuario@ejemplo.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del rol (1-5)', example: 3 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], UpdateUsuarioDto.prototype, "idRol", void 0);


/***/ }),

/***/ "./src/modules/usuarios/dto/usuario.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/usuarios/dto/usuario.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuarioDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UsuarioDto {
    id;
    usuario;
    correo;
    idRol;
    expiracion;
}
exports.UsuarioDto = UsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identificador único del usuario',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UsuarioDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de usuario (mínimo 1, máximo 50 caracteres)',
        example: 'jdoe',
    }),
    __metadata("design:type", String)
], UsuarioDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico del usuario',
        example: 'usuario@ejemplo.com',
    }),
    __metadata("design:type", String)
], UsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del rol asignado al usuario',
        example: 2,
    }),
    __metadata("design:type", Number)
], UsuarioDto.prototype, "idRol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de expiración de la cuenta (puede ser nula)',
        example: '2025-12-31T23:59:59.000Z',
        required: false,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UsuarioDto.prototype, "expiracion", void 0);


/***/ }),

/***/ "./src/modules/usuarios/entities/investigador-empresa.entity.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/usuarios/entities/investigador-empresa.entity.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvestigadorEmpresa = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const usuario_entity_1 = __webpack_require__(/*! ./usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
let InvestigadorEmpresa = class InvestigadorEmpresa {
    id;
    idUsuario;
    idEmpresa;
    asignadoPor;
    createdAt;
    usuario;
};
exports.InvestigadorEmpresa = InvestigadorEmpresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InvestigadorEmpresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], InvestigadorEmpresa.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_empresa' }),
    __metadata("design:type", Number)
], InvestigadorEmpresa.prototype, "idEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asignado_por', nullable: true }),
    __metadata("design:type", Number)
], InvestigadorEmpresa.prototype, "asignadoPor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], InvestigadorEmpresa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", typeof (_b = typeof usuario_entity_1.Usuario !== "undefined" && usuario_entity_1.Usuario) === "function" ? _b : Object)
], InvestigadorEmpresa.prototype, "usuario", void 0);
exports.InvestigadorEmpresa = InvestigadorEmpresa = __decorate([
    (0, typeorm_1.Entity)('investigador_empresa'),
    (0, typeorm_1.Unique)(['idUsuario', 'idEmpresa'])
], InvestigadorEmpresa);


/***/ }),

/***/ "./src/modules/usuarios/entities/investigador-rubro.entity.ts":
/*!********************************************************************!*\
  !*** ./src/modules/usuarios/entities/investigador-rubro.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvestigadorRubro = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const usuario_entity_1 = __webpack_require__(/*! ./usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
let InvestigadorRubro = class InvestigadorRubro {
    id;
    idUsuario;
    idRubro;
    usuario;
};
exports.InvestigadorRubro = InvestigadorRubro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InvestigadorRubro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], InvestigadorRubro.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_rubro' }),
    __metadata("design:type", Number)
], InvestigadorRubro.prototype, "idRubro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", typeof (_a = typeof usuario_entity_1.Usuario !== "undefined" && usuario_entity_1.Usuario) === "function" ? _a : Object)
], InvestigadorRubro.prototype, "usuario", void 0);
exports.InvestigadorRubro = InvestigadorRubro = __decorate([
    (0, typeorm_1.Entity)('investigador_rubro'),
    (0, typeorm_1.Unique)(['idUsuario', 'idRubro'])
], InvestigadorRubro);


/***/ }),

/***/ "./src/modules/usuarios/entities/password-history.entity.ts":
/*!******************************************************************!*\
  !*** ./src/modules/usuarios/entities/password-history.entity.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordHistory = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const usuario_entity_1 = __webpack_require__(/*! ./usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
let PasswordHistory = class PasswordHistory {
    id;
    idUsuario;
    passwordHash;
    createdAt;
    usuario;
};
exports.PasswordHistory = PasswordHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PasswordHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], PasswordHistory.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_hash' }),
    __metadata("design:type", String)
], PasswordHistory.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PasswordHistory.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", typeof (_b = typeof usuario_entity_1.Usuario !== "undefined" && usuario_entity_1.Usuario) === "function" ? _b : Object)
], PasswordHistory.prototype, "usuario", void 0);
exports.PasswordHistory = PasswordHistory = __decorate([
    (0, typeorm_1.Entity)('password_history')
], PasswordHistory);


/***/ }),

/***/ "./src/modules/usuarios/entities/usuario.entity.ts":
/*!*********************************************************!*\
  !*** ./src/modules/usuarios/entities/usuario.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usuario = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const rol_entity_1 = __webpack_require__(/*! ../modules/roles/entities/rol.entity */ "./src/modules/usuarios/modules/roles/entities/rol.entity.ts");
let Usuario = class Usuario {
    id;
    usuario;
    correo;
    correoReal;
    contrasenia;
    nombre;
    apellido;
    idRol;
    mustChangePassword;
    passwordChangedAt;
    passwordExpiresAt;
    isLocked;
    failedAttempts;
    lockedAt;
    accesoFormularioExterno;
    resetToken;
    resetTokenExpires;
    expiracion;
    createdAt;
    updatedAt;
    deletedAt;
    rol;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario' }),
    __metadata("design:type", String)
], Usuario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo' }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo_real', nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "correoReal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contrasenia' }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido', nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_rol' }),
    __metadata("design:type", Number)
], Usuario.prototype, "idRol", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'must_change_password', default: true }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "mustChangePassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_changed_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Usuario.prototype, "passwordChangedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_expires_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Usuario.prototype, "passwordExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_locked', default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "isLocked", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'failed_attempts', default: 0 }),
    __metadata("design:type", Number)
], Usuario.prototype, "failedAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locked_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Usuario.prototype, "lockedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'acceso_formulario_externo', default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "accesoFormularioExterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reset_token', nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "resetToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reset_token_expires', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Usuario.prototype, "resetTokenExpires", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expiracion', type: 'timestamp without time zone', nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Usuario.prototype, "expiracion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', nullable: true }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Usuario.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, (rol) => rol.usuarios),
    (0, typeorm_1.JoinColumn)({ name: 'id_rol' }),
    __metadata("design:type", typeof (_j = typeof rol_entity_1.Rol !== "undefined" && rol_entity_1.Rol) === "function" ? _j : Object)
], Usuario.prototype, "rol", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);


/***/ }),

/***/ "./src/modules/usuarios/modules/roles/api/roles.controller.ts":
/*!********************************************************************!*\
  !*** ./src/modules/usuarios/modules/roles/api/roles.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_service_1 = __webpack_require__(/*! ../services/roles.service */ "./src/modules/usuarios/modules/roles/services/roles.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let RolesController = class RolesController {
    rolesService;
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
};
exports.RolesController = RolesController;
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiExcludeController)(true),
    (0, common_1.Controller)('api/roles'),
    __metadata("design:paramtypes", [typeof (_a = typeof roles_service_1.RolesService !== "undefined" && roles_service_1.RolesService) === "function" ? _a : Object])
], RolesController);


/***/ }),

/***/ "./src/modules/usuarios/modules/roles/entities/rol.entity.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/usuarios/modules/roles/entities/rol.entity.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rol = void 0;
const usuario_entity_1 = __webpack_require__(/*! src/modules/usuarios/entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Rol = class Rol {
    id;
    nombre;
    usuarios;
};
exports.Rol = Rol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rol' }),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'nombre_rol' }),
    __metadata("design:type", String)
], Rol.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_entity_1.Usuario, (usuario) => usuario.rol),
    __metadata("design:type", Array)
], Rol.prototype, "usuarios", void 0);
exports.Rol = Rol = __decorate([
    (0, typeorm_1.Entity)('roles')
], Rol);


/***/ }),

/***/ "./src/modules/usuarios/modules/roles/roles.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/usuarios/modules/roles/roles.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_service_1 = __webpack_require__(/*! ./services/roles.service */ "./src/modules/usuarios/modules/roles/services/roles.service.ts");
const roles_controller_1 = __webpack_require__(/*! ./api/roles.controller */ "./src/modules/usuarios/modules/roles/api/roles.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rol_entity_1 = __webpack_require__(/*! ./entities/rol.entity */ "./src/modules/usuarios/modules/roles/entities/rol.entity.ts");
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rol_entity_1.Rol])
        ],
        controllers: [roles_controller_1.RolesController],
        providers: [roles_service_1.RolesService],
        exports: [roles_service_1.RolesService]
    })
], RolesModule);


/***/ }),

/***/ "./src/modules/usuarios/modules/roles/services/roles.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/usuarios/modules/roles/services/roles.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const rol_entity_1 = __webpack_require__(/*! ../entities/rol.entity */ "./src/modules/usuarios/modules/roles/entities/rol.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let RolesService = class RolesService {
    rolRepository;
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async update(idRol, data) {
        const rol = await this.rolRepository.findOne({
            where: {
                id: idRol
            }
        });
        rol.nombre = data.nombre;
        return await this.rolRepository.save(rol);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RolesService);


/***/ }),

/***/ "./src/modules/usuarios/services/password-history.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/usuarios/services/password-history.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordHistoryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const password_history_entity_1 = __webpack_require__(/*! ../entities/password-history.entity */ "./src/modules/usuarios/entities/password-history.entity.ts");
const HISTORIAL_MAX = 10;
let PasswordHistoryService = class PasswordHistoryService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async verificarReutilizacion(idUsuario, passwordPlano) {
        const historial = await this.repo.find({
            where: { idUsuario },
            order: { createdAt: 'DESC' },
            take: HISTORIAL_MAX,
        });
        for (const entrada of historial) {
            const reutilizada = await bcrypt.compare(passwordPlano, entrada.passwordHash);
            if (reutilizada) {
                throw new common_1.BadRequestException(`No puedes usar una contraseña que ya utilizaste en los últimos ${HISTORIAL_MAX} cambios`);
            }
        }
    }
    async guardarEnHistorial(idUsuario, hashNuevo) {
        await this.repo.save({ idUsuario, passwordHash: hashNuevo });
        const todas = await this.repo.find({
            where: { idUsuario },
            order: { createdAt: 'DESC' },
        });
        if (todas.length > HISTORIAL_MAX) {
            const aEliminar = todas.slice(HISTORIAL_MAX).map((h) => h.id);
            await this.repo.delete(aEliminar);
        }
    }
    async obtenerRegistroFechas(idUsuario) {
        const historial = await this.repo.find({
            where: { idUsuario },
            order: { createdAt: 'DESC' },
            select: ['createdAt'],
        });
        return historial.map((h) => ({ fecha: h.createdAt }));
    }
    async obtenerHistorialFechas(idUsuario) {
        const entradas = await this.repo.find({
            where: { idUsuario },
            order: { createdAt: 'DESC' },
            take: 10,
            select: ['id', 'createdAt'],
        });
        return {
            total_cambios: entradas.length,
            historial: entradas.map((entrada, index) => ({
                posicion: index + 1,
                fecha: entrada.createdAt,
                es_actual: index === 0,
            })),
        };
    }
};
exports.PasswordHistoryService = PasswordHistoryService;
exports.PasswordHistoryService = PasswordHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(password_history_entity_1.PasswordHistory)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PasswordHistoryService);


/***/ }),

/***/ "./src/modules/usuarios/services/usuarios-auth.service.ts":
/*!****************************************************************!*\
  !*** ./src/modules/usuarios/services/usuarios-auth.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosAuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usuario_entity_1 = __webpack_require__(/*! ../entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const utils_1 = __webpack_require__(/*! src/common/utils */ "./src/common/utils/index.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const usuarios_service_1 = __webpack_require__(/*! ./usuarios.service */ "./src/modules/usuarios/services/usuarios.service.ts");
const email_service_1 = __webpack_require__(/*! src/shared/services/email/email.service */ "./src/shared/services/email/email.service.ts");
const alias_generator_util_1 = __webpack_require__(/*! src/common/utils/alias-generator.util */ "./src/common/utils/alias-generator.util.ts");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const investigador_rubro_entity_1 = __webpack_require__(/*! ../entities/investigador-rubro.entity */ "./src/modules/usuarios/entities/investigador-rubro.entity.ts");
let UsuariosAuthService = class UsuariosAuthService {
    usuarioRepository;
    investigadorRubroRepository;
    usuariosService;
    emailService;
    constructor(usuarioRepository, investigadorRubroRepository, usuariosService, emailService) {
        this.usuarioRepository = usuarioRepository;
        this.investigadorRubroRepository = investigadorRubroRepository;
        this.usuariosService = usuariosService;
        this.emailService = emailService;
    }
    sanitize(u) {
        if (!u)
            return u;
        const { contrasenia, ...rest } = u;
        return rest;
    }
    async create(data) {
        const usuario = new usuario_entity_1.Usuario();
        usuario.correo = data.correo;
        usuario.usuario = data.usuario;
        usuario.contrasenia = await (0, utils_1.hashPassword)(data.contrasenia);
        usuario.idRol = data.idRol;
        const usuarioSaved = await this.usuarioRepository.save(usuario);
        return usuarioSaved;
    }
    async createTemporal(data, manager) {
        const repo = manager ? manager.getRepository(usuario_entity_1.Usuario) : this.usuarioRepository;
        const usuario = new usuario_entity_1.Usuario();
        usuario.usuario = data.usuario;
        usuario.correo = data.correo;
        usuario.contrasenia = await (0, utils_1.hashPassword)(data.contrasenia);
        usuario.idRol = roles_const_1.RolesEnum.TEMPORAL;
        usuario.expiracion = data.expiracion;
        const usuarioSaved = await repo.save(usuario);
        return usuarioSaved;
    }
    async update(id, data) {
        const entity = await this.usuariosService.findOne(id, { throwException: true });
        if (data.usuario && data.usuario !== entity.usuario) {
            const repeated = await this.usuariosService.findByUsuario(data.usuario, { throwException: false });
            if (repeated && repeated.id !== id) {
                throw new common_1.ConflictException({ message: 'El nombre de usuario ya está en uso.' });
            }
            entity.usuario = data.usuario;
        }
        if (data.correo && data.correo !== entity.correo) {
            const repeatedEmail = await this.usuariosService.findOneByCorreo(data.correo, { throwException: false });
            if (repeatedEmail && repeatedEmail.id !== id) {
                throw new common_1.ConflictException({ message: 'El correo ya está en uso.' });
            }
            entity.correo = data.correo;
        }
        if (data.idRol !== undefined && data.idRol !== entity.idRol) {
            entity.idRol = data.idRol;
        }
        const updated = await this.usuarioRepository.save(entity);
        return this.sanitize(updated);
    }
    async remove(id) {
        await this.usuariosService.findOne(id, { throwException: true });
        await this.usuarioRepository.softDelete(id);
        return true;
    }
    async crearUsuario(dto, creadorIdRol) {
        const alias = await this.generarAliasUnico(dto.nombre, dto.apellidoPaterno);
        const tempPassword = this.generarPasswordTemporal();
        const hash = await (0, utils_1.hashPassword)(tempPassword);
        let idRol;
        if (dto.tipoRol === 'admin') {
            idRol = this.calcularRolAdmin(dto.permisos?.panelUsuarios ?? false, dto.permisos?.editarEmpresas ?? false, dto.permisos?.formularioExterno ?? false, creadorIdRol === 1);
        }
        else {
            const esJunior = dto.rubrosAsignados && dto.rubrosAsignados.length > 0;
            idRol = esJunior ? 5 : 4;
        }
        const apellido = dto.apellidoMaterno
            ? `${dto.apellidoPaterno} ${dto.apellidoMaterno}`
            : dto.apellidoPaterno;
        const nuevoUsuario = this.usuarioRepository.create({
            nombre: dto.nombre,
            apellido: apellido,
            usuario: alias,
            correo: `${alias}@orbis.com`,
            correoReal: dto.correoReal,
            contrasenia: hash,
            idRol: idRol,
            mustChangePassword: true,
            passwordExpiresAt: (0, date_fns_1.addDays)(new Date(), 60),
            accesoFormularioExterno: dto.permisos?.formularioExterno ?? false,
        });
        const guardado = await this.usuarioRepository.save(nuevoUsuario);
        if (idRol === 5 && dto.rubrosAsignados && dto.rubrosAsignados.length > 0) {
            const asignaciones = dto.rubrosAsignados.map((idRubro) => ({
                idUsuario: guardado.id,
                idRubro,
            }));
            await this.investigadorRubroRepository.save(asignaciones);
        }
        if (dto.permisos?.formularioExterno) {
            await this.emailService.enviarAccesoFormularioExterno(dto.correoReal, alias, tempPassword, 'https://orbis-empresarial.vercel.app/');
        }
        else {
            await this.emailService.enviarPasswordTemporal(dto.correoReal, alias, tempPassword);
        }
        const { contrasenia, ...resultado } = guardado;
        return resultado;
    }
    calcularRolAdmin(permisoUsuarios, permisoEmpresas, permisoFormularioExterno, creadorEsSuperadmin) {
        if (permisoUsuarios && permisoEmpresas) {
            if (!creadorEsSuperadmin) {
                throw new common_1.ForbiddenException('Solo un SUPERADMIN puede crear usuarios con acceso total al sistema');
            }
            return 1;
        }
        if (permisoUsuarios)
            return 2;
        if (permisoEmpresas)
            return 3;
        if (permisoFormularioExterno)
            return 3;
        throw new common_1.BadRequestException('Un administrador debe tener al menos un acceso asignado');
    }
    async generarAliasUnico(nombre, apellidoPaterno) {
        const base = (0, alias_generator_util_1.buildBaseAlias)(nombre, apellidoPaterno);
        let alias = base;
        let contador = 2;
        while (await this.usuarioRepository.existsBy({ usuario: alias })) {
            alias = `${base}${contador}`;
            contador++;
        }
        return alias;
    }
    generarPasswordTemporal() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&';
        let pwd = '';
        pwd += 'ABCDEFGHJKLMNPQRSTUVWXYZ'[Math.floor(Math.random() * 24)];
        pwd += 'abcdefghjkmnpqrstuvwxyz'[Math.floor(Math.random() * 23)];
        pwd += '23456789'[Math.floor(Math.random() * 8)];
        pwd += '!@#$%&'[Math.floor(Math.random() * 6)];
        for (let i = pwd.length; i < 16; i++) {
            pwd += chars[Math.floor(Math.random() * chars.length)];
        }
        return pwd.split('').sort(() => Math.random() - 0.5).join('');
    }
};
exports.UsuariosAuthService = UsuariosAuthService;
exports.UsuariosAuthService = UsuariosAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(1, (0, typeorm_1.InjectRepository)(investigador_rubro_entity_1.InvestigadorRubro)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _c : Object, typeof (_d = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _d : Object])
], UsuariosAuthService);


/***/ }),

/***/ "./src/modules/usuarios/services/usuarios.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/usuarios/services/usuarios.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosService = exports.CambiarPasswordDto = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usuario_entity_1 = __webpack_require__(/*! ../entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const classes_1 = __webpack_require__(/*! src/common/classes */ "./src/common/classes/index.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const password_validator_service_1 = __webpack_require__(/*! src/common/services/password-validator.service */ "./src/common/services/password-validator.service.ts");
const password_history_service_1 = __webpack_require__(/*! ./password-history.service */ "./src/modules/usuarios/services/password-history.service.ts");
class CambiarPasswordDto {
    passwordActual;
    passwordNuevo;
}
exports.CambiarPasswordDto = CambiarPasswordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CambiarPasswordDto.prototype, "passwordActual", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CambiarPasswordDto.prototype, "passwordNuevo", void 0);
let UsuariosService = class UsuariosService {
    usuarioRepository;
    passwordValidator;
    passwordHistoryService;
    constructor(usuarioRepository, passwordValidator, passwordHistoryService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordValidator = passwordValidator;
        this.passwordHistoryService = passwordHistoryService;
    }
    create(createUsuarioDto) {
        return 'This action adds a new usuario';
    }
    async findAll() {
        const usuario = await this.usuarioRepository.find({
            select: {
                id: true,
                usuario: true,
                nombre: true,
                apellido: true,
                correo: true,
                idRol: true,
                isLocked: true,
                failedAttempts: true,
                expiracion: true,
            },
            where: {
                idRol: (0, typeorm_2.Not)(1)
            }
        });
        return usuario;
    }
    async findByUsuario(usuario, options) {
        const finalOptions = new classes_1.OptionsFindOne();
        if (options) {
            Object.assign(finalOptions, options);
        }
        const repo = !finalOptions.manager ? this.usuarioRepository : finalOptions.manager.getRepository(usuario_entity_1.Usuario);
        const u = await repo.findOne({
            where: {
                usuario: usuario,
            },
        });
        if (!u && finalOptions.throwException) {
            throw new common_1.NotFoundException({
                message: 'Usuario no encontrado',
            });
        }
        return u;
    }
    async findOne(id, options) {
        const finalOptions = new classes_1.OptionsFindOne();
        if (options) {
            Object.assign(finalOptions, options);
        }
        const repo = !finalOptions.manager ? this.usuarioRepository : finalOptions.manager.getRepository(usuario_entity_1.Usuario);
        const u = await repo.findOne({
            where: {
                id: id,
            },
        });
        if (!u) {
            if (finalOptions.throwException) {
                throw new common_1.NotFoundException({
                    message: 'Usuario no encontrado',
                });
            }
            return null;
        }
        if (u.idRol === roles_const_1.RolesEnum.TEMPORAL &&
            u.expiracion &&
            u.expiracion.getTime() <= new Date().getTime()) {
            if (finalOptions.throwException) {
                throw new common_1.NotFoundException({
                    message: 'Usuario no encontrado',
                });
            }
            return null;
        }
        return u;
    }
    async cambiarPassword(idUsuario, dto) {
        const usuario = await this.usuarioRepository.findOneBy({ id: idUsuario });
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (!usuario.mustChangePassword) {
            if (!dto.passwordActual) {
                throw new common_1.BadRequestException('La contraseña actual es requerida');
            }
            const actualValida = await bcrypt.compare(dto.passwordActual, usuario.contrasenia);
            if (!actualValida) {
                throw new common_1.BadRequestException('La contraseña actual es incorrecta');
            }
        }
        this.passwordValidator.validar(dto.passwordNuevo);
        await this.passwordHistoryService.verificarReutilizacion(idUsuario, dto.passwordNuevo);
        const nuevoHash = await bcrypt.hash(dto.passwordNuevo, 12);
        await this.passwordHistoryService.guardarEnHistorial(idUsuario, nuevoHash);
        await this.usuarioRepository.update(idUsuario, {
            contrasenia: nuevoHash,
            mustChangePassword: false,
            passwordChangedAt: new Date(),
            passwordExpiresAt: (0, date_fns_1.addDays)(new Date(), 60),
            failedAttempts: 0,
            resetToken: undefined,
            resetTokenExpires: undefined,
        });
    }
    async restaurar(id) {
        await this.usuarioRepository.restore({ id });
    }
    async desbloquearCuenta(id) {
        await this.usuarioRepository.update(id, {
            isLocked: false,
            failedAttempts: 0,
            lockedAt: null,
        });
    }
    async bloquearCuenta(id) {
        await this.usuarioRepository.update(id, {
            isLocked: true,
            lockedAt: new Date(),
        });
    }
    async incrementarIntentos(id, count) {
        await this.usuarioRepository.update(id, { failedAttempts: count });
    }
    async marcarPasswordExpirado(id) {
        await this.usuarioRepository.update(id, { mustChangePassword: true });
    }
    async findOneByCorreo(correo, options) {
        const finalOptions = new classes_1.OptionsFindOne();
        if (options) {
            Object.assign(finalOptions, options);
        }
        const repo = !finalOptions.manager ? this.usuarioRepository : finalOptions.manager.getRepository(usuario_entity_1.Usuario);
        const u = await repo.findOne({
            where: {
                correo: correo,
            },
        });
        if (!u) {
            if (finalOptions.throwException) {
                throw new common_1.NotFoundException({
                    message: 'Usuario no encontrado',
                });
            }
            return null;
        }
        if (u.idRol === roles_const_1.RolesEnum.TEMPORAL &&
            u.expiracion &&
            u.expiracion.getTime() <= new Date().getTime()) {
            if (finalOptions.throwException) {
                throw new common_1.NotFoundException({
                    message: 'Usuario no encontrado',
                });
            }
            return null;
        }
        return u;
    }
    async findByAnyEmail(email) {
        const byReal = await this.usuarioRepository.findOne({ where: { correoReal: email } });
        if (byReal)
            return byReal;
        return this.usuarioRepository.findOne({ where: { correo: email } });
    }
    async guardarResetToken(id, tokenHash, expires) {
        await this.usuarioRepository.update(id, {
            resetToken: tokenHash,
            resetTokenExpires: expires,
        });
    }
    async findByResetToken(tokenHash) {
        return this.usuarioRepository.findOne({ where: { resetToken: tokenHash } });
    }
    async resetearPassword(id, passwordNuevo) {
        const usuario = await this.usuarioRepository.findOneBy({ id });
        if (!usuario)
            throw new common_1.NotFoundException('Usuario no encontrado');
        this.passwordValidator.validar(passwordNuevo);
        await this.passwordHistoryService.verificarReutilizacion(id, passwordNuevo);
        const nuevoHash = await bcrypt.hash(passwordNuevo, 12);
        await this.passwordHistoryService.guardarEnHistorial(id, nuevoHash);
        await this.usuarioRepository.update(id, {
            contrasenia: nuevoHash,
            mustChangePassword: false,
            passwordChangedAt: new Date(),
            passwordExpiresAt: (0, date_fns_1.addDays)(new Date(), 60),
            failedAttempts: 0,
            isLocked: false,
            lockedAt: null,
            resetToken: null,
            resetTokenExpires: null,
        });
    }
    async obtenerRubrosPorUsuario(idUsuario) {
        console.log(`Buscando rubros permitidos en BD para el usuario ID: ${idUsuario}`);
        try {
            const resultados = await this.usuarioRepository.query(`
                SELECT r.nombre_rubro
                FROM investigador_rubro ir
                INNER JOIN rubros r ON ir.id_rubro = r.id_rubro
                WHERE ir.id_usuario = $1
                `, [idUsuario]);
            const rubrosPermitidos = resultados.map((fila) => fila.nombre_rubro);
            console.log(`Rubros encontrados para usuario ${idUsuario}:`, rubrosPermitidos);
            return rubrosPermitidos;
        }
        catch (error) {
            console.error('Error en BD al obtener rubros del investigador:', error);
            return [];
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof password_validator_service_1.PasswordValidatorService !== "undefined" && password_validator_service_1.PasswordValidatorService) === "function" ? _b : Object, typeof (_c = typeof password_history_service_1.PasswordHistoryService !== "undefined" && password_history_service_1.PasswordHistoryService) === "function" ? _c : Object])
], UsuariosService);


/***/ }),

/***/ "./src/modules/usuarios/tasks/usuarios-task.service.ts":
/*!*************************************************************!*\
  !*** ./src/modules/usuarios/tasks/usuarios-task.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosTaskService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usuario_entity_1 = __webpack_require__(/*! ../entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const email_service_1 = __webpack_require__(/*! src/shared/services/email/email.service */ "./src/shared/services/email/email.service.ts");
let UsuariosTaskService = class UsuariosTaskService {
    usuarioRepository;
    emailService;
    constructor(usuarioRepository, emailService) {
        this.usuarioRepository = usuarioRepository;
        this.emailService = emailService;
    }
    async eliminarUsuarioExpirados() {
        const usuarios = await this.usuarioRepository.find({
            where: {
                idRol: roles_const_1.RolesEnum.TEMPORAL,
                expiracion: (0, typeorm_2.LessThanOrEqual)(new Date())
            }
        });
        if (usuarios && usuarios.length > 0) {
            await this.usuarioRepository.remove(usuarios);
        }
    }
    async notificarPasswordsExpiradas() {
        const usuarios = await this.usuarioRepository.find({
            where: {
                passwordExpiresAt: (0, typeorm_2.LessThanOrEqual)(new Date()),
                mustChangePassword: false,
                isLocked: false,
            },
            select: ['id', 'usuario', 'correoReal', 'correo'],
        });
        for (const usuario of usuarios) {
            await this.usuarioRepository.update(usuario.id, { mustChangePassword: true });
            const correo = usuario.correoReal || usuario.correo;
            if (correo) {
                this.emailService.enviarPasswordExpirada(correo, usuario.usuario);
            }
        }
    }
    async limpiarTokensResetExpirados() {
        await this.usuarioRepository
            .createQueryBuilder()
            .update(usuario_entity_1.Usuario)
            .set({
            resetToken: () => 'NULL',
            resetTokenExpires: () => 'NULL',
        })
            .where('reset_token_expires <= :ahora', { ahora: new Date() })
            .andWhere('reset_token IS NOT NULL')
            .execute();
    }
};
exports.UsuariosTaskService = UsuariosTaskService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3AM, {
        name: 'eliminar-expirados',
        timeZone: 'America/La_Paz'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosTaskService.prototype, "eliminarUsuarioExpirados", null);
__decorate([
    (0, schedule_1.Cron)('0 7 * * *', {
        name: 'notificar-passwords-expiradas',
        timeZone: 'America/La_Paz'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosTaskService.prototype, "notificarPasswordsExpiradas", null);
__decorate([
    (0, schedule_1.Cron)('0 2 * * *', {
        name: 'limpiar-tokens-reset',
        timeZone: 'America/La_Paz'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosTaskService.prototype, "limpiarTokensResetExpirados", null);
exports.UsuariosTaskService = UsuariosTaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _b : Object])
], UsuariosTaskService);


/***/ }),

/***/ "./src/modules/usuarios/usuarios.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/usuarios/usuarios.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const usuarios_service_1 = __webpack_require__(/*! ./services/usuarios.service */ "./src/modules/usuarios/services/usuarios.service.ts");
const usuarios_controller_1 = __webpack_require__(/*! ./api/usuarios.controller */ "./src/modules/usuarios/api/usuarios.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usuario_entity_1 = __webpack_require__(/*! ./entities/usuario.entity */ "./src/modules/usuarios/entities/usuario.entity.ts");
const password_history_entity_1 = __webpack_require__(/*! ./entities/password-history.entity */ "./src/modules/usuarios/entities/password-history.entity.ts");
const investigador_empresa_entity_1 = __webpack_require__(/*! ./entities/investigador-empresa.entity */ "./src/modules/usuarios/entities/investigador-empresa.entity.ts");
const investigador_rubro_entity_1 = __webpack_require__(/*! ./entities/investigador-rubro.entity */ "./src/modules/usuarios/entities/investigador-rubro.entity.ts");
const usuarios_auth_service_1 = __webpack_require__(/*! ./services/usuarios-auth.service */ "./src/modules/usuarios/services/usuarios-auth.service.ts");
const usuarios_task_service_1 = __webpack_require__(/*! ./tasks/usuarios-task.service */ "./src/modules/usuarios/tasks/usuarios-task.service.ts");
const email_module_1 = __webpack_require__(/*! src/shared/services/email/email.module */ "./src/shared/services/email/email.module.ts");
const password_history_service_1 = __webpack_require__(/*! ./services/password-history.service */ "./src/modules/usuarios/services/password-history.service.ts");
let UsuariosModule = class UsuariosModule {
};
exports.UsuariosModule = UsuariosModule;
exports.UsuariosModule = UsuariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario, password_history_entity_1.PasswordHistory, investigador_empresa_entity_1.InvestigadorEmpresa, investigador_rubro_entity_1.InvestigadorRubro]),
            email_module_1.EmailModule,
        ],
        controllers: [usuarios_controller_1.UsuariosController],
        providers: [usuarios_service_1.UsuariosService, usuarios_auth_service_1.UsuariosAuthService, usuarios_task_service_1.UsuariosTaskService, password_history_service_1.PasswordHistoryService],
        exports: [usuarios_service_1.UsuariosService, usuarios_auth_service_1.UsuariosAuthService, password_history_service_1.PasswordHistoryService],
    })
], UsuariosModule);


/***/ }),

/***/ "./src/shared/constants/roles.const.ts":
/*!*********************************************!*\
  !*** ./src/shared/constants/roles.const.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROLES_CON_LECTURA = exports.ROLES_INVESTIGADORES = exports.ROLES_ADMIN_EMPRESAS = exports.ROLES_ADMIN_SISTEMA = exports.ROLES_ADMIN = exports.PERMISSION_MATRIX = exports.Permiso = exports.RolesEnum = exports.Rol = void 0;
exports.rolTienePermiso = rolTienePermiso;
var Rol;
(function (Rol) {
    Rol[Rol["SUPERADMIN"] = 1] = "SUPERADMIN";
    Rol[Rol["ADMIN_RRHH"] = 2] = "ADMIN_RRHH";
    Rol[Rol["ADMIN_EMPRESAS"] = 3] = "ADMIN_EMPRESAS";
    Rol[Rol["INVESTIGADOR_SENIOR"] = 4] = "INVESTIGADOR_SENIOR";
    Rol[Rol["INVESTIGADOR_JUNIOR"] = 5] = "INVESTIGADOR_JUNIOR";
    Rol[Rol["TEMPORAL"] = 6] = "TEMPORAL";
    Rol[Rol["VISITANTE"] = 7] = "VISITANTE";
})(Rol || (exports.RolesEnum = exports.Rol = Rol = {}));
var Permiso;
(function (Permiso) {
    Permiso["USUARIOS_LEER"] = "usuarios:leer";
    Permiso["USUARIOS_CREAR"] = "usuarios:crear";
    Permiso["USUARIOS_EDITAR"] = "usuarios:editar";
    Permiso["USUARIOS_ELIMINAR"] = "usuarios:eliminar";
    Permiso["USUARIOS_BLOQUEAR"] = "usuarios:bloquear";
    Permiso["EMPRESAS_LEER"] = "empresas:leer";
    Permiso["EMPRESAS_CREAR"] = "empresas:crear";
    Permiso["EMPRESAS_EDITAR"] = "empresas:editar";
    Permiso["EMPRESAS_ELIMINAR"] = "empresas:eliminar";
    Permiso["EMPRESAS_EXPORTAR"] = "empresas:exportar";
    Permiso["LOGS_LEER"] = "logs:leer";
    Permiso["RIESGOS_LEER"] = "riesgos:leer";
    Permiso["RIESGOS_CREAR"] = "riesgos:crear";
    Permiso["RIESGOS_EDITAR"] = "riesgos:editar";
    Permiso["RIESGOS_ELIMINAR"] = "riesgos:eliminar";
    Permiso["DASHBOARD_LEER"] = "dashboard:leer";
})(Permiso || (exports.Permiso = Permiso = {}));
exports.PERMISSION_MATRIX = {
    [Rol.SUPERADMIN]: Object.values(Permiso),
    [Rol.ADMIN_RRHH]: [
        Permiso.USUARIOS_LEER,
        Permiso.USUARIOS_CREAR,
        Permiso.USUARIOS_EDITAR,
        Permiso.USUARIOS_BLOQUEAR,
        Permiso.EMPRESAS_LEER,
        Permiso.LOGS_LEER,
        Permiso.DASHBOARD_LEER,
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
        Permiso.EMPRESAS_LEER,
        Permiso.RIESGOS_LEER,
        Permiso.DASHBOARD_LEER,
    ],
    [Rol.TEMPORAL]: [
        Permiso.EMPRESAS_LEER,
    ],
    [Rol.VISITANTE]: [],
};
function rolTienePermiso(rol, permiso) {
    return (exports.PERMISSION_MATRIX[rol] ?? []).includes(permiso);
}
exports.ROLES_ADMIN = [Rol.SUPERADMIN, Rol.ADMIN_RRHH, Rol.ADMIN_EMPRESAS];
exports.ROLES_ADMIN_SISTEMA = [Rol.SUPERADMIN, Rol.ADMIN_RRHH];
exports.ROLES_ADMIN_EMPRESAS = [Rol.SUPERADMIN, Rol.ADMIN_EMPRESAS];
exports.ROLES_INVESTIGADORES = [Rol.INVESTIGADOR_SENIOR, Rol.INVESTIGADOR_JUNIOR];
exports.ROLES_CON_LECTURA = [
    Rol.SUPERADMIN,
    Rol.ADMIN_RRHH,
    Rol.ADMIN_EMPRESAS,
    Rol.INVESTIGADOR_SENIOR,
    Rol.INVESTIGADOR_JUNIOR,
];


/***/ }),

/***/ "./src/shared/decorators/requiere-permisos.decorator.ts":
/*!**************************************************************!*\
  !*** ./src/shared/decorators/requiere-permisos.decorator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequierePermisos = exports.PERMISOS_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.PERMISOS_KEY = 'permisos_requeridos';
const RequierePermisos = (...permisos) => (0, common_1.SetMetadata)(exports.PERMISOS_KEY, permisos);
exports.RequierePermisos = RequierePermisos;


/***/ }),

/***/ "./src/shared/dto/common-response.dto.ts":
/*!***********************************************!*\
  !*** ./src/shared/dto/common-response.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CommonResponseDto {
    message;
}
exports.CommonResponseDto = CommonResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensaje de respuesta',
        type: String
    }),
    __metadata("design:type", String)
], CommonResponseDto.prototype, "message", void 0);


/***/ }),

/***/ "./src/shared/dto/pagination-params.dto.ts":
/*!*************************************************!*\
  !*** ./src/shared/dto/pagination-params.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationParamsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class PaginationParamsDto {
    page = 1;
    limit = 10;
}
exports.PaginationParamsDto = PaginationParamsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Número de la página (empieza en 1). Si no se envía, se toma por defecto el valor 1.",
        example: 2,
        default: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: "El parámetro 'page' debe ser un número entero" }),
    (0, class_validator_1.Min)(1, { message: "El parámetro 'page' debe ser mayor o igual a 1" }),
    __metadata("design:type", Number)
], PaginationParamsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Cantidad de resultados por página. Si no se envía, se toma por defecto el valor 10.",
        example: 20,
        default: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: "El parámetro 'limit' debe ser un número entero" }),
    (0, class_validator_1.Min)(1, { message: "El parámetro 'limit' debe ser mayor o igual a 1" }),
    __metadata("design:type", Number)
], PaginationParamsDto.prototype, "limit", void 0);


/***/ }),

/***/ "./src/shared/dto/pagination-response.dto.ts":
/*!***************************************************!*\
  !*** ./src/shared/dto/pagination-response.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PaginationResponseDto {
    data;
    page;
    limit;
    pages;
    total;
}
exports.PaginationResponseDto = PaginationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array de elementos de la página actual',
        type: Object,
        isArray: true,
    }),
    __metadata("design:type", Array)
], PaginationResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de la página actual',
        type: Number,
        example: 1,
    }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad de elementos por página',
        type: Number,
        example: 10,
    }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad total de páginas disponibles',
        type: Number,
        example: 5,
    }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad total de registros encontrados',
        type: Number,
        example: 42,
    }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "total", void 0);


/***/ }),

/***/ "./src/shared/dto/validation-exception.dto.ts":
/*!****************************************************!*\
  !*** ./src/shared/dto/validation-exception.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationExceptionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ValidationExceptionDto {
    message;
    error;
    statusCode;
}
exports.ValidationExceptionDto = ValidationExceptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de errores a corregir',
        type: [String]
    }),
    __metadata("design:type", Array)
], ValidationExceptionDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del error',
        type: String
    }),
    __metadata("design:type", String)
], ValidationExceptionDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Codigo de error',
        type: Number
    }),
    __metadata("design:type", Number)
], ValidationExceptionDto.prototype, "statusCode", void 0);


/***/ }),

/***/ "./src/shared/services/email/email.module.ts":
/*!***************************************************!*\
  !*** ./src/shared/services/email/email.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const email_service_1 = __webpack_require__(/*! ./email.service */ "./src/shared/services/email/email.service.ts");
const email_config_1 = __webpack_require__(/*! src/config/services/email.config */ "./src/config/services/email.config.ts");
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                inject: [email_config_1.MyEmailConfig],
                useFactory: async (emailConfig) => {
                    const { user, pass } = emailConfig.get();
                    console.log(`[EmailModule] SMTP user=${user ?? '(no configurado)'}`);
                    return {
                        transport: {
                            host: 'smtp.gmail.com',
                            port: 587,
                            secure: false,
                            auth: { user, pass },
                            tls: { rejectUnauthorized: false },
                        },
                        defaults: {
                            from: `"Orbis" <${user ?? 'noreply@orbis.com'}>`,
                        },
                    };
                }
            }),
        ],
        providers: [email_service_1.EmailService],
        exports: [email_service_1.EmailService],
    })
], EmailModule);


/***/ }),

/***/ "./src/shared/services/email/email.service.ts":
/*!****************************************************!*\
  !*** ./src/shared/services/email/email.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
let EmailService = class EmailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendEmailAsync(options) {
        try {
            const { to, subject, text, html, attachments, template, context } = options;
            await this.mailerService.sendMail({
                to,
                subject,
                text,
                html,
                template,
                context,
                attachments: attachments?.map((att) => ({
                    filename: att.filename,
                    content: att.content,
                    contentType: att.contentType,
                })),
            });
        }
        catch (error) {
            console.error('[EmailService] Error al enviar correo:', error?.message ?? error);
        }
    }
    async sendEmail(options) {
        setImmediate(() => {
            this.sendEmailAsync(options);
        });
    }
    async enviarCuentaBloqueada(correo, usuario) {
        await this.sendEmail({
            to: correo,
            subject: 'Orbis — Tu cuenta ha sido bloqueada',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #c0392b;">Cuenta bloqueada temporalmente</h2>
					<p>Hola <strong>${usuario}</strong>,</p>
					<p>Tu cuenta fue bloqueada por múltiples intentos de inicio de sesión fallidos.</p>
					<p>Podrás intentar nuevamente después del período de bloqueo, o contactar a un administrador para desbloquearla de inmediato.</p>
					<p style="color: #7f8c8d; font-size: 12px;">Si no fuiste tú, cambia tu contraseña en cuanto puedas acceder.</p>
				</div>
			`,
        });
    }
    async enviarResetPassword(correo, resetUrl, expiresInMinutes) {
        await this.sendEmail({
            to: correo,
            subject: 'Orbis — Recuperación de contraseña',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #1a1a2e;">Restablecer contraseña</h2>
					<p>Recibimos una solicitud para restablecer la contraseña de tu cuenta.</p>
					<p>Haz clic en el siguiente botón para crear una nueva contraseña. El enlace expirará en <strong>${expiresInMinutes} minutos</strong>.</p>
					<div style="text-align: center; margin: 24px 0;">
						<a href="${resetUrl}" style="background: #F29E38; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
							Restablecer contraseña
						</a>
					</div>
					<p style="color: #7f8c8d; font-size: 12px;">Si no solicitaste esto, ignora este correo. Tu contraseña no cambiará.</p>
				</div>
			`,
        });
    }
    async enviarPasswordCambiada(correo) {
        await this.sendEmail({
            to: correo,
            subject: 'Orbis — Tu contraseña fue cambiada',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #27ae60;">Contraseña actualizada</h2>
					<p>Tu contraseña fue cambiada exitosamente.</p>
					<p>Si no realizaste este cambio, contacta inmediatamente a un administrador.</p>
				</div>
			`,
        });
    }
    async enviarPasswordExpirada(correo, usuario) {
        await this.sendEmail({
            to: correo,
            subject: 'Orbis — Tu contraseña ha expirado',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #e67e22;">Contraseña expirada</h2>
					<p>Hola <strong>${usuario}</strong>,</p>
					<p>Tu contraseña ha expirado. Deberás crear una nueva contraseña la próxima vez que inicies sesión.</p>
					<p>El sistema te redirigirá automáticamente al formulario de cambio de contraseña.</p>
				</div>
			`,
        });
    }
    async enviarAccesoFormularioExterno(correoReal, alias, pwd, formularioUrl) {
        await this.sendEmail({
            to: correoReal,
            subject: 'Orbis — Tu cuenta y acceso al formulario de empresas',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #1a1a2e;">Bienvenido a Orbis</h2>
					<p>Tu cuenta ha sido creada. Tus credenciales de acceso son:</p>
					<div style="background: #f4f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
						<p><strong>Usuario:</strong> ${alias}@orbis.com</p>
						<p><strong>Contraseña temporal:</strong>
						   <code style="font-size: 16px; color: #e74c3c;">${pwd}</code></p>
					</div>
					<p>⚠️ <strong>Esta contraseña es temporal.</strong> Al ingresar, serás redirigido a cambiarla.</p>
					<hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
					<h3 style="color: #0f2c4a;">Acceso al formulario de registro de empresas</h3>
					<p>También tienes acceso al formulario externo de registro de empresas:</p>
					<div style="text-align: center; margin: 20px 0;">
						<a href="${formularioUrl}"
						   style="background: #F29E38; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
							Abrir formulario de empresas
						</a>
					</div>
					<p style="color: #7f8c8d; font-size: 12px;">Este correo es confidencial. No lo compartas con nadie.</p>
				</div>
			`,
        });
    }
    async enviarPasswordTemporal(correoReal, alias, pwd) {
        await this.sendEmail({
            to: correoReal,
            subject: 'Orbis — Tu cuenta ha sido creada',
            html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #1a1a2e;">Bienvenido a Orbis</h2>
					<p>Tu cuenta ha sido creada. Tus credenciales de acceso son:</p>
					<div style="background: #f4f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
						<p><strong>Usuario:</strong> ${alias}@orbis.com</p>
						<p><strong>Contraseña temporal:</strong>
						   <code style="font-size: 16px; color: #e74c3c;">${pwd}</code></p>
					</div>
					<p>⚠️ <strong>Esta contraseña es temporal.</strong> Al ingresar, serás redirigido a cambiarla.</p>
					<p>Este correo es confidencial. No lo compartas con nadie.</p>
				</div>
			`,
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], EmailService);


/***/ }),

/***/ "./src/tasks/app.task.ts":
/*!*******************************!*\
  !*** ./src/tasks/app.task.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppTask = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const config_service_1 = __webpack_require__(/*! src/config/config.service */ "./src/config/config.service.ts");
const roles_service_1 = __webpack_require__(/*! src/modules/usuarios/modules/roles/services/roles.service */ "./src/modules/usuarios/modules/roles/services/roles.service.ts");
const roles_const_1 = __webpack_require__(/*! src/shared/constants/roles.const */ "./src/shared/constants/roles.const.ts");
const email_service_1 = __webpack_require__(/*! src/shared/services/email/email.service */ "./src/shared/services/email/email.service.ts");
let AppTask = class AppTask {
    rolesService;
    emailService;
    myConfigService;
    constructor(rolesService, emailService, myConfigService) {
        this.rolesService = rolesService;
        this.emailService = emailService;
        this.myConfigService = myConfigService;
    }
    async refreshDataBase() {
        const rol = await this.rolesService.update(roles_const_1.RolesEnum.VISITANTE, {
            nombre: `Visitante-${(new Date()).toLocaleString()}`
        });
        console.log("#DB refresh#");
        const emails = this.myConfigService.get('REFRESH_EMAILS');
        if (!emails || emails === undefined || emails === null || emails === '') {
            return;
        }
        const emailsSend = emails.split(',');
        await this.emailService.sendEmail({
            to: emailsSend,
            subject: 'Recarga de base de datos',
            text: `Consulta realizada a la base de datos, registro: ${rol.nombre}`
        });
    }
};
exports.AppTask = AppTask;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3PM, {
        name: 'refresh-database',
        timeZone: 'America/La_Paz'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppTask.prototype, "refreshDataBase", null);
exports.AppTask = AppTask = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof roles_service_1.RolesService !== "undefined" && roles_service_1.RolesService) === "function" ? _a : Object, typeof (_b = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _b : Object, typeof (_c = typeof config_service_1.MyConfigService !== "undefined" && config_service_1.MyConfigService) === "function" ? _c : Object])
], AppTask);


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "zxcvbn":
/*!*************************!*\
  !*** external "zxcvbn" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("zxcvbn");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_service_1 = __webpack_require__(/*! ./config/config.service */ "./src/config/config.service.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_service_1.MyConfigService);
    app.enableShutdownHooks();
    const isDev = configService.get('NODE_ENV') !== 'production';
    const HARDCODED_ORIGINS = ['https://orbis-seguridad.vercel.app'];
    const envOrigins = (configService.get('FRONTEND_URL') ?? '')
        .split(',')
        .map((u) => u.trim().replace(/\/$/, ''))
        .filter(Boolean);
    const allowedOrigins = [...new Set([...HARDCODED_ORIGINS, ...envOrigins])];
    console.log(`[CORS] mode=${isDev ? 'dev' : 'prod'} allowed=${JSON.stringify(allowedOrigins)}`);
    app.enableCors({
        origin: isDev
            ? (origin, callback) => callback(null, true)
            : (origin, callback) => {
                const normalized = (origin ?? '').replace(/\/$/, '');
                if (!origin || allowedOrigins.includes(normalized)) {
                    callback(null, true);
                }
                else {
                    console.warn(`[CORS] Rejected origin: "${origin}"`);
                    callback(new Error(`CORS: origen no permitido → ${origin}`));
                }
            },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true
    }));
    if (configService.get('NODE_ENV') !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Backend del Bicentenario')
            .setDescription('Documentación de la API del proyecto Bicentenario')
            .setVersion('1.0')
            .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        }, 'access-token')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/documentation', app, document);
    }
    await app.listen(configService.get('PORT') ?? 3000, '0.0.0.0');
}
bootstrap().catch((err) => {
    console.error('[BOOTSTRAP ERROR]', err);
    process.exit(1);
});

})();

/******/ })()
;