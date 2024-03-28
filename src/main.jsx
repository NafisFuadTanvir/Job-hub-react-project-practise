import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/HOME/Home';
import Appliedjobs from './components/AppliedJobs/Appliedjobs';
import Blogs from './components/Blogs/Blogs';
import Jobdetails from './components/jobdetails/Jobdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
    
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/applied",
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element:<Jobdetails></Jobdetails>, 
        loader: () => fetch('../jobs.json') 
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
