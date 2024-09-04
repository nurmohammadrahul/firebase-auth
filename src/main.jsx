import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  
   <AuthProvider> <RouterProvider router={router}/></AuthProvider>

)
