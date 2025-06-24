import { userRouter } from "./route/user";
import cors from "cors"
const express = require("express")
let app = express();
app.use(express.json());
app.use(cors());

app.use((req:any, res:any, next:any) => {
  console.log(`Incoming ${req.method} request on ${req.url}`);
  next();
});

app.use("/user",userRouter)
app.listen(3000,()=>{
    console.log("server started")
})