import Loader from "@/shared/common/Loader";
import { useProduct } from "../hooks/useProducts";
import { Fragment } from "react";
const ProductsList = () => {
  const { loader, products, errors } = useProduct();

  if (loader) return <Loader/>
  if (errors) return <div>There is Something went wrong</div>;
  return (
    <>
      {products.map((prd) => {
        const { id, title, images,price } = prd;
        return (
          <Fragment key={id}>
            <div>
              <p>{title}</p>
              <p>{price}</p>
              <img alt="Product Image" src={images[0]}/>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default ProductsList;
