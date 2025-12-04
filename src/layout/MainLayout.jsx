import React from 'react'
import Navbar from '../Component/navbar/Navbar'
import Footer from '../Component/footer/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
      
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>



    </div>
  )
}

export default MainLayout
