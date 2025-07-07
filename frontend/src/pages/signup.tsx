import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/input";
import { Slide } from "../components/slide";
import { PageWrapper } from "../components/pagewrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Googleauth from "../components/googlelogin";
import { motion } from "framer-motion";

export function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setloading(true);
    seterror(false);
    setmsg("");
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      });
      if (response.data.success == false) {
        setloading(false);
        setmsg(response.data.msg);
        seterror(true);
        return;
      }
      localStorage.setItem("email", response.data.email);
      setloading(false);
      toast.success("OTP sent successfully");
      navigate("/verification");
    } catch (err) {
      setmsg("Something went wrong. Please try again.");
      seterror(true);
      setloading(false);
    }
  };

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mt-10 mb-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Heading label="Sign up to your account" />
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm -mt-3 mb-2 text-center"
            >
              {msg}
            </motion.div>
          )}
          <Input
            onChange={(e) => setfirstname(e.target.value)}
            label="First Name"
            placeholder="John"
            type="text"
          />
          <Input
            onChange={(e) => setlastname(e.target.value)}
            label="Last Name"
            placeholder="Doe"
            type="text"
          />
          <Input
            onChange={(e) => setemail(e.target.value)}
            label="Email"
            placeholder="xyz@example.com"
            type="email"
          />
          <Input
            onChange={(e) => setpassword(e.target.value)}
            label="Password"
            placeholder="••••••••"
            type="password"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-white font-semibold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "Wait..." : "Sign up"}
          </motion.button>
        </form>
        <div className="flex items-center justify-center my-6">
          <span className="text-zinc-400 text-sm">OR</span>
        </div>
        <Googleauth />
        <div className="mt-8">
          <Slide label={"Already have an account?"} to={"/signin"} text={"Sign in"} />
        </div>
      </motion.div>
    </PageWrapper>
  );
}