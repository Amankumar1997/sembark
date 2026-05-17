import React, { useEffect } from "react";
import { getProducts } from "@/features/products/api/productApi";
const ProductsList = () => {
  
  useEffect(() => {
    getProducts();
  }, []);

  return <div>ProductsList</div>;
};

export default ProductsList;
