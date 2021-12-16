import ProfileCard from "../ProfileCard";
import getRandomInt from "../../utils/getRandomInt";
import users from "../../data/users";
import "./suggestions.scss";

export default function Suggestions() {
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
            key={users[getRandomInt(0, (users.length - 1))].id}
            username={users[getRandomInt(0, (users.length - 1))].username}
            caption={`Followed by
              ${users[getRandomInt(0, (users.length - 1))].username} +
              ${getRandomInt(1,15)} more`
            }
            captionSize="small"
            urlText="Follow"
            iconSize="medium"
            storyBorder={false}
          />
        )}
      </div>
    </div>
  );
}
