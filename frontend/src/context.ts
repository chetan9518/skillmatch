import { createContext } from "react"



  export const UserContext = createContext({
    islogin:false,
    setislogin:(_islogin:boolean)=>{}
  });

  
