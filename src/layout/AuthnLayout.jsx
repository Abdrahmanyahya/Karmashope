import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Component/footer/Footer'
import Navbar from '../Component/navbar/Navbar'

function AuthnLayout() {
  return (
    <div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default AuthnLayout
