import { useContext } from "react";

import ProfileIcon from "../ProfileIcon";

import { AiOutlineHeart } from "react-icons/ai";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";
import getRandomInt from "../../utils/getRandomInt";

import UsersContext from "../../context/UsersContext";

import "./comment.scss";

export default function Comment(props) {
  const { data: comment, loading, error } = useFetch();
  const { commenterIndex, isPoster, isCommentSection } = props;

  const { database } = useContext(UsersContext)
  const commenter = database.results[commenterIndex]

  return (
    <div className="comment-container">
      {isCommentSection &&
        <div className={`user-icon`}>
          <ProfileIcon
            iconSize="small"
            image={commenter.picture.medium}
          />
        </div>
      }

      <div className="user">
        <strong className="user-name">{commenter.login.username}</strong>
        {loading && <div>Loading</div>}
        {error && <div>Error</div>}
        {!loading && !error && <>{
          !isCommentSection && comment.length > 10
            ? comment.toString().substring(0, 10)
            : comment
        }</>}

        <div className="comment-controls">
          {isCommentSection && <p>{getRandomInt(1, 24)} hrs ago</p>}
          {!isPoster && isCommentSection &&
            <div className="span">
              <p>Reply</p>
              <IoEllipsisHorizontalSharp />
            </div>
          }
        </div>
      </div>

      {!isPoster &&
        <div className="heart-icon">
          <AiOutlineHeart />
        </div>
      }
    </div>
  );
}
