import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotfoundPage";
import { MainLayout } from "../layouts/MainLayout";
import { welcomeRoute } from "./welcomeRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, //如果有一个可不写
    errorElement: <NotFoundPage />,
    children: [welcomeRoute],
  },
]);
