import FlexBox from "../FlexBox";
import Card from "../Card";
import useFetch from "../../hooks/useFetch";
import getRandomInt from "../../utils/getRandomInt";
import users from "../../data/users";
import "./posts.scss";

export default function Posts() {
  const { data: posts, loading, error } = useFetch("posts");

  const getSrc = () => {
    let rand = getRandomInt(3, 10);
    let src = `https://unsplash.it/${rand}00/${rand}00`;

    return src;
  };

  //get only 3 random users
  let reducedUsers = [121, 131, 141]

  return (
    <FlexBox className="posts">
      {loading && <div>Loading</div>}
      {error && <div>Something went wrong!</div>}
      {!loading && !error &&
        reducedUsers.map((user) => (
          <Card
            key={user}
            accountName={users[getRandomInt(0, (users.length - 1))].username}
            post={posts[getRandomInt(0, (posts.length - 1))]}
            storyBorder={true}
            image={getSrc()}
            likedByText={users[getRandomInt(0, (users.length - 1))].name}
            likedByNumber={getRandomInt(0, 100)}
            hours={getRandomInt(0, 12)}
          />
        ))
      }
    </FlexBox>
  );
}
