import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Hero from '../../Component/Herosec/Hero'
import Category from '../../Component/category/Category'

function ShopCat() {
  return (
    <div>

<Box>
  <Hero sx={{position: "relative"}}>
  <Typography component="h2" variant='h3' sx={{position:"absolute", top:"50%" ,left:"65%", transform: "translate(-50%, -50%)", color:"white",fontWeight:"600px"
}}>Shop Category page</Typography>

<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"65%",transform: "translate(-50%, -50%)",color:"white"}}>Home </Typography>
<ArrowForwardIcon fontSize='small' sx={{position:"absolute", top:"75%" ,left:"68.5%",transform: "translate(-50%, -50%)",color:"white"}}></ArrowForwardIcon>
<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"71.5%",transform: "translate(-50%, -50%)",color:"white"}}>Shop </Typography>
<ArrowForwardIcon fontSize='small' sx={{position:"absolute", top:"75%" ,left:"74.5%",transform: "translate(-50%, -50%)",color:"white"}}></ArrowForwardIcon>
<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"79%",transform: "translate(-50%, -50%)",color:"white"}}>Category </Typography>



  </Hero>
</Box>


<Category></Category>


      <h2>Shope Cate</h2>
    </div>
  )
}

export default ShopCat
