import { createBrowserRouter } from "react-router";
import Products from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/product-cart",
    element: <Cart />,
  },
]);
