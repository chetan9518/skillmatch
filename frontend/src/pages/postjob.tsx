import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto bg-white/90 dark:bg-zinc-900/90 p-8 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 mt-10 mb-10 backdrop-blur-md"
    >
      <div className="flex justify-center -mt-16 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white text-center">
        Post a New Job Opportunity
      </h2>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.company ? "border-red-500" : "border-gray-300"
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
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter job title"
            onChange={(e) => {
              settitle(e.target.value);
              setErrors({ ...errors, title: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Job Type <span className="text-red-500">*</span>
          </label>
          <select
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.type ? "border-red-500" : "border-gray-300"
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
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.location ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter location"
            onChange={(e) => {
              setlocation(e.target.value);
              setErrors({ ...errors, location: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Salary (INR) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.salary ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter salary"
            onChange={(e) => {
              setsalary(Number(e.target.value));
              setErrors({ ...errors, salary: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Duration <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.duration ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. 6 months"
            onChange={(e) => {
              setduration(e.target.value);
              setErrors({ ...errors, duration: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Deadline <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.deadline ? "border-red-500" : "border-gray-300"
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
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Eligibility <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.eligibility ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. B.Tech, MCA"
            onChange={(e) => {
              seteligibility(e.target.value);
              setErrors({ ...errors, eligibility: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Required Skills <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.skills ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. React, Node.js"
            onChange={(e) => {
              setskills(e.target.value);
              setErrors({ ...errors, skills: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            About the Job <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.aboutjob ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Describe the job..."
            onChange={(e) => {
              setaboutjob(e.target.value);
              setErrors({ ...errors, aboutjob: false });
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Application Link <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border p-2 rounded-md transition bg-gray-50 dark:bg-zinc-800 ${errors.link ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter application link"
            onChange={(e) => {
              setlink(e.target.value);
              setErrors({ ...errors, link: false });
            }}
          />
        </div>
      </div>

      <div className="mt-8 text-right">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-lg font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={fetch}
        >
          Post Job
        </motion.button>
      </div>
    </motion.div>
  );
}