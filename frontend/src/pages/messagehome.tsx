import axios from "axios";
import { useEffect, useState } from "react";
import { Chat } from "./message";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

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
        const resp = await axios.get("http://localhost:3000/user/userchatlist", {
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
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-purple-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Sidebar */}
      <aside className="md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-zinc-700 flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
        <div className="px-4 py-4 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl sticky top-0 z-10 shadow">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Messages
          </h2>
        </div>
        <div className="px-4 py-2 bg-white/80 dark:bg-zinc-900/80 sticky top-16 z-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="flex-1 overflow-y-auto space-y-1 p-2">
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
                      ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 shadow"
                      : "hover:bg-blue-50 dark:hover:bg-zinc-700"
                  }`}
                >
                  <img
                    src={c.profilelink || "https://www.gravatar.com/avatar/?d=mp"}
                    alt={c.firstname}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-700"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-zinc-900 dark:text-white truncate">
                      {c.firstname} {c.lastname}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 truncate">
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
      <section className="flex-1 flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
        <header className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-zinc-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-10 rounded-t-2xl shadow">
          <button onClick={() => setSelected(null)} className="md:hidden text-white font-bold">
            ← Back
          </button>
          {selected ? (
            <>
              <img
                src={selected.profilelink || "https://www.gravatar.com/avatar/?d=mp"}
                alt={selected.firstname}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-200 dark:border-blue-700"
              />
              <div>
                <h3 className="font-semibold text-white">
                  {selected.firstname} {selected.lastname}
                </h3>
              </div>
            </>
          ) : (
            <h3 className="font-semibold text-white">Choose a chat</h3>
          )}
        </header>
        <motion.div
          key={selected?.receiveremail || "empty"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="flex-1 overflow-y-auto p-4"
        >
          {selected ? (
            <Chat
              currentUser={{ email: localStorage.getItem("email")! }}
              receiverEmail={selected.receiveremail}
              hideHeader={true}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <Sparkles className="w-12 h-12 text-blue-400 mb-4 animate-bounce" />
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