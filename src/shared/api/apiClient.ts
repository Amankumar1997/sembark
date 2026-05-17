import axios from "axios";
import type { AxiosInstance } from "axios";

export const apiClient : AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
});