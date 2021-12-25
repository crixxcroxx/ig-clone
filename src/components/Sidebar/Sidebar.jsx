import ProfileCard from "../ProfileCard";
import Suggestions from "../Suggestions";
import Footer from "../Footer";

import { useStoreUsers } from "../../zustand/store/store";

import "./sidebar.scss";

export default function Sidebar() {
  const USER_ID = useStoreUsers(state => state.USER_ID)

  return (
    <div className="sidebar">
      <ProfileCard
        userId={USER_ID}
        captionSize="small"
        iconSize="medium"
        urlText="Switch"
        isUser={true}
      />
      <Suggestions />
      <Footer />
    </div>
  );
}
