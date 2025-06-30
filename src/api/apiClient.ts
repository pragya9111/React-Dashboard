import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://react-dashboard.free.beeceptor.com',
  timeout: 10000,
});

export default apiClient;