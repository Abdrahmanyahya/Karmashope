import * as yup from "yup"
import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";



export const Sentcodevalid = yup.object({

email:yup.string().required("email is required").email("invalid email")



})