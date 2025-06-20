import axios from "axios";
import { useEffect, useState } from "react";

type UserProfile = {
  firstname: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
  email: string;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:3000/user/fetchinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setProfile(res.data.details);
        }
      } catch (err) {
        console.error("Failed to fetch user data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin w-10 h-10 rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Welcome Section */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Hi {profile?.firstname || "there"} 👋
              </h2>
              <p className="text-sm text-gray-500 dark:text-zinc-300">
                {profile?.bio || "Start setting up your profile to get better matches!"}
              </p>
            </div>
            <img
              src={`https://ui-avatars.com/api/?name=${profile?.firstname}+${profile?.lastname}&background=random`}
              className="w-16 h-16 rounded-full border-2 border-white"
              alt="Avatar"
            />
          </div>
        </div>

        {/* Profile Overview */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Quick Profile Overview</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {profile?.firstname} {profile?.lastname}</p>
            <p><strong>Email:</strong> {profile?.email}</p>
            <p><strong>Skills:</strong> {profile?.skills || "No skills added yet"}</p>
            <p>
              <strong>GitHub:</strong>{" "}
              {profile?.github ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  {profile.github.replace(/^https?:\/\//, "")}
                </a>
              ) : (
                "Not shared"
              )}
            </p>
            <p>
              <strong>Portfolio:</strong>{" "}
              {profile?.portfolio ? (
                <a
                  href={profile.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  {profile.portfolio.replace(/^https?:\/\//, "")}
                </a>
              ) : (
                "Not shared"
              )}
            </p>
          </div>
        </div>

        {/* Edit Profile Button */}
        

        {/* Preview Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {/* Skill Match Preview */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold">Suggested Matches (Preview)</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-300 mt-2">
              This is just a quick look. Go to the "Opportunities" page to explore more.
            </p>
            <button
              className="mt-4 px-3 py-1.5 bg-white border border-gray-300 text-sm rounded hover:bg-gray-50 dark:bg-zinc-900 dark:border-zinc-600 dark:hover:bg-zinc-700"
              onClick={() => window.location.href = "/opportunities"}
            >
              Explore Opportunities
            </button>
          </div>

          {/* Activity Summary */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold">Your Recent Activity</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-300 mt-2">
              Any recent changes or updates you’ve made will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
