import { apiClient } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/endpoints";

export const getProducts = async () => {
  try {
    const response = await apiClient.get(ENDPOINTS.PRODUCTS);
    return response.data;
  } catch (error) {
    return error;
  }
};


