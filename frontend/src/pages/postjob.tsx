import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function Postjob(){
     useEffect(()=>{
      
       const token = localStorage.getItem("token");
          if (!token) {
            toast.error("Session Expired")
            navigate("/signin")
            return};
    },[])
const [title,settitle]=useState<string>("")
const [company,setcompany]=useState<string>("")
const [location,setlocation]=useState<string>("")
const [salary,setsalary]=useState<number>(0)
const [eligibility,seteligibility]=useState<string>("")
const [duration,setduration]=useState<string>("")
const [deadline,setdeadline]=useState<Date|null>(null)
const [skills,setskills]=useState<string>("")
const [aboutjob,setaboutjob]=useState<string>("")
const [link,setlink]=useState<string>("")
const [type,settype]=useState<string>("")

const navigate= useNavigate()
async function fetch(){

    const token = localStorage.getItem("token")
   
    try{
    let response = await axios.post("http://localhost:3000/user/postjob",{
         jobtitle: title,
                companyname:company,
                jobtype: type,
                location: location,
                salary: salary,
                eligibility:eligibility,
                duration: duration,
                deadline:deadline,
                skills: skills,
                aboutjob: aboutjob,
                link: link,
    },
    {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
)
if(!response.data.success){
    console.log(response.data.msg)
    toast.success(response.data.msg)
}
console.log(response.data.msg)
toast.success(response.data.msg)
navigate("/dashboard")
    }
    catch(e){
       toast.error("Unable to post")
    }
}


    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">Post a New Job Opportunity</h2>

  {/* componyinf */}
 
 <input type="text" placeholder="Company Name" className="input" onChange={(e)=>setcompany(e.target.value)} />

  {/* Job Details */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <input type="text" placeholder="Job Title" className="input" onChange={(e)=>settitle(e.target.value)} />
    <select className="input" onChange={(e)=>settype(e.target.value)} >
      <option className="dark:bg-gray-600">Full-time</option>
      <option className="dark:bg-gray-600">Part-time</option>
      <option className="dark:bg-gray-600">Internship</option>
      <option className="dark:bg-gray-600">Contract</option>
    </select>
    <input type="text" placeholder="Location" className="input" onChange={(e)=>setlocation(e.target.value)} />
    <input type="number" placeholder="Salary (INR)" className="input" onChange={(e)=>setsalary(Number(e.target.value))} />
    <input type="text" placeholder="Duration" className="input"  onChange={(e)=>setduration(e.target.value)}/>
    <input type="date" placeholder="Deadline" className="input"  onChange={(e)=>setdeadline(new Date(e.target.value))}/>
  </div>

  {/* Requirements */}
  <div className="mt-4">
    <input type="text" placeholder="Eligibility" className="input w-full mb-3" onChange={(e)=>seteligibility(e.target.value)}/>
    <input type="text" placeholder="Required Skills (comma separated)" className="input w-full mb-3" onChange={(e)=>setskills(e.target.value)} />
    <textarea placeholder="About the Job" className="input w-full h-24" onChange={(e)=>setaboutjob(e.target.value)} />
  </div>

  {/* Link */}
  <div className="mt-4">
    <input type="text" placeholder="Application Link" className="input w-full" onChange={(e)=>setlink(e.target.value)} />
  </div>

  {/* Submit */}
  <div className="mt-6 text-right">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition" onClick={fetch}>Post Job</button>
  </div>
</div>

    )
}