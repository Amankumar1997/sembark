// src/features/products/components/ProductDetail.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { Product } from "../types";
import { useProductDetail } from "../hooks/useProductDetail";
import Loader from "@/shared/common/Loader";

export const ProductDetails = () => {
  const { productId } = useParams();

  const { loader, product, errors } = useProductDetail(productId ?? "");
  const navigate = useNavigate();
  // const { addToCart } = useCart();

  if (loader) return <Loader />;
  if (errors) return <div>There is Something went wrong</div>;
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button onClick={() => navigate("/")} className="mb-4 text-blue-600">
        ← Back to Products
      </button>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product?.images[0]}
          alt={product?.title}
          className="w-full rounded-lg shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
          <p className="text-gray-600 mb-4">{product?.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-6">
            ${product?.price}
          </p>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
