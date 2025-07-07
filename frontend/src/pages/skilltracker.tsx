import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";


export function SkillTracker() {
  const [haveCF, setHaveCF] = useState(false);
  const [cfDetails, setCFDetails] = useState<any>(null); // replace `any` with your type if available
  const [cfHandle, setCFHandle] = useState("");

  const token = localStorage.getItem("token");
  const handleRefresh = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "http://localhost:3000/user/cfrefresh",
      {userhandle:cfHandle}, // or pass handle if needed
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) {
      toast.success("Refreshed Codeforces stats!");
      setCFDetails(res.data.details); 
    } else {
      toast.error("Refresh failed. Try again.");
    }
  } catch (err) {
    toast.error("Server error. Try later.");
  }
};



  const handleAddCF = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/user/postusercf",
        { userhandle: cfHandle },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Codeforces handle added!");
      setHaveCF(true);
      setCFDetails(res.data.details); 
      setCFHandle("");
    } catch (err) {
      toast.error("Invalid handle or server error");
    }
  };

  useEffect(() => {
    async function checkCFStatus() {
      try {
        const res = await axios.get("http://localhost:3000/user/fetchusercf", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success && res.data.codeforce) {
          setHaveCF(true);
          setCFDetails(res.data.codeforce);
        } else {
          setHaveCF(false);
        }
      } catch (e) {
        toast.error("Failed to load CF info");
      }
    }

    checkCFStatus();
  }, [token]);

  return (
    <div className="max-w-xl mx-auto p-4">
      {!haveCF ? (
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Connect Codeforces
          </h2>
         
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Enter your Codeforces handle to track your progress.
          </p>
          <form onSubmit={handleAddCF} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. chetan_137"
              value={cfHandle}
              onChange={(e) => setCFHandle(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Track
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Your Codeforces Stats
          </h2>
           <motion.button
    whileTap={{ rotate: 360 }}
    transition={{ duration: 0.5 }}
    onClick={handleRefresh}
  >
    <RotateCcw className="h-5 w-5 text-gray-500 hover:text-blue-600" />
    </motion.button>
          <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <p>
              <strong>Handle:</strong> {cfDetails?.handle || "N/A"}
            </p>
            <p>
              <strong>Current Rating:</strong> {cfDetails?.rating || "N/A"}
            </p>
            <p>
              <strong>Max Rating:</strong> {cfDetails?.maxRating || "N/A"}
            </p>
            <p>
              <strong>Contests Attended:</strong>{" "}
              {cfDetails?.contestsCount || "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
