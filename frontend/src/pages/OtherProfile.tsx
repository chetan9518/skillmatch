import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Github, Link2, FileText, MessageCircle } from "lucide-react";

type UserProfile = {
  firstname: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
  email: string;
  resumelink?: string;
  profilelink?: string;
};

export function Profile() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { email } = useParams();

  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }

    const API = import.meta.env.VITE_API_URL;

    const fetchUserData = async () => {
      try {
        const result = await axios.get(`${API}/user/fetchone?email=${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!result.data.success) {
          toast.error("Unable to fetch user data");
          return;
        }

        setUser(result.data.details);
      } catch (error) {
        toast.error("Server error while fetching profile");
      }
    };

    fetchUserData();
  }, [email, navigate, token]);

  const skills = user?.skills?.split(",").map(skill => skill.trim()) || [];

  const startChat = () => {
    if (!user) return;
    const receiverEmail = user.email;
    const username = `${user.firstname}${user.lastname ? " " + user.lastname : ""}`;
    const profilelink = user.profilelink;
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      navigate("/dashboard/msg", {
        state: { receiverEmail, username, profilelink }
      });
    } else {
      navigate(`/dashboard/chat/${encodeURIComponent(receiverEmail)}`, {
        state: { receiverEmail, username, profilelink }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md w-full mx-auto mt-10 bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 backdrop-blur-md"
    >
      <div className="relative flex flex-col items-center pt-10 pb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900">
        <motion.img
          src={user?.profilelink || "/images/default-avatar.png"}
          alt={user?.firstname}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-lg -mt-10"
        />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">
          {user?.firstname} {user?.lastname}
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">
          {user?.bio || "No bio provided"}
        </p>
        {skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {skills.map((skill, idx) => (
              <motion.span
                key={`${skill}-${idx}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
        <div className="flex justify-center gap-4 mt-6">
          {user?.github && (
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
          {user?.portfolio && (
            <a
              href={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
            >
              <Link2 className="w-4 h-4" /> Portfolio
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          {user?.resumelink && (
            <a
              href={user.resumelink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 text-sm font-semibold shadow transition"
            >
              <FileText className="w-4 h-4" /> View Resume
            </a>
          )}
          <button
            onClick={startChat}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-semibold shadow transition"
          >
            <MessageCircle className="w-4 h-4" /> Message
          </button>
        </div>
      </div>
    </motion.div>
  );
}