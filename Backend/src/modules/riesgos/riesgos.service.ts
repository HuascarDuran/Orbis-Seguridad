import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ActivoInformacion,
  AmenazaVulnerabilidad,
  RiesgoSeguridad,
  NivelRiesgo,
  TratamientoRiesgo,
  TipoControl,
  NivelControl,
  NivelImplementacion,
  FrecuenciaControl
} from './riesgo.entity';
import { CreateRiesgoDto } from './create-riesgo.dto';
import { UpdateRiesgoDto } from './update-riesgo.dto';

/** Metadata de auditoría extraída por el controller desde el JWT y la request */
export interface AuditoriaMeta {
  idUsuario:     number;
  nombreUsuario: string;
  ipOrigen:      string;
}

@Injectable()
export class RiesgosService {
  constructor(
    @InjectRepository(RiesgoSeguridad)
    private readonly riesgoRepository: Repository<RiesgoSeguridad>,
    @InjectRepository(ActivoInformacion)
    private readonly activoRepository: Repository<ActivoInformacion>,
    @InjectRepository(AmenazaVulnerabilidad)
    private readonly amenazaRepository: Repository<AmenazaVulnerabilidad>,
  ) {}

  // ─────────────────────────────────────────────
  // LÓGICA DE CATÁLOGOS
  // ─────────────────────────────────────────────

  async findAllActivos(): Promise<ActivoInformacion[]> {
    return this.activoRepository.find({ order: { nombre: 'ASC' } });
  }

  async findAllAmenazas(): Promise<AmenazaVulnerabilidad[]> {
    return this.amenazaRepository.find({ order: { nombre: 'ASC' } });
  }

  // ─────────────────────────────────────────────
  // LÓGICA MATEMÁTICA
  // ─────────────────────────────────────────────

  private calcularNivelRiesgo(valor: number): NivelRiesgo {
    if (valor >= 1  && valor <= 4)  return NivelRiesgo.BAJO;
    if (valor >= 5  && valor <= 9)  return NivelRiesgo.MODERADO;
    if (valor >= 10 && valor <= 16) return NivelRiesgo.ALTO;
    if (valor >= 17 && valor <= 19) return NivelRiesgo.ALTO;   // por robustez matemática
    if (valor >= 20 && valor <= 25) return NivelRiesgo.EXTREMO;
    throw new BadRequestException(
      `Valor de riesgo fuera de rango (1-25): ${valor}`,
    );
  }

  private validarRango(
    valor: unknown,
    campo: string,
  ): asserts valor is number {
    if (
      typeof valor !== 'number' ||
      !Number.isInteger(valor)  ||
      valor < 1 ||
      valor > 5
    ) {
      throw new BadRequestException(
        `El campo "${campo}" debe ser un entero entre 1 y 5. Recibido: ${valor}`,
      );
    }
  }

  // ─────────────────────────────────────────────
  // CRUD CON TRAZABILIDAD Y RELACIONES
  // ─────────────────────────────────────────────

  async create(
    dto: CreateRiesgoDto,
    auditoria?: AuditoriaMeta,
  ): Promise<RiesgoSeguridad> {
    let activo: ActivoInformacion;
    if (dto.activo_manual) {
      const nuevoActivo = this.activoRepository.create({
        nombre: dto.activo_manual.nombre,
        tipo: dto.activo_manual.tipo as any,
        criticidad: dto.activo_manual.criticidad,
      });
      activo = await this.activoRepository.save(nuevoActivo);
    } else if (dto.id_activo) {
      const foundActivo = await this.activoRepository.findOne({ where: { id: dto.id_activo } });
      if (!foundActivo) {
        throw new NotFoundException(`Activo de información con ID ${dto.id_activo} no encontrado`);
      }
      activo = foundActivo;
    } else {
      throw new BadRequestException('Debe proporcionar un id_activo o registrar un activo_manual');
    }

    let amenaza: AmenazaVulnerabilidad;
    if (dto.amenaza_manual) {
      const nuevaAmenaza = this.amenazaRepository.create({
        nombre: dto.amenaza_manual.nombre,
        tipo: dto.amenaza_manual.tipo as any,
        descripcion: dto.amenaza_manual.descripcion || '',
      });
      amenaza = await this.amenazaRepository.save(nuevaAmenaza);
    } else if (dto.id_amenaza) {
      const foundAmenaza = await this.amenazaRepository.findOne({ where: { id: dto.id_amenaza } });
      if (!foundAmenaza) {
        throw new NotFoundException(`Amenaza/Vulnerabilidad con ID ${dto.id_amenaza} no encontrado`);
      }
      amenaza = foundAmenaza;
    } else {
      throw new BadRequestException('Debe proporcionar un id_amenaza o registrar una amenaza_manual');
    }

    // Validar probabilidad e impacto inherentes
    this.validarRango(dto.probabilidad_inherente, 'probabilidad_inherente');
    this.validarRango(dto.impacto_inherente, 'impacto_inherente');

    // Calcular valores de riesgo inherente
    const riesgo_inherente = dto.probabilidad_inherente * dto.impacto_inherente;
    const nivel_riesgo_inherente = this.calcularNivelRiesgo(riesgo_inherente);

    // Calcular riesgo residual y validar coherencia de controles
    let riesgo_residual = riesgo_inherente;
    let controles_implementar: string | null = null;
    let tipo_control: TipoControl | null = null;
    let nivel_control: NivelControl | null = null;
    let nivel_implementacion: NivelImplementacion | null = null;
    let frecuencia_control: FrecuenciaControl | null = null;

    if (dto.tratamiento_riesgo === TratamientoRiesgo.MITIGAR_REDUCIR) {
      if (!dto.controles_implementar || !dto.tipo_control || !dto.nivel_implementacion || !dto.frecuencia_control) {
        throw new BadRequestException(
          'Para el tratamiento "Mitigar/Reducir", los campos de control (controles_implementar, tipo_control, nivel_implementacion, frecuencia_control) son obligatorios.',
        );
      }
      controles_implementar = dto.controles_implementar;
      tipo_control = dto.tipo_control;
      nivel_control = null;
      nivel_implementacion = dto.nivel_implementacion;
      frecuencia_control = dto.frecuencia_control;

      // Calcular eficacias
      let eficaciaTipo = 0;
      if (tipo_control === TipoControl.PREVENTIVO) eficaciaTipo = 3;
      else if (tipo_control === TipoControl.DETECTIVO) eficaciaTipo = 2;
      else if (tipo_control === TipoControl.CORRECTIVO) eficaciaTipo = 2;
      else if (tipo_control === TipoControl.DISUASIVO) eficaciaTipo = 1;

      let eficaciaNivel = 0;
      if (nivel_implementacion === NivelImplementacion.AUTOMATICO) eficaciaNivel = 3;
      else if (nivel_implementacion === NivelImplementacion.SEMIAUTOMATICO) eficaciaNivel = 2;
      else if (nivel_implementacion === NivelImplementacion.MANUAL) eficaciaNivel = 1;

      let eficaciaFrecuencia = 0;
      if (frecuencia_control === FrecuenciaControl.POR_EVENTO) eficaciaFrecuencia = 3;
      else eficaciaFrecuencia = 1;

      const eC = eficaciaTipo + eficaciaNivel + eficaciaFrecuencia;
      riesgo_residual = Math.max(1, riesgo_inherente - eC);
    } else if (dto.tratamiento_riesgo === TratamientoRiesgo.ELIMINAR_EVITAR) {
      riesgo_residual = 0;
    } else {
      // Para Aceptar o Transferir, riesgo_residual = riesgo_inherente
      riesgo_residual = riesgo_inherente;
    }

    if (riesgo_residual > riesgo_inherente) {
      throw new BadRequestException('El riesgo residual no puede ser mayor que el riesgo inherente.');
    }

    const nivel_riesgo_residual = this.calcularNivelRiesgo(riesgo_residual);

    const riesgo = this.riesgoRepository.create({
      activo,
      amenaza,
      riesgo_consecuencia: dto.riesgo_consecuencia,
      probabilidad_inherente: dto.probabilidad_inherente,
      impacto_inherente: dto.impacto_inherente,
      riesgo_inherente,
      nivel_riesgo_inherente,
      tratamiento_riesgo: dto.tratamiento_riesgo,
      controles_implementar,
      tipo_control,
      nivel_control,
      nivel_implementacion,
      frecuencia_control,
      riesgo_residual,
      nivel_riesgo_residual,
      usuario_id: auditoria?.idUsuario || null,
      usuario_nombre: auditoria?.nombreUsuario || null,
      ip_origen: auditoria?.ipOrigen || null,
    });

    return this.riesgoRepository.save(riesgo);
  }

  async findAll(): Promise<RiesgoSeguridad[]> {
    return this.riesgoRepository.find({
      relations: ['activo', 'amenaza'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: string | number): Promise<RiesgoSeguridad> {
    const idNum = typeof id === 'string' ? parseInt(id, 10) : id;
    if (isNaN(idNum)) {
      throw new BadRequestException(`ID inválido: ${id}`);
    }
    const riesgo = await this.riesgoRepository.findOne({
      where: { id: idNum },
      relations: ['activo', 'amenaza'],
    });
    if (!riesgo) {
      throw new NotFoundException(`Riesgo con id ${idNum} no encontrado`);
    }
    return riesgo;
  }

  async update(
    id: string | number,
    dto: UpdateRiesgoDto,
    auditoria?: AuditoriaMeta,
  ): Promise<RiesgoSeguridad> {
    const existente = await this.findOne(id);

    let activo = existente.activo;
    if (dto.activo_manual) {
      const nuevoActivo = this.activoRepository.create({
        nombre: dto.activo_manual.nombre,
        tipo: dto.activo_manual.tipo as any,
        criticidad: dto.activo_manual.criticidad,
      });
      activo = await this.activoRepository.save(nuevoActivo);
    } else if (dto.id_activo !== undefined) {
      const foundActivo = await this.activoRepository.findOne({ where: { id: dto.id_activo } });
      if (!foundActivo) {
        throw new NotFoundException(`Activo de información con ID ${dto.id_activo} no encontrado`);
      }
      activo = foundActivo;
    }

    let amenaza = existente.amenaza;
    if (dto.amenaza_manual) {
      const nuevaAmenaza = this.amenazaRepository.create({
        nombre: dto.amenaza_manual.nombre,
        tipo: dto.amenaza_manual.tipo as any,
        descripcion: dto.amenaza_manual.descripcion || '',
      });
      amenaza = await this.amenazaRepository.save(nuevaAmenaza);
    } else if (dto.id_amenaza !== undefined) {
      const foundAmenaza = await this.amenazaRepository.findOne({ where: { id: dto.id_amenaza } });
      if (!foundAmenaza) {
        throw new NotFoundException(`Amenaza/Vulnerabilidad con ID ${dto.id_amenaza} no encontrado`);
      }
      amenaza = foundAmenaza;
    }

    const consecuencia = dto.riesgo_consecuencia !== undefined ? dto.riesgo_consecuencia : existente.riesgo_consecuencia;
    const probabilidad_inherente = dto.probabilidad_inherente !== undefined ? dto.probabilidad_inherente : existente.probabilidad_inherente;
    const impacto_inherente = dto.impacto_inherente !== undefined ? dto.impacto_inherente : existente.impacto_inherente;
    const tratamiento_riesgo = dto.tratamiento_riesgo !== undefined ? dto.tratamiento_riesgo : existente.tratamiento_riesgo;

    // Validar probabilidad e impacto inherentes
    this.validarRango(probabilidad_inherente, 'probabilidad_inherente');
    this.validarRango(impacto_inherente, 'impacto_inherente');

    // Calcular valores de riesgo inherente
    const riesgo_inherente = probabilidad_inherente * impacto_inherente;
    const nivel_riesgo_inherente = this.calcularNivelRiesgo(riesgo_inherente);

    // Calcular riesgo residual y validar coherencia de controles
    let riesgo_residual = riesgo_inherente;
    let controles_implementar: string | null = null;
    let tipo_control: TipoControl | null = null;
    let nivel_control: NivelControl | null = null;
    let nivel_implementacion: NivelImplementacion | null = null;
    let frecuencia_control: FrecuenciaControl | null = null;

    if (tratamiento_riesgo === TratamientoRiesgo.MITIGAR_REDUCIR) {
      const cImp = dto.controles_implementar !== undefined ? dto.controles_implementar : existente.controles_implementar;
      const tCtrl = dto.tipo_control !== undefined ? dto.tipo_control : existente.tipo_control;
      const nImpl = dto.nivel_implementacion !== undefined ? dto.nivel_implementacion : existente.nivel_implementacion;
      const fCtrl = dto.frecuencia_control !== undefined ? dto.frecuencia_control : existente.frecuencia_control;

      if (!cImp || !tCtrl || !nImpl || !fCtrl) {
        throw new BadRequestException(
          'Para el tratamiento "Mitigar/Reducir", los campos de control (controles_implementar, tipo_control, nivel_implementacion, frecuencia_control) son obligatorios.',
        );
      }
      controles_implementar = cImp;
      tipo_control = tCtrl;
      nivel_control = null;
      nivel_implementacion = nImpl;
      frecuencia_control = fCtrl;

      // Calcular eficacias
      let eficaciaTipo = 0;
      if (tipo_control === TipoControl.PREVENTIVO) eficaciaTipo = 3;
      else if (tipo_control === TipoControl.DETECTIVO) eficaciaTipo = 2;
      else if (tipo_control === TipoControl.CORRECTIVO) eficaciaTipo = 2;
      else if (tipo_control === TipoControl.DISUASIVO) eficaciaTipo = 1;

      let eficaciaNivel = 0;
      if (nivel_implementacion === NivelImplementacion.AUTOMATICO) eficaciaNivel = 3;
      else if (nivel_implementacion === NivelImplementacion.SEMIAUTOMATICO) eficaciaNivel = 2;
      else if (nivel_implementacion === NivelImplementacion.MANUAL) eficaciaNivel = 1;

      let eficaciaFrecuencia = 0;
      if (frecuencia_control === FrecuenciaControl.POR_EVENTO) eficaciaFrecuencia = 3;
      else eficaciaFrecuencia = 1;

      const eC = eficaciaTipo + eficaciaNivel + eficaciaFrecuencia;
      riesgo_residual = Math.max(1, riesgo_inherente - eC);
    } else if (tratamiento_riesgo === TratamientoRiesgo.ELIMINAR_EVITAR) {
      riesgo_residual = 0;
    } else {
      // Para Aceptar o Transferir, riesgo_residual = riesgo_inherente
      riesgo_residual = riesgo_inherente;
    }

    if (riesgo_residual > riesgo_inherente) {
      throw new BadRequestException('El riesgo residual no puede ser mayor que el riesgo inherente.');
    }

    const nivel_riesgo_residual = this.calcularNivelRiesgo(riesgo_residual);

    existente.activo = activo;
    existente.amenaza = amenaza;
    existente.riesgo_consecuencia = consecuencia;
    existente.probabilidad_inherente = probabilidad_inherente;
    existente.impacto_inherente = impacto_inherente;
    existente.riesgo_inherente = riesgo_inherente;
    existente.nivel_riesgo_inherente = nivel_riesgo_inherente;
    existente.tratamiento_riesgo = tratamiento_riesgo;
    existente.controles_implementar = controles_implementar;
    existente.tipo_control = tipo_control;
    existente.nivel_control = nivel_control;
    existente.nivel_implementacion = nivel_implementacion;
    existente.frecuencia_control = frecuencia_control;
    existente.riesgo_residual = riesgo_residual;
    existente.nivel_riesgo_residual = nivel_riesgo_residual;

    if (auditoria) {
      existente.usuario_id = auditoria.idUsuario;
      existente.usuario_nombre = auditoria.nombreUsuario;
      existente.ip_origen = auditoria.ipOrigen;
    }

    return this.riesgoRepository.save(existente);
  }

  async remove(id: string | number): Promise<void> {
    const riesgo = await this.findOne(id);
    await this.riesgoRepository.remove(riesgo);
  }

  /** Para el endpoint /resumen del dashboard */
  async resumenPorNivel(): Promise<Record<NivelRiesgo, number>> {
    const resumen: Record<NivelRiesgo, number> = {
      [NivelRiesgo.BAJO]:     0,
      [NivelRiesgo.MODERADO]: 0,
      [NivelRiesgo.ALTO]:     0,
      [NivelRiesgo.EXTREMO]:  0,
    };
    const todos = await this.riesgoRepository.find();
    todos.forEach((r) => {
      if (resumen[r.nivel_riesgo_residual] !== undefined) {
        resumen[r.nivel_riesgo_residual]++;
      }
    });
    return resumen;
  }
}