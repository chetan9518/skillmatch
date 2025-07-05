// components/Sidebar.tsx
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { Menu, X, User, Briefcase, MessageSquare, ClipboardList, PlusCircle, Megaphone } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden transition-all duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="md:hidden p-2 bg-white dark:bg-zinc-800 shadow fixed top-16 left-0 z-50 flex items-center w-fit rounded-tr-md rounded-br-md">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      <aside
        className={`
          w-64 bg-white dark:bg-zinc-700   border-r border-zinc-200 dark:border-zinc-700 p-4 shadow-lg
          fixed top-16 left-0 h-screen z-40
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-auto md:block
          md:shadow-none
        `}
      >
        <nav className="space-y-3 mt-6">
          <NavLink
            to="update"
            className={({ isActive }) =>
              ` 
               
               duration-300 hover:scale-105 flex items-center gap-2 py-2 px-4 rounded transition-transform shadow ${isActive
                ? "bg-blue-100 text-blue-700 scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : " hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<User size={18} />} Profile
          </NavLink>
          <NavLink
            to="skill-tracker"
            className={({ isActive }) =>
              `
flex items-center gap-2 py-2 px-4 rounded transition-transform  hover:scale-105 shadow ${isActive
                ? "scale-105 bg-blue-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "  hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<Briefcase size={18} />}
            Skill Tracker
          </NavLink>
          <NavLink
            to="seekjob"
            className={({ isActive }) =>
              ` flex items-center gap-2 py-2 px-4 rounded transition-transform  hover:scale-105 shadow ${isActive
                ? "bg-blue-100 text-blue-700 scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : " hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<ClipboardList size={18} />}
            Find Job
          </NavLink>
          <NavLink
            to="msg"
            className={({ isActive }) =>
              `  flex items-center gap-2 py-2 px-4 rounded transition-transform  hover:scale-105 shadow ${isActive
                ? "bg-blue-100 text-blue-700 scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "  hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<MessageSquare size={18} />}
            Messages
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) =>
              ` flex items-center gap-2 py-2 px-4 rounded transition-transform  hover:scale-105 shadow ${isActive
                ? "bg-blue-100 text-blue-700 scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : " hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<PlusCircle size={18} />}
            Find SkillMatch
          </NavLink>
          <NavLink
            to="postjob"
            className={({ isActive }) =>
              `  flex items-center gap-2 py-2 px-4 rounded transition-transform  hover:scale-105 shadow ${isActive
                ? "bg-blue-100 text-blue-700 scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "  hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
              }`
            }
            onClick={() => setIsSidebarOpen(false)}
          >{<Megaphone size={18} />}
            Post Job
          </NavLink>


        </nav>
        <div className="border-t pt-4">
          <button
            onClick={() => {
              localStorage.setItem("token", "")

              navigate("/")
            }}
            className=" text-red-600 border-red-500 hover:bg-red-500 hover:text-white
 flex items-center gap-2 border  px-4 py-1.5 rounded-md  transition"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

      </aside>



    </>
  );
}