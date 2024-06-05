import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DefaultProfile from "./DefaultProfile.jsx";
import Profile from "./profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

// Profile component should render Outlet for nested routes
const ProfileLayout = () => (
  <div>
    <Profile />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
