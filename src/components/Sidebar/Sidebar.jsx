import { useContext } from "react";

import ProfileCard from "../ProfileCard";
import Suggestions from "../Suggestions";
import Footer from "../Footer";

import UsersContext from "../../context/UsersContext";

import "./sidebar.scss";

export default function Sidebar() {
  const { loggedUserIndex } = useContext(UsersContext)

  return (
    <div className="sidebar">
      <ProfileCard
        userIndex={loggedUserIndex}
        iconSize="medium"
        urlText="Switch"
      />
      <Suggestions />
      <Footer />
    </div>
  );
}
