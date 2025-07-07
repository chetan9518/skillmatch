import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Seekjobs(){
    const navigate = useNavigate()
const [initialLoading,setInitialLoading]=useState(true)

       const token = localStorage.getItem("token")
         useEffect(()=>{
      
       const token = localStorage.getItem("token");
          if (!token) {
            toast.error("Session Expired")
            navigate("/signin")
            return};
    },[])


     const [jobs, setjobs] = useState<user[]>([]);
    useEffect(() => {
    async function fetch() {
      try {
     
        const result = await axios.get("http://localhost:3000/user/seekjobs", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (!result.data.success) {
          console.log(result.data.msg)
        }
        setjobs(result.data.jobs)
        setInitialLoading(false)
      }

      catch (e) {
        toast.error("Unable to fetch")
        console.error("Unable to fetch")
      }

    }
    fetch()
  },[])
  
  if (initialLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-32 bg-gray-300 rounded"></div>
            <div className="h-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }




    return   <div className="flex justify-center px-4 py-6">
    <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs && Array.isArray(jobs) && jobs.map((e) => (
        <Jobcard user={e} key={e.link} />
      ))}
    </div>
  </div>
}
type user = {
    jobtitle: string,
    companyname: string,
    jobtype: string,
    location: string,
    salary: number,
    eligibility: string,
    duration: string,
    deadline: Date,
    skills: string,
    aboutjob: string,
    link: string,
    email?: string
}
function Jobcard({user}:{user:user}){

    const navigate = useNavigate()
 const userskill = user.skills.split(",").map((e) => e.trim());
 async function send(){
     let job= user
    navigate("/dashboard/jobdetail",{state:job})
}

return <div className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-5  px-3 py-4w-full max-w-md border border-zinc-200 dark:border-zinc-700 transition-transform duration-300 hover:shadow-lg hover:scale-105">
  <div className="flex items-center justify-between mb-3">
    <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
      {user.jobtitle}
    </h2>
    <span className="text-sm text-blue-600 font-medium">{user.jobtype}</span>
  </div>

  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
    <span className="font-medium">Company:</span> {user.companyname}
  </p>
  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
    <span className="font-medium">Stipend:</span> ₹{user.salary}/month
  </p>
  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
    <span className="font-medium">Duration:</span> {user.duration} Months
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {userskill.map((e) => (
          <SkillBadge name={e} key={e} color={getRandomColorName()} />
        ))}
  </div>

  <button onClick={send} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
    View Details
  </button>
</div>

}


function getRandomColorName() {
  const colors = ["green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}


function SkillBadge({ name, color }: { name: string; color: string }) {
  const bg = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
  }[color];

  return (
    <span className={`text-xs px-2 py-1 rounded-full  ${bg}`}>{name}</span>
  );
}