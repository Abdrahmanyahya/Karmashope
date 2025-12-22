import { useMutation } from "@tanstack/react-query";
import axiosinstance from "../Api/axiosinstance";
import { useNavigate } from "react-router";
import { useState } from "react";

 


 export default function useLogin(){
        const navigate = useNavigate();
  const [serverEroor,setServerError]= useState([])
const mutation = useMutation({
  
  mutationFn:async(values)=>{
return  await axiosinstance.post(`/Auth/Account/Login`,values)
  },
  onSuccess:()=>{
navigate("/cat/shopcat");
  },
  onError:(err)=>{
             setservererror(err.response.data.errors);

  },
  
  
  })

  return {serverEroor,mutation}
 }