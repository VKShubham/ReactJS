import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './componets/Layout.jsx'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import Contactus from './componets/ContactUs/ContactUs.jsx'
import User from './componets/User/User.jsx'
import Github from './componets/Github/Github.jsx'
// import Github, { Optimize } from './componets/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      } 
      , 
      {
        path : "about",
        element : <About />
      }
      ,
      {
        path : "Contactus",
        element : <Contactus />
      }
      ,
      {
        path : "User/:userid",
        element : <User />
      }
      ,
      {
        path : "github",
        // loader : {Optimize},
        element : <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
