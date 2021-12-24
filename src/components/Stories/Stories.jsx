import HorizontalScroll from "react-scroll-horizontal";

import Story from "../Story";

import { useStoreUsers } from "../../zustand/store/store";

import "./stories.scss";

export default function Stories() {
  const USERS = useStoreUsers(state => state.USERS)

  return (
    <div className="stories">
      {USERS.length === 0 ? <div>Loading</div> :
        <div className="stories-list">
          <HorizontalScroll className="scroll" reverseScroll={true}>
            {USERS.map(user =>
              <Story
                key={user.id}
                userId={user.id}
                userName={`${user.firstName}.${user.lastName}`}
              />
            )}
          </HorizontalScroll>
        </div>
      }
    </div>
  );
}
