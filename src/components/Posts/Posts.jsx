import { useContext } from "react";

import FlexBox from "../FlexBox";
import Card from "../Card";

import getRandomInt from "../../utils/getRandomInt";
import getRandomPostImg from "../../utils/getRandomPostImg";

import UsersContext from "../../context/UsersContext";

import "./posts.scss";

export default function Posts() {
  const { database } = useContext(UsersContext)
  const users = database.results

  //get only 3 random users
  let reducedUsers = [121, 131, 141]

  return (
    <FlexBox className="posts">
      {reducedUsers.map((user, index) => (
        <Card
          key={`n${index}d`}
          posterIndex={getRandomInt(1, (users.length - 1))}
          likedByIndex={getRandomInt(1, (users.length - 1))}
          postImageAsBody={getRandomPostImg(3, 10)}
          likedByNumber={getRandomInt(1, 100)}
          hrsPosted={getRandomInt(1, 12)}
        />
      ))}
    </FlexBox>
  );
}
