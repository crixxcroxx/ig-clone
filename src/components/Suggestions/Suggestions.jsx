import ProfileCard from "../ProfileCard";

import getRandomInt from "../../utils/getRandomInt";

import { useStoreUsers } from "../../zustand/store/store";

import "./suggestions.scss";

export default function Suggestions() {
  const USERS = useStoreUsers(state => state.USERS)
  let users
  if(USERS.length > 0) {
    users = USERS
    users.unshift()
    users.splice(6, USERS.length)
  }

//   filter data!! for suggestions and stories

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
            {USERS.map(user =>
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
