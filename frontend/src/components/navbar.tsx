import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

type NavbarProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

export default function Navbar({ isLoggedIn, onLogin, onLogout }: NavbarProps) {
  const navigate = useNavigate();
  const {setislogin}= useContext(UserContext)

  return (
    <nav className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white fixed top-0 w-full z-50 shadow-md border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <nav className="flex items-center space-x-2">
  <img src="/logo/icon.png" alt="SkillMatch Logo" className="h-14 w-14 rounded-full" />
  
</nav>


          {/* Desktop Menu */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-500 dark:hover:text-blue-300 transition"
            >
              Home
            </button>

            {!isLoggedIn ? (
              <>
                <button
                  onClick={onLogin}
                  className="text-blue-600 dark:text-blue-400 hover:underline transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 dark:text-blue-400 hover:underline transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="hover:text-blue-500 dark:hover:text-blue-300 transition"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="hover:text-blue-500 dark:hover:text-blue-300 transition"
                >
                  Profile
                </button>
                <button
                  onClick={onLogout}
                  className="text-red-500 hover:underline transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
