import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function JobDetails() {
  const navigate = useNavigate()
    useEffect(()=>{
    
     const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Session Expired")
          navigate("/signin")
          return};
  },[])
  const location = useLocation();
  const job = location.state; // sent via navigate(..., { state: job })

  if (!job) {
    return <div className="text-center text-red-500 mt-10">No job data provided.</div>;
  }

  const skills = job.skills.split(",").map((s: string) => s.trim());

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-4">{job.jobtitle}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Company:</strong> {job.companyname}</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Location:</strong> {job.location}</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Type:</strong> {job.jobtype}</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Stipend:</strong> ₹{job.salary}/month</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Duration:</strong> {job.duration}</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Deadline:</strong> {new Date(job.deadline).toDateString()}</p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4"><strong>Eligibility:</strong> {job.eligibility}</p>

      <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">About the Job</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{job.aboutjob}</p>

      <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">Required Skills</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill: string) => (
          <span
            key={skill}
            className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition"
      >
        Apply Now
      </a>
    </div>
  );
}
