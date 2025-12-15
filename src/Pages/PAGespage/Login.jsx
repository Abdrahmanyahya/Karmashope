import React from 'react'
import Hero from '../../Component/Herosec/Hero'
import Navbar from '../../Component/navbar/Navbar'
import { Margin } from '@mui/icons-material'
import { Box, color, positions } from '@mui/system'
import { Button, CircularProgress, Link, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import login from "../../assets/login.jpg";
import { yupResolver } from '@hookform/resolvers/yup'
import { Loginvald } from '../../validation/Loginvald'
import { useState } from 'react'
import { Link as linkrouter } from 'react-router'
import axiosinstance from '../../Api/axiosinstance'

function Login() {
  const [serverEroor,setServerError]= useState([])
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
  resolver:yupResolver(Loginvald),
  mode:"onBlur"
});


    const loginform= async(values)=>{
        console.log(values);
        try{
          const responce = await axiosinstance.post(`/Auth/Account/Login`,values);
          console.log(responce);
        }catch(err){
          console.log(err);
          setServerError(err.responce.data.errors);

        }finally{

        }
    }

  return (
    <div>
      <Box>
  <Hero sx={{position: "relative"}}>
  <Typography component="h2" variant='h3' sx={{position:"absolute", top:"60%" ,left:"80%", transform: "translate(-50%, -50%)", color:"white",fontWeight:"600px"
}}>Login</Typography>

<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"80.5%",transform: "translate(-50%, -50%)",color:"white"}}>Home </Typography>
<ArrowForwardIcon fontSize='small' sx={{position:"absolute", top:"75%" ,left:"84%",transform: "translate(-50%, -50%)",color:"white"}}></ArrowForwardIcon>
<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"87%",transform: "translate(-50%, -50%)",color:"white"}}>Login </Typography>



  </Hero>

      </Box>
    <Box sx={{display:"flex"}}>
      <Box padding="80px" sx={{position:"relative"}}>
<Box sx={{filter:"brightness(50%)" }}>
      <img src={login}></img>
      
    </Box>
    <Box sx={{position:"absolute" ,top:"300px",left:"280px",color:"white"}}>
      <Typography component="h2" variant='h5' >New to our website?</Typography>
      </Box>
      <Box sx={{position:"absolute" ,top:"340px",left:"220px",color:"white", display:"flex", flexDirection:"column",gap:"20px",alignItems:"center" }}>
        <Box>
 <Typography variant='body2' >There are advances being made in science and technology</Typography>
        <Typography variant='body2'> everyday, and a good example of this is the</Typography>
        </Box>
        
        <Button variant="contained" sx={{background:"#ff7300" ,padding:"10px", marginRight:"50px"}}>CREATE AN ACCOUNT</Button>

    </Box>

      </Box>
      <Box component="form"  onSubmit={handleSubmit(loginform)} sx={{padding:"100px", display:"flex" ,flexDirection:"column",gap:"30px",}}>
        {serverEroor.length >0 ?

          serverEroor.map((err)=>{
            return <Typography sx={{color:"red"}}>{err}</Typography>
          })
        
        
        :null}
<TextField   {...register('email')} label="email"   variant="standard" 
error={errors.email} helperText={errors.email?.message}
/>
<TextField {...register('password')} label="password"  variant="standard" 
error={errors.password} helperText={errors.password?.message}
/>
<Box sx={{display:"flex", flexDirection:"column" ,gap:"10px"}}>
<Button variant="outlined" sx={{color:"#ff7300",outlineColor:"#ff7300" ,display:"flex" ,justifyContent:"center", alignItems:"center"}}  disabled={isSubmitting} type='submit' >
{isSubmitting? <CircularProgress></CircularProgress>:"Log in"}
</Button>

<Link variant='body2' sx={{marginLeft:"10px",color:"#ff7300",textDecoration:"none"}} component={linkrouter} to="/authlayout/Pages/sentcode" >Forget password?</Link>
</Box>


      </Box>
</Box>
    


    </div>
  )
}

export default Login
