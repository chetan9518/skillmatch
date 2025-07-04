// components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <ChevronLeft className="w-6 h-6" />
          ) : (
            <ChevronRight className="w-6 h-6" />
          )}
        </button>
      </div>

      <aside
        className={`
          w-64 bg-white dark:bg-zinc-800 p-4 shadow-lg
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
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Profile
          </NavLink>
          <NavLink
            to="skill-tracker"
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Skill Tracker
          </NavLink>
          <NavLink
            to="seekjob"
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Find Job
          </NavLink>
          <NavLink
            to="msg"
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Messages
          </NavLink>
          <NavLink
            to="search"
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Find SkillMatch
          </NavLink>
          <NavLink
            to="postjob"
            className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            Post Job
          </NavLink>
        </nav>
      </aside>
    </>
  );
}