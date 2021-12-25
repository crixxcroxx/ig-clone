import ProfileCard from "../ProfileCard";

import getRandomInt from "../../utils/getRandomInt";

import { useStoreUsers } from "../../zustand/store/store";

import "./suggestions.scss";

export default function Suggestions() {
  const { USERS, SUGGESTIONS } = useStoreUsers(state => state)

  return (
    <div className="suggestions">
      <div className="title-container">
        <div className="title">
          <strong>Suggestions For You</strong>
        </div>
        <a href="/">
          <strong>See All</strong>
        </a>
      </div>
      {USERS.length === 0
        ? <div>Loading</div>
        : <div className="suggestions-list">
            {SUGGESTIONS.map(user =>
              <ProfileCard
                key={user.id}
                userId={user.id}
                iconSize="small"
                caption={`Followed by
                  ${USERS[getRandomInt(1, (USERS.length - 1))].firstName} +
                  ${getRandomInt(1,15)} more`
                }
                captionSize="small"
                urlText="Follow"
                isSuggestion={true}
              />
            )}
          </div>
      }
    </div>
  );
}
