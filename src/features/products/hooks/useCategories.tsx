import { useEffect, useState } from "react";
import { getCategories } from "../api/productApi";
import type { Category, CategoryReq } from "../types";

export const useCategory = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryReq[]>([]);
  const [errors, setErrors] = useState<unknown>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resData: Category[] = (await getCategories()) as Category[];

        const categorie = resData.map((cat: CategoryReq) => {
          const { id, name } = cat;
          const retData = { id, name };
          return retData;
        });
        setCategories(categorie);
      } catch (error: unknown) {
        setErrors(error);
      } finally {
        setLoader(false);
      }
    };

    fetchCategories();
  }, []);

  return { categoryLoader: loader, categories, categoriesErrors: errors };
};
