import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Postjob() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
    }
  }, [navigate]);

  const [title, settitle] = useState("");
  const [company, setcompany] = useState("");
  const [location, setlocation] = useState("");
  const [salary, setsalary] = useState<number | "">("");
  const [eligibility, seteligibility] = useState("");
  const [duration, setduration] = useState("");
  const [deadline, setdeadline] = useState<Date | null>(null);
  const [skills, setskills] = useState("");
  const [aboutjob, setaboutjob] = useState("");
  const [link, setlink] = useState("");
  const [type, settype] = useState("");


  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  async function fetch() {
    const token = localStorage.getItem("token");
    const newErrors: { [key: string]: boolean } = {};

    if (!title) newErrors.title = true;
    if (!company) newErrors.company = true;
    if (!location) newErrors.location = true;
    if (!salary) newErrors.salary = true;
    if (!eligibility) newErrors.eligibility = true;
    if (!duration) newErrors.duration = true;
    if (!deadline) newErrors.deadline = true;
    if (!skills) newErrors.skills = true;
    if (!aboutjob) newErrors.aboutjob = true;
    if (!link) newErrors.link = true;
    if (!type) newErrors.type = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all required fields");
      return;
    }

    try {
      let response = await axios.post(
        "http://localhost:3000/user/postjob",
        {
          jobtitle: title,
          companyname: company,
          jobtype: type,
          location: location,
          salary: salary,
          eligibility: eligibility,
          duration: duration,
          deadline: deadline,
          skills: skills,
          aboutjob: aboutjob,
          link: link,

        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.msg);
      navigate("/dashboard");
    } catch (e) {
      toast.error("Unable to post");
    }
  }


  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
        Post a New Job Opportunity
      </h2>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-medium text-gray-700">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Enter company name"
          onChange={(e) => {
            setcompany(e.target.value);
            setErrors({ ...errors, company: false });
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter job title"
            onChange={(e) => {
              settitle(e.target.value);
              setErrors({ ...errors, title: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Job Type <span className="text-red-500">*</span>
          </label>
          <select
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            onChange={(e) => {
              settype(e.target.value);
              setErrors({ ...errors, type: false });
            }}
          >
            <option value="">Select type</option>
            <option className="dark:bg-gray-600">Full-time</option>
            <option className="dark:bg-gray-600">Part-time</option>
            <option className="dark:bg-gray-600">Internship</option>
            <option className="dark:bg-gray-600">Contract</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter location"
            onChange={(e) => {
              setlocation(e.target.value);
              setErrors({ ...errors, location: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Salary (INR) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter salary"
            onChange={(e) => {
              setsalary(Number(e.target.value));
              setErrors({ ...errors, salary: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Duration <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. 6 months"
            onChange={(e) => {
              setduration(e.target.value);
              setErrors({ ...errors, duration: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Deadline <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            onChange={(e) => {
              setdeadline(new Date(e.target.value));
              setErrors({ ...errors, deadline: false });
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Eligibility <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. B.Tech, MCA"
            onChange={(e) => {
              seteligibility(e.target.value);
              setErrors({ ...errors, eligibility: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Required Skills <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. React, Node.js"
            onChange={(e) => {
              setskills(e.target.value);
              setErrors({ ...errors, skills: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            About the Job <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Describe the job..."
            onChange={(e) => {
              setaboutjob(e.target.value);
              setErrors({ ...errors, aboutjob: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Application Link <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter application link"
            onChange={(e) => {
              setlink(e.target.value);
              setErrors({ ...errors, link: false });
            }}
          />
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          onClick={fetch}
        >
          Post Job
        </button>
      </div>
    </div>
  );
}
