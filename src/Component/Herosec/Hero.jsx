import { Box } from '@mui/material'
import React from 'react'
import banner from "../../assets/common-banner.jpg";
import Navbar from '../navbar/Navbar';

function Hero({ sx, children }) {
  return (
    <div>

<Box sx={{height:"70vh",backgroundImage:`url(${banner})`,backgroundSize:"cover", backgroundPosition:"center",position:"relative",...sx}}>
   <Navbar></Navbar>
{children}
</Box>


    </div>
  )
}

export default Hero
