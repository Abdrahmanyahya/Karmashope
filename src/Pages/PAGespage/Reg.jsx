import React from 'react'
import Hero from '../../Component/Herosec/Hero'
import Navbar from '../../Component/navbar/Navbar'
import { Margin } from '@mui/icons-material'
import { Box, positions } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import login from "../../assets/login.jpg";

function Reg() {

    const {register,handleSubmit}=useForm();


    const registerform= async(values)=>{
        console.log(values);
        try{
          const responce = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,values);
          console.log(responce);
        }catch(err){

        }finally{

        }
    }
  return (
    <div>
<Box>
  <Hero sx={{position: "relative"}}>
  <Typography component="h2" variant='h3' sx={{position:"absolute", top:"60%" ,left:"80%", transform: "translate(-50%, -50%)", color:"white",fontWeight:"600px"
}}>Register</Typography>

<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"80.5%",transform: "translate(-50%, -50%)",color:"white"}}>Home </Typography>
<ArrowForwardIcon fontSize='small' sx={{position:"absolute", top:"75%" ,left:"84%",transform: "translate(-50%, -50%)",color:"white"}}></ArrowForwardIcon>
<Typography component="h2" variant='h6' sx={{position:"absolute", top:"75%" ,left:"88%",transform: "translate(-50%, -50%)",color:"white"}}>Register </Typography>



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
      <Box component="form" onSubmit={handleSubmit(registerform)} sx={{padding:"100px", display:"flex" ,flexDirection:"column",gap:"30px",}}>
<TextField  {...register('email')} label="email"   variant="standard" />
<TextField  {...register('password')} label="password"  variant="standard" />
<TextField  {...register('userName')} label="userName"  variant="standard" />
<TextField  {...register('fullName')} label="fullName"  variant="standard" />
<TextField  {...register('phoneNumber')} label="phoneNumber"  variant="standard" />
<Button variant="outlined" sx={{color:"#ff7300",outlineColor:"#ff7300"}} type='submit'>Register</Button>


      </Box>
</Box>
    

    </div>
  )
}

export default Reg
