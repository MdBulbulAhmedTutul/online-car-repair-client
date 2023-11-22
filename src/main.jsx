import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './components/Erropage/ErrorPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/provider/AuthProvider';
import DetailPage from './Pages/DetailsPage/DetailPage';
import BookingPage from './Pages/BookingPage/BookingPage';
import PrivateRouts from './components/routes/PrivateRouts';
import OrderPage from './Pages/OrderPage/OrderPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRouts><DetailPage></DetailPage></PrivateRouts>
      },
      {
        path: '/booking/:id',
        element: <PrivateRouts><BookingPage></BookingPage></PrivateRouts>
      },
      {
        path: '/order',
        element: <PrivateRouts><OrderPage></OrderPage></PrivateRouts>
      }
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
