import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { login as loginService, registerVisitor } from "../services/authService";
import logo from '../assets/logo.png';

// --- TAMAÑOS RESPONSIVOS CON PROPORCIONES ÁUREAS (MÁS PEQUEÑOS) ---
const SIZES = {
  LOGO_SIZE: "clamp(120px, 16vw, 180px)",
  TITLE_SIZE: "clamp(1.4rem, 3vw, 1.8rem)", 
  LABEL_SIZE: "clamp(0.8rem, 1.6vw, 1rem)", 
  INPUT_SIZE: "clamp(0.9rem, 1.8vw, 1.1rem)", 
  BUTTON_SIZE: "clamp(1rem, 2vw, 1.2rem)", 
  MESSAGE_SIZE: "clamp(0.8rem, 1.6vw, 1rem)", 
  ICON_SIZE: "clamp(16px, 2.4vw, 22px)", 
  CLOSE_SIZE: "clamp(1.4rem, 3vw, 1.8rem)", 
  MODAL_WIDTH: "clamp(280px, 70vw, 400px)", 
  MODAL_PADDING: "clamp(1.2rem, 3vw, 1.8rem)", 
};

const EyeIconShow = ({ color, size = SIZES.ICON_SIZE }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size, height: size, fill: color, display: "block" }}
  >
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const EyeIconHide = ({ color, size = SIZES.ICON_SIZE }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size, height: size, fill: color, display: "block" }}
  >
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75C21.27 7.61 17 4.5 12 4.5c-1.6 0-3.14.35-4.54.96l1.56 1.56C9.74 7.13 10.85 7 12 7zm-1.07 5.53l2.81 2.81c-.71.15-1.44.26-2.19.26-2.76 0-5-2.24-5-5 0-.75.11-1.48.26-2.19l2.81 2.81c.11.7.42 1.34.81 1.81zM2.71 3.27L1.44 4.54l2.02 2.02C2.03 7.95 1.16 9.77 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l1.53 1.53 1.27-1.27L2.71 3.27z" />
  </svg>
);

const InicioSesion = ({ onLogin, onClose }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [correo, setCorreo] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [modoRegistro, setModoRegistro] = useState(false);

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: "0 0 0 2px #F29E38", 
      transition: { duration: 0.2 },
    },
  };
  
  const buttonVariants = {
    hover: { 
      backgroundColor: "#0A3A5A", 
      scale: 1.02, 
      transition: { duration: 0.15 } 
    },
    tap: { scale: 0.98 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };
  
  const modalVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } },
  };
  
  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { delay: 0.2, type: "spring", stiffness: 120 } 
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.1 } },
  };

  useEffect(() => {
    setMensaje(null);
    setCaptchaChecked(false);
  }, [modoRegistro]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null); 

    if (!usuario || !contrasenia || (modoRegistro && !correo)) {
      setMensaje("Por favor, rellena todos los campos requeridos");
      return;
    }

    if (modoRegistro && !captchaChecked) {
      setMensaje('Por favor, marca la casilla de reCAPTCHA para continuar.');
      return;
    }

    setLoading(true);

    try {
      if (modoRegistro) {
        await registerVisitor({ usuario, correo, contrasenia, idRol: 5 });
        setMensaje("Registro exitoso. Ahora puedes iniciar sesión.");
        setModoRegistro(false);
        setContrasenia("");
        setCorreo("");
        setCaptchaChecked(false);
      } else {
        // CORREGIDO: Interceptamos el flujo de Login para generar el token invisible de reCAPTCHA v3
       // CORREGIDO: Usamos grecaptcha.ready para asegurar que la librería esté cargada
        let captchaToken = null;
        try {
          if (window.grecaptcha) {
            // Envolvemos el execute en una Promesa para esperar el .ready
            captchaToken = await new Promise((resolve) => {
              window.grecaptcha.ready(async () => {
                const token = await window.grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', { action: 'login' });
                resolve(token);
              });
            });
            console.log("Token puro generado en el Front:", captchaToken); // ← Verifica esto en la consola del navegador
          }
        } catch (captchaError) {
          console.warn("Fallo al obtener token de reCAPTCHA invisible. Continuando con fallback:", captchaError);
        }

        // Pasamos captchaToken como segundo parámetro a loginService
        const { user, token, message } = await loginService({ usuario, contrasenia }, captchaToken);
        if (onLogin) {
          onLogin({ user, token });
        }
        if (user?.must_change_password) {
          setIsVisible(false);
          navigate('/cambiar-password');
        } else {
          setMensaje(message || "¡Sesión iniciada correctamente!");
          setTimeout(() => setIsVisible(false), 1000);
        }
      }
    } catch (error) {
      const backendMessage = error?.response?.data?.message;
      const parseError = Array.isArray(backendMessage)
        ? backendMessage.join(', ')
        : backendMessage || error.message || 'Ocurrió un error inesperado';
      setMensaje(parseError);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const onExitComplete = () => {
    if (onClose) onClose(); 
  }

  const getMessageColor = () => {
    if (!mensaje) return "text-text-muted";
    const normalized = mensaje.toLowerCase();
    return normalized.includes("exitoso") || normalized.includes("correcta")
      ? "text-green-600"
      : "text-red-500";
  };

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isVisible && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999]"
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-surface-elevated rounded-2xl text-center shadow-2xl border border-stroke/30 relative overflow-hidden"
            style={{
              width: SIZES.MODAL_WIDTH,
              padding: SIZES.MODAL_PADDING,
            }}
          >
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.2, color: "#F29E38" }}
              className="absolute top-4 right-5 border-none cursor-pointer text-text-muted p-1 outline-none transition-all duration-200"
              style={{ 
                fontSize: SIZES.CLOSE_SIZE,
                backgroundColor: 'transparent'
              }}
            >
              &times;
            </motion.button>

            <div 
              className="flex justify-center items-center mx-auto"
              style={{
                width: SIZES.LOGO_SIZE,
                height: SIZES.LOGO_SIZE,
                marginBottom: "clamp(0.5rem, 1.5vw, 1rem)",
              }}
            >
              <motion.img
                src={logo}
                alt="Logo de la aplicación"
                className="w-full h-full object-contain block"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </div>

            <h2 
              className="font-bodoni font-bold text-text-main uppercase tracking-wider"
              style={{
                fontSize: SIZES.TITLE_SIZE,
                letterSpacing: "clamp(0.05rem, 0.2rem, 0.3rem)", 
                marginBottom: "clamp(1.5rem, 3vw, 2rem)", 
              }}
            >
              Inicio de Sesión
            </h2>

            {mensaje && (
              <p 
                className={`font-bold font-bodoni ${getMessageColor()}`}
                style={{ 
                  fontSize: SIZES.MESSAGE_SIZE,
                  marginBottom: "clamp(1.2rem, 2.5vw, 1.5rem)", 
                  minHeight: "clamp(20px, 3vw, 25px)", 
                }}
              >
                {mensaje}
              </p>
            )}

            <form onSubmit={handleSubmit} className="text-left">
              <label 
                htmlFor="usuario" 
                className="block text-left font-bodoni font-medium text-text-main"
                style={{ 
                  fontSize: SIZES.LABEL_SIZE,
                  marginBottom: "clamp(0.5rem, 1vw, 0.8rem)", 
                }}
              >
                Usuario
              </label>
              <motion.input
                type="text"
                id="usuario"
                placeholder="Escribe tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                variants={inputVariants}
                whileFocus="focus"
                className="w-full bg-surface border border-stroke rounded-xl text-text-main font-miles box-border focus:outline-none focus:border-accent transition-colors duration-200"
                style={{
                  padding: "clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 16px)", 
                  fontSize: SIZES.INPUT_SIZE,
                  marginBottom: "clamp(1rem, 2.5vw, 1.5rem)", 
                }}
              />

              <label 
                htmlFor="contrasenia" 
                className="block text-left font-bodoni font-medium text-text-main"
                style={{ 
                  fontSize: SIZES.LABEL_SIZE,
                  marginBottom: "clamp(0.5rem, 1vw, 0.8rem)", 
                }}
              >
                Contraseña
              </label>
              <div 
                className="relative w-full"
                style={{ marginBottom: "clamp(1rem, 2.5vw, 1.5rem)" }}
              >
                <motion.input
                  type={showPassword ? "text" : "password"}
                  id="contrasenia"
                  placeholder="Introduce tu contraseña"
                  value={contrasenia}
                  onChange={(e) => setContrasenia(e.target.value)}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full bg-surface border border-stroke rounded-lg text-text-main font-miles box-border focus:outline-none focus:border-accent transition-all duration-200"
                  style={{
                    padding: "clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 16px)",
                    paddingRight: "clamp(40px, 6vw, 50px)",
                    fontSize: SIZES.INPUT_SIZE,
                  }}
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 border-none cursor-pointer p-1 flex items-center justify-center text-text-muted transition-colors duration-200"
                  style={{
                    right: "clamp(8px, 1.5vw, 12px)",
                    backgroundColor: 'transparent',
                    transform: 'translateY(-50%)'
                  }}
                  whileHover={{ opacity: 0.7 }}
                  title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
                    <EyeIconHide color="#78909C" size={SIZES.ICON_SIZE} />
                  ) : (
                    <EyeIconShow color="#78909C" size={SIZES.ICON_SIZE} />
                  )}
                </motion.button>
              </div>

              {modoRegistro && (
                <>
                  <label
                    htmlFor="correo"
                    className="block text-left font-bodoni font-medium text-text-main"
                    style={{
                      fontSize: SIZES.LABEL_SIZE,
                      marginBottom: "clamp(0.5rem, 1vw, 0.8rem)",
                    }}
                  >
                    Correo electrónico
                  </label>
                  <motion.input
                    type="email"
                    id="correo"
                    placeholder="correo@ejemplo.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    variants={inputVariants}
                    whileFocus="focus"
                    className="w-full bg-surface border border-stroke rounded-xl text-text-main font-miles box-border focus:outline-none focus:border-accent transition-colors duration-200"
                    style={{
                      padding: "clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 16px)",
                      fontSize: SIZES.INPUT_SIZE,
                      marginBottom: "clamp(1rem, 2.5vw, 1.5rem)",
                    }}
                  />

                  <label className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">
                    <input
                      type="checkbox"
                      checked={captchaChecked}
                      onChange={(e) => setCaptchaChecked(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2C5282] focus:ring-[#2C5282]"
                    />
                    <span className="leading-5">
                      Confirmo que no soy un robot.
                      <strong className="ml-1 text-[#2C5282]">reCAPTCHA</strong>
                    </span>
                  </label>
                </>
              )}

              <motion.button
                type="submit"
                disabled={loading || (modoRegistro && !captchaChecked)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-primary text-surface-elevated border-none rounded-xl font-bodoni font-bold uppercase cursor-pointer transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-80"
                style={{
                  padding: "clamp(12px, 2.5vw, 16px)", 
                  fontSize: SIZES.BUTTON_SIZE,
                  marginTop: "clamp(1.2rem, 3vw, 1.8rem)", 
                }}
              >
                {loading ? (modoRegistro ? "Registrando..." : "Accediendo...") : modoRegistro ? "Registrarme" : "ACCEDER"}
              </motion.button>
            </form>

            <div className="mt-4 text-sm text-text-muted font-miles flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setModoRegistro((prev) => !prev)}
                className="text-primary hover:underline bg-transparent border-none cursor-pointer"
              >
                {modoRegistro
                  ? "¿Ya tienes cuenta? Inicia sesión"
                  : "¿Aún no tienes cuenta? Regístrate como visitante"}
              </button>
              {!modoRegistro && (
                <button
                  type="button"
                  onClick={() => { setIsVisible(false); navigate('/reset-password'); }}
                  className="text-text-muted hover:text-accent bg-transparent border-none cursor-pointer transition-colors duration-200"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InicioSesion;