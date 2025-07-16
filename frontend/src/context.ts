import { createContext } from "react";

interface UserContextType {
  islogin: boolean;
  setislogin: (islogin: boolean) => void;
}


export const UserContext = createContext<UserContextType>({
  islogin: false,
  setislogin: () => {},
});
