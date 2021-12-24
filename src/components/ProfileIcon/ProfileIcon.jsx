import { useStoreUsers } from "../../zustand/store/store";

import "./profileIcon.scss";

export default function ProfileIcon(props) {
  const {
    userId,
    iconSize,
  } = props;

  const USERS = useStoreUsers(state => state.USERS)
  let user =  USERS[USERS.findIndex(el => el.id === userId)]

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
