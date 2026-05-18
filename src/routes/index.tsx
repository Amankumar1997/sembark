import { createBrowserRouter, Navigate } from "react-router";
import Products from "@/pages/HomePage";
import ProductDetail from "@/pages/ProductDetailPage";
import Cart from "@/pages/CartPage";
import MainLayout from "@/layout/MainLayout";

const appRoutes = [
  {
    index: true,
    element: <Products />,
  },
  {
    path: "product/:productId",
    element: <ProductDetail />,
  },
  {
    path: "product-cart",
    element: <Cart />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: appRoutes,
  },
  {
    path: "*", //at the end try to add 404 found before buld 
    element: <Navigate to="/" replace />,
  },
]);
