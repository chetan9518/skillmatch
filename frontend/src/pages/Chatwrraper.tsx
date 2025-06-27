import { useLocation } from "react-router-dom";
import { Chat } from "./message";

export function ChatWrapper() {
  const location = useLocation();
  const receiverEmail = location.state?.receiverEmail;
  const currentUser =  {email: localStorage.getItem("email")! }; // or from context

  if (!receiverEmail) return <div>No user selected</div>;

  return <Chat currentUser={currentUser} receiverEmail={receiverEmail} />;
}
