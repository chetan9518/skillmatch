import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
 import { GoogleOAuthProvider } from "@react-oauth/google";
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
import { Profile } from "./pages/otherprofile"
import { Postjob } from "./pages/postjob"
import { Toaster } from "sonner"
import { Seekjobs } from "./pages/seekjobs"
import { JobDetails } from "./pages/jobdetail"
import { ChatWrapper } from "./pages/Chatwrraper"
import { MessageDashboard } from "./pages/messagehome"
import { EditJob } from "./pages/jobedit"
import { SkillTracker } from "./pages/skilltracker";
import About from "./pages/about";
import FeaturesSection from "./pages/features";
import Contact from "./pages/contact";
  const id = import.meta.env.VITE_GOOGLE_CLIENT_ID


function App() {

  return <BrowserRouter>
    <GoogleOAuthProvider clientId={id}>
    <App2 />
 </GoogleOAuthProvider>
  </BrowserRouter>
}


function App2() {
  const navigate = useNavigate()
  
const [islogin, setislogin] = useState(() => {
  return !!localStorage.getItem("token");
});

  

  const login = () => {
    navigate("/signin")

  }
  function logout() {
     localStorage.setItem("token","")
      
    navigate("/")
  }
  return <div>
<UserContext.Provider value ={{islogin,setislogin}}>
    <div className="pt-16 bg-zinc-950">
      <Navbar isLoggedIn={islogin} onLogin={login} onLogout={logout} />
      <Toaster position="top-right" richColors/>
      <Routes>
        
       
        <Route path="/" element={<Home />} />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feature" element={<FeaturesSection />} />
        <Route path="/contact" element={<Contact />} />
        
        
        <Route path= "/verification" element = {<Otp/>}/>
        <Route path="/about"  element={<About/>}/>
        
        <Route path= "/dashboard" element={<MainLayout/>}>
        
        <Route index element= {<Dashboard/>}/>
        <Route path="seekjob" element={<Seekjobs/>}></Route>
        <Route path="jobdetail" element={<JobDetails/>}/>
        <Route path="postjob" element={<Postjob/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="search" element={<Search/>}></Route>
        <Route path= "profile/:email" element={<Profile/>}/>
        <Route path="chat" element={<ChatWrapper/>}/>
        <Route path ="msg" element={<MessageDashboard/>}/>
        <Route path ="edit-job/:id" element={<EditJob/>}/>
        <Route path= "skilltracker" element={<SkillTracker/>}/>
        </Route>
       
      </Routes>
      
    </div>

     </UserContext.Provider>
  </div>
  


}

export default App
