import axios from 'axios';

// Conexao apontando para o backend
const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// Esse "interceptor" pega o Token salvo e coloca em todas as requisicoes automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;