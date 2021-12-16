import HorizontalScroll from "react-scroll-horizontal";
import Story from "../Story";
import users from "../../data/users";
import "./stories.scss";

export default function Stories() {
  return (
    <div className="stories">
      <div className="stories-list">
        <HorizontalScroll className="scroll" reverseScroll={true}>
          {users.map((user) => (
            <div key={user.id}>
              <Story user={user.username} />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
