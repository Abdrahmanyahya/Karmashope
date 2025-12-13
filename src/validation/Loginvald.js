import React from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


export const Loginvald = yup.object({

email:yup.string().email("invalid email").required("email is required"),
password:yup.string().required("password is required")
.matches(/[a-z]/,"must at least contain one small letter")
.matches(/[!@#$&?]/,"must at least contain one spiceal latter")
.min(8,"at leat 8 character")



})