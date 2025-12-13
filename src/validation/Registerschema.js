import React from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

  
     export const Registerschema = yup.object({
      fullName:yup.string().required("fullName is required"),
      email: yup.string().email("invalid email").required("email is required"),
      userName:yup.string().matches(/^[a-zA-Z0-9.-_]+$/,"invalid user name")
      .min(4,"must at least contain 4 character").required("username is required"),
      phoneNumber:yup.string().required("phoneNumber is required"),
      password:yup.string().required("password is required").min(8,"must at least constain 8 character")
      .matches(/[a-z]/,"must at least constain one small letter")
      .matches(/[A-Z]/,"must at least contain one Capital letter")
      .matches(/[!@#$&?]/,"must at least contain one spcial character")
      
      })
    
  



