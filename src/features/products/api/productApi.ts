import { apiClient } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/endpoints";
import type { Product } from "@/features/products/types";

export const getProducts = async () => {
  try {
    const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS);
    return response.data;
  } catch (error) {
    return error;
  }
};


