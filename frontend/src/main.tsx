import React from "react";
import ReactDOM from "react-dom/client";
import EcoDanone from "./pages/ecodanone";
import Home from "./pages/home";
import logo from "../public/logo.png";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ecodanone",
    element: <EcoDanone />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link rel="icon" type="image/svg+xml" href={logo} sizes="any" />
    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
