import HorizontalScroll from "react-scroll-horizontal";

import Story from "../Story";

import { useStoreUsers } from "../../zustand/store/store";

import "./stories.scss";

export default function Stories() {
  const STORIES = useStoreUsers(state => state.STORIES)

  return (
    <div className="stories">
      {STORIES.length === 0 ? <div>Loading</div> :
        <div className="stories-list">
          <HorizontalScroll className="scroll" reverseScroll={true}>
            {STORIES.map(user =>
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
