import React from 'react'
import Hero from '../../Component/Herosec/Hero'
import Navbar from '../../Component/navbar/Navbar'
import { Code, Margin } from '@mui/icons-material'
import { Box, color, positions } from '@mui/system'
import { Button, CircularProgress, Link, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import login from "../../assets/login.jpg";
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Link as linkrouter, Navigate, useNavigate } from 'react-router'
import { Sentcodevalid } from '../../validation/Sentcodevalid'
import { Restvalid } from '../../validation/Restvalid'
import { red } from '@mui/material/colors'
import axiosinstance from '../../Api/axiosinstance'
function RestPassword() {
  
      const[serverError,setServerError]= useState([]);

      const navigate= useNavigate();
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
  resolver:yupResolver(Restvalid),
  mode:"onBlur"
});


    const resetform= async(values)=>{
        const Email = JSON.parse(localStorage.getItem("email")); 
        console.log(Email)
        const Code=values.code;
        const Newpass=values.newPassword;
          const ALLdata ={}
       ALLdata.newPassword=Newpass;
        ALLdata.code=Code;
ALLdata.email = Email.email
                console.log(ALLdata);

        try{
          const responce = await axiosinstance.patch(`/Auth/Account/ResetPassword`,ALLdata);
          console.log(responce);
          if(responce.status==200){
            navigate("/authlayout/Pages/Login");
          }
          
        }catch(err){
        }finally{

        }
    }

  return (
    <div>

      <Box>
        <Navbar></Navbar>
  <Hero sx={{position: "relative"}}>
  <Typography component="h2" variant='h3' sx={{position:"absolute", top:"60%" ,left:"80%", transform: "translate(-50%, -50%)", color:"white",fontWeight:"600px"
}}>RestPassword</Typography>

<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"80.5%",transform: "translate(-50%, -50%)",color:"white"}}>Home </Typography>
<ArrowForwardIcon fontSize='small' sx={{position:"absolute", top:"75%" ,left:"84%",transform: "translate(-50%, -50%)",color:"white"}}></ArrowForwardIcon>
<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"89.8%",transform: "translate(-50%, -50%)",color:"white"}}>Restpassword </Typography>



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

      <Box component="form"  onSubmit={handleSubmit(resetform)} sx={{padding:"100px", display:"flex" ,flexDirection:"column",gap:"30px",}}>
       {serverError.length > 0 ?
       serverError.map((err)=>{
       return <Typography sx={{color:red}}>{err}</Typography>
       })
       
       
       :null}
<TextField   {...register('newPassword')} label="newPassword"   variant="standard" 
error={errors.newPassword} helperText={errors.newPassword?.message}
/>
<TextField   {...register('code')} label="code"   variant="standard" 
error={errors.code} helperText={errors.code?.message}
/>
<Button variant="outlined" sx={{color:"#ff7300",outlineColor:"#ff7300",textTransform:"capitalize"}} disabled={isSubmitting} type='submit' >
{isSubmitting? <CircularProgress></CircularProgress>:"submit"}
</Button>



      </Box>
</Box>
    


    </div>
  )
  
}

export default RestPassword


