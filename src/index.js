import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/landing';
import Register from './pages/register';
import DashBoard from './pages/dashboard';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Explore from './pages/explore';
import Activity from './pages/activity';

const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage/> ,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
  },
  {
    path: "/explore",
    element: <Explore/>
  }, 
  {
    path:"/activity",
    element: <Activity/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
