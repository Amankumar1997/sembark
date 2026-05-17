import { apiClient } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/endpoints";
import type { Product } from "@/features/products/types";
import axios from "axios";

export const getProducts = async (categoryIds?: string) => {
  try {
    const params = categoryIds?.length ? { categoryIds: categoryIds } : {};
    const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS, {
      params,
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

export const getProductById = async (id: number | string) => {
  debugger;
  try {
    const response = await apiClient.get<Product>(
      `${ENDPOINTS.PRODUCTS}/${id}`,
    );
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
