import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";


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
  const [profile, setProfile] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      toast.error("Session Expired");
      navigate("/signin");
      return;
    }

    const fetchProfileImage = async (profileKey: string) => {
      try {
        const response = await axios.get("http://localhost:3000/user/profileurl", {
          params: { profilelink: profileKey },
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setProfile(response.data.profileUrl);
        }
      } catch (error) {
        console.error("Failed to fetch profile image", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/user/fetchone?email=${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!result.data.success) {
          toast.error("Unable to fetch user data");
          return;
        }

        setUser(result.data.details);
        const { profilelink } = result.data.details;
        if (profilelink) await fetchProfileImage(profilelink);
      } catch (error) {
        toast.error("Server error while fetching profile");
      }
    };

    fetchUserData();
  }, [email, navigate, token]);

  const skills = user?.skills?.split(",").map(skill => skill.trim()) || [];

  return (
    <div className="max-w-md w-full mx-auto mt-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-zinc-700">
      <div className="relative h-56 w-full bg-gray-100 dark:bg-zinc-800">
        <img
          src={profile || "/images/default-avatar.png"}
          alt={user?.firstname}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {user?.firstname} {user?.lastname}
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {user?.bio || "No bio provided"}
        </p>

        {skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {skills.map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-white rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-6 mt-6">
          {user?.github && (
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
            >
              GitHub
            </a>
          )}
          {user?.portfolio && (
            <a
              href={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
            >
              Portfolio
            </a>
          )}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {user?.resumelink && (
            <a
              href={user.resumelink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              View Resume
            </a>
          )}
          <button
            onClick={() => navigate("/dashboard/chat", { state: { receiverEmail: user?.email } })}
            className="inline-block px-5 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
