import * as yup from "yup"
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";


export const Restvalid = yup.object({



newPassword:yup.string().required("password is required")
.min(8,"must at least 8 character")
.matches(/[A-Z]/,"must at least contain one capital letter")
.matches(/[a-z]/,"must at least contain one small letter")
.matches(/[!@$&?]/,"must at least contain one special character"),

code:yup.string().required("code is required").min(4,"at least 4 number")








})