import { userRouter } from "./route/user";
import cors from "cors"
import http from "http"
import { websocket } from "./websocket";
const express = require("express")
import { prisma } from "./prisma/prismashut"; 

process.on('SIGINT', async () => {
  console.log("SIGINT received. Cleaning up...");
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log("SIGTERM received. Cleaning up...");
  await prisma.$disconnect();
  process.exit(0);
});


let app = express();


app.use(express.json());
app.use(cors());

app.use((req:any, res:any, next:any) => {
  console.log(`Incoming ${req.method} request on ${req.url}`);
  next();
});

app.use("/user",userRouter)

const server = http.createServer(app)
websocket(server)
server.listen(3000,()=>{
    console.log("server started")
})