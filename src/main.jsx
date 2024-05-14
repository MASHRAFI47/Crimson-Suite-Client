import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import MapLocation from './pages/Home/MapLocation/MapLocation.jsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Rooms from './pages/Rooms/Rooms.jsx';
import RoomDetails from './components/RoomDetails/RoomDetails.jsx';
import MyBookings from './components/MyBookings/MyBookings.jsx';
import ReviewPage from './pages/ReviewPage/ReviewPage.jsx';
import UpdateDate from './components/UpdateDate/UpdateDate.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-page",
        element: <AboutPage />
      },
      {
        path: "/map-location",
        element: <MapLocation />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/my-bookings",
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      },
      {
        path: "/room-details/:id",
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/rooms/${params.id}`)
      },
      {
        path: "/update-date/:id",
        element: <PrivateRoute><UpdateDate /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/roomBookings/${params.id}`)
      },
      {
        path: "/review/:id",
        element: <PrivateRoute><ReviewPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/roomBookings/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
