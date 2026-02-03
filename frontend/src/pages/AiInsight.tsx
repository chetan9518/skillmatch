import React, { useEffect, useState } from "react";
import axios from "axios";
const gradientBg = "bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-400";
const glassCard = "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border border-white/30 shadow-xl rounded-2xl p-6 transition-transform hover:scale-[1.025]";
const API = import.meta.env.VITE_API_URL;
export const AiInsight: React.FC = () => {
  const [weeklyPlan, setWeeklyPlan] = useState<string>("");
  const [motivation, setMotivation] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<{ firstname?: string } | null>(null);

  // Fetch user info for personalization


useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API}/user/fetchinfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setUser(response.data.details);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  fetchUser();
}, []);

  // Fetch both insights
  const fetchInsights = async () => {
    setLoading(true);
    setError("");
    try {
      const data1 = await axios.get(`${API}/user/ai/weekly-plan`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      
      if (!data1.data.success) throw new Error(data1.data.msg || "Failed to fetch weekly plan");
      setWeeklyPlan(data1.data.plan);

      const data2 = await axios.get(`${API}/user/ai/motivation`, {

        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      
      if (!data2.data.success) throw new Error(data2.data.msg || "Failed to fetch motivation");
      setMotivation(data2.data.plan);

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
    // eslint-disable-next-line
  }, []);

  // Share to clipboard
  const handleShare = () => {
    navigator.clipboard.writeText(
      `My AI Weekly Plan:\n${weeklyPlan}\n\nMotivation:\n${motivation}`
    );
    alert("Insights copied! Share with your friends 🚀");
  };

  return (
    <div className={`max-w-4xl mx-auto py-10 px-4 ${gradientBg} rounded-3xl shadow-2xl`}>
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-in">
          AI Insights
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-fade-in">
          {user?.firstname ? `Welcome back, ${user.firstname}!` : "Welcome to your Growth Hub!"}
        </h2>
        <p className="text-lg text-white/80 mb-4 animate-fade-in-slow">
          Unlock your personalized DSA journey and daily motivation powered by AI.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={fetchInsights}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition"
          >
            Refresh Insights
          </button>
          <button
            onClick={handleShare}
            className="px-5 py-2 rounded-lg bg-white/80 hover:bg-white/90 text-indigo-700 font-semibold shadow transition"
          >
            Share
          </button>
        </div>
      </div>
      {/* Insights */}
      {loading ? (
        <div className="text-xl text-white text-center my-16 animate-pulse">Loading your AI insights...</div>
      ) : error ? (
        <div className="text-lg text-red-200 text-center my-8">{error}</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Weekly Plan Card */}
          <div className={`${glassCard} flex-1`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🗓️</span>
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Weekly DSA Plan</h3>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-100 text-base mt-2">{weeklyPlan}</pre>
          </div>
          {/* Motivational Message Card */}
          <div className={`${glassCard} flex-1 bg-gradient-to-br from-yellow-100/80 to-pink-100/80 dark:from-yellow-900/60 dark:to-pink-900/60`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-bold text-pink-700 dark:text-pink-200">Motivation</h3>
            </div>
            <blockquote className="italic text-lg text-gray-700 dark:text-gray-100 border-l-4 border-pink-400 pl-4 mt-2">{motivation}</blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

