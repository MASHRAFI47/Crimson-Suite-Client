import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "Error page",
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
