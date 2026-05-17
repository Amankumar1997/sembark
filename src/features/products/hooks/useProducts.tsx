import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import type { Product } from "../types";

export const useProduct = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([]);
  const [errors, setErrors] = useState<unknown>(null);

  useEffect(() => {
    const fetchProdcts = async () => {
      try {
        const resData: Product[] = (await getProducts()) as Product[];
        setProductList(resData);
      } catch (error:unknown) {
        setErrors(error);
      } finally {
        setLoader(false);
      }
    };

    fetchProdcts();
  }, []);

  return { loader, products: productList, errors };
};
