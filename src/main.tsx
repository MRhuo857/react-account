import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const id = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(id);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, //如果有一个可不写
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div>路由跳转</div> }, // 路由/显示
      {
        path: "1",
        element: <div>路由1</div>,
      },
      {
        path: "2",
        element: <div>路由2</div>,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
