import { useMutation } from "@tanstack/react-query";
import axiosinstance from "../Api/axiosinstance";
import { useNavigate } from "react-router";
import { useState } from "react";

 


 export default function useSentCode(){
        const navigate = useNavigate();
const mutation = useMutation({
  
  mutationFn:async(values)=>{
return  await axiosinstance.post(`/Auth/Account/SendCode`,values)
  },
  onSuccess:()=>{
            navigate("/authlayout/Pages/resetpass");
  },
  
  
  
  })

  return {mutation}
 }