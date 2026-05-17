import { apiClient } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/endpoints";
import type { Product } from "@/features/products/types";
import axios from "axios";

export const getProducts = async (categoryIds?: string) => {
  try {
    const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS, {
      params: {
        categoryIds: categoryIds??"",
      },
    });
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      return err.message;
    } else {
      return "Something went wrong";
    }
  }
};

export const getCategories = async () => {
  try {
    const response = await apiClient.get(ENDPOINTS.CATEGORIES);
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      return err.message;
    } else {
      return "Something went wrong";
    }
  }
};

export const getProductById = async () => {
  try {
    const response = await apiClient.get<Product>(ENDPOINTS.PRODUCTS);
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      return err.message;
    } else {
      return "Something went wrong";
    }
  }
};
