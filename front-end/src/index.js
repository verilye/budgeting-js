import React from 'react';
import ReactDOM from 'react-dom/client';
import Splash from './routes/splash_screen/splash_screen';
import BudgetViewPort from './routes/budgeting/budgeting';
import DataVisualisations from './routes/data_visuals/data_visuals';
import GuardedRoute from './authentication/GuardedRoute';
import { AuthProvider } from './authentication/AuthContext';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/budgeting-js/splash",
    element:
      <Splash />
  },
  {
    path: "/budgeting-js/",
    element:
      <GuardedRoute>
        <BudgetViewPort />
      </GuardedRoute>

  },
  {
    path: "/budgeting-js/data-visuals",
    element:
      <GuardedRoute>
        <DataVisualisations />
      </GuardedRoute>
  },
  {
    path:"*",
    element:
      <Navigate to="/budgeting-js" replace/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );

};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

