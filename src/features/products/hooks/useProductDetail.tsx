import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import type { Product } from "../types";

export const useProductDetail = (id:number|string) => {
  const [loader, setLoader] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [errors, setErrors] = useState<unknown>(null);

  useEffect(() => {
    const fetchProduct = async (id: number|string) => {
      try {
        const resData: Product = (await getProductById(id)) as Product;
        setProduct(resData);
      } catch (error: unknown) {
        setErrors(error);
      } finally {
        setLoader(false);
      }
    };
    fetchProduct(id);
  }, []);

  return { loader, product, errors };
};
