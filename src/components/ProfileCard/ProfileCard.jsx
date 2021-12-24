import ProfileIcon from "../ProfileIcon";

import { useStoreUsers } from "../../zustand/store/store";

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

  const USERS = useStoreUsers(state => state.USERS)
  const user = USERS[USERS.findIndex(el => el.id === userId)]

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
