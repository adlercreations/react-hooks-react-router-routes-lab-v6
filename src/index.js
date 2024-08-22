import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes'; // Import the routes

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);