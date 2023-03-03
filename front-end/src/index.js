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
import Goals from './goals/goals';

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
  },
  {
    path:"/goals",
    element:<Goals/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
