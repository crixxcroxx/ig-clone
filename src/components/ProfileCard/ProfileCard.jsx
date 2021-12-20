import { useContext } from "react";

import ProfileIcon from "../ProfileIcon";

import UsersContext from "../../context/UsersContext";
import "./profileCard.scss";

export default function ProfileCard(props) {
  const {
    userId,
    iconSize,
    caption,
    captionSize,
    urlText,
    isSuggestion
  } = props;

  const { USERS_DB } = useContext(UsersContext)
  const user = USERS_DB[USERS_DB.findIndex(el => el.id === userId)]

  return (
    <>
      {user &&
      <div className="profile">
        <div className={`${isSuggestion && "align-start"}`}>
        <ProfileIcon
          userId={userId}
          iconSize={iconSize}
        />
        </div>

        <div className={`text-container ${captionSize}`}>
          <span className="account-name">
            {user.firstName}.{user.lastName}
          </span>
          {caption && (
            <span className={`caption ${captionSize}`}>{caption}</span>
          )}
        </div>

        <a href="/">{urlText}</a>
      </div>
      }
    </>
  );
}
