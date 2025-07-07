import { createContext } from "react"



  export const UserContext = createContext({
    islogin:false,
    setislogin:(islogin:boolean)=>{}
  });

  
