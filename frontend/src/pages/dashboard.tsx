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
  const [jobs, setJobs] = useState<Job[]>([]);

  type Job = {
    id: number,
    jobtitle: string,
    companyname: string,
    jobtype: string,
    location: string,
    salary: number,
    eligibility: string,
    duration: string,
    deadline: Date,
    skills: string,
    aboutjob: string,
    link: string,
    email: string
  };



  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/prepost", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          console.log(res.data.prepost)
          setJobs(res.data.prepost);
        }
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };

    if (token) fetchJobs();
  }, [token]);




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
  const current = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-3xl mx-auto space-y-6">


        <div className=" relative bg-white dark:bg-zinc-800 rounded-xl p-6  pt-10 shadow-md flex justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
          <p className="absolute top-4 left-6 text-sm text-zinc-500">{current}</p>
          <div className="mb-2 space-y-1">
            <h2 className="text-xl font-semibold">Hi {profile?.firstname || "there"} 👋</h2>
            <p className=" text-zinc-600 dark:text-zinc-400">
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
              className="w-24 h-24 z-10 rounded-full border-2 border-white"
              alt="Avatar"
            />
          )}
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
          <h3 className="text-lg font-semibold mb-4">Quick Profile Overview</h3>
          <div className="space-y-4 text-sm">
            <p><strong>Name:</strong> {profile?.firstname} {profile?.lastname}</p>
            <p><strong>Email:</strong> {profile?.email}</p>
            <div className="flex items-center">
              <strong>Skills: </strong>
              {profile?.skills ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.skills
                    .split(",")
                    .map((skill) => skill.trim())
                    .map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-100 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              ) : (
                <p className="text-sm text-zinc-500"> No skills added yet</p>
              )}
            </div>

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
        {jobs.length > 0 && (
          <div className=" space-y-2 bg-white px-3 py-4 dark:bg-zinc-800 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
            <h3 className="text-lg font-semibold mb-4">Your Posted Jobs</h3>
            <ul className="space-y-4">
              {jobs.map((job) => (
                <li key={job.id} className="border-b space-y-2 pb-4">
                  <h4 className="text-blue-600 font-semibold">{job.jobtitle}</h4>
                  <p className="text-sm">Company: {job.companyname}</p>
                  <p className="text-sm">Location: {job.location}</p>
                  <p className="text-sm">Salary: ₹{job.salary}</p>
                  <p className="text-sm">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                  <div className="mt-2 space-x-2">
                    <button
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      onClick={() => navigate(`/dashboard/edit-job/${job.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={async () => {
                        try {
                          await axios.delete(`http://localhost:3000/user/deletejob/${job.id}`, {
                            headers: { Authorization: `Bearer ${token}` },
                          });
                          toast.success("Job deleted");
                          setJobs(jobs.filter((j) => j.id !== job.id));
                        } catch (err) {
                          console.log(err)
                          toast.error("Failed to delete");
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}




      </div>
    </div>
  );
}
