import { useContext } from "react";
import HorizontalScroll from "react-scroll-horizontal";

import Story from "../Story";

import UsersContext from "../../context/UsersContext";

import "./stories.scss";

export default function Stories() {
  const { USERS_DB } = useContext(UsersContext)
  let users = USERS_DB.results
  users.shift()

  return (
    <div className="stories">
      <div className="stories-list">
        <HorizontalScroll className="scroll" reverseScroll={true}>
          {
            users.map(user =>
              <div key={user.id.value}>
                <Story
                  image={user.picture.medium}
                  userName={user.login.username}
                />
              </div>
            )
          }
        </HorizontalScroll>
      </div>
    </div>
  );
}
