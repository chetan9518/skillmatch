import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { RotateCcw, Code, Trophy, Target, Calendar, Star, Hash } from "lucide-react";
import { motion } from "framer-motion";

interface CodeforceDetails {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  contests: number;
  lastSynced: string;
}

interface LeetCodeDetails {
  easy: number;
  medium: number;
  hard: number;
  total: number;
  lastSynced: string;
}

export function SkillTracker() {
  // Codeforces State
  const [haveCF, setHaveCF] = useState(false);
  const [cfDetails, setCFDetails] = useState<CodeforceDetails | null>(null);
  const [cfHandle, setCFHandle] = useState("");
  const [cfLoading, setCfLoading] = useState(false);

  // LeetCode State
  const [haveLeetCode, setHaveLeetCode] = useState(false);
  const [leetCodeDetails, setLeetCodeDetails] = useState<LeetCodeDetails | null>(null);
  const [leetCodeUsername, setLeetCodeUsername] = useState("");
  const [leetCodeLoading, setLeetCodeLoading] = useState(false);

  // General State
  const [initialLoading, setInitialLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Codeforces Functions
  const handleRefreshCF = async () => {
    if (!haveCF) return;
    
    setCfLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/user/cfrefresh",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Refreshed Codeforces stats!");
        setCFDetails(res.data.details); 
      } else {
        toast.error("Refresh failed. Try again.");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Server error. Try later.");
    } finally {
      setCfLoading(false);
    }
  };

  const handleAddCF = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cfHandle.trim()) return;

    setCfLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/user/postusercf",
        { userhandle: cfHandle.trim() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (res.data.success) {
        toast.success("Codeforces handle added successfully!");
        setHaveCF(true);
        setCFDetails(res.data.details); 
        setCFHandle("");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Invalid handle or server error");
    } finally {
      setCfLoading(false);
    }
  };

  // LeetCode Functions
  const handleAddLeetCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leetCodeUsername.trim()) return;

    setLeetCodeLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/user/lc-refresh",
        { username: leetCodeUsername.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("LeetCode username added successfully!");
        setHaveLeetCode(true);
        setLeetCodeDetails(res.data.details);
        // Save username to localStorage for future refreshes
        localStorage.setItem("leetcode_username", leetCodeUsername.trim());
        setLeetCodeUsername("");
      } else {
        toast.error("Failed to add LeetCode username");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Invalid username or server error");
    } finally {
      setLeetCodeLoading(false);
    }
  };

  const handleRefreshLeetCode = async () => {
    if (!haveLeetCode) return;
    
    const savedUsername = localStorage.getItem("leetcode_username");
    if (!savedUsername) {
      toast.error("No saved LeetCode username found");
      return;
    }

    setLeetCodeLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/user/lc-refresh",
        { username: savedUsername },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("LeetCode stats refreshed!");
        setLeetCodeDetails(res.data.details);
      } else {
        toast.error("Failed to refresh LeetCode stats");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Server error. Try later.");
    } finally {
      setLeetCodeLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    async function loadInitialData() {
      if (!token) return;

      try {
        // Check Codeforces status
        const cfRes = await axios.get("http://localhost:3000/user/fetchusercf", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (cfRes.data.success && cfRes.data.codeforce) {
          setHaveCF(true);
          setCFDetails(cfRes.data.codeforce);
        }
      } catch (e) {
        // CF data doesn't exist, which is fine
      }

      try {
        // Check LeetCode status
        const lcRes = await axios.get("http://localhost:3000/user/fetchuserlc", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (lcRes.data.success && lcRes.data.leetcode) {
          setHaveLeetCode(true);
          setLeetCodeDetails(lcRes.data.leetcode);
          localStorage.setItem("leetcode_username",lcRes.data.leetcode.handle)
        }
      } catch (e) {
        // LC data doesn't exist, which is fine
      }

      setInitialLoading(false);
    }

    loadInitialData();
  }, [token]);

  const getRankColor = (rank: string) => {
    const rankColors: { [key: string]: string } = {
      'newbie': 'text-gray-500',
      'pupil': 'text-green-500',
      'specialist': 'text-cyan-500',
      'expert': 'text-blue-500',
      'candidate master': 'text-purple-500',
      'master': 'text-orange-500',
      'international master': 'text-orange-600',
      'grandmaster': 'text-red-500',
      'international grandmaster': 'text-red-600',
      'legendary grandmaster': 'text-red-700',
    };
    return rankColors[rank?.toLowerCase()] || 'text-gray-500';
  };

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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Competitive Programming Tracker
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your progress on Codeforces and LeetCode
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Codeforces Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-zinc-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Codeforces
              </h2>
            </div>
            {haveCF && (
              <motion.button
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                onClick={handleRefreshCF}
                disabled={cfLoading}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <RotateCcw className={`h-5 w-5 text-gray-500 hover:text-blue-600 ${cfLoading ? 'animate-spin' : ''}`} />
              </motion.button>
            )}
          </div>

          {!haveCF ? (
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Enter your Codeforces handle to track your competitive programming progress.
              </p>
              <form onSubmit={handleAddCF} className="space-y-3">
                <input
                  type="text"
                  placeholder="e.g. tourist"
                  value={cfHandle}
                  onChange={(e) => setCFHandle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={cfLoading}
                />
                <button
                  type="submit"
                  disabled={cfLoading || !cfHandle.trim()}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cfLoading ? "Adding..." : "Add Codeforces Handle"}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Hash className="h-4 w-4" />
                    Handle
                  </div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {cfDetails?.handle || "N/A"}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Trophy className="h-4 w-4" />
                    Rank
                  </div>
                  <div className={`font-semibold ${getRankColor(cfDetails?.rank || '')}`}>
                    {cfDetails?.rank || "N/A"}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4" />
                    Current Rating
                  </div>
                  <div className="font-semibold text-blue-600">
                    {cfDetails?.rating || "Unrated"}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Target className="h-4 w-4" />
                    Max Rating
                  </div>
                  <div className="font-semibold text-purple-600">
                    {cfDetails?.maxRating || "N/A"}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  Contests Participated
                </div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  {cfDetails?.contests || 0}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* LeetCode Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-zinc-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                LeetCode
              </h2>
            </div>
            {haveLeetCode && (
              <motion.button
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                onClick={handleRefreshLeetCode}
                disabled={leetCodeLoading}
                className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <RotateCcw className={`h-5 w-5 text-gray-500 hover:text-orange-600 ${leetCodeLoading ? 'animate-spin' : ''}`} />
              </motion.button>
            )}
          </div>

          {!haveLeetCode ? (
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Enter your LeetCode username to track your problem-solving progress.
              </p>
              <form onSubmit={handleAddLeetCode} className="space-y-3">
                <input
                  type="text"
                  placeholder="e.g. leetcode_user"
                  value={leetCodeUsername}
                  onChange={(e) => setLeetCodeUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={leetCodeLoading}
                />
                <button
                  type="submit"
                  disabled={leetCodeLoading || !leetCodeUsername.trim()}
                  className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {leetCodeLoading ? "Adding..." : "Add LeetCode Username"}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-zinc-700 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Hash className="h-4 w-4" />
                  Username
                </div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  {localStorage.getItem("leetcode_username") || "N/A"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <Trophy className="h-4 w-4" />
                    Easy
                  </div>
                  <div className="font-semibold text-green-700 dark:text-green-300 text-lg">
                    {leetCodeDetails?.easy || 0}
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                    <Trophy className="h-4 w-4" />
                    Medium
                  </div>
                  <div className="font-semibold text-orange-700 dark:text-orange-300 text-lg">
                    {leetCodeDetails?.medium || 0}
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <Trophy className="h-4 w-4" />
                    Hard
                  </div>
                  <div className="font-semibold text-red-700 dark:text-red-300 text-lg">
                    {leetCodeDetails?.hard || 0}
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                    <Star className="h-4 w-4" />
                    Total
                  </div>
                  <div className="font-semibold text-purple-700 dark:text-purple-300 text-lg">
                    {leetCodeDetails?.total || 0}
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </motion.div>
      </div>

      {/* Stats Summary */}
      {(haveCF || haveLeetCode) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Summary</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {haveCF && (
              <div>
                <h4 className="font-medium mb-2">Codeforces Progress</h4>
                <p className="text-blue-100">
                  <strong>{cfDetails?.handle}</strong> • {cfDetails?.rank} • 
                  {cfDetails?.rating} rating • {cfDetails?.contests} contests
                </p>
              </div>
            )}
            {haveLeetCode && (
              <div>
                <h4 className="font-medium mb-2">LeetCode Progress</h4>
                <p className="text-purple-100">
                  <strong>{leetCodeDetails?.total || 0}</strong> total problems solved • 
                  {leetCodeDetails?.easy || 0}E + {leetCodeDetails?.medium || 0}M + {leetCodeDetails?.hard || 0}H
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}