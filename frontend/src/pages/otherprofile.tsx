import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


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
    if (!token) {
          console.log("Login to get users")
        }
    const [user,setresult]= useState<UserProfile|null>(null)
    const {email}= useParams();
    const skill = user?.skills?.split(",").map((e)=>e.trim())
    useEffect(()=>{
        async function fetch(){
            const result = await axios.get(`http://localhost:3000/user/fetchone?email=${email}`,{
                headers:{
        Authorization:`Bearer ${token}`
      }
    }
            )
            if(!result.data.success){
                console.error("Unable to fetch",result.data.msg)

            }
            setresult(result.data.details)

        }
        fetch()
    },[])
    
    return   (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg mt-8">
      {/* Profile image */}
      <div className="flex justify-center">
        <img
          className="w-24 h-24 rounded-full border-2 border-blue-500"
          src= "/images/default-avatar.png"
          alt={user?.firstname}
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center mt-4 text-zinc-800 dark:text-white">
        {user?.firstname} {user?.lastname}
      </h2>

      {/* Bio */}
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-300 mt-1">
        {user?.bio || "No bio provided."}
      </p>

      {/* Skills */}
      {skill && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {skill.map((skill: string,index:number) => (
            <span
              key={skill+index}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-4 text-center space-x-4">
        {user?.github && (
          <a
            href={user.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            GitHub
          </a>
        )}
        {user?.portfolio && (
          <a
            href={user.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Portfolio
          </a>
        )}
      </div>

      {/* Resume */}
      {user?.resumelink && (
        <div className="mt-4 text-center">
          <a
            href={user.resumelink}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            View Resume
          </a>
        </div>
      )}
    </div>)
  
    }
    
    
