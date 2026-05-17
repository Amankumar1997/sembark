import Loader from "@/shared/common/Loader";
import { useProduct } from "../hooks/useProducts";
import { Fragment, useEffect, useState } from "react";
import { useCategory } from "../hooks/useCategories";
import FilterSidebar from "./FilterSidebar";
import { Link, useSearchParams } from "react-router";
const ProductsList = () => {
  const { loader, products, errors, fetchProducts } = useProduct();
  const { categoryLoader, categories } = useCategory();
  const [selectedCategories, setCategory] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterLoader, setFilterLoader] = useState<boolean>(false);

  useEffect(() => {
    const categoryParams = searchParams.get("categories");
    setCategory(categoryParams?.split(",") || []);
    fetchProducts(categoryParams || "");
  }, [searchParams]);

  const handleFilter = (selectedList: string[]) => {
    setSearchParams({
      categories: selectedList.join(","),
    });
    setFilterLoader(true);
    setCategory(selectedList);
  };

  if (loader || categoryLoader) return <Loader />;
  if (errors) return <div>There is Something went wrong</div>;
  return (
    <>
      <FilterSidebar
        categories={categories}
        selected={selectedCategories}
        handleFilter={handleFilter}
        loader={filterLoader}
      />
      {products.map((prd) => {
        const { id, title, images, price } = prd;
        return (
          <Fragment key={id}>
            <Link to={`/${id}`}>
              <p>{title}</p>
              <p>{price}</p>
              <img alt="Product Image" src={images[0]} />
            </Link>
          </Fragment>
        );
      })}
    </>
  );
};

export default ProductsList;
