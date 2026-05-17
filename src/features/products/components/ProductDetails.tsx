// src/features/products/components/ProductDetail.tsx
import { useParams, useNavigate } from "react-router";
import { useProductDetail } from "../hooks/useProductDetail";
import Loader from "@/shared/common/Loader";
import { useCart } from "@/context/CartContext";
import "@/assets/ProductDetail.css"; // Ensure you import your CSS

export const ProductDetails = () => {
  const { productId } = useParams();
  const { loader, product, errors } = useProductDetail(productId ?? "");
  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart } = useCart();

  const isItemInCart = cart.some((item) => item.id === Number(productId));

  if (loader) return <Loader />;
  if (errors) return <div className="error-msg">Something went wrong</div>;
  if (!product) return null;

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate("/")} className="back-link">
        Back to Products
      </button>

      <div className="product-detail-layout">
        <div className="product-image-wrapper">
          <img
            src={product.images[0]}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info-wrapper">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-desc">{product.description}</p>
          <p className="product-price">${product.price}</p>

          {isItemInCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="btn btn-remove"
            >
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(product)} className="btn btn-add">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
