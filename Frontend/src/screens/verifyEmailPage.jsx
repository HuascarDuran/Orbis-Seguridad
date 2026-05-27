/**
 * @file VerifyEmailPage.jsx
 *
 * Página pública que consume el token de verificación de correo.
 * Se monta cuando el visitante hace click en el link enviado por email:
 *   https://orbis-seguridad.vercel.app/verify-email?token=<rawToken>
 *
 * Flujo:
 *  1. Al montar, lee ?token= de la URL y llama a verifyEmail().
 *  2. Muestra un estado de carga mientras espera la respuesta.
 *  3. Según la respuesta del backend, muestra éxito o error.
 *  4. En ambos casos ofrece un botón para volver al inicio de sesión.
 *
 * Estética: misma paleta, tipografías (font-bodoni, font-miles) y
 * animaciones framer-motion que el resto del sistema.
 */

import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { verifyEmail } from '../services/authService';
import logo from '../assets/logo.png';

// ─── Paleta (consistente con inicioSesion.js y administrarUsuarioPanel.js) ────
const C = {
  primary: '#072D42',
  accent:  '#F29E38',
  text:    '#464E59',
  muted:   '#9298A6',
  surface: '#FEFCFB',
};

// ─── Estados posibles de la verificación ─────────────────────────────────────
const Estado = {
  CARGANDO: 'CARGANDO',
  EXITOSO:  'EXITOSO',
  ERROR:    'ERROR',
};

// ─── Animaciones ──────────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 16 } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

const iconVariants = {
  hidden:  { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.15 } },
};

// ─── Componente ───────────────────────────────────────────────────────────────

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [estado, setEstado]   = useState(Estado.CARGANDO);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    // Sin token en la URL → error inmediato, sin llamada al backend
    if (!token) {
      setEstado(Estado.ERROR);
      setMensaje('El enlace de verificación no es válido. Asegúrate de usar el link completo del correo.');
      return;
    }

    let cancelado = false;

    const verificar = async () => {
      try {
        const data = await verifyEmail(token);
        if (!cancelado) {
          setMensaje(data?.message || 'Correo verificado correctamente. Ya puedes iniciar sesión.');
          setEstado(Estado.EXITOSO);
        }
      } catch (error) {
        if (!cancelado) {
          // El backend devuelve siempre el mismo mensaje genérico para no revelar
          // el estado interno. Lo mostramos tal cual al usuario.
          const backendMsg = error?.response?.data?.message;
          setMensaje(
            typeof backendMsg === 'string'
              ? backendMsg
              : 'El enlace de verificación no es válido o ya expiró. Solicita un nuevo registro si es necesario.',
          );
          setEstado(Estado.ERROR);
        }
      }
    };

    verificar();

    // Cleanup: evita actualizar estado si el componente se desmonta antes
    return () => { cancelado = true; };
  }, [searchParams]);

  // ─── Contenido según estado ─────────────────────────────────────────────

  const renderIcono = () => {
    if (estado === Estado.CARGANDO) {
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-14 h-14 rounded-full border-4 border-t-transparent mx-auto mb-5"
          style={{ borderColor: `${C.accent} transparent ${C.accent} ${C.accent}` }}
        />
      );
    }

    if (estado === Estado.EXITOSO) {
      return (
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: '#d1fae5' }}
        >
          {/* Checkmark SVG */}
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      );
    }

    // ERROR
    return (
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: '#fee2e2' }}
      >
        {/* X SVG */}
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6"  y1="6" x2="18" y2="18" />
        </svg>
      </motion.div>
    );
  };

  const titulo = {
    [Estado.CARGANDO]: 'Verificando tu correo...',
    [Estado.EXITOSO]:  '¡Correo verificado!',
    [Estado.ERROR]:    'Enlace no válido',
  }[estado];

  const colorMensaje = {
    [Estado.CARGANDO]: C.muted,
    [Estado.EXITOSO]:  '#059669',
    [Estado.ERROR]:    '#dc2626',
  }[estado];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: C.surface }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 text-center"
        style={{ width: 'clamp(300px, 80vw, 420px)', padding: 'clamp(1.8rem, 4vw, 2.5rem)' }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Orbis Seguridad"
            className="object-contain"
            style={{ width: 'clamp(90px, 14vw, 130px)', height: 'clamp(90px, 14vw, 130px)' }}
          />
        </div>

        {/* Ícono de estado */}
        {renderIcono()}

        {/* Título */}
        <h1
          className="font-bodoni font-bold uppercase tracking-wide mb-3"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: C.primary }}
        >
          {titulo}
        </h1>

        {/* Mensaje */}
        {mensaje && (
          <p
            className="font-miles mb-6 leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', color: colorMensaje }}
          >
            {mensaje}
          </p>
        )}

        {/* Texto de carga */}
        {estado === Estado.CARGANDO && (
          <p
            className="font-miles mb-6"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', color: C.muted }}
          >
            Por favor espera un momento...
          </p>
        )}

        {/* Botón — solo visible cuando ya terminó (éxito o error) */}
        {estado !== Estado.CARGANDO && (
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#0A3A5A' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="w-full rounded-xl font-bodoni font-bold uppercase text-white border-none cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: C.primary,
              padding: 'clamp(11px, 2vw, 14px)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            }}
          >
            {estado === Estado.EXITOSO ? 'Ir a inicio de sesión' : 'Volver al inicio'}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;