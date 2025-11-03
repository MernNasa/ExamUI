import React from 'react'
import Navbar from './components/layout/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import { ToastContainer } from 'react-toastify'
// https://aptinest.onrender.com/api
const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        
        <ToastContainer/>
    </div>
  )
}

export default Root