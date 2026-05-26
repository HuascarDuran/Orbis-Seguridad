// src/services/api.js
import axios from 'axios';

// Permite configurar la URL del backend mediante una variable de entorno
const baseURL = process.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'https://orbis-seguridad.onrender.com';

const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 15000,   // ← AGREGADO: Timeout de 15s evita requests colgados indefinidamente (Hardening OWASP)
});

// ─── INTERCEPTOR DE RESPUESTAS (NUEVO) ──────────────────────────────────────
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    // 401: Token expirado o inválido → forzar logout limpio y redirigir
    if (status === 401) {
      localStorage.removeItem('authData');
      delete API.defaults.headers.common['Authorization'];
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    }

    // 429: Rate limit alcanzado (Manejador para el Throttler del Backend)
    if (status === 429) {
      console.warn('[API] Rate limit alcanzado. Demasiadas peticiones desde este origen. Espera antes de reintentar.');
    }

    // Retornamos el rechazo para que el catch del componente (como inicioSesion.js) pueda mostrar el mensaje
    return Promise.reject(error);
  }
);

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common.Authorization;
  }
};

export const clearAuthToken = () => {
  delete API.defaults.headers.common.Authorization;
};

export default API;