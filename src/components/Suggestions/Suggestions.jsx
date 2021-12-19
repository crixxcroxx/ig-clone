import { useContext } from "react";

import ProfileCard from "../ProfileCard";

import getRandomInt from "../../utils/getRandomInt";

import UsersContext from "../../context/UsersContext";

import "./suggestions.scss";

export default function Suggestions() {
  const { database } = useContext(UsersContext)
  const users = database.results
  let reducedUsers = ["1s1", "2s2", "3s3", "4s4", "5s5"]

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

      <div className="suggestions-list">
        {reducedUsers.map(user =>
          <ProfileCard
            key={user}
            userIndex={getRandomInt(1, (users.length - 1))}
            iconSize="small"
            caption={`Followed by
              ${users[getRandomInt(1, (users.length - 1))].login.username} +
              ${getRandomInt(1,15)} more`
            }
            captionSize="small"
            urlText="Follow"
            isSuggestion={true}
          />
        )}
      </div>
    </div>
  );
}
