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

  function handleChange(e: any) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    const newErrors: any = {};
    for (let key in job) {
      if (!job[key as keyof typeof job]) newErrors[key] = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all fields");
      return;
    }

    try {
      await axios.put(
        "http://localhost:3000/user/editjob",
        {
          id: Number(id),
          jobtitle: job.jobtitle,
          companyname: job.companyname,
          jobtype: job.jobtype,
          location: job.location,
          salary: Number(job.salary),
          eligibility: job.eligibility,
          duration: job.duration,
          deadline: new Date(job.deadline),
          skills: job.skills,
          aboutjob: job.aboutjob,
          link: job.link,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Job updated successfully");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to update");
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">Edit Job</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { name: "jobtitle", label: "Job Title" },
          { name: "companyname", label: "Company Name" },
          { name: "location", label: "Location" },
          { name: "salary", label: "Salary", type: "number" },
          { name: "duration", label: "Duration" },
          { name: "deadline", label: "Deadline", type: "date" },
          { name: "eligibility", label: "Eligibility" },
          { name: "skills", label: "Skills (comma separated)" },
          { name: "link", label: "Application Link" },
        ].map(({ name, label, type }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type || "text"}
              value={job[name as keyof typeof job]}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md text-sm border ${
                errors[name] ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        ))}

        <div>
          <label htmlFor="jobtype" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Job Type
          </label>
          <select
            id="jobtype"
            name="jobtype"
            value={job.jobtype}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md text-sm border ${
              errors.jobtype ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="aboutjob" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            About the Job
          </label>
          <textarea
            id="aboutjob"
            name="aboutjob"
            rows={5}
            value={job.aboutjob}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md text-sm border ${
              errors.aboutjob ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Job
        </button>
      </div>
    </div>
  );
}