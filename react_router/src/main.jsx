import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import "./index.css"
import Root,{loader as rootLoader} from "./routes/root";
import ErrorPage from "./errorPage"
import Contact,{loder as contactLoder}from "./routes/contact"
// import{loder  as rootLoader} from "./routes/root";
import{action as rootAction} from "./routes/root";
import EditContact,{action as editAction} from "./routes/edit";
import {action as destroyAction} from "./routes/destroy";
const router = createBrowserRouter([
  {

  path:"/",
  element:<Root/>,
  errorElement:<ErrorPage/>,
  loader:rootLoader,
  action:rootAction,
  children:[
    {index:true,element:<div>this is the index page</div>},
    {
    
    path:"/contacts/:contactId",
    element:<Contact/>,
    loader:contactLoder
  },
     {
    path:"/contacts/:contactId/edit",
    element:<EditContact/>,
    loader:contactLoder,
    action:editAction
  },
  {
    path:"/contacts/:contactId/destroy",
    action:destroyAction
  }
  ]
  },

])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
