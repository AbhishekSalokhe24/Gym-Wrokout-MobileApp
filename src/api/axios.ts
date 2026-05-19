import axios from 'axios';
import { Platform } from 'react-native';
import { storage } from '../utils/storage';

// Base URL for API - use appropriate URL depending on environment
// For Android emulator: 10.0.2.2
// For iOS simulator: localhost
// For physical devices on Expo Go: use your computer's local IP (e.g. 192.168.1.x)
const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000/api' : 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the JWT token
apiClient.interceptors.request.use(
  async (config) => {
    const token = await storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
