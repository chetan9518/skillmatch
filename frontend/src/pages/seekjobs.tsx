import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, UserCheck, Sparkles } from "lucide-react";

export function Seekjobs() {
  const navigate = useNavigate();
  const [initialLoading, setInitialLoading] = useState(true);
  const [jobs, setjobs] = useState<user[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }
    async function fetch() {
      try {
        const result = await axios.get("http://localhost:3000/user/seekjobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!result.data.success) {
          toast.error(result.data.msg || "Unable to fetch jobs");
        }
        setjobs(result.data.jobs);
        setInitialLoading(false);
      } catch (e) {
        toast.error("Unable to fetch jobs");
        setInitialLoading(false);
      }
    }
    fetch();
  }, [navigate]);

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

  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Sparkles className="w-12 h-12 text-blue-400 mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-zinc-700 dark:text-white mb-2">No jobs found</h2>
        <p className="text-zinc-500 dark:text-zinc-300">Check back soon for new opportunities!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-zinc-900 dark:to-zinc-800 min-h-screen">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {jobs.map((e) => (
            <Jobcard user={e} key={e.link} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

type user = {
  jobtitle: string;
  companyname: string;
  jobtype: string;
  location: string;
  salary: number;
  eligibility: string;
  duration: string;
  deadline: Date;
  skills: string;
  aboutjob: string;
  link: string;
  email?: string;
};

function Jobcard({ user }: { user: user }) {
  const navigate = useNavigate();
  const userskill = user.skills.split(",").map((e) => e.trim());

  function send() {
    let job = user;
    navigate("/dashboard/jobdetail", { state: job });
  }

  // Format deadline
  const deadline = new Date(user.deadline).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.97 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)",
        background: "rgba(255,255,255,0.7)",
        borderColor: "#6366f1",
      }}
      className="relative bg-white/80 dark:bg-zinc-900/80 shadow-xl rounded-2xl p-7 border border-zinc-200 dark:border-zinc-700 backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
    >
      {/* Company logo/avatar placeholder */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-zinc-900">
          <Briefcase className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white">{user.jobtitle}</h2>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
            {user.jobtype}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-1">
          <span className="font-medium">Company:</span> {user.companyname}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <MapPin className="w-4 h-4" /> {user.location}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <Calendar className="w-4 h-4" /> Deadline: {deadline}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <UserCheck className="w-4 h-4" /> {user.eligibility}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">
          {user.aboutjob}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {userskill.map((e) => (
            <SkillBadge name={e} key={e} color={getRandomColorName()} />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05, background: "linear-gradient(to right,#2563eb,#a21caf)" }}
          whileTap={{ scale: 0.98 }}
          onClick={send}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg transition font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}

function getRandomColorName() {
  const colors = ["green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function SkillBadge({ name, color }: { name: string; color: string }) {
  const bg = {
    blue: "bg-blue-100 text-blue-800 border border-blue-200",
    green: "bg-green-100 text-green-800 border border-green-200",
    purple: "bg-purple-100 text-purple-800 border border-purple-200",
  }[color];

  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`text-xs px-2 py-1 rounded-full font-medium ${bg} flex items-center gap-1 shadow-sm`}
    >
      <Sparkles className="w-3 h-3" /> {name}
    </motion.span>
  );
}