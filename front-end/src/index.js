import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Splash from './splash/splash';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Splash/>
  },
  {
    path:"/planner",
    element:<div> "Welcome to the weekly planner"</div>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
