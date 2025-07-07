import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, Sparkles } from "lucide-react";

export function Search() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }
  }, [navigate]);

  const [users, setusers] = useState<user[]>([]);
  const [searchuser, setsearchuser] = useState<user[]>([]);
  const [input, setinput] = useState("");
  const [flip, setflip] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const result = await axios.get("http://localhost:3000/user/fetchuser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!result.data.success) {
          toast.error(result.data.msg || "Unable to fetch users");
        }
        setusers(result.data.users);
      } catch (e) {
        toast.error("Unable to fetch users");
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    setflip(!!input);
  }, [input]);

  async function searchfetcher() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired");
      return;
    }
    const result = await axios.get(
      `http://localhost:3000/user/searchuser?${input.includes("@") ? "email" : "skill"}=${input}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!result.data.success) {
      toast.error(result.data.msg || "Unable to fetch");
      return;
    }
    setsearchuser(result.data.users);
  }

  return (
    <div className="flex flex-col gap-8 px-6 py-8 min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-white flex items-center gap-2">
          <SearchIcon className="w-6 h-6 text-blue-500" /> Search Developers
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Filter by skill or unique ID.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input
          type="text"
          placeholder="Search by ID or Skill..."
          className="w-full sm:w-1/2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setinput(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md font-semibold shadow transition"
          onClick={searchfetcher}
        >
          Search
        </motion.button>
      </div>

      {/* User Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {(!flip ? users : searchuser).length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full flex flex-col items-center justify-center py-16"
            >
              <Sparkles className="w-10 h-10 text-blue-400 mb-2 animate-bounce" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {flip ? "No users found for your search." : "No users available."}
              </p>
            </motion.div>
          ) : (
            (flip ? searchuser : users).map((e) => (
              <UserCard user={e} key={e.email} />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

type user = {
  firstname: string;
  lastname: string;
  email: string;
  skills?: string;
  profilelink?: string;
  profileurl: string | null;
};

// UserCard
function UserCard({ user }: { user: user }) {
  const navigate = useNavigate();
  const userskill = user.skills?.split(",").map((e) => e.trim());

  function nav() {
    navigate(`/dashboard/profile/${user.email}`);
  }

  return (
    <motion.button
      onClick={nav}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="p-5 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex flex-col gap-3 items-start"
    >
      <div className="flex items-center gap-3 mb-2">
        <img
          className="w-14 h-14 rounded-full bg-zinc-300 border-2 border-blue-200 dark:border-blue-700 object-cover"
          alt={user.email}
          src={user.profileurl || "https://www.gravatar.com/avatar/?d=mp"}
        />
        <div>
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
            Email: {user.email}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {userskill?.map((e) => (
          <SkillBadge name={e} key={e} color={getRandomColorName()} />
        ))}
      </div>
    </motion.button>
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