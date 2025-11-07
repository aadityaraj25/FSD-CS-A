import React from 'react'
import Header from '../../../../../BOOK-VITE-APP/src/component/Header'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default UserDashboard