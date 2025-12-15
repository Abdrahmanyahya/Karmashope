import React, { useEffect, useState } from 'react'
import axiosinstance from '../../Api/axiosinstance';
import { Box, Card, CircularProgress, Grid, Typography } from '@mui/material';
import {useQuery} from '@tanstack/react-query'
import { data } from 'react-router';
import { usecategorys } from '../../hooks/usecategorys';

function Category() {

   

   const {data,isLoading,isError}= usecategorys();

   
 if(isLoading)return <CircularProgress></CircularProgress>
    if(isError) return <Typography>Error</Typography>



  return (
    <div>
      
   <Box sx={{padding:"20px"}}>
    <Typography variant='h2' sx={{padding:"10px"}}>Categorys :</Typography>

    
        <Grid container spacing={3}>
            {
           data.map((cat)=>{
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

export default Category;
