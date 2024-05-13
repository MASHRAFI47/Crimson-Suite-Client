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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "Error page",
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/map-location",
        element: <PrivateRoute><MapLocation /></PrivateRoute>
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
        element: <Rooms />
      },
      {
        path: "/my-bookings",
        element: <MyBookings />
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails />,
        loader: ({params}) => fetch(`http://localhost:4000/rooms/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
