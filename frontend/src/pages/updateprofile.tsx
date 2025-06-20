import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Update() {
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [bio, setbio] = useState("");
  const [skills, setskills] = useState("");
  const [link, setlink] = useState({ github: "", portfolio: "" });
  const [resume, setresume] = useState<null | File>(null);

  const [error, seterror] = useState(false);
  const [msg, setmsg] = useState<string>("");
  const [loading, setloading] = useState(false);
  const [showfile, setshowfile] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [resumlink ,setresumelink]= useState("")

  const inputRef = useRef<HTMLInputElement | null>(null);
  let token = localStorage.getItem("token");
  let email = localStorage.getItem("email")!;

  // ftch user details to show and prefill form
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/user/fetchinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          const data = res.data.details;
          setfirstname(data.firstname || "");
          setlastname(data.lastname || "");
          setbio(data.bio || "");
          setskills(data.skills || "");
          setlink({
            github: data.github || "",
            portfolio: data.portfolio || "",
          });
          setresumelink(data.resumelink||"")
          setProfileLoaded(true);
        }
      } catch (e) {
        console.error("Failed to fetch profile");
      }
    }

    fetchData();
  }, []);

  //Sumit updatedfd data
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setloading(true);
    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("bio", bio);
    formdata.append("skills", skills);
    formdata.append("github", link.github);
    formdata.append("portfolio", link.portfolio);
    formdata.append("email", email);

    if (resume) {
      formdata.append("resume", resume);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/update",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.success) {
        setmsg(response.data.msg);
        seterror(true);
        return;
      }

      navigate("/dashboard");
    } catch (e) {
      setmsg("Update failed");
      seterror(true);
    } finally {
      setloading(false);
    }
  }

  const file = (e: React.ChangeEvent<HTMLInputElement>) => {
    const setfile = e.target.files?.[0];
    if (setfile != null) {
      setresume(setfile);
      setshowfile(true);
    }
  };

  const handleDelete = () => {
    setresume(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setshowfile(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
        Update Your Profile
      </h2>

      {error && <div className="text-red-600 text-sm mb-3">{msg}</div>}

      {/* Show  profile infomatioon*/}
      {profileLoaded && (
        <div className="mb-6 bg-zinc-100 dark:bg-zinc-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Current Profile Info</h3>
          <p>
            <strong>Full Name:</strong> {firstname} {lastname}
          </p>
          <p>
            <strong>Bio:</strong> {bio || "Not added"}
          </p>
          <p>
            <strong>Skills:</strong> {skills || "Not added"}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            {link.github ? (
              <a
                href={link.github}
                target="_blank"
                className="text-blue-600 underline"
              >
                {link.github}
              </a>
            ) : (
              "Not added"
            )}
          </p>
          <p>
            <strong>Portfolio:</strong>{" "}
            {link.portfolio ? (
              <a
                href={link.portfolio}
                target="_blank"
                className="text-blue-600 underline"
              >
                {link.portfolio}
              </a>
            ) : (
              "Not added"
            )}
          </p>
          <p>
            <strong>Resume:</strong>{" "}
            {resumlink ? (
              <a
                href={resumlink}
                target="_blank"
                className="text-blue-600 underline"
              >
                {resumlink}
              </a>
            ) : (
              "Not added"
            )}
          </p>
        </div>
      )}

      {/*updateform */}
      <form className="space-y-4" onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Bio</label>
            <textarea
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={bio}
              onChange={(e) => setbio(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Skills (comma separated)</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={skills}
              onChange={(e) => setskills(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">GitHub</label>
            <input
              name="github"
              type="url"
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={link.github}
              onChange={(e) =>
                setlink((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Portfolio</label>
            <input
              name="portfolio"
              type="url"
              className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-700 rounded border focus:outline-none"
              value={link.portfolio}
              onChange={(e) =>
                setlink((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Upload Resume (PDF)</label>
            <input
              name="resume"
              type="file"
              accept=".pdf"
              ref={inputRef}
              onChange={file}
            />
            {showfile && (
              <div className="mt-2 text-sm">
                Selected: {resume?.name}
                <button
                  onClick={handleDelete}
                  className="ml-2 px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
