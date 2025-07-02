import { WebSocket,WebSocketServer } from "ws"
import jwt from "jsonwebtoken"
import { secret_key } from "./key"
interface user {
    email :string
}
interface Usermap {
    [email:string]:WebSocket
}
export function websocket(server:import("http").Server){

    const Users :Usermap= {}
    const wss = new WebSocketServer({server});

    function verifytoken(token:string|null):user|null{
        try{
            if(!token){
                return null
            }
        
      return jwt.verify(token ,secret_key) as user;
        
      }
      catch (e){
        return null
      }
      
    }
    wss.on("connection",(ws,req)=>{
        const token = new URLSearchParams(req.url?.split("?")[1]).get("token");
        const user= verifytoken(token)
        if (!token) {
  console.log("No token provided");  

  
}
if (!user) {
  console.log("Invalid or expired token");
}

        if(!user){
            ws.close()
           return 
        }
        Users[user.email]= ws;
        console.log("connected:", user.email);
        ws.on("message",(data)=>{
            const {to ,message}= JSON.parse(data.toString())
            const recieverSocket = Users[to] ;
            const msgPayload= {from:user.email,message:message}
            if(recieverSocket){
                recieverSocket.send(JSON.stringify(msgPayload))
            }
        })
        ws.on("close",()=>{
            console.log("connection break",user.email)
           delete Users[user.email]
        })
    })

    return
}