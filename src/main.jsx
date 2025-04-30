import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Regist from "./pages/Regist.jsx";
import AuthLayouts from "./components/Layouts/AuthLayouts.jsx";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Regist",
    element: <Regist />,
  },
  {
    path: "/AuthLayouts",
    element: <AuthLayouts />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
