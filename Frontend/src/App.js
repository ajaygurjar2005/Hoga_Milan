

import { BrowserRouter, Routes, Route, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Main from './Pages/Main'
import Banner from './Pages/Website_pages/Banner'
import Abouts from './Pages/Website_pages/Abouts'
import Register from './Pages/Website_pages/Register'
import Contacts from './Pages/Website_pages/Contacts'
import Logins from './Pages/Website_pages/Logins'
import FullProfile from './Pages/Website_pages/FullProfile'
import MainAdmin from './Pages/Admin_pages/MainAdmin'


import Login from './Pages/Admin_pages/Login'

const App = () => {

  const routing = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Banner />
        },
        {
          path: '/about',
          element: <Abouts />
        },
        {
          path: '/contact',
          element: <Contacts />
        },
        
        {
          path: '/user/:userId',
          element: <FullProfile/> 
        } 
      ]


    },
    {
      path: '/login',
      element: <Logins />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: "/admin/login",
      element: <Login />
    }
  ])


return (
  <div>
    <RouterProvider router={routing} />
  </div>
)
}


export default App
