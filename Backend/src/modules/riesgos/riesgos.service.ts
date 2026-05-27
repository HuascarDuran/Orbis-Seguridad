import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Riesgo, NivelRiesgo } from './riesgo.entity';
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
    @InjectRepository(Riesgo)
    private readonly riesgoRepository: Repository<Riesgo>,
  ) {}

  // ─────────────────────────────────────────────
  // LÓGICA MATEMÁTICA (intacta)
  // ─────────────────────────────────────────────

  private calcularNivelRiesgo(valor: number): NivelRiesgo {
    if (valor >= 1  && valor <= 4)  return NivelRiesgo.BAJO;
    if (valor >= 5  && valor <= 9)  return NivelRiesgo.MODERADO;
    if (valor >= 10 && valor <= 16) return NivelRiesgo.ALTO;
    if (valor >= 17 && valor <= 19) return NivelRiesgo.ALTO;   // no alcanzables en 5x5, por defensa
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

  private aplicarCalculosDeRiesgo<T extends Partial<Riesgo>>(data: T): T {
    const probInh = data.probabilidad_inherente;
    const impInh  = data.impacto_inherente;
    const probRes = data.probabilidad_residual;
    const impRes  = data.impacto_residual;

    this.validarRango(probInh, 'probabilidad_inherente');
    this.validarRango(impInh,  'impacto_inherente');
    this.validarRango(probRes, 'probabilidad_residual');
    this.validarRango(impRes,  'impacto_residual');

    const riesgoInherente = probInh * impInh;
    data.riesgo_inherente       = riesgoInherente;
    data.nivel_riesgo_inherente = this.calcularNivelRiesgo(riesgoInherente);

    const riesgoResidual = probRes * impRes;
    data.riesgo_residual       = riesgoResidual;
    data.nivel_riesgo_residual = this.calcularNivelRiesgo(riesgoResidual);

    return data;
  }

  // ─────────────────────────────────────────────
  // CRUD CON TRAZABILIDAD
  // ─────────────────────────────────────────────

  async create(
  dto: CreateRiesgoDto,
  auditoria?: AuditoriaMeta,
): Promise<Riesgo> {
  // 👇 Tipamos explícitamente como Partial<Riesgo>
  const dataCalculada: Partial<Riesgo> = this.aplicarCalculosDeRiesgo({ ...dto });

  if (auditoria) {
    dataCalculada.usuario_id     = auditoria.idUsuario;
    dataCalculada.usuario_nombre = auditoria.nombreUsuario;
    dataCalculada.ip_origen      = auditoria.ipOrigen;
  }

  const riesgo = this.riesgoRepository.create(dataCalculada);
  return this.riesgoRepository.save(riesgo);
}

  async findAll(): Promise<Riesgo[]> {
    return this.riesgoRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string): Promise<Riesgo> {
    const riesgo = await this.riesgoRepository.findOne({ where: { id } });
    if (!riesgo) {
      throw new NotFoundException(`Riesgo con id ${id} no encontrado`);
    }
    return riesgo;
  }

  async update(
  id: string,
  dto: UpdateRiesgoDto,
  auditoria?: AuditoriaMeta,
): Promise<Riesgo> {
  const existente = await this.findOne(id);
  // 👇 Ídem aquí
  const dataCalculada: Partial<Riesgo> = this.aplicarCalculosDeRiesgo({ ...existente, ...dto });

  if (auditoria) {
    dataCalculada.usuario_id     = auditoria.idUsuario;
    dataCalculada.usuario_nombre = auditoria.nombreUsuario;
    dataCalculada.ip_origen      = auditoria.ipOrigen;
  }

  await this.riesgoRepository.update(id, dataCalculada);
  return this.findOne(id);
}

  async remove(id: string): Promise<void> {
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
    todos.forEach((r) => { resumen[r.nivel_riesgo_residual]++; });
    return resumen;
  }
}