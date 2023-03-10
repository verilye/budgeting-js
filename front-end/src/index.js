import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Splash from './splash/splash';
import BudgetViewPort from './budgeting/budget-viewport';
import DataVisualisations from './data-visuals/visuals';


// A Hash router means putting '/#' between the base url and the 
// route keyword

const router = createHashRouter([
  {
    path:"/",
    element: <Splash/>
  },
  {
    path:"/budgeting",
    element:<BudgetViewPort/>
  },
  {
    path:"/data-visualisations",
    element:<DataVisualisations/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
