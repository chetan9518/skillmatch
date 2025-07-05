import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export default function Googleauth() {
  const navigate = useNavigate();

  const handleLogin = async (response: CredentialResponse) => {
    if (!response || !response.credential) {
      toast.error("No credential received from Google");
      return;
    }

    try {
      const result = await axios.post("http://localhost:3000/user/googleauth", {
        credentials: response.credential,
      });

      if (result?.data?.token) {
        localStorage.setItem("token", result.data.token);
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
