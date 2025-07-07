import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Props {
  currentUser: { email: string };
  receiverEmail: string;
   hideHeader?: boolean;

}

interface Message {
  message: string;
  from: string;
}

export function Chat({ currentUser, receiverEmail ,hideHeader}: Props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<Message[]>([]);
  const socket = useRef<WebSocket | null>(null);
  const messageBoxRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Session Expired");
        navigate("/signin");
        return;
      }
      try {
        const res = await axios.get("http://localhost:3000/user/getmessage", {
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
    fetchMessages();
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    socket.current = new WebSocket(`ws://localhost:3000?token=${token}`);
    socket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessage((prev) => [...prev, data]);
    };
    return () => {
      socket.current?.close();
    };
  }, []);

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
    
    <div className="h-full w-full flex flex-col bg-white dark:bg-zinc-900 rounded-xl border border-gray-300 shadow">
      {!hideHeader &&(
      <div className="p-4 bg-blue-600 text-white rounded-t-xl border-b">
        <h2 className="text-lg font-semibold">Chat with <span className="font-bold">{receiverEmail}</span></h2>
      </div>)}

      <div ref={messageBoxRef} className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-50 dark:bg-zinc-800">
        {message.map((msg, idx) => {
          const isOwn = msg.from.toLowerCase().trim() === currentUser.email.toLowerCase().trim();
          return (
            <div key={idx} className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl shadow text-sm ${
                  isOwn
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 dark:bg-zinc-700 dark:text-white rounded-bl-none"
                }`}
              >
                <span className="block">{msg.message}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 flex items-center gap-2 border-t bg-white dark:bg-zinc-900">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message…"
          className="flex-1 px-4 py-2 rounded-full border shadow-sm text-sm bg-gray-100 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}