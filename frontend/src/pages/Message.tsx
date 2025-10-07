import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Send ,ArrowLeft} from "lucide-react";

interface Props {
  currentUser: { email: string };
  receiverEmail: string;
  username?: string;
  profilelink?: string;
}

interface Message {
  message: string;
  from: string;
}

export function Chat({ currentUser, receiverEmail,username,profilelink}: Props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<Message[]>([]);
  const socket = useRef<WebSocket | null>(null);
  const messageBoxRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Fetch messages when receiver changes
  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session Expired");
        navigate("/signin");
        return;
      }
      try {
        const API = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${API}/user/getmessage/${receiverEmail}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success && res.data.messages) {
          const formatted = res.data.messages.map((msg: any) => ({
            from: msg.sender,
            message: msg.content,
          }));
          setMessage(formatted);
        }
      } catch (err) {
        toast.error("Could not load messages");
      }
    };
    if (receiverEmail) fetchMessages();
  }, [receiverEmail, navigate]);

  // WebSocket connection (reconnect on receiver change)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const API = import.meta.env.VITE_WS_URL || import.meta.env.VITE_API_URL;
    const wsUrl = API.startsWith("ws") ? API : `wss://${API.replace(/^https?:\/\//, "")}`;
    socket.current = new WebSocket(`${wsUrl}?token=${token}`);
    socket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessage((prev) => [...prev, data]);
    };
    return () => {
      socket.current?.close();
    };
  }, [receiverEmail]);

  // Scroll to bottom on new message
  useEffect(() => {
    messageBoxRef.current?.scrollTo({
      top: messageBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [message]);

  const sendMessage = () => {
    if (!input.trim()) return;
    if (socket.current?.readyState === WebSocket.OPEN) {
      const msgObj = { to: receiverEmail, message: input };
      socket.current.send(JSON.stringify(msgObj));
      setMessage((prev) => [...prev, { from: currentUser.email, message: input }]);
      setInput("");
    }
  };

  return (
    <div className="h-full w-full pb-14 flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-lg">

        <div className="sticky top-0 z-10 h-14 w-full px-4 bg-gradient-to-l from-blue-600 to-purple-600 text-white  border-b flex items-center gap-3">
          <button onClick={() => navigate("/dashboard/msg")} className="text-white"><ArrowLeft className="w-4 h-4" /></button>
        <img
            src={profilelink || "https://www.gravatar.com/avatar/?d=mp"}
            alt={username}
            className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-zinc-700"
          />
          <span className="font-semibold text-sm md:text-base">{username}</span>

        </div>

      <div
        ref={messageBoxRef}
        className={`flex-1 pt-14 pb-16 p-4 space-y-1 overflow-y-auto bg-gray-50/70 dark:bg-zinc-800/70 rounded-b-2xl`}
        tabIndex={0}
        aria-label="Message history"
      >
        <AnimatePresence initial={false}>
          {message.map((msg, idx) => {
            const isOwn = msg.from.toLowerCase().trim() === currentUser.email.toLowerCase().trim();
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isOwn ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isOwn ? 40 : -40 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-2xl shadow text-sm break-words ${
                    isOwn
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none"
                      : "bg-white/80 text-zinc-800 dark:bg-zinc-700 dark:text-white rounded-bl-none border border-zinc-200 dark:border-zinc-700"
                  }`}
                >
                  <span className="block">{msg.message}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="sticky bottom-0 z-10 p-3 flex items-center gap-2 border-t bg-white dark:bg-zinc-900 rounded-b-2xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message…"
          className="flex-1 px-3 py-2 rounded-full border shadow-sm text-sm bg-gray-100 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Type a message"
        />
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={sendMessage}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition flex items-center gap-2 shadow"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}