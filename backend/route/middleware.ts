import jwt from "jsonwebtoken"

import { secret_key } from "../key";

 export function auth(req:any,res:any,next:any){
    const token = req.headers["authorization"]
    


    if(!token||!token.startsWith("Bearer")){
        return res.json({
            msg:"Invalid token format"
        })
    }
    let updateToken=token.split(" ")[1];
    try{
const payload = jwt.verify(updateToken,secret_key) as {
  userId: string;
  email: string;
  iat: number;
  exp: number;
};
    req.email= payload.email;
    next();
    }
    catch(err){
        console.log(err)
        return res.json({
            msg:"Invalid token"
        })
    }
}
