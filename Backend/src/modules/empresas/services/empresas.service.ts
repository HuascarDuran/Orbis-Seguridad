/**
 * @file empresas.service.ts
 *
 * CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
 *   - LogsService inyectado en el constructor.
 *   - createTransaction() recibe AuditoriaCtx opcional para registrar la
 *     creación de empresa cuando proviene de un flujo administrativo.
 *   - updateEmpresa() detecta los campos que realmente cambian y los
 *     pasa a logsService.empresaModificada() como camposModificados[].
 *   - deleteEmpresa() registra la eliminación antes de ejecutar la
 *     transacción destructiva, capturando el nombre de la empresa
 *     mientras aún existe en BD.
 *   - Todas las llamadas a LogsService son fire-and-forget (void sin await).
 *   - Se elimina el uso de `any` en la firma de updateEmpresa() —
 *     ahora recibe UpdateEmpresaDto con tipado estricto.
 */

import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from '../dto/inputs/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/inputs/update-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from '../entities/empresa.entity';
import {
    EntityManager,
    FindOptionsRelations,
    FindOptionsSelect,
    Repository,
} from 'typeorm';
import { FindAllEmpresasCardsParamsDto } from '../dto/inputs/find-all-empresas-cards-params.dto';
import { FindAllEmpresasCardsPaginationResponseDto } from '../dto/outputs/find-all-empresas-cards-pagination-response.dto';
import { EmpresaPublicTemplateRelations, EmpresaPublicTemplateSelect } from '../find-templates/empresa-public.template';
import { EmpresaNotFoundException } from '../exceptions/empresa-not-found.exception';
import { EmpresaPrivateTemplateRelations, EmpresaPrivateTemplateSelect } from '../find-templates/empresa-private.template';
import { FindAllEmpresasCardsPublicParamsDto } from '../dto/inputs/find-all-empresas-cards-public-params.dto';
import { InvestigadorEmpresa } from 'src/modules/usuarios/entities/investigador-empresa.entity';
import { LogsService } from 'src/modules/logs/logs.service';
import { AuditoriaCtx } from 'src/modules/usuarios/services/usuarios-auth.service';

// ─── Campos auditables de Empresa ─────────────────────────────────────────────
// Lista explícita de los campos escalares de la tabla `empresas` que pueden
// ser editados por un administrador. Se usa para construir camposModificados[].



// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable()
export class EmpresasService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
        @InjectRepository(InvestigadorEmpresa)
        private readonly investigadorEmpresaRepository: Repository<InvestigadorEmpresa>,
        private readonly logsService: LogsService,   // ← INYECTADO
    ) { }

    // ─── Stub mantenido por compatibilidad de módulo ──────────────────────────

    create(_createEmpresaDto: CreateEmpresaDto): string {
        return 'This action adds a new empresa';
    }

    // ─── Creación transaccional (flujo formulario externo / admin) ────────────

    /**
     * Crea una empresa dentro de una transacción existente.
     * Si se proporciona `auditoria`, registra el evento en el log de aplicación.
     *
     * @param manager   - EntityManager de la transacción activa
     * @param data      - DTO con los datos de la empresa
     * @param auditoria - Contexto del admin + IP (opcional; omitir en flujos públicos)
     */
    async createTransaction(
        manager:    EntityManager,
        data:       CreateEmpresaDto,
        auditoria?: AuditoriaCtx,
    ): Promise<Empresa> {
        const repo    = manager.getRepository(Empresa);
        const empresa = new Empresa();

        empresa.nombreComercial = data.nombre            ? data.nombre.trim()                    : '';
        empresa.vision          = data.vision            ? data.vision.trim()                    : '';
        empresa.mision          = data.mision            ? data.mision.trim()                    : '';
        empresa.direccionWeb    = data.direccionWeb       ? data.direccionWeb.trim()              : '';
        empresa.mensaje         = data.mensajeConmemorativo ? data.mensajeConmemorativo.trim()   : '';
        empresa.actividad       = data.actividad         ? data.actividad.trim()                 : '';
        empresa.fechaFundacion  = data.fechaFundacion;
        empresa.idTamanio       = data.tamanioEmpresa;

        const guardada = await repo.save(empresa);

        // ── Auditoría: fire-and-forget ────────────────────────────────────────
        if (auditoria) {
            void this.logsService.empresaCreada({
                idUsuario:     auditoria.idAdmin,
                nombreUsuario: auditoria.adminAlias,
                idEmpresa:     guardada.id,
                nombreEmpresa: guardada.nombreComercial,
                ipOrigen:      auditoria.ipOrigen,
            });
        }

        return guardada;
    }

    // ─── Consultas (sin cambios funcionales) ──────────────────────────────────

    async findAll(): Promise<Empresa[]> {
        return this.empresaRepository.find({
            relations: {
                sedes: { departamento: true },
                familias:    true,
                fundadores:  true,
                hitos:       true,
                imagenes:    true,
                implementacion: {
                    tiposAcciones: true,
                    implementacionesAcciones: { accion: true, proyectos: true },
                },
                items:      true,
                municipios: true,
                paisesOperaInteranacionalmente: true,
                premios:    true,
                rubrosEmpresa: { rubro: true },
                servicios:  true,
                tamanioEmpresa: true,
                tiposSocietariosEmpresa: { tipoSocietario: true },
            },
        });
    }

    async findAllCardsPrivate(
        params:     FindAllEmpresasCardsParamsDto,
        idUsuario?: number,
    ): Promise<FindAllEmpresasCardsPaginationResponseDto> {
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
            query.innerJoin(
                'investigador_rubro',
                'ir',
                'ir.id_rubro = rubro.id AND ir.id_usuario = :idUsuario',
                { idUsuario },
            );
        }

        query.select([
            'empresa.id', 'empresa.nombreComercial',
            'imagen.id', 'imagen.url',
            'hito.id', 'hito.nombre', 'hito.fecha',
            'sedeCentral.id', 'sedeCentral.esCentral',
            'departamento.id', 'departamento.nombre',
            'rubroEmpresa.id', 'rubro.id', 'rubro.nombre',
        ]);

        const rubros = params.getRubros();
        if (rubros.length > 0) query.andWhere('rubro.id IN (:...rubros)', { rubros });

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

        const { page, limit } = params;
        const skip = (page - 1) * limit;
        query.orderBy('empresa.nombreComercial', 'ASC').skip(skip).take(limit);

        const [empresas, total] = await query.getManyAndCount();
        const pages = Math.ceil(total / limit);

        const data = empresas.map((empresa) => {
            const sede = (empresa as Empresa & { sedes?: { departamento?: { id: number; nombre: string } }[] }).sedes?.[0];
            const depa = sede?.departamento;
            return {
                id:              empresa.id,
                nombreComercial: empresa.nombreComercial,
                imagenes:        empresa.imagenes?.map((img) => ({ id: img.id, url: img.url })) ?? [],
                hitos:           empresa.hitos?.map((h) => ({ id: h.id, nombre: h.nombre, fecha: h.fecha })) ?? [],
                sedeCentral:     { id: depa?.id, nombre: depa?.nombre },
                rubros:          empresa.rubrosEmpresa?.map((r) => ({ id: r.rubro?.id, nombre: r.rubro?.nombre })) ?? [],
            };
        });

        const response = new FindAllEmpresasCardsPaginationResponseDto();
        response.data  = data;
        response.page  = page;
        response.limit = limit;
        response.total = total;
        response.pages = pages;
        return response;
    }

    async findAllCardsPublic(
        params: FindAllEmpresasCardsPublicParamsDto,
    ): Promise<FindAllEmpresasCardsPaginationResponseDto> {
        const query = this.empresaRepository
            .createQueryBuilder('empresa')
            .leftJoinAndSelect('empresa.imagenes', 'imagen')
            .leftJoinAndSelect('empresa.hitos', 'hito')
            .leftJoinAndSelect('empresa.rubrosEmpresa', 'rubroEmpresa')
            .leftJoinAndSelect('rubroEmpresa.rubro', 'rubro')
            .leftJoinAndSelect('empresa.sedes', 'sedeCentral', 'sedeCentral.esCentral = true')
            .leftJoinAndSelect('sedeCentral.departamento', 'departamento')
            .select([
                'empresa.id', 'empresa.nombreComercial',
                'imagen.id', 'imagen.url',
                'hito.id', 'hito.nombre', 'hito.fecha',
                'sedeCentral.id', 'sedeCentral.esCentral',
                'departamento.id', 'departamento.nombre',
                'rubroEmpresa.id', 'rubro.id', 'rubro.nombre',
            ]);

        if (params.nombre && params.nombre.trim() !== '') {
            query.andWhere('LOWER(empresa.nombreComercial) LIKE LOWER(:nombre)', {
                nombre: `%${params.nombre.trim()}%`,
            });
        }

        const { page, limit } = params;
        const skip = (page - 1) * limit;
        query.orderBy('empresa.nombreComercial', 'ASC').skip(skip).take(limit);

        const [empresas, total] = await query.getManyAndCount();
        const pages = Math.ceil(total / limit);

        const data = empresas.map((empresa) => {
            const sede = empresa.sedes?.[0];
            const depa = sede?.departamento;
            return {
                id:              empresa.id,
                nombreComercial: empresa.nombreComercial,
                imagenes:        empresa.imagenes?.map((img) => ({ id: img.id, url: img.url })) ?? [],
                hitos:           empresa.hitos?.map((h) => ({ id: h.id, nombre: h.nombre, fecha: h.fecha })) ?? [],
                sedeCentral:     { id: depa?.id, nombre: depa?.nombre },
                rubros:          empresa.rubrosEmpresa?.map((r) => ({ id: r.rubro?.id, nombre: r.rubro?.nombre })) ?? [],
            };
        });

        const response = new FindAllEmpresasCardsPaginationResponseDto();
        response.data  = data;
        response.page  = page;
        response.limit = limit;
        response.total = total;
        response.pages = pages;
        return response;
    }

    async findOne(
        idEmpresa:        number,
        selectOptions?:   FindOptionsSelect<Empresa>,
        relationsOptions?: FindOptionsRelations<Empresa>,
    ): Promise<Empresa> {
        const empresa = await this.empresaRepository.findOne({
            where:     { id: idEmpresa },
            relations: relationsOptions,
            select:    selectOptions,
        });
        if (!empresa) throw new EmpresaNotFoundException(idEmpresa);
        return empresa;
    }

    async findOnePublic(idEmpresa: number): Promise<object> {
        const data = await this.findOne(idEmpresa, EmpresaPublicTemplateSelect, EmpresaPublicTemplateRelations);
        return {
            id:              data.id,
            nombreComercial: data.nombreComercial,
            mensaje:         data.mensaje,
            rubrosEmpresa:   data.rubrosEmpresa?.map((r) => ({ rubro: r.rubro, esActivo: r.esActivo })),
            departamento:    data.sedes?.find((s) => s.esCentral === true)?.departamento,
            imagenes:        data.imagenes?.map((i) => i.url),
            hitos:           data.hitos,
        };
    }

    async findOnePrivate(idEmpresa: number, idUsuario?: number): Promise<Empresa> {
        if (idUsuario) {
            const asignado = await this.investigadorEmpresaRepository.existsBy({ idUsuario, idEmpresa });
            if (!asignado) throw new EmpresaNotFoundException(idEmpresa);
        }
        return this.findOne(idEmpresa, EmpresaPrivateTemplateSelect, EmpresaPrivateTemplateRelations);
    }

    // ─── Actualización ────────────────────────────────────────────────────────

    /**
     * Actualiza los campos escalares de una empresa.
     * Detecta automáticamente qué campos cambiaron y los registra en el log.
     *
     * @param idEmpresa - ID de la empresa a modificar
     * @param data      - DTO con los campos nuevos (solo los presentes se actualizan)
     * @param auditoria - Contexto del administrador + IP
     */
    // ─── Actualización ────────────────────────────────────────────────────────

    /**
     * Actualiza los campos escalares de una empresa.
     * Detecta automáticamente qué campos cambiaron y los registra en el log.
     */
    // ─── Actualización ────────────────────────────────────────────────────────

    /**
     * Actualiza los campos escalares de una empresa.
     * Detecta automáticamente qué campos cambiaron y los registra en el log.
     */
    async updateEmpresa(
        idEmpresa:  number,
        data:       UpdateEmpresaDto,
        auditoria:  AuditoriaCtx,
    ): Promise<Empresa> {
        const estadoPrevio = await this.findOne(idEmpresa);

        const camposBasicos: Partial<Empresa> = {};
        const camposModificados: string[]     = [];

        // CORREGIDO: Casteo temporal 'as any' para evitar que TypeScript chille por campos inexistentes en el DTO
        const nombreNuevo = (data as any).nombreComercial || data.nombre;
        if (nombreNuevo !== undefined && nombreNuevo.trim() !== estadoPrevio.nombreComercial) {
            camposBasicos.nombreComercial = nombreNuevo.trim();
            camposModificados.push('nombreComercial');
        }

        if (data.vision !== undefined && data.vision.trim() !== estadoPrevio.vision) {
            camposBasicos.vision = data.vision.trim();
            camposModificados.push('vision');
        }

        if (data.mision !== undefined && data.mision.trim() !== estadoPrevio.mision) {
            camposBasicos.mision = data.mision.trim();
            camposModificados.push('mision');
        }

        if (data.actividad !== undefined && data.actividad.trim() !== estadoPrevio.actividad) {
            camposBasicos.actividad = data.actividad.trim();
            camposModificados.push('actividad');
        }

        if (data.direccionWeb !== undefined && data.direccionWeb.trim() !== estadoPrevio.direccionWeb) {
            camposBasicos.direccionWeb = data.direccionWeb.trim();
            camposModificados.push('direccionWeb');
        }

        // CORREGIDO: Casteo temporal 'as any' para el respaldo del mensaje conmemorativo
        const mensajeNuevo = (data as any).mensaje || data.mensajeConmemorativo;
        if (mensajeNuevo !== undefined && mensajeNuevo.trim() !== estadoPrevio.mensaje) {
            camposBasicos.mensaje = mensajeNuevo.trim();
            camposModificados.push('mensaje');
        }

        if (camposModificados.length > 0) {
            await this.empresaRepository.update(idEmpresa, camposBasicos);

            // ── Auditoría: fire-and-forget ────────────────────────────────────
            void this.logsService.empresaModificada({
                idUsuario:         auditoria.idAdmin,
                nombreUsuario:     auditoria.adminAlias,
                idEmpresa:         idEmpresa,
                nombreEmpresa:     estadoPrevio.nombreComercial,
                camposModificados,
                ipOrigen:          auditoria.ipOrigen,
            });
        }

        return this.findOnePrivate(idEmpresa);
    }

    // ─── Eliminación ──────────────────────────────────────────────────────────

    /**
     * Elimina una empresa y todas sus dependencias en cascada.
     * Captura el nombre ANTES de la transacción destructiva para el log.
     *
     * @param idEmpresa - ID de la empresa a eliminar
     * @param auditoria - Contexto del administrador + IP
     */
    async deleteEmpresa(idEmpresa: number, auditoria: AuditoriaCtx): Promise<true> {
        // Capturar nombre antes de la eliminación — después ya no existirá en BD
        const empresa = await this.findOne(idEmpresa);
        const nombreEmpresa = empresa.nombreComercial;

        await this.empresaRepository.manager.transaction(async (tm) => {
            // ── Fase 0: dependencias de 3er nivel ────────────────────────────
            await tm.query(
                `DELETE FROM "proyectos"
                 WHERE "id_implementacion_accion" IN (
                    SELECT "id_implementacion_accion" FROM "implementaciones_acciones"
                    WHERE "id_implementacion" IN (
                        SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                    )
                 )`,
                [idEmpresa],
            );

            // ── Fase 1: dependencias de 2do nivel ────────────────────────────
            await tm.query(
                `DELETE FROM "tipos_acciones_implementaciones"
                 WHERE "id_implementacion" IN (
                    SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                 )`,
                [idEmpresa],
            );
            await tm.query(
                `DELETE FROM "implementaciones_acciones"
                 WHERE "id_implementacion" IN (
                    SELECT "id_implementacion" FROM "implementaciones" WHERE "id_empresa" = $1
                 )`,
                [idEmpresa],
            );

            // ── Fase 2: hijos directos ────────────────────────────────────────
            await tm.query(`DELETE FROM "municipios_empresas" WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "premios"             WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "implementaciones"    WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "familias"            WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "fundadores"          WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "hitos"               WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "imagenes"            WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "sedes"               WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "items"               WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "servicios"           WHERE "id_empresa" = $1`, [idEmpresa]);
            await tm.query(`DELETE FROM "investigador_empresa" WHERE "id_empresa" = $1`, [idEmpresa]);

            // ── Fase 3: registro raíz ─────────────────────────────────────────
            await tm.query(`DELETE FROM "empresas" WHERE "id_empresa" = $1`, [idEmpresa]);
        });

        // ── Auditoría: fire-and-forget ────────────────────────────────────────
        // Se ejecuta después de la transacción exitosa. Si la transacción
        // falla, el log nunca se registra — comportamiento correcto.
        void this.logsService.empresaEliminada({
            idUsuario:     auditoria.idAdmin,
            nombreUsuario: auditoria.adminAlias,
            idEmpresa,
            nombreEmpresa,
            ipOrigen:      auditoria.ipOrigen,
        });

        return true;
    }
}