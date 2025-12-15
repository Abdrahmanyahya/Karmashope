import React, { useEffect, useState } from 'react'
import axiosinstance from '../../Api/axiosinstance';
import { Box, Card, Grid, Typography } from '@mui/material';

function Category() {

   const [categorys,setcategys] = useState([]);
const getCategory = async ()=>{
    try{

    const responce = await axiosinstance.get('/Categories');
    console.log(responce);
    setcategys(responce.data);
}catch(err){
    console.log(err);

}
   
   }


useEffect(()=>{
getCategory();
},[])

  return (
    <div>
      
   <Box sx={{padding:"20px"}}>
    <Typography variant='h2' sx={{padding:"10px"}}>Categorys :</Typography>

    
        <Grid container spacing={3}>
            {
           categorys.map((cat)=>{
            return <Grid item size={{xs:12,sm:6,md:3,lg:4}}>

        <Card sx={{padding:"20px", textAlign:"center"}}>{cat.name}</Card>
            </Grid>
        })
            }
         
    


        </Grid>
        
   </Box>


    </div>
  )
}

export default Category
