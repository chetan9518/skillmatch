import axios from "axios";
import { useEffect, useState } from "react";
import { Chat } from "./message";
import { toast } from "sonner";

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
    <div className="h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-zinc-900">
      <aside className="md:w-1/3 lg:w-1/4 border-r border-gray-200 dark:border-zinc-700 flex flex-col">
        <div className="px-4 py-3 flex items-center justify-between bg-white dark:bg-zinc-800 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Messages
          </h2>
        </div>
        <div className="px-4 py-2 bg-white dark:bg-zinc-800 sticky top-16 z-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-zinc-700 rounded-lg focus:outline-none"
          />
        </div>
        <ul className="flex-1 overflow-y-auto space-y-1 p-2">
          {!chats ? (
            <p className="text-center text-gray-500 mt-4">Loading…</p>
          ) : filtered && filtered.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">No matches.</p>
          ) : (
            filtered?.map((c) => (
          
              <li
                key={c.receiveremail}
                onClick={() => setSelected(c)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                  selected?.receiveremail === c.receiveremail
                    ? "bg-blue-100 dark:bg-zinc-700"
                    : "hover:bg-blue-50 dark:hover:bg-zinc-700"
                }`}
              >
                
           
                <img
                  src={c.profilelink || "https://www.gravatar.com/avatar/?d=mp"}
                  alt={c.firstname}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-white truncate">
                    {c.firstname} {c.lastname}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 truncate">
                    {c.lastmessage}
                  </p>
                </div>
               
             
              </li>
            ))
          )}
        </ul>
      </aside>
      <section className="flex-1 flex flex-col">
        <header className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 sticky top-0 z-10">
          <button onClick={() => setSelected(null)} className="md:hidden text-blue-600">
            ← Back
          </button>
        
          {selected ? (
            <>
              <img
                src={selected.profilelink || "https://www.gravatar.com/avatar/?d=mp"}
                alt={selected.firstname}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {selected.firstname} {selected.lastname}
                </h3>
              </div>
            </>
          ) : (
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Choose a chat
            </h3>
          )}
        </header>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-zinc-900">
          {selected ? (
            <Chat
              currentUser={{ email: localStorage.getItem("email")! }}
              receiverEmail={selected.receiveremail}
              hideHeader={true}
            />
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Select a user to view the conversation.
            </p>
          )}
        </div>
        
      </section>
    </div>
  );
}