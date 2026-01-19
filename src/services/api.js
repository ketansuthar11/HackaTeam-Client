import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const loginUser = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const signupUser = async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
};

export default api;