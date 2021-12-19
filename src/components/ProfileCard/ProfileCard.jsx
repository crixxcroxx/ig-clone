import { useContext } from "react";

import ProfileIcon from "../ProfileIcon";

import UsersContext from "../../context/UsersContext";
import "./profileCard.scss";

export default function ProfileCard(props) {
  const {
    userIndex,
    iconSize,
    caption,
    captionSize,
    urlText,
    isSuggestion
  } = props;

  const { database } = useContext(UsersContext)
  const user = database.results[userIndex]

  let imageSize = ""

    if (iconSize === "xSmall" || iconSize === "small") {
      imageSize = "thumbnail"
    } else if(iconSize === "medium" || iconSize === "large") {
      imageSize = "medium"
    } else if(iconSize === "huge") {
      imageSize = "large"
    }

  return (
    <div className="profile">
      <div className={`${isSuggestion && "align-start"}`}>
      <ProfileIcon
        image={user.picture[imageSize]}
        iconSize={iconSize}
      />
      </div>

      <div className={`text-container ${captionSize}`}>
        <span className="account-name">
          {user.login.username}
        </span>
        {caption && (
          <span className={`caption ${captionSize}`}>{caption}</span>
        )}
      </div>

      <a href="/">{urlText}</a>
    </div>
  );
}
