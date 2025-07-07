import { NavLink, useNavigate } from "react-router-dom";
import {
  LogOut,
  Menu,
  X,
  User,
  Briefcase,
  MessageSquare,
  ClipboardList,
  PlusCircle,
  Megaphone,
  Bell,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

interface UserProfile {
  firstname?: string;
  lastname?: string;
  email?: string;
  profilelink?: string;
  skills?: string;
  github?:string;
  portfolio?:string;
  bio?:string
}

function SidebarContent({
  userProfile,
  profileUrl,
  profileCompletion,
  loading,
  navigationItems,
  setIsSidebarOpen,
  handleLogout,
  navigate,
}: any) {
  return (
    <>
      {/* Profile Section */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
                <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                {profileUrl ? (
                  <img
                    src={profileUrl}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
                    {userProfile?.firstname?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-zinc-800 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-zinc-900 dark:text-white truncate">
                  {userProfile?.firstname
                    ? `${userProfile.firstname} ${userProfile.lastname || ""}`.trim()
                    : "Welcome!"}
                </h3>
                <p className="text-sm text-zinc-500 truncate">
                  {userProfile?.email || "Complete your profile"}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors relative"
              >
                <Bell size={16} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Profile Complete
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {profileCompletion}%
                </span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${profileCompletion}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              {profileCompletion < 100 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("update")}
                  className="w-full text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Complete your profile →
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item: any, index: number) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:scale-102"
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={20} className={isActive ? "text-white" : ""} />
                    </motion.div>
                    <span className="font-medium flex-1">{item.label}</span>
                    {item.badge && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {item.badge}
                      </motion.span>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 
                     bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 
                     border border-red-200 dark:border-red-800 rounded-xl
                     hover:bg-red-100 dark:hover:bg-red-900/30
                     transition-all duration-300 font-medium"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </motion.button>
      </div>
    </>
  );
}

export function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [unreadmsg,setunreadmsg]= useState(0)
  const navigate = useNavigate();

  const navigationItems = [
    { to: "update", icon: User, label: "Profile", badge: null },
    { to: "skilltracker", icon: Briefcase, label: "Skill Tracker", badge: null },
    { to: "seekjob", icon: ClipboardList, label: "Find Job", badge: null },
    { to: "msg", icon: MessageSquare, label: "Messages", badge:unreadmsg },
    { to: "search", icon: PlusCircle, label: "Find SkillMatch", badge: null },
    { to: "postjob", icon: Megaphone, label: "Post Job", badge: null },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const token= localStorage.getItem("token")
  useEffect(()=>{
    async function fetchm(){
      try{
      const res = await axios.get("http://localhost:3000/user/unread-msg",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      if(res.data.success){
        setunreadmsg(res.data.messageNumber)
      }
      }
      catch(e){

      }
    }
    fetchm()
  },[])

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setLoading(false);

      try {
        const res = await axios.get("http://localhost:3000/user/fetchinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) {
          setUserProfile(res.data.details);
          if (res.data.details.profilelink) {
            const imageRes = await axios.get("http://localhost:3000/user/profileurl", {
              params: { profilelink: res.data.details.profilelink },
              headers: { Authorization: `Bearer ${token}` },
            });
            if (imageRes.data.success) setProfileUrl(imageRes.data.profileUrl);
          }
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const getProfileCompletion = () => {
    if (!userProfile) return 0;
    const fields = [
      userProfile.firstname,
      userProfile.lastname,
      userProfile.skills,
     userProfile.bio,
      userProfile.github,
      userProfile.portfolio,
    ];
    return Math.round((fields.filter(Boolean).length / fields.length) * 100);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const profileCompletion = getProfileCompletion();

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Toggle button only on mobile */}
      {isMobile && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} className="md:hidden fixed top-20 left-0 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-white dark:bg-zinc-800 p-3 rounded-r-lg shadow-lg border border-zinc-200 dark:border-zinc-700"
            aria-label="Toggle sidebar"
          >
            <AnimatePresence mode="wait">
              {isSidebarOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}

      {isMobile ? (
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: isSidebarOpen ? 0 : -300 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="w-72 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 shadow-xl flex flex-col md:hidden"
        >
          <SidebarContent {...{ userProfile, profileUrl, profileCompletion, loading, navigationItems, setIsSidebarOpen, handleLogout, navigate }} />
        </motion.aside>
      ) : (
        <aside className="w-72 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 shadow-xl flex flex-col hidden md:flex">
          <SidebarContent {...{ userProfile, profileUrl, profileCompletion, loading, navigationItems, setIsSidebarOpen, handleLogout, navigate }} />
        </aside>
      )}
    </>
  );
}
