-- ============================================================
-- PARTE 1: Eliminación de Tablas Anteriores
-- ============================================================
DROP TABLE IF EXISTS riesgos_seguridad_informacion CASCADE;
DROP TABLE IF EXISTS riesgos_seguridad CASCADE;
DROP TABLE IF EXISTS activos_informacion CASCADE;
DROP TABLE IF EXISTS amenazas_vulnerabilidades CASCADE;

-- ============================================================
-- PARTE 2: Creación de Nuevas Tablas
-- ============================================================

-- 1. Tabla de Activos de Información
CREATE TABLE activos_informacion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(100) NOT NULL, -- Datos/Información, Software/Aplicaciones, Hardware, Redes/Comunicaciones, Personas, Procesos/Instalaciones
    criticidad INT NOT NULL CHECK (criticidad >= 1 AND criticidad <= 5)
);

-- 2. Tabla de Amenazas y Vulnerabilidades
CREATE TABLE amenazas_vulnerabilidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(100) NOT NULL, -- Natural, Humana Intencional, Humana Accidental
    descripcion TEXT
);

-- 3. Tabla de Riesgos de Seguridad de la Información
CREATE TABLE riesgos_seguridad (
    id SERIAL PRIMARY KEY,
    id_activo INT REFERENCES activos_informacion(id) ON DELETE CASCADE,
    id_amenaza INT REFERENCES amenazas_vulnerabilidades(id) ON DELETE CASCADE,
    riesgo_consecuencia TEXT NOT NULL,
    probabilidad_inherente INT NOT NULL CHECK (probabilidad_inherente >= 1 AND probabilidad_inherente <= 5),
    impacto_inherente INT NOT NULL CHECK (impacto_inherente >= 1 AND impacto_inherente <= 5),
    riesgo_inherente INT NOT NULL,
    nivel_riesgo_inherente VARCHAR(50) NOT NULL, -- Bajo, Moderado, Alto, Extremo
    tratamiento_riesgo VARCHAR(100) NOT NULL, -- Mitigar/Reducir, Aceptar, Eliminar/Evitar, Transferir
    controles_implementar TEXT,
    tipo_control VARCHAR(50), -- Preventivo, Detectivo, Correctivo, Disuasivo
    nivel_control VARCHAR(50), -- Bajo, Medio, Alto
    nivel_implementacion VARCHAR(50), -- Automatico, Semiautomatico, Manual
    frecuencia_control VARCHAR(50), -- Por evento, Diario, Semanal, Mensual, Anual
    riesgo_residual INT NOT NULL,
    nivel_riesgo_residual VARCHAR(50) NOT NULL, -- Bajo, Moderado, Alto, Extremo
    usuario_id INT,
    usuario_nombre VARCHAR(255),
    ip_origen VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- PARTE 3: Población de Datos Semilla (Catalogos)
-- ============================================================

INSERT INTO activos_informacion (nombre, tipo, criticidad) VALUES
('Logs de Auditoría y Seguridad', 'Datos/Información', 5),
('Gestión de Riesgos', 'Software/Aplicaciones', 4),
('Control de Accesos', 'Software/Aplicaciones', 5),
('Módulo de Registro Empresarial', 'Software/Aplicaciones', 4),
('Interfaces Públicas', 'Software/Aplicaciones', 3);

INSERT INTO amenazas_vulnerabilidades (nombre, tipo, descripcion) VALUES
('Terremoto / Desastre Natural', 'Natural', 'Amenaza de origen natural que puede afectar las instalaciones físicas.'),
('Ataque de Ransomware', 'Humana Intencional', 'Infección de malware dirigida a secuestrar información crítica.'),
('Borrado Accidental de Datos', 'Humana Accidental', 'Error del operador que resulta en la pérdida de información.'),
('Ingreso no Autorizado a Servidores', 'Humana Intencional', 'Fallo de controles de acceso físico o lógico.');
