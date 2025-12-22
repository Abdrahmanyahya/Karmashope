import { useMutation } from "@tanstack/react-query";
import axiosinstance from "../Api/axiosinstance";
import { useNavigate } from "react-router";
import { useState } from "react";

 


 export default function useResetpass(){
          const[serverError,setServerError]= useState([]);

        const navigate = useNavigate();
const mutation = useMutation({
  
  mutationFn:async(values)=>{
     const Email = JSON.parse(localStorage.getItem("email")); 
        console.log(Email)
        const Code=values.code;
        const Newpass=values.newPassword;
          const ALLdata ={}
       ALLdata.newPassword=Newpass;
        ALLdata.code=Code;
ALLdata.email = Email.email
                console.log(ALLdata);
return  await axiosinstance.patch(`/Auth/Account/ResetPassword`,ALLdata);
  },
  onSuccess:()=>{
            navigate("/authlayout/Pages/Login");
  },
  onError:(err)=>{
             setServerError(err.response.data.errors);

  },
  
  
  })

  return {serverError,mutation}
 }