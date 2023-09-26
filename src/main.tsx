import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Gift from './pages/Gift.tsx';
import Encoder from './pages/Encoder.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Encoder />
  },
  {
    path: "/gift",
    element: <Gift />,
  },
  {
    path:"/*",
    element: <Encoder />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
