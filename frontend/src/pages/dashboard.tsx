import axios from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface UserProfile {
  firstname: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
  email: string;
  profilelink?: string;
  resumelink?: string;
}

interface Job {
  id: number;
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
  email: string;
}

interface DashboardStats {
  profileCompleteness: number;
  totalJobs: number;
  skillsCount: number;
}

// Custom hooks
const useAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
    }
  }, [navigate, token]);

  return token;
};

const useUserProfile = (token: string | null) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSignedUrls = useCallback(async (profileKey: string) => {
    try {
      const response = await axios.get("http://localhost:3000/user/profileurl", {
        params: { profilelink: profileKey },
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (response.data.success) {
        setProfileUrl(response.data.profileUrl);
      }
    } catch (error) {
      console.error("Failed to fetch signed URLs", error);
    }
  }, [token]);

  const fetchUserData = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:3000/user/fetchinfo", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setProfile(response.data.details);
        
        const { profilelink } = response.data.details;
        if (profilelink) {
          await fetchSignedUrls(profilelink);
        }
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
      setError("Failed to load profile data");
      toast.error("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  }, [token, fetchSignedUrls]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { profile, profileUrl, loading, error, refetch: fetchUserData };
};

const useJobs = (token: string | null) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = useCallback(async () => {
    if (!token) return;

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/user/prepost", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (response.data.success) {
        setJobs(response.data.prepost);
      }
    } catch (error) {
      console.error("Failed to fetch jobs", error);
      toast.error("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const deleteJob = useCallback(async (jobId: number) => {
    if (!token) return;

    try {
      await axios.delete(`http://localhost:3000/user/deletejob/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      setJobs(prev => prev.filter(job => job.id !== jobId));
      toast.success("Job deleted successfully");
    } catch (error) {
      console.error("Failed to delete job", error);
      toast.error("Failed to delete job");
    }
  }, [token]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return { jobs, loading, deleteJob, refetch: fetchJobs };
};

// Components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <motion.div
      className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const WelcomeCard = ({ profile, profileUrl, currentDate }: {
  profile: UserProfile | null;
  profileUrl: string | null;
  currentDate: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white border border-zinc-200 dark:border-zinc-700 dark:shadow-md dark:shadow-black/10 dark:bg-zinc-800 rounded-xl p-6 pt-10 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-blue-50 dark:hover:bg-zinc-700"
  >
    <p className="absolute top-4 left-6 text-sm text-zinc-500">{currentDate}</p>
    
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          Hi {profile?.firstname || "there"} 👋
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Track. Grow. Showcase.
          </h1>
        </motion.div>
        
        <p className="text-sm text-gray-500 max-w-md">
          Build your resume. Master DSA. Get smarter with every line of code.
        </p>
      </div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {profileUrl ? (
          <img
            src={profileUrl}
            className="w-24 h-24 rounded-full border-3 border-blue-500 shadow-lg object-cover"
            alt="Profile"
          />
        ) : (
          <img
            src={`https://ui-avatars.com/api/?name=${profile?.firstname}&background=random&size=96`}
            className="w-24 h-24 shadow-lg object-cover rounded-full border-3 border-white"
            alt="Avatar"
          />
        )}
      </motion.div>
    </div>
  </motion.div>
);

const StatsCard = ({ stats }: { stats: DashboardStats }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-md dark:shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
  >
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      📊 Your Progress
    </h3>
    
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">{stats.profileCompleteness}%</div>
        <div className="text-sm text-gray-500">Profile Complete</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${stats.profileCompleteness}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">{stats.totalJobs}</div>
        <div className="text-sm text-gray-500">Jobs Posted</div>
      </div>
      
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-600">{stats.skillsCount}</div>
        <div className="text-sm text-gray-500">Skills Added</div>
      </div>
    </div>
  </motion.div>
);

const ProfileOverviewCard = ({ profile }: { profile: UserProfile | null }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-md dark:shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-blue-50 dark:hover:bg-zinc-700"
  >
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      👤 Profile Overview
    </h3>
    
    <div className="space-y-4 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong className="text-gray-700 dark:text-gray-300">Name:</strong>
          <p className="mt-1">{profile?.firstname} {profile?.lastname}</p>
        </div>
        
        <div>
          <strong className="text-gray-700 dark:text-gray-300">Email:</strong>
          <p className="mt-1 break-all">{profile?.email}</p>
        </div>
      </div>

      <div>
        <strong className="text-gray-700 dark:text-gray-300">Skills:</strong>
        {profile?.skills ? (
          <motion.div 
            className="flex flex-wrap gap-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {profile.skills
              .split(",")
              .map((skill) => skill.trim())
              .map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
          </motion.div>
        ) : (
          <p className="text-zinc-500 mt-1">No skills added yet</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong className="text-gray-700 dark:text-gray-300">GitHub:</strong>
          {profile?.github ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600 underline mt-1 block break-all transition-colors"
            >
              {profile.github.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            <p className="text-zinc-500 mt-1">Not shared</p>
          )}
        </div>
        
        <div>
          <strong className="text-gray-700 dark:text-gray-300">Portfolio:</strong>
          {profile?.portfolio ? (
            <a
              href={profile.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600 underline mt-1 block break-all transition-colors"
            >
              {profile.portfolio.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            <p className="text-zinc-500 mt-1">Not shared</p>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const JobsCard = ({ jobs, onEdit, onDelete }: {
  jobs: Job[];
  onEdit: (jobId: number) => void;
  onDelete: (jobId: number) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-md dark:shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-blue-50 dark:hover:bg-zinc-700"
  >
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      💼 Your Posted Jobs ({jobs.length})
    </h3>
    
    <AnimatePresence>
      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 text-gray-500"
        >
          <p>No jobs posted yet</p>
          <p className="text-sm mt-1">Start by posting your first job opportunity!</p>
        </motion.div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 * index }}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  {job.jobtitle}
                </h4>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors text-sm"
                    onClick={() => onEdit(job.id)}
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
                    onClick={() => onDelete(job.id)}
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 dark:text-gray-400">
                <p><span className="font-medium">Company:</span> {job.companyname}</p>
                <p><span className="font-medium">Location:</span> {job.location}</p>
                <p><span className="font-medium">Salary:</span> ₹{job.salary.toLocaleString()}</p>
                <p><span className="font-medium">Deadline:</span> {new Date(job.deadline).toLocaleDateString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  </motion.div>
);

const QuickActionsCard = ({ navigate }: { navigate: (path: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 shadow-md dark:shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
  >
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
      ⚡ Quick Actions
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { label: "Update Profile", path: "/dashboard/updateprofile", icon: "👤", color: "blue" },
        { label: "Post Job", path: "/dashboard/postjob", icon: "💼", color: "green" },
        { label: "Find Matches", path: "/dashboard/search", icon: "🔍", color: "purple" },
        { label: "Skill Tracker", path: "/dashboard/skilltracker", icon: "📈", color: "orange" },
      ].map((action, index) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(action.path)}
          className={`p-4 rounded-lg border-2 border-${action.color}-200 hover:border-${action.color}-400 hover:bg-${action.color}-50 dark:hover:bg-${action.color}-900/20 transition-all text-center group`}
        >
          <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
            {action.icon}
          </div>
          <div className="text-sm font-medium">{action.label}</div>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

// Main Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const token = useAuth();
  const { profile, profileUrl, loading: profileLoading, error } = useUserProfile(token);
  const { jobs, loading: jobsLoading, deleteJob } = useJobs(token);

  const currentDate = useMemo(() => 
    new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  , []);

  const stats = useMemo((): DashboardStats => {
    if (!profile) return { profileCompleteness: 0, totalJobs: 0, skillsCount: 0 };

    const fields = [
      profile.firstname,
      profile.lastname,
      profile.bio,
      profile.skills,
      profile.github,
      profile.portfolio,
    ];
    
    const completedFields = fields.filter(Boolean).length;
    const profileCompleteness = Math.round((completedFields / fields.length) * 100);
    const skillsCount = profile.skills ? profile.skills.split(",").length : 0;

    return {
      profileCompleteness,
      totalJobs: jobs.length,
      skillsCount,
    };
  }, [profile, jobs]);

  const handleEditJob = useCallback((jobId: number) => {
    navigate(`/dashboard/edit-job/${jobId}`);
  }, [navigate]);

  const handleDeleteJob = useCallback(async (jobId: number) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await deleteJob(jobId);
    }
  }, [deleteJob]);

  if (profileLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <WelcomeCard 
          profile={profile} 
          profileUrl={profileUrl} 
          currentDate={currentDate} 
        />
        
        <StatsCard stats={stats} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfileOverviewCard profile={profile} />
          <QuickActionsCard navigate={navigate} />
        </div>
        
        {jobs.length > 0 && (
          <JobsCard 
            jobs={jobs} 
            onEdit={handleEditJob} 
            onDelete={handleDeleteJob} 
          />
        )}
      </div>
    </div>
  );
}