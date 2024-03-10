import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cid2 from './Cid2.jsx'
import Cid from './Cid.jsx'
import ErrorPage from './ErrorPage.jsx'
import Profile from './Profile.jsx'
import AllProfile from './AllProfile.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

const router=createBrowserRouter([
   {
    path:"/",
    element:<Cid name="Rounak"/>,
    errorElement: <ErrorPage/>,
    
   },
   {
     path:"/cid2",
     element:<Cid2/>
   },
   {
    path: '/profiles',
    element: <AllProfile />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App/>
  </React.StrictMode>
)
