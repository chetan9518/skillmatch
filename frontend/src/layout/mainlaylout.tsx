// ✅ Main Layout Wrapper for all pages (Sidebar + Topbar)
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { useEffect } from "react";


const MainLayout = () => {
  

  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white gap-4">
      <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 md:ml-72  h-full">
          <Outlet />
        </main>
      </div>
   

  );
};

export default MainLayout;
