
import { useNavigate } from "react-router-dom";


type NavbarProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

export default function Navbar({ isLoggedIn, onLogin, onLogout }: NavbarProps) {
  const navigate = useNavigate();


  return (  
    <nav className=" bg-gradient-to-r from-black/20 to-transparent bg-[url('/logo/bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-md text-zinc-900 dark:text-white fixed top-0 w-full z-50 shadow-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <nav className="flex items-center space-x-2">
            <img src="/logo/icon.png" alt="SkillMatch Logo" className="h-12 w-45 rounded-sm" />

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
              

              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
