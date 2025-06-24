import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/input";
import { Slide } from "../components/slide";
import { PageWrapper } from "../components/pagewrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


export function Signup() {

  const [firstname ,setfirstname]=useState("")
  const [lastname ,setlastname]=useState("")
  const [email ,setemail]=useState("")
  const [password ,setpassword]=useState("")
  const [error,seterror]= useState(false);
  const [msg,setmsg]= useState("");
  const [loading,setloading]= useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     setloading(true)
     try{
    const response= await axios.post("http://localhost:3000/user/signup",{
      
        firstName:firstname,
        lastName:lastname,
        email:email,
        password:password 
      
    })
    if(response.data.success==false){
      setloading(false)
      setmsg(response.data.msg)
      seterror(true)
      return;
    }
    localStorage.setItem("email",response.data.email);
    setloading(false);
    toast.success("Otp send succesully")
    navigate("/verification")
    
    console.log("Form submitted");
  }
  catch(err){
    console.error(err)
  }
  };

  return (
   <PageWrapper>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Heading label="Sign up to your account" />
          {error&&(
            <div className="text-red-600 text-sm -mt-3">{msg}</div>
          )}
          <Input onChange={(e)=>setfirstname(e.target.value)} label="First Name" placeholder="John" type="text" />
          <Input onChange={(e)=>setlastname(e.target.value)} label="Last Name" placeholder="Doe" type="text" />
          <Input onChange={(e)=>setemail(e.target.value)}label="Email" placeholder="xyz@example.com" type="email" />
          <Input onChange={(e)=>setpassword(e.target.value)} label="Password" placeholder="••••••••" type="password" />

          <button
          disabled={loading}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading? "Wait..." :"Sign up"}
            
          </button>

          <Slide label={" Already have an account?"} to={"/signin"} text={"Sign in"}/>
        </form>
</PageWrapper>
  )  
}
