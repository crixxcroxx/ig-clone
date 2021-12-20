import { useContext } from "react";

import UsersContext from "../../context/UsersContext";

import "./profileIcon.scss";

export default function ProfileIcon(props) {
  const {
    userId,
    iconSize,
  } = props;

  const { USERS_DB } = useContext(UsersContext)
  const user = USERS_DB[USERS_DB.findIndex(el => el.id === userId)]

  return (
    <div className={user.hasStory ? "story-border" : ""}>
      <img
        className={`profile-icon ${iconSize}`}
        src={user.picture}
        alt="User Profile"
      />
    </div>
  );
}
