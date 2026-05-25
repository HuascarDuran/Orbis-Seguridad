import { Module } from '@nestjs/common';
import { MyConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './app/services/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { DepartamentosModule } from './modules/empresas/modules/departamentos/departamentos.module';
import { FamiliasModule } from './modules/empresas/modules/familias/familias.module';
import { FundadoresModule } from './modules/empresas/modules/fundadores/fundadores.module';
import { HitosModule } from './modules/empresas/modules/hitos/hitos.module';
import { ImagenesModule } from './modules/empresas/modules/imagenes/imagenes.module';
import { ImplementacionesModule } from './modules/empresas/modules/implementaciones/implementaciones.module';
import { AccionesModule } from './modules/empresas/modules/implementaciones/modules/acciones/acciones.module';
import { TiposAccionesModule } from './modules/empresas/modules/implementaciones/modules/tipos-acciones/tipos-acciones.module';
import { TiposAccionesImplementacionesModule } from './modules/empresas/modules/implementaciones/modules/tipos-acciones/modules/tipos-acciones-implementaciones/tipos-acciones-implementaciones.module';
import { ItemsModule } from './modules/empresas/modules/items/items.module';
import { MunicipiosModule } from './modules/empresas/modules/municipios/municipios.module';
import { MunicipiosEmpresaModule } from './modules/empresas/modules/municipios/modules/municipios-empresa/municipios-empresa.module';
import { OperacionesInternacionalesModule } from './modules/empresas/modules/operaciones-internacionales/operaciones-internacionales.module';
import { PremiosModule } from './modules/empresas/modules/premios/premios.module';
import { RubrosModule } from './modules/empresas/modules/rubros/rubros.module';
import { RubrosEmpresasModule } from './modules/empresas/modules/rubros/modules/rubros-empresas/rubros-empresas.module';
import { SedesModule } from './modules/empresas/modules/sedes/sedes.module';
import { TamaniosEmpresasModule } from './modules/empresas/modules/tamanios-empresas/tamanios-empresas.module';
import { TiposSocietariosModule } from './modules/empresas/modules/tipos-societarios/tipos-societarios.module';
import { EmpresasTiposSocietariosModule } from './modules/empresas/modules/tipos-societarios/modules/empresas-tipos-societarios/empresas-tipos-societarios.module';
import { RolesModule } from './modules/usuarios/modules/roles/roles.module';
import { ImplementacionesAccionesModule } from './modules/empresas/modules/implementaciones/modules/acciones/modules/implementaciones-acciones/implementaciones-acciones.module';
import { ProyectosModule } from './modules/empresas/modules/implementaciones/modules/acciones/modules/proyectos/proyectos.module';
import { FormularioModule } from './app/services/formulario/formulario.module';
import { ServiciosModule } from './modules/empresas/modules/servicios/servicios.module';
import { PaisesModule } from './modules/empresas/modules/paises/paises.module';
import { DashboardModule } from './app/services/dashboard/dashboard.module';
import { SolicitudesTemporalesModule } from './app/services/solicitudes-temporales/solicitudes-temporales.module';
import { AppTask } from './tasks/app.task';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from './shared/services/email/email.module';
import { AppController } from './app.controller';
import { DatamartModule } from './modules/datamart/datamart.module';
import { CommonModule } from './common/common.module';
import { LogsModule } from './modules/logs/logs.module';
import { RiesgosModule } from './modules/riesgos/riesgos.module';
@Module({
	imports: [
		ScheduleModule.forRoot(),
		CommonModule,
		EmailModule,
		MyConfigModule,
		DatabaseModule,
		AuthModule,
		UsuariosModule,
		RolesModule,
		EmpresasModule,
		DepartamentosModule,
		FamiliasModule,
		FundadoresModule,
		HitosModule,
		ImagenesModule,
		ImplementacionesModule,
		AccionesModule,
		ImplementacionesAccionesModule,
		ProyectosModule,
		TiposAccionesModule,
		TiposAccionesImplementacionesModule,
		ItemsModule,
		MunicipiosModule,
		MunicipiosEmpresaModule,
		OperacionesInternacionalesModule,
		PaisesModule,
		PremiosModule,
		RubrosModule,
		RubrosEmpresasModule,
		SedesModule,
		ServiciosModule,
		TamaniosEmpresasModule,
		TiposSocietariosModule,
		EmpresasTiposSocietariosModule,
		FormularioModule,
		DashboardModule,
		SolicitudesTemporalesModule,
		DatamartModule,
		LogsModule,
    	RiesgosModule
	],
	providers: [
		AppTask
	],
	controllers: [AppController]
})
export class AppModule { }
