import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Component/footer/Footer'

function AuthnLayout() {
  return (
    <div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default AuthnLayout
