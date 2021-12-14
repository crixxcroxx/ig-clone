import ProfileCard from "../ProfileCard";
import Suggestions from "../Suggestions";
import Footer from "../Footer";
import profileImage from "../../images/profile.jpg";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProfileCard
        username="crixx.croxx"
        caption="Cris Tajesawa"
        captionSize="big"
        urlText="Switch"
        iconSize="big"
        image={profileImage}
      />
      <Suggestions />
      <Footer />
    </div>
  );
}
