import ProfileCard from "./ProfileCard";
import useFetch from "../hooks/useFetch";
import getRandomInt from "../utils/getRandomInt";
import "../styles/suggestions.scss";

export default function Suggestions() {
  const { isLoading, data } = useFetch("users");
  let users = data;
  users.splice(5, 10);
  let getRandomUser = () => {
    return data[getRandomInt(0, 4)].username;
  };

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
        {!isLoading &&
          users.map((user) => (
            <ProfileCard
              key={user.id}
              username={user.username}
              caption={`Followed by ${getRandomUser()} + ${getRandomInt(
                1,
                15
              )} more`}
              captionSize="small"
              urlText="Follow"
              iconSize="medium"
              storyBorder={false}
            />
          ))}
      </div>
    </div>
  );
}
