import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner";


type UserProfile = {
  firstname: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
  email: string;
  resumelink?:string
};

export function Profile(){
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
     useEffect(()=>{
  
   const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session Expired")
        navigate("/signin")
        return};
},[])

    const [user,setresult]= useState<UserProfile|null>(null)
    const [profile,setprofile]=useState(null)
    const {email}= useParams();
    const skill = user?.skills?.split(",").map((e)=>e.trim())


    useEffect(()=>{
       const fetchprofile = async (profileKey:string)=>{
         const profileRes = await axios.get(
          "http://localhost:3000/user/profileurl",
          {
            params: { profilelink: profileKey },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (profileRes.data.success) {
          setprofile(profileRes.data.profileUrl);
        }
       }
        async function fetch(){
            const result = await axios.get(`http://localhost:3000/user/fetchone?email=${email}`,{
                headers:{
        Authorization:`Bearer ${token}`
      }
    }
            )
            if(!result.data.success){
                console.error("Unable to fetch",result.data.msg)
                return;

            }
            setresult(result.data.details)
            const {profilelink}= result.data.details
            if (profilelink){
              await fetchprofile(profilelink)
            }

        }
        fetch()
    },[])
    
   return (
  <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-gray-700 mt-10">
    
    {/* Top-right menu trigger */}
    <div className="flex justify-end px-4 pt-4">
      <button
        id="dropdownButton"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
      >
        <span className="sr-only">Open dropdown</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 3">
          <path d="M2 0a1.5 1.5 0 1 1 0 3A1.5 1.5 0 0 1 2 0Zm6.041 0a1.5 1.5 0 1 1 0 3A1.5 1.5 0 0 1 8.041 0ZM14 0a1.5 1.5 0 1 1 0 3A1.5 1.5 0 0 1 14 0Z" />
        </svg>
      </button>
    </div>

    {/* Profile Content */}
    <div className="flex flex-col items-center pb-10 px-4">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
        src={profile || "/images/default-avatar.png"}
        alt={user?.firstname}
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {user?.firstname} {user?.lastname}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {user?.bio || "No bio provided"}
      </span>

      {/* Skills */}
      {skill && skill.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {skill.map((skill, index) => (
            <span
              key={skill + index}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {user?.github && (
          <a
            href={user.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 underline text-sm"
          >
            GitHub
          </a>
        )}
        {user?.portfolio && (
          <a
            href={user.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 underline text-sm"
          >
            Portfolio
          </a>
        )}
      </div>
      <div className="flex items-center justify-center mt-4">
      {/* Resume Button */}
      {user?.resumelink && (
        <a
          href={user.resumelink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Resume
        </a>
      )}

      {/* Message Button */}
      <button
        onClick={() =>
          navigate("/dashboard/chat", {
            state: { receiverEmail: user?.email },
          })
        }
        className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Message
      </button>
      </div>
    </div>
  </div>
)
}