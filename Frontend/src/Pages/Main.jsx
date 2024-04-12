import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Website_pages/Navbar'
import Footers from './Website_pages/Footers'


const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footers />
    </div>
  )
}

export default Main
