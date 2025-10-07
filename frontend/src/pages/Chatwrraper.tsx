import { useLocation, useParams } from "react-router-dom";
import { Chat } from "./Message";

export function ChatWrapper() {
  const location = useLocation();
  const { email } = useParams();
  const state = location.state;
  const username = state?.username;
  const profilelink = state?.profilelink;
  const receiverEmail = state?.receiverEmail || email!;
  const currentUser =  {email: localStorage.getItem("email")! }; 

  if (!receiverEmail) return <div>No user selected</div>;

  return <Chat currentUser={currentUser} receiverEmail={receiverEmail} username={username} profilelink={profilelink} />;
}
