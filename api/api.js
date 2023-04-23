import axios from "axios";
import { LocalStorageKey } from "../constants/common";

const defaultAxiosConfig = {
  baseURL: process.env.API_URL,
  timeout: 3000,
};

const api = axios.create({
  ...defaultAxiosConfig,
  headers: {
    ...defaultAxiosConfig.headers,
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (config.data instanceof FormData) {
    return config;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default api;
