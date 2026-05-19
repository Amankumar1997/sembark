import Loader from "@/shared/common/Loader";
import { useProduct } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import { useCategory } from "../hooks/useCategories";
import FilterSidebar from "./FilterSidebar";
import { Link, useSearchParams } from "react-router";
import { useCart } from "@/context/CartContext";
import "@/assets/ProductList.css";

const ProductsList = () => {
  const { loader, products, errors, fetchProducts, setLoader } = useProduct();
  const { categoryLoader, categories } = useCategory();
  const { cart, addToCart, removeFromCart } = useCart();

  const [selectedCategories, setCategory] = useState<number[] >([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterLoader, setFilterLoader] = useState<boolean>(false);

  useEffect(() => {
    const categoryParams = searchParams.get("categories");
    setCategory(categoryParams?.split(",").map(Number) || []);
    setLoader(true);
    fetchProducts(categoryParams || "");
  }, [searchParams]);

  useEffect(() => {
    if (!loader) {
      setFilterLoader(false);
    }
  }, [loader]);

  const handleFilter = (selectedList: number[]) => {
    setSearchParams({ categories: selectedList.join(",") });
    setFilterLoader(true);
    setCategory(selectedList);
  };

  if (loader || categoryLoader) return <Loader />;
  if (errors) return <div className="error-box">Something went wrong</div>;

  return (
    <div className="products-container">
      <FilterSidebar
        categories={categories}
        selected={selectedCategories}
        handleFilter={handleFilter}
        loader={filterLoader}
      />

      <main className="main-content">
        <div className="products-grid">
          {products.map((prd) => {
            const { id, title, images, price } = prd;
            const isItemInCart = cart.some((item) => item.id === id);

            return (
              <div key={id} className="product-card">
                <Link to={`/product/${id}`} className="product-link">
                  <img alt={title} src={images[0]} className="card-img" />
                  <div className="card-info">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-price">${price}</p>
                  </div>
                </Link>

                <div className="card-actions">
                  {isItemInCart ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromCart(id);
                      }}
                      className="btn-card btn-remove"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(prd);
                      }}
                      className="btn-card btn-add"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductsList;
