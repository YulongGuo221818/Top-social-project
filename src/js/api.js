import axios from 'axios';

const API_URL = import.meta.env.API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const fetchLogo = () => {
  return 'Top Social';
};

export const fetchProfile = async () => {
  return axiosInstance.get('/profile');
};
