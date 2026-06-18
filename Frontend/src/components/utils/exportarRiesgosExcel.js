// src/utils/exportarRiesgosExcel.js
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// Colores ARGB (formato exceljs) que replican la matriz de calor
const COLORES_NIVEL_EXCEL = {
  Bajo:     'FF22C55E', // Verde
  Moderado: 'FFFACC15', // Amarillo
  Alto:     'FFF97316', // Naranja
  Extremo:  'FFDC2626', // Rojo
};

const COLOR_HEADER_GRUPO   = 'FF0F172A'; // Azul muy oscuro
const COLOR_HEADER_COLUMNA = 'FF1E3A8A'; // Azul marino
const COLOR_TEXTO_BLANCO   = 'FFFFFFFF';
const COLOR_BORDE          = 'FFCBD5E1';

const bordeCelda = {
  top:    { style: 'thin', color: { argb: COLOR_BORDE } },
  left:   { style: 'thin', color: { argb: COLOR_BORDE } },
  bottom: { style: 'thin', color: { argb: COLOR_BORDE } },
  right:  { style: 'thin', color: { argb: COLOR_BORDE } },
};

export async function exportarRiesgosAExcel(riesgos, nombreArchivo = 'Matriz_Riesgos_SI') {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Orbis Seguridad';
  workbook.created = new Date();

  const sheet = workbook.addWorksheet('Matriz de Riesgos', {
    views: [{ state: 'frozen', xSplit: 2, ySplit: 3 }], // congela 2 cols y 3 filas
  });

  // === FILA 1: Título principal ===
  sheet.mergeCells('A1:O1');
  const titulo = sheet.getCell('A1');
  titulo.value = 'MATRIZ DE ANÁLISIS DE RIESGOS DE SEGURIDAD DE LA INFORMACIÓN';
  titulo.font = { bold: true, size: 14, color: { argb: COLOR_TEXTO_BLANCO } };
  titulo.alignment = { horizontal: 'center', vertical: 'middle' };
  titulo.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_GRUPO } };
  sheet.getRow(1).height = 28;

  // === FILA 2: Encabezados de GRUPO (merged) ===
  const grupos = [
    ['A2', 'B2', 'Activo de Información'],
    ['C2', 'C2', 'Identificación'],
    ['D2', 'D2', 'Valoración'],
    ['E2', 'F2', 'Cálculo Inicial'],
    ['G2', 'H2', 'Evaluación Riesgo Inherente'],
    ['I2', 'I2', 'Medición'],
    ['J2', 'J2', 'Mitigación'],
    ['K2', 'M2', 'Eficiencia del Control'],
    ['N2', 'O2', 'Riesgo Residual'],
  ];

  grupos.forEach(([ini, fin, texto]) => {
    if (ini !== fin) sheet.mergeCells(`${ini}:${fin}`);
    const cell = sheet.getCell(ini);
    cell.value = texto;
    cell.font = { bold: true, size: 11, color: { argb: COLOR_TEXTO_BLANCO } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_GRUPO } };
    cell.border = bordeCelda;
  });
  sheet.getRow(2).height = 22;

  // === FILA 3: Encabezados de COLUMNA ===
  const columnas = [
    'Activo Información', 'Tipo de Activo',
    'Amenaza / Vulnerabilidad', 'Riesgo / Consecuencia',
    'Prob. Inh.', 'Imp. Inh.',
    'Riesgo Inh.', 'Nivel Inh.',
    'Tratamiento', 'Controles a Implementar',
    'Tipo', 'Nivel Impl.', 'Frecuencia',
    'Riesgo Res.', 'Nivel Res.',
  ];

  columnas.forEach((nombre, idx) => {
    const cell = sheet.getCell(3, idx + 1);
    cell.value = nombre;
    cell.font = { bold: true, size: 10, color: { argb: COLOR_TEXTO_BLANCO } };
    cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_COLUMNA } };
    cell.border = bordeCelda;
  });
  sheet.getRow(3).height = 32;

  // === Anchos de columna ===
  const anchos = [25, 20, 35, 35, 10, 10, 12, 14, 15, 35, 12, 15, 12, 12, 14];
  anchos.forEach((w, idx) => { sheet.getColumn(idx + 1).width = w; });

  // === FILAS DE DATOS ===
  riesgos.forEach((r, idx) => {
    const fila = 4 + idx;
    const valores = [
      r.activo?.nombre || '—',
      r.activo?.tipo || '—',
      r.amenaza?.nombre || '—',
      r.riesgo_consecuencia,
      r.probabilidad_inherente,
      r.impacto_inherente,
      r.riesgo_inherente,
      r.nivel_riesgo_inherente,
      r.tratamiento_riesgo,
      r.controles_implementar || '—',
      r.tipo_control || '—',
      r.nivel_implementacion || '—',
      r.frecuencia_control || '—',
      r.riesgo_residual,
      r.nivel_riesgo_residual,
    ];

    valores.forEach((valor, colIdx) => {
      const cell = sheet.getCell(fila, colIdx + 1);
      cell.value = valor;
      cell.border = bordeCelda;
      cell.alignment = { vertical: 'top', wrapText: true };

      // Centrar columnas numéricas y de enums
      if ([5, 6, 7, 8, 11, 12, 13, 14, 15].includes(colIdx + 1)) {
        cell.alignment = { ...cell.alignment, horizontal: 'center' };
      }
    });

    // Pintar celdas de NIVEL INHERENTE (columna H = 8)
    const cellNivelInh = sheet.getCell(fila, 8);
    const colorInh = COLORES_NIVEL_EXCEL[r.nivel_riesgo_inherente];
    if (colorInh) {
      cellNivelInh.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colorInh } };
      cellNivelInh.font = {
        bold: true,
        color: { argb: r.nivel_riesgo_inherente === 'Moderado' ? 'FF1F2937' : COLOR_TEXTO_BLANCO },
      };
      cellNivelInh.alignment = { horizontal: 'center', vertical: 'middle' };
    }

    // Pintar celdas de NIVEL RESIDUAL (columna O = 15)
    const cellNivelRes = sheet.getCell(fila, 15);
    const colorRes = COLORES_NIVEL_EXCEL[r.nivel_riesgo_residual];
    if (colorRes) {
      cellNivelRes.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colorRes } };
      cellNivelRes.font = {
        bold: true,
        color: { argb: r.nivel_riesgo_residual === 'Moderado' ? 'FF1F2937' : COLOR_TEXTO_BLANCO },
      };
      cellNivelRes.alignment = { horizontal: 'center', vertical: 'middle' };
    }
  });

  // === Hoja 2: Leyenda Matriz de Calor ===
  const hojaLeyenda = workbook.addWorksheet('Leyenda');
  hojaLeyenda.getCell('A1').value = 'Escala de Nivel de Riesgo';
  hojaLeyenda.getCell('A1').font = { bold: true, size: 13 };
  hojaLeyenda.mergeCells('A1:C1');

  const leyenda = [
    ['Bajo',     '1 - 4',   COLORES_NIVEL_EXCEL.Bajo],
    ['Moderado', '5 - 9',   COLORES_NIVEL_EXCEL.Moderado],
    ['Alto',     '10 - 16', COLORES_NIVEL_EXCEL.Alto],
    ['Extremo',  '20 - 25', COLORES_NIVEL_EXCEL.Extremo],
  ];

  hojaLeyenda.getCell('A3').value = 'Nivel';
  hojaLeyenda.getCell('B3').value = 'Rango (Prob × Imp)';
  hojaLeyenda.getCell('C3').value = 'Color';
  ['A3', 'B3', 'C3'].forEach((c) => {
    hojaLeyenda.getCell(c).font = { bold: true, color: { argb: COLOR_TEXTO_BLANCO } };
    hojaLeyenda.getCell(c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_COLUMNA } };
    hojaLeyenda.getCell(c).alignment = { horizontal: 'center' };
  });

  leyenda.forEach(([nivel, rango, color], idx) => {
    const fila = 4 + idx;
    hojaLeyenda.getCell(`A${fila}`).value = nivel;
    hojaLeyenda.getCell(`B${fila}`).value = rango;
    hojaLeyenda.getCell(`C${fila}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: color } };
    hojaLeyenda.getCell(`A${fila}`).font = { bold: true };
    hojaLeyenda.getCell(`A${fila}`).alignment = { horizontal: 'center' };
    hojaLeyenda.getCell(`B${fila}`).alignment = { horizontal: 'center' };
  });
  hojaLeyenda.getColumn(1).width = 15;
  hojaLeyenda.getColumn(2).width = 22;
  hojaLeyenda.getColumn(3).width = 15;

  // === Generar archivo y disparar descarga ===
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const fecha = new Date().toISOString().slice(0, 10);
  saveAs(blob, `${nombreArchivo}_${fecha}.xlsx`);
}