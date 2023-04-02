import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from 'Pages/Home';
import { Feature } from 'Pages/Feature';
import { Nav } from 'Components/Nav';
import { Info } from 'Components/Info';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppWrapper() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Info/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <AppWrapper/>,
    children:[
         {
             path: "/",
             element: <Home/>
         },
         {
             path: "/feature/:featureId",
             element: <Feature/>
         },
    ]
}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);