import API from './api';

export const getRoles = async () => {
  const response = await API.get('/api/roles');
  return response.data ?? response;
};

export const getPermisos = async () => {
  const response = await API.get('/api/roles/permisos');
  return response.data ?? response;
};

export const createRole = async (payload) => {
  const response = await API.post('/api/roles', payload);
  return response.data ?? response;
};

export const updateRole = async (id, payload) => {
  const response = await API.put(`/api/roles/${id}`, payload);
  return response.data ?? response;
};

export const deleteRole = async (id) => {
  const response = await API.delete(`/api/roles/${id}`);
  return response.data ?? response;
};
