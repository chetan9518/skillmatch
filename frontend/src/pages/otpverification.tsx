import { useContext, useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/input";
import { PageWrapper } from "../components/pagewrapper";
import { UserContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Otp() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { setislogin } = useContext(UserContext);

  const [otp, setotp] = useState("");
  const [error, seterror] = useState(false);
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(false);

  if (!token) {
    toast.error("Session Expired");
    navigate("/signin");
    return null;
  }

  async function veri() {
    setLoading(true);
    seterror(false);
    setmsg("");
    try {
      const email = localStorage.getItem("email");
      const response = await axios.post("http://localhost:3000/user/verification", {
        email: email,
        otp: otp,
      });
      if (response.data.success === false) {
        setmsg(response.data.msg);
        seterror(true);
        setLoading(false);
        return;
      }
      localStorage.setItem("token", response.data.token);
      setislogin(true);
      toast.success("Signup successfully");
      navigate("/dashboard");
    } catch (e) {
      setmsg("Invalid or expired OTP. Please try again.");
      seterror(true);
    }
    setLoading(false);
  }

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mt-10 mb-10 flex flex-col items-center"
      >
        <img src="/logo/otp.png" alt="OTP" width={100} height={100} className="mb-4" />
        <Heading label={"Enter OTP to login"} />
        <Input
          onChange={(e) => setotp(e.target.value)}
          placeholder="******"
          label="Enter here"
          type="text"
        />
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm -mt-3 mb-2 text-center"
          >
            {msg}
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={veri}
          disabled={loading}
          className="w-full mt-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold rounded-lg text-sm px-5 py-2.5 shadow transition"
        >
          {loading ? "Verifying..." : "Verify"}
        </motion.button>
      </motion.div>
    </PageWrapper>
  );
}