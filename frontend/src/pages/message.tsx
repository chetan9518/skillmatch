import { useEffect, useRef, useState } from "react";
interface Props {
  currentUser: { email: string };
  receiverEmail: string;
}

export function Chat({ currentUser, receiverEmail }: Props){
    const [input,setinput]= useState("")
    const [message ,setmessage]= useState<{message:string,from:string}[]>([])
    const socket= useRef<WebSocket|null>(null)
    
useEffect(()=>{
    const token = localStorage.getItem("token")
    socket.current= new WebSocket(`ws://localhost:3000?token=${token}`)
    
    socket.current.onmessage= (event)=>{
        const data = JSON.parse(event.data)
        setmessage((pre)=>[...pre,data])
    }
    return ()=>{
        socket.current?.close()
    }

},[]
)
const sendmessage= ()=>{
    if(!input.trim()){
        return 
    }
    if(socket.current?.readyState===WebSocket.OPEN){
        const msgObj = {to:receiverEmail,message:input}
        socket.current.send(JSON.stringify(msgObj))
        setmessage((prev) => [...prev, { from: currentUser.email, message: input }]);
        setinput("")
    }
}
return (
    <div className="p-4 rounded bg-white shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">
        Chat with <span className="text-blue-600">{receiverEmail}</span>
      </h2>
      <div className="border p-2 h-64 overflow-y-scroll bg-gray-100 rounded mb-2">
        {message.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-1 ${
              msg.from === currentUser.email ? "text-right text-blue-700" : "text-left text-green-700"
            }`}
          >
            <span className="inline-block bg-white p-1 px-2 rounded shadow-sm">
              <b>{msg.from === currentUser.email ? "You" : msg.from}:</b> {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendmessage()}
          className="flex-1 p-2 border rounded"
          placeholder="Type a message"
        />
        <button onClick={sendmessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}