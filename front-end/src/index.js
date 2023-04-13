import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Splash from './splash_screen/splash_screen';
import BudgetViewPort from './budgeting/budgeting';
import DataVisualisations from './data_visuals/data_visuals';
import GuardedRoute from './authentication/GuardedRoute'

const router = createBrowserRouter([
  {
    path:"/budgeting-js/",
    element:
          <Splash/>
        
  },
  {
    path:"/budgeting-js/budgeting",
    element:
      <GuardedRoute>
        <BudgetViewPort/>
      </GuardedRoute>
  },
  {
    path:"/budgeting-js/data-visuals",
    element:
    <GuardedRoute>
      <DataVisualisations/>
    </GuardedRoute>
    
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
);
