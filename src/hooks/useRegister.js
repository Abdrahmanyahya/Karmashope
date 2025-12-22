import { useMutation } from "@tanstack/react-query";
import axiosinstance from "../Api/axiosinstance";
import { useNavigate } from "react-router";
import { useState } from "react";

 


 export default function useRegister(){
        const navigate = useNavigate();
  const[servererror,setservererror] = useState([]);
const mutation = useMutation({
  
  mutationFn:async(values)=>{
return  await axiosinstance.post(`/Auth/Account/Register`,values)
  },
  onSuccess:()=>{
navigate("authlayout/Pages/Login");
  },
  onError:(err)=>{
             setservererror(err.response.data.errors);

  },
  
  
  })

  return {servererror,mutation}
 }