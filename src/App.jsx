import React from 'react'
import Home from './components/Page/Home'
import Philosophy from './components/Page/Philosophy';
import Store from './components/Page/Store';
import {createBrowserRouter, RouterProvider, Link, Outlet, } from 'react-router-dom'


const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/philosophy",
        element: <Philosophy />
      },
      {
        path: "/store",
        element: <Store />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App