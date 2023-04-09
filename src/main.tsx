import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "virtual:uno.css";
import "./global.scss";

const id = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(id);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
