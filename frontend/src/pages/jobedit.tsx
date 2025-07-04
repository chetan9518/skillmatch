import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [job, setJob] = useState({
    jobtitle: "",
    companyname: "",
    jobtype: "Full-time",
    location: "",
    salary: "",
    eligibility: "",
    duration: "",
    deadline: "",
    skills: "",
    aboutjob: "",
    link: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  // Fetch job details to pre-fill form
  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await axios.get(`http://localhost:3000/user/jobinfo/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          const j = res.data.job;
          setJob({
            jobtitle: j.jobtitle,
            companyname: j.companyname,
            jobtype: j.jobtype,
            location: j.location,
            salary: j.salary.toString(),
            eligibility: j.eligibility,
            duration: j.duration,
            deadline: j.deadline.split("T")[0],
            skills: j.skills,
            aboutjob: j.aboutjob,
            link: j.link,
          });
        }
      } catch (err) {
        toast.error("Failed to load job");
      }
    }

    if (id && token) fetchJob();
  }, [id, token]);

  
  function handleChange(e:any) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  // Submit form
  async function handleSubmit() {
    const newErrors: any = {};
    for (let key in job) {
         const typedKey = key as keyof typeof job;

      if (!job[typedKey]) newErrors[key] = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all fields");
      return;
    }

    try {
      await axios.put("http://localhost:3000/user/editjob", {
        id: Number(id),
        ...job,
        salary: Number(job.salary),
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Job updated successfully");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to update");
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">Edit Job</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="jobtitle" placeholder="Job Title" value={job.jobtitle} onChange={handleChange} className={`input ${errors.jobtitle ? "border-red-500" : ""}`} />
        <input name="companyname" placeholder="Company Name" value={job.companyname} onChange={handleChange} className={`input ${errors.companyname ? "border-red-500" : ""}`} />
        <select name="jobtype" value={job.jobtype} onChange={handleChange} className={`input ${errors.jobtype ? "border-red-500" : ""}`}>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} className={`input ${errors.location ? "border-red-500" : ""}`} />
        <input name="salary" placeholder="Salary" type="number" value={job.salary} onChange={handleChange} className={`input ${errors.salary ? "border-red-500" : ""}`} />
        <input name="duration" placeholder="Duration" value={job.duration} onChange={handleChange} className={`input ${errors.duration ? "border-red-500" : ""}`} />
        <input name="deadline" type="date" value={job.deadline} onChange={handleChange} className={`input ${errors.deadline ? "border-red-500" : ""}`} />
        <input name="eligibility" placeholder="Eligibility" value={job.eligibility} onChange={handleChange} className={`input ${errors.eligibility ? "border-red-500" : ""}`} />
        <input name="skills" placeholder="Skills (comma separated)" value={job.skills} onChange={handleChange} className={`input ${errors.skills ? "border-red-500" : ""}`} />
        <input name="link" placeholder="Application Link" value={job.link} onChange={handleChange} className={`input ${errors.link ? "border-red-500" : ""}`} />
      </div>

      <textarea name="aboutjob" placeholder="About Job" value={job.aboutjob} onChange={handleChange} className={`input w-full h-24 mt-4 ${errors.aboutjob ? "border-red-500" : ""}`} />

      <div className="mt-6 text-right">
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Update Job
        </button>
      </div>
    </div>
  );
}
