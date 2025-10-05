import React, { useContext, useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/input";
import { Slide } from "../components/slide";
import { PageWrapper } from "../components/pagewrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import { toast } from "sonner";
import { motion } from "framer-motion"
import Googleauth from "../components/googlelogin";


export function Signin() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { setislogin } = useContext(UserContext)
  const API = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(`${API}/user/signin`, {

        email: email,
        password: password

      })
      if (response.data.success == false) {
        setmsg(response.data.msg)
        seterror(true)
        return;

      }
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("email", response.data.email)
      setloading(false);
      setislogin(true)
      toast.success("Signin Successfully")
      navigate("/dashboard")
      console.log("Form submitted");
    }
    catch (e) {
      console.error(e)
      setloading(false);
    }
  }


  return (
    <PageWrapper>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" relative z-10 w-full sm:max-w-md mx-auto backdrop-blur-md bg-white dark:bg-zinc-900/80 rounded-2xl shadow-xl p-6 sm:p-8 mt-10 mb-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Heading label="Sign in to your account" />
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm -mt-3 mb-2 text-center"
            >
              {msg}
            </motion.div>
          )}
          <Input onChange={(e) => setemail(e.target.value)} label="Email" placeholder="xyz@example.com" type="email" />
          <Input onChange={(e) => setpassword(e.target.value)} label="Password" placeholder="••••••••" type="password" />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-white font-semibold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "Wait..." : "Sign in"}

          </motion.button>

        </form>

        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="text-zinc-400 text-sm mx-4">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <Googleauth />

        <Slide label={" Don't have an account?"} to={"/signup"} text={"Sign up"} />
      </motion.div>
    </PageWrapper>

  );
}
