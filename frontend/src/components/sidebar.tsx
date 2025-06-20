// components/Sidebar.tsx

import { NavLink } from "react-router-dom";


export function Sidebar() {
  
  return (
    <aside className="w-64 bg-white dark:bg-zinc-800 p-4 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">SkillMatch</h1>
      <nav className="space-y-3">
        <NavLink to="update" className=" block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition">Profile</NavLink>
        <NavLink to="skill-tracker" className=" block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition">Skill Tracker</NavLink>
        <NavLink to="" className="block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition">Opportunities</NavLink>
        <NavLink to="messages" className=" block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition">Messages</NavLink>
        <NavLink to="search" className=" block py-2 px-4 rounded hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow transition">Find skillmatch</NavLink>
        
      </nav>
      
    </aside>
  );
}
