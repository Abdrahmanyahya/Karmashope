import { Height, Search } from '@mui/icons-material'
import { Box, colors, Grid, Icon, Link, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as linkicon} from 'react-router';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DialerSipIcon from '@mui/icons-material/DialerSip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import i1 from "../../assets/i1.jpg";
import i2 from "../../assets/i2.jpg";

import i3 from "../../assets/i3.jpg";

import i4 from "../../assets/i4.jpg";
import i5 from "../../assets/i5.jpg";
import i6 from "../../assets/i6.jpg";
import i7 from "../../assets/i7.jpg";
import i8 from "../../assets/i8.jpg";



function Footer() {
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:"white",
  '&:hover': {
    backgroundColor:"white",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
  return (
    <div>
      <h2>Footer</h2>


      <Box sx={{height:"100vh"}} component="div" >


    <Box sx={{height:"60vh",background:"#222222",padding:"100px"}}>
      
      <Grid container spacing={4} >

       <Grid item xs={12} sm={6} md={3}>
        <Typography component="h2" variant='h5' color='white' marginBottom="20px">About Us</Typography>
        <Typography component="div">
<Typography color='#717777'>Lorem ipsum dolor sit amet consectetur,</Typography>
  <Typography color='#717777'> adipisicing elit,sed do eiusmod tempor</Typography>
  <Typography color='#717777'> incididunt ut labore dolore magna aliqua.</Typography>

        </Typography>
       </Grid>

       <Grid item xs={12} sm={6} md={3}>

        <Typography component="h2" variant='h5' color='white' marginBottom="20px">Newsletter</Typography>
        <Typography color='#717777' marginBottom="15px">Stay update with our latest</Typography>
        <Search color='white'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter Email"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
       </Grid>

<Grid item xs={12} sm={6} md={3}>
  <Typography component="h2" variant='h5' color='white' marginBottom="20px">Instragram Feed</Typography>

  <Typography component="div" display="flex" gap="10px" marginBottom="10px">
    <img src={i1} width="60px" height="60px"></img>
        <img src={i2} width="60px" height="60px"></img>
    <img src={i3} width="60px" height="60px"></img>
    <img src={i4} width="60px" height="60px"></img>
  </Typography>
<Typography component="div" display="flex" gap="10px">
    <img src={i5} width="60px" height="60px"></img>
    <img src={i6} width="60px" height="60px"></img>
    <img src={i7} width="60px" height="60px"></img>
    <img src={i8} width="60px" height="60px"></img>

  </Typography>
</Grid>

<Grid item xs={12} sm={6} md={3}>
  <Typography component="h2" variant='h5' color='white' marginBottom="20px">Follow Us</Typography>
  <Typography color='#717777' marginBottom="8px">Let us be social</Typography>
  <Box display="flex" gap="10px">
    <Link component={linkicon} to="#" ><FacebookIcon sx={{'&:hover':{color:"#ab601c"}}}></FacebookIcon></Link>

<Link component={linkicon} to="#"><TwitterIcon sx={{'&:hover':{color:"#ab601c"}}}></TwitterIcon></Link>
<Link component={linkicon} to="#"><InstagramIcon sx={{'&:hover':{color:"#ab601c"}}}></InstagramIcon></Link>
<Link component={linkicon} to="#"><DialerSipIcon sx={{'&:hover':{color:"#ab601c"}}}></DialerSipIcon></Link>

  </Box>
</Grid>

<Grid item xs={12} sm={6} md={3} >
  <Box display="flex" gap="4px"  padding="40px" marginLeft="50px">
<Typography color='#717777' variant="body2">Copyright ©2025 All rights reserved | This template is made with </Typography>
 <Typography><FavoriteBorderIcon sx={{color:'#ab601c'}} fontSize="small"></FavoriteBorderIcon></Typography> 

<Typography color='#ab601c' variant='body2'>by Colorlib</Typography>
    
  </Box>
  
</Grid>

      </Grid>
       


    
    </Box>
      

      </Box>
    </div>
  )
}

export default Footer
