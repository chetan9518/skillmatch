import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, UserCheck, Link2, Sparkles } from "lucide-react";

export function JobDetails() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }
  }, [navigate]);
  const location = useLocation();
  const job = location.state; // sent via navigate(..., { state: job })

  if (!job) {
    return <div className="text-center text-red-500 mt-10">No job data provided.</div>;
  }

  const skills = job.skills.split(",").map((s: string) => s.trim());
  const deadline = new Date(job.deadline).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 py-10 bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 mt-10 mb-10 backdrop-blur-md"
    >
      {/* Company logo/avatar placeholder */}
      <div className="flex justify-center -mt-16 mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900">
          <Briefcase className="w-10 h-10 text-white" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2 text-center">{job.jobtitle}</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Meta icon={<MapPin className="w-4 h-4" />} label={job.location} />
        <Meta icon={<Calendar className="w-4 h-4" />} label={`Deadline: ${deadline}`} />
        <Meta icon={<UserCheck className="w-4 h-4" />} label={job.eligibility} />
        <Meta icon={<Briefcase className="w-4 h-4" />} label={job.companyname} />
        <Meta icon={<Link2 className="w-4 h-4" />} label={job.jobtype} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-2">
            <span className="font-medium">Stipend:</span> ₹{job.salary}/month
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-2">
            <span className="font-medium">Duration:</span> {job.duration}
          </p>
        </div>
        <div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-2">
            <span className="font-medium">Type:</span> {job.jobtype}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-2">
            <span className="font-medium">Company:</span> {job.companyname}
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">About the Job</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{job.aboutjob}</p>
      <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">Required Skills</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {skills.map((skill: string) => (
          <motion.span
            key={skill}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-medium flex items-center gap-1 shadow-sm"
          >
            <Sparkles className="w-3 h-3" /> {skill}
          </motion.span>
        ))}
      </div>
      <div className="flex justify-center">
        <motion.a
          whileHover={{ scale: 1.05, background: "linear-gradient(to right,#2563eb,#a21caf)" }}
          whileTap={{ scale: 0.98 }}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Apply Now
        </motion.a>
      </div>
    </motion.div>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-3 py-1 rounded-full font-medium shadow-sm">
      {icon} {label}
    </span>
  );
}