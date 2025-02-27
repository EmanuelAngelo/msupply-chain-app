import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const criarEntrada = (data) => api.post('/entradas-criar', data);
export const listarEntradas = () => api.get('/entradas-listar');
export const criarMercadoria = (data) => api.post('/mercadorias-criar', data);
export const listarMercadorias = () => api.get('/mercadorias-listar');
export const criarSaida = (data) => api.post('/saidas-criar', data);
export const listarSaidas = () => api.get('/saidas-listar');
export const gerarRelatorioMensal = () => api.get('/relatorio-mensal');

export default api;