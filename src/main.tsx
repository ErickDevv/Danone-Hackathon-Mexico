import React from "react";
import ReactDOM from "react-dom/client";
import EcoDanone from "./pages/ecodanone";
import EcoHealth from "./pages/ecohealth";
import Home from "./pages/home";
import logo from "../public/logo.png";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ecohealth",
    element: <EcoHealth />,
  },
  {
    path: "/ecodanone",
    element: <EcoDanone />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link rel="icon" type="image/svg+xml" href={logo} sizes="any" />

    <RouterProvider router={router} />
  </React.StrictMode>
);
