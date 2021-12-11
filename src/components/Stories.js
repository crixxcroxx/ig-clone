import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";
import useFetch from "../hooks/useFetch";
import "../styles/stories.scss";

export default function Stories() {
  const { isLoading, data } = useFetch("users");

  return (
    <div className="stories">
      {!isLoading && (
        <div className="stories-list">
          <HorizontalScroll className="scroll" reverseScroll={true}>
            {data.map((user) => (
              <div key={user.id}>
                <Story user={user.name} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      )}
    </div>
  );
}
