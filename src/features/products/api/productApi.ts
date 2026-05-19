import { apiClient } from "@/shared/api/apiClient";
import { ENDPOINTS } from "@/shared/endpoints";
import type { Product } from "@/features/products/types";
import axios from "axios";

export const getProducts = async (categoryIds: number[]) => {
  try {
    if (!categoryIds.length) {
      const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS);
      return response.data;
    }
    const requests = categoryIds.map((id) => {
      const params = { categoryId: id };
      return apiClient.get<Product[]>(ENDPOINTS.PRODUCTS, {
        params,
      });
    });
    const responses = await Promise.all(requests);
    const mergedProducts: Product[] = [];
    responses.forEach((res) => {
      mergedProducts.push(...res.data);
    });
    debugger;

    return mergedProducts;
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
