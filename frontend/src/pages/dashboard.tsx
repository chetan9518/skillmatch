import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type UserProfile = {
  firstname: string;
  lastname?: string;
  bio?: string;
  skills?: string;
  github?: string;
  portfolio?: string;
  email: string;
  profilelink?: string;
  resumelink?: string;
};

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }
  }, [navigate, token]);

  useEffect(() => {
    const fetchSignedUrls = async (profileKey: string, resumeKey: string) => {
      try {
        const profileRes = await axios.get(
          "http://localhost:3000/user/profileurl",
          {
            params: { profilelink: profileKey },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (profileRes.data.success) {
          setProfileUrl(profileRes.data.profileUrl);
        }

        const resumeRes = await axios.get(
          "http://localhost:3000/user/resumeurl",
          {
            params: { resumelink: resumeKey },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (resumeRes.data.success) {
          setResumeUrl(resumeRes.data.resumeUrl);
        }
      } catch (error) {
        console.error("Failed to fetch signed URLs", error);
      }
    };

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/user/fetchinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          setProfile(res.data.details);
          const { profilelink, resumelink } = res.data.details;
          if (profilelink && resumelink) {
            await fetchSignedUrls(profilelink, resumelink);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

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
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Hi {profile?.firstname || "there"} 👋</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-300">
              {profile?.bio || "Start setting up your profile to get better matches!"}
            </p>
          </div>
          {profileUrl ? (
            <img
              src={profileUrl}
              className="w-24 h-24 rounded-full border-2 border-blue-500"
              alt="Profile"
            />
          ) : (
            <img
              src={`https://ui-avatars.com/api/?name=${profile?.firstname}&background=random`}
              className="w-24 h-24 rounded-full border-2 border-white"
              alt="Avatar"
            />
          )}
        </div>

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
            {resumeUrl && (
              <p>
                <strong>Resume:</strong>{" "}
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                  Download Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
