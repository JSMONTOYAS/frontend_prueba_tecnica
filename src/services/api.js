import axios from 'axios';

// Cambia esto si tu backend corre en otra IP/puerto
const api = axios.create({
  baseURL: 'http://localhost:8000',
});

// Obtener todos los aspirantes
export const getAspirantes = () => api.get('/aspirantes/');

// Crear un nuevo aspirante
export const createAspirante = (data) => api.post('/aspirantes/', data);

// Eliminar un aspirante por ID
export const deleteAspirante = (id) => api.delete(`/aspirantes/${id}/`);

// Actualizar un aspirante por ID
export const updateAspirante = (id, data) => api.put(`/aspirantes/${id}/`, data);

