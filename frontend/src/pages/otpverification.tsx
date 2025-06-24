import { useContext, useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/input";
import { PageWrapper } from "../components/pagewrapper";
import { UserContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Otp() {

   const navigate= useNavigate();
   const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session Expired")
        navigate("/signin")
        return};
   const {setislogin}= useContext(UserContext)
    async function veri() {
        
        const email =localStorage.getItem("email")
        const response = await axios.post("http://localhost:3000/user/verification", 
            {
                email: email,
                otp: otp
        
        })
        if (response.data.success == false) {
            setmsg(response.data.msg)
            seterror(true)
        }
        localStorage.setItem("token",response.data.token);
        setislogin(true)
        toast.success("Signup successfully")
        navigate("/dashboard")
    }
    const [otp, setotp] = useState(0)
    const [error, seterror] = useState(false);
    const [msg, setmsg] = useState("");

    return <div>
        <PageWrapper>
            <div className="space-y-6">
                <img src="logo/otp.png" alt="Logo" width={100} height={100} />
                <Heading label={"Enter otp to login"}></Heading>
                <Input onChange={(e) => setotp(Number(e.target.value))} placeholder="******" label="Enter here" type="text" ></Input>
                {error && (
                    <div className="text-red-600 text-sm -mt-3">{msg}</div>
                )}
                <button
                    onClick={veri}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Verify
                </button>
            </div>
        </PageWrapper>

    </div>
}