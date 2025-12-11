import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Link } from '@mui/material';
import { Link as Routerlink } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function Navbar() {
  
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const [anchorE2, setAnchorE2] = React.useState(null);
  const openblog = Boolean(anchorE2);
  const handleClickblog = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseblog = () => {
    setAnchorE2(null);
  };

const [anchorE3, setAnchorE3] = React.useState(null);
  const openpage = Boolean(anchorE3);
  const handleClickpage = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClosepage = () => {
    setAnchorE3(null);
  };




  return (
    <div>
<Box sx={{ flexGrow: 1,p:"20px" }}>
      <AppBar position="static" color='white' sx={{p:"10px"}}>
        <Toolbar>
         

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"black", marginLeft:"50px" }}>
            KARMA
          </Typography>
          <Box sx={{display:"flex",gap:"40px"}}>
            <Link sx={{color:"black",textDecoration:"none"}} variant='body2' component={Routerlink} to="/home">HOME</Link>

            <div>
      <Link
        component={Routerlink}
        to="/home"
       variant='body2'
      sx={{color:"black",textDecoration:"none"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        SHOP
      </Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <Link onClick={handleClose} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="cat/shopcat">SHOP CATEGORY</Link>
        <Link onClick={handleClose} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="cat/ProdDet">PRODUCT DETAILS</Link>
        <Link onClick={handleClose} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="cat/ProdCheckout">PRODUCT CHEKOUT</Link>
        <Link onClick={handleClose} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="cat/shopecart">SHOPING CART</Link>
        <Link onClick={handleClose} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="cat/Confirmtion">CONFIRMTION</Link>


      </Menu>
    </div>

      <div>


  <Link
  component={Routerlink}
        to="/home"
    variant='body2'
    sx={{color:"black",textDecoration:"none"}}
    id="basic-button"
    aria-controls={openblog ? 'blog-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={openblog ? 'true' : undefined}
    onClick={handleClickblog}
  >
    BLOG
  </Link>

  <Menu
    id="blog-menu"
    anchorEl={anchorE2}       
    open={openblog}
    onClose={handleCloseblog}
    slotProps={{
      list: {
        'aria-labelledby': 'basic-button',
      },
    }}
  >
    <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="Blog/Blogoage">BLOG</Link>
    <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="Blog/BlogDet">BLOG DETAILS</Link>
  </Menu>
</div>


     <div>
  <Link
  component={Routerlink}
        to="/home"
    variant='body2'
    sx={{color:"black",textDecoration:"none"}}
    id="basic-button"
    aria-controls={openpage ? 'blog-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={openblog ? 'true' : undefined}
    onClick={handleClickpage}
  >
    PAGES
  </Link>

  <Menu
    id="blog-menu"
    anchorEl={anchorE3}      
    open={openpage}
    onClose={handleClosepage}
    slotProps={{
      list: {
        'aria-labelledby': 'basic-button',
      },
    }}
  >
    <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2'  component={Routerlink} to="authlayout/Pages/Login">LOGIN</Link>
        <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2'  component={Routerlink} to="authlayout/Pages/reg">REGISTER</Link>

    <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="Pages/Traking">TRACKING</Link>
    <Link onClick={handleCloseblog} sx={{display:"list-item", textDecoration:"none",color:"black",p:"10px"}} variant='body2' component={Routerlink} to="Pages/element">ELEMENTS</Link>

  </Menu>
</div>




            <Link sx={{color:"black",textDecoration:"none"}} variant='body2' component={Routerlink} to="/Con">CONTACT</Link>
           <Link component={Routerlink} sx={{ marginBottom:""}} to="/home"><BusinessCenterIcon sx={{color:"orange" ,fontSize:"20px"}}></BusinessCenterIcon></Link> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
