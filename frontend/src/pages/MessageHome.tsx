import axios from "axios";
import { useEffect, useState } from "react";
import { Chat } from "./Message";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleCodeIcon } from "lucide-react";

interface RecentChat {
  receiveremail: string;
  firstname: string;
  lastname: string;
  profilelink: string;
  lastmessage: string;
}

export function MessageDashboard() {
  const [chats, setChats] = useState<RecentChat[] | null>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<RecentChat | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const API = import.meta.env.VITE_API_URL;
        const resp = await axios.get(`${API}/user/userchatlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!resp.data.success) {
          toast.error(resp.data.msg || "Unable to fetch chats");
          return;
        }
        setChats(resp.data.users);
      } catch {
        toast.error("Network error");
      }
    })();
  }, []);

  const filtered = chats?.filter((c) =>
    `${c.firstname} ${c.lastname}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-white dark:bg-zinc-900 rounded-t-2xl">
      {/* Sidebar */}
      <aside className="overflow-hidden flex flex-col bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-700 rounded-l-2xl shadow-lg shrink-0 basis-full md:basis-[30%] lg:basis-[28%] min-w-[280px] md:min-w-[320px]">
        <div className="sticky top-0 z-10 h-14 px-4 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tl-2xl border-b">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <MessageCircleCodeIcon className="w-5 h-5" /> Messages
          </h2>
        </div>
        <div className="px-4 py-2 bg-white dark:bg-zinc-900 sticky top-14 z-10 border-b">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="flex-1 overflow-y-auto space-y-1 p-2 divide-y divide-gray-100 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
          {!chats ? (
            <p className="text-center text-gray-500 mt-4">Loading…</p>
          ) : filtered && filtered.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">No matches.</p>
          ) : (
            <AnimatePresence initial={false}>
              {filtered?.map((c) => (
                <motion.li
                  key={c.receiveremail}
                  onClick={() => setSelected(c)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    selected?.receiveremail === c.receiveremail
                      ? "bg-gray-100 dark:bg-zinc-800"
                      : "hover:bg-gray-50 dark:hover:bg-zinc-800/80"
                  }`}
                  aria-selected={selected?.receiveremail === c.receiveremail}
                >
                  <img
                    src={c.profilelink || "https://www.gravatar.com/avatar/?d=mp"}
                    alt={c.firstname}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-zinc-700"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-zinc-900 dark:text-white truncate">
                      {c.firstname} {c.lastname}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-1">
                      {c.lastmessage}
                    </p>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          )}
        </ul>
      </aside>
      {/* Chat Area */}
      <section className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-zinc-900 rounded-r-2xl shadow-lg basis-full md:basis-[70%] lg:basis-[72%]">
      
        <motion.div
          key={selected?.receiveremail || "empty"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="flex-1 overflow-hidden "
        >
          {selected ? (
            <Chat
              currentUser={{ email: localStorage.getItem("email")! }}
              receiverEmail={selected.receiveremail}
          
              username={selected.firstname + " " + selected.lastname}
              profilelink={selected.profilelink}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <MessageCircleCodeIcon className="w-12 h-12 text-blue-400 mb-4 animate-bounce" />
              <p className="text-center text-gray-500 mt-10">
                Select a user to view the conversation.
              </p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}