import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export function Search() {

  {/*login check*/ }
  const navigate = useNavigate()
  useEffect(() => {

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session Expired")
      navigate("/signin")
      return
    };
  }, [])



  const [users, setusers] = useState<user[]>([])
  const [searchuser, setsearchuser] = useState<user[]>([]);
  const [input, setinput] = useState("");
  const [flip, setflip] = useState(false);


  useEffect(() => {
    async function fetch() {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          console.log("Login to get users")
        }
        const result = await axios.get("http://localhost:3000/user/fetchuser", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (!result.data.success) {
          console.log(result.data.msg)
        }
        setusers(result.data.users)
      }

      catch (e) {
        console.error("Unable to fetch")
      }

    }
    fetch()
  }, [])

  useEffect(() => {

    if (input) {
      setflip(true)
    }
    else setflip(false)

  }, [input])

  async function searchfetcher() {
    const token = localStorage.getItem("token")
    if (!token) {
      toast.error("Session Expired")
      console.log("Login to get users")
    }
    const result = await axios.get(`http://localhost:3000/user/searchuser?${(input.includes("@")) ? "email" : "skill"}=${input}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!result.data.success) {
      console.log("Unable to fetch" + result.data.msg)
      return
    }
    setsearchuser(result.data.users);
    console.log(users)
  }



  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      {/*heading */}
      <div>
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white">
          Search Developers
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Filter by skill or unique ID.
        </p>
      </div>

      {/* srchbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input
          type="text"
          placeholder="Search by ID or Skill..."
          className="w-full sm:w-1/2 px-4 py-2 border border-zinc-300  rounded-md bg-white text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition" onClick={searchfetcher}>
          Search
        </button>
      </div>

      {/* User Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!flip && users && Array.isArray(users) && users.map((e) => (
          <UserCard user={e} key={e.email} />
        ))}


        {flip && searchuser && Array.isArray(searchuser) && searchuser.map((e) => (
          <UserCard user={e} key={e.email} />
        ))}


      </div>
    </div>
  );
}
type user = {
  firstname: string,
  lastname: string,
  email: string,
  skills?: string,
  profilelink?:string,
  profileurl:string|null
}
//usercard
function UserCard({ user }: { user: user }) {
  function nav() {
    navigate(`/dashboard/profile/${user.email}`);

  }
  const userskill = user.skills?.split(",").map((e) => e.trim());
  const navigate = useNavigate();
  return (
    <button onClick={nav} className="p-4 bg-white border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md hover:shadow-lg  transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
      <div className="flex items-center gap-3 mb-3">
        
        <img className="w-12 h-12 rounded-full bg-zinc-300"
          alt={user.email}
           src={user.profileurl||"https://www.gravatar.com/avatar/?d=mp"}>
        </img>
         
        <div>
          <h2 className="text-lg font-semibold text-zinc-800 ">
            {user.firstname} {user.lastname}
          </h2>
          <p className="text-sm text-zinc-500 truncate max-w-[200px]">Email:{user.email}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {userskill?.map((e) => (
          <SkillBadge name={e} key={e} color={getRandomColorName()} />
        ))}


      </div>
    </button>

  );
}
function getRandomColorName() {
  const colors = ["green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}


function SkillBadge({ name, color }: { name: string; color: string }) {
  const bg = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
  }[color];

  return (
    <span className={`text-xs px-2 py-1 rounded ${bg}`}>{name}</span>
  );
}
