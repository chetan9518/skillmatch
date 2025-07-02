import { useEffect, useRef, useState } from "react";

interface Props {
  currentUser: { email: string };
  receiverEmail: string;
}

export function Chat({ currentUser, receiverEmail }: Props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<{ message: string; from: string }[]>([]);
  const socket = useRef<WebSocket | null>(null);
  const messageBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    socket.current = new WebSocket(`ws://localhost:3000?token=${token}`);

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
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
    <div className="max-w-lg mx-auto my-8 border border-gray-300 rounded-xl shadow-lg flex flex-col h-[80vh] bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-xl">
        <h2 className="text-lg font-semibold">
          Chat with <span className="font-bold">{receiverEmail}</span>
        </h2>
      </div>

      {/* Message Box */}
      <div
        ref={messageBoxRef}
        className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-2"
      >
        {message.map((msg, idx) => {
          const isOwnMessage = msg.from === currentUser.email;
          return (
            <div
              key={idx}
              className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-xl shadow text-sm ${
                  isOwnMessage
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                <strong>{isOwnMessage ? "You" : msg.from}</strong>: {msg.message}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
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
