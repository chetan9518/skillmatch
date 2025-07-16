import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserContext } from "../context";




export default function Googleauth() {
const { setislogin } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogin = async (response: CredentialResponse) => {
    if (!response || !response.credential) {
      toast.error("No credential received from Google");
      return;
    }

    try {
      const API = import.meta.env.VITE_API_URL;
      const result = await axios.post(`${API}/user/googleauth`, {
        credentials: response.credential,
      });

      if (result?.data?.token) {
        localStorage.setItem("email",result.data.email)
        localStorage.setItem("token", result.data.token);
        setislogin(true)
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        toast.error("Google login failed. No token received.");
      }
    } catch (e) {
      console.error("Login error:", e);
      toast.error("Server Error, Try again later");
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => toast.error("Google login failed")}
      />
    </div>
  );
}
