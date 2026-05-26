import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Riesgo, NivelRiesgo } from './riesgo.entity';
import { CreateRiesgoDto } from './create-riesgo.dto';
import { UpdateRiesgoDto } from './update-riesgo.dto';

@Injectable()
export class RiesgosService {
  constructor(
    @InjectRepository(Riesgo)
    private readonly riesgoRepository: Repository<Riesgo>,
  ) {}

  /**
   * Calcula el nivel de riesgo (string) según la matriz de calor:
   * 1–4   = Bajo
   * 5–9   = Moderado
   * 10–16 = Alto
   * 20–25 = Extremo
   */
  private calcularNivelRiesgo(valor: number): NivelRiesgo {
    if (valor >= 1 && valor <= 4) return NivelRiesgo.BAJO;
    if (valor >= 5 && valor <= 9) return NivelRiesgo.MODERADO;
    if (valor >= 10 && valor <= 16) return NivelRiesgo.ALTO;
    if (valor >= 20 && valor <= 25) return NivelRiesgo.EXTREMO;
    
    // Valores 17, 18, 19 asignados a ALTO para evitar desbordamientos
    if (valor > 16 && valor < 20) return NivelRiesgo.ALTO;
    
    throw new BadRequestException(
      `Valor de riesgo fuera de rango (1-25): ${valor}`,
    );
  }

  /**
   * Valida que el valor sea un entero entre 1 y 5.
   * Es una "assertion function": si pasa, TS reduce el tipo a number.
   */
  private validarRango(
    valor: unknown,
    campo: string,
  ): asserts valor is number {
    if (typeof valor !== 'number' || !Number.isInteger(valor) || valor < 1 || valor > 5) {
      throw new BadRequestException(
        `El campo "${campo}" debe ser un entero entre 1 y 5. Recibido: ${valor}`,
      );
    }
  }

  /**
   * Calcula los productos y niveles de riesgo (inherente y residual)
   * antes de persistir en la base de datos.
   */
  private aplicarCalculosDeRiesgo<T extends Partial<Riesgo>>(data: T): T {
    // Extraemos los valores a constantes locales.
    const probInh = data.probabilidad_inherente;
    const impInh  = data.impacto_inherente;
    const probRes = data.probabilidad_residual;
    const impRes  = data.impacto_residual;

    // Las assertion functions estrechan el tipo: tras estas líneas,
    // TS sabe que las cuatro variables son `number`.
    this.validarRango(probInh, 'probabilidad_inherente');
    this.validarRango(impInh,  'impacto_inherente');
    this.validarRango(probRes, 'probabilidad_residual');
    this.validarRango(impRes,  'impacto_residual');

    // Riesgo Inherente
    const riesgoInherente = probInh * impInh;
    data.riesgo_inherente = riesgoInherente;
    data.nivel_riesgo_inherente = this.calcularNivelRiesgo(riesgoInherente);

    // Riesgo Residual
    const riesgoResidual = probRes * impRes;
    data.riesgo_residual = riesgoResidual;
    data.nivel_riesgo_residual = this.calcularNivelRiesgo(riesgoResidual);

    return data;
  }

  async create(dto: CreateRiesgoDto): Promise<Riesgo> {
    const dataCalculada = this.aplicarCalculosDeRiesgo({ ...dto });
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

  async update(id: string, dto: UpdateRiesgoDto): Promise<Riesgo> {
    const existente = await this.findOne(id);
    const merged = { ...existente, ...dto };
    const dataCalculada = this.aplicarCalculosDeRiesgo(merged);
    await this.riesgoRepository.update(id, dataCalculada);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const riesgo = await this.findOne(id);
    await this.riesgoRepository.remove(riesgo);
  }
}