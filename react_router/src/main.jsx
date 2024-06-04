import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Corrected prop name
  }
  {
    path: "/profile",
    element: <Profile />, // Corrected prop name
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
