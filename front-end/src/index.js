import React from 'react';
import ReactDOM from 'react-dom/client';
import Splash from './splash_screen/splash_screen';
import BudgetViewPort from './budgeting/budgeting';
import DataVisualisations from './data_visuals/data_visuals';
import GuardedRoute from './authentication/GuardedRoute';

import { AuthContext } from './authentication/context/AuthContext';
import { useAuth } from './authentication/hooks/useAuth';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

function App(){
    
  const {user} = useAuth();

  return(
    <AuthContext.Provider value = {{user}}>
      <RouterProvider router = {router} />
    </AuthContext.Provider>
  );

};


root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

