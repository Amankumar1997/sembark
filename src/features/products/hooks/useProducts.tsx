import {  useState } from "react";
import { getProducts } from "../api/productApi";
import type { Product } from "../types";

export const useProduct = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([]);
  const [errors, setErrors] = useState<unknown>(null);



     const fetchProducts = async (categoryIds:string) => {
      try {
        const resData: Product[] = (await getProducts(categoryIds)) as Product[];
        setProductList(resData);
      } catch (error:unknown) {
        setErrors(error);
      } finally {
        setLoader(false);
      }
    };


  return { loader, products: productList, errors ,fetchProducts,setLoader};
};
