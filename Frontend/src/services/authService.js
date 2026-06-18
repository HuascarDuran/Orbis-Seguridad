import API, { setAuthToken, clearAuthToken } from './api';

const decodeJwt = (token) => {
  if (!token) return null;
  try {
    const [, payload] = token.split('.');
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = decodeURIComponent(
      atob(normalized)
        .split('')
        .map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join('')
    );
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.warn('No se pudo decodificar el token JWT', error);
    return null;
  }
};

// Sin cambios — login existente
export const login = async ({ usuario, contrasenia }, captchaToken) => {
  if (!usuario || !contrasenia) {
    throw new Error('Usuario y contraseña son requeridos');
  }

  const config = captchaToken 
  ? { headers: { 'x-captcha-token': captchaToken } } 
  : {};
console.log('Enviando login con header:', config.headers);

  const response = await API.post('/api/auth/login', { usuario, contrasenia }, config);
  const data = response.data ?? response;

  const accessToken = data.access_token;
  const idUsuario   = data.idUsuario;

  if (!accessToken || !idUsuario) {
    throw new Error('La respuesta de autenticación no contiene los datos requeridos');
  }

  const decoded = decodeJwt(accessToken) || {};

  const user = {
    id:                   idUsuario,
    usuario:              decoded.usuario || usuario,
    idRol:                decoded.rol ?? decoded.role ?? null,
    permisos:             data.permisos ?? decoded.permisos ?? [],
    exp:                  decoded.exp ?? null,
    must_change_password: data.must_change_password ?? decoded.must_change_password ?? false,
  };

  setAuthToken(accessToken);

  return {
    message: data.message,
    token:   accessToken,
    user,
  };
};

/**
 * Auto-registro público de visitante.
 *
 * CAMBIOS respecto a la versión anterior:
 *  - Endpoint: /api/auth/register  →  /api/auth/register-public
 *  - Payload:  { usuario, correo, contrasenia, idRol }
 *           →  { nombre, apellidoPaterno, apellidoMaterno?, correo, contrasenia }
 *
 * Se eliminaron `usuario` e `idRol` del payload porque ahora el backend
 * construye el alias y fuerza el rol VISITANTE (defensa contra Mass Assignment).
 * `apellidoMaterno` es opcional: si no se pasa, el backend lo ignora.
 */
export const registerVisitor = async ({
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  correo,
  contrasenia,
}) => {
  const payload = {
    nombre,
    apellidoPaterno,
    correo,
    contrasenia,
    // Solo incluimos apellidoMaterno si tiene valor — evita enviar undefined al servidor
    ...(apellidoMaterno ? { apellidoMaterno } : {}),
  };

  const response = await API.post('/api/auth/register-public', payload);
  return response.data ?? response;
};

/**
 * Verificación de email mediante el token recibido por correo.
 * Se llama desde la página /verify-email al montar el componente,
 * leyendo el query param ?token= de la URL.
 */
export const verifyEmail = async (token) => {
  const response = await API.get('/api/auth/verify-email', {
    params: { token },
  });
  return response.data ?? response;
};

// Sin cambios — resto de métodos existentes
export const logout = () => {
  clearAuthToken();
};

export const cambiarPassword = async (passwordActual, passwordNuevo) => {
  const body = { passwordNuevo };
  if (passwordActual) body.passwordActual = passwordActual;
  const response = await API.patch('/api/usuarios/cambiar-password', body);
  return response.data ?? response;
};

export const solicitarResetPassword = async (correo) => {
  const response = await API.post('/api/auth/forgot-password', { correo });
  return response.data ?? response;
};

export const validarTokenReset = async (token) => {
  const response = await API.get(`/api/auth/reset-password/validate/${token}`);
  return response.data ?? response;
};

export const resetearPassword = async (token, passwordNuevo) => {
  const response = await API.post('/api/auth/reset-password', { token, passwordNuevo });
  return response.data ?? response;
};