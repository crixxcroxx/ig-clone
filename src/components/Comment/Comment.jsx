import ProfileIcon from "../ProfileIcon";

import { AiOutlineHeart } from "react-icons/ai";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import getRandomInt from "../../utils/getRandomInt";
import "./comment.scss";

export default function Comment(props) {
  const { accountImage, accountName, comment, poster, isCommentSection } = props;

  return (
    <div className="comment-container">
      {accountImage &&
        <div className={`user-icon ${poster ? "align-icon-start" : ""}`}>
          <ProfileIcon
            iconSize="medium"
            image={poster ? accountImage : null}
          />
        </div>
      }

      <div className="user">
        <strong className="user-name">{accountName}</strong>
        {comment}
        <div className="comment-controls">
          {isCommentSection && <p>{getRandomInt(1, 24)} hrs ago</p>}
          {!poster && isCommentSection &&
            <div className="span">
              <p>Reply</p>
              <IoEllipsisHorizontalSharp />
            </div>
          }
        </div>
      </div>

      <div className="heart-icon">
        {!poster && <AiOutlineHeart />}
      </div>
    </div>
  );
}
