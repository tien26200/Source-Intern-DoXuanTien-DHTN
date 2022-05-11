import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const HomeLayout = lazy(() => import("../layouts/HomeLayout.js"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout.js"));
/***** Pages ****/

const Home = lazy(() => import("../views/home/Home.js"));
const Starter = lazy(() => import("../views/admin/Starter.js"));
const Product = lazy(() => import("../views/admin/Product.js"));
const ProductAdd = lazy(() => import("../views/admin/ProductAdd.js"));
const ProductDetail = lazy(() => import("../views/home/ProductDetail.js"));
const Category = lazy(() => import("../views/admin/Category.js"));
const Checkout = lazy(() => import("../views/home/Checkout.js"))
const Login = lazy(() => import("../views/home/Login/Login.js"));
const Register = lazy(() => import("../views/home/Register/Register.js"));
const SignIn = lazy(() => import("../views/home/SignIn/index.jsx"));
const CheckoutList = lazy(() => import("../views/CheckoutList.js"));
const Header = lazy(() => import("../views/home/Header/index"))
const Product_Userr = lazy(()=>import("../views/home/User_Product/index"))
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", exact: true, element: <ProductDetail /> },
      // { path: "Product_User",  element: <Product_Userr /> },
      // { path: "checkout", exact: true, element: <Checkout /> },
    ],
  },
  {
    path: "/",
    element: <Outlet/>,
    children: [

      { path: "checkout", exact: true, element: <Checkout /> },
    ],
  },
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "signin", element: <SignIn /> },

    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "Product_User", element: <Product_Userr /> },

    ],
  },
  {
    path: "/admin",
    element: <FullLayout />,
    children: [
      { path: "", element: <Navigate to="starter" /> },
      { path: "starter", exact: true, element: <Starter /> },
      { path: "product", exact: true, element: <Product /> },
      { path: "product/add", exact: true, element: <ProductAdd /> },
      { path: "category", exact: true, element: <Category /> },
      { path: "checkout-list", exact: true, element: <CheckoutList /> },
    ],
  },
];

export default ThemeRoutes;
