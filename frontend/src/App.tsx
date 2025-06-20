import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Home } from "./pages/home"
import Navbar from "./components/navbar"
import { Otp } from "./pages/otpverification"
import { Update } from "./pages/updateprofile"
import Dashboard from "./pages/dashboard"
import MainLayout from "./layout/mainlaylout"
import { Search } from "./pages/search"
import { useState } from "react"
import { UserContext } from "./context"



function App() {
  return <BrowserRouter>
    <App2 />
  </BrowserRouter>
}


function App2() {
  const navigate = useNavigate()
  const navigate2=useNavigate();
  const [islogin,setislogin]= useState(false);

  const login = () => {
    navigate("/signin")

  }
  function logout() {
     localStorage.setItem("token","")
      setislogin(false)
    navigate2("/home")
  }
  return <div>
<UserContext.Provider value ={{islogin,setislogin}}>
    <div className="pt-16 bg-zinc-950">
      <Navbar isLoggedIn={islogin} onLogin={login} onLogout={logout} />
      <Routes>
       
        <Route path="/" element={<Home />} />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path= "/verification" element = {<Otp/>}/>
        
        <Route path= "/dashboard" element={<MainLayout/>}>
        
        <Route index element= {<Dashboard/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="search" element={<Search/>}/>
        </Route>
       
      </Routes>
      
    </div>

     </UserContext.Provider>
  </div>
  


}

export default App
