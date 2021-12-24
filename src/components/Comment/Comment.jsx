import ProfileIcon from "../ProfileIcon";

import { AiOutlineHeart } from "react-icons/ai";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { useStoreUsers } from "../../zustand/store/store";

import "./comment.scss";

export default function Comment(props) {
  const {
    commenterId,
    comment,
    commentDate,
    isPoster,
    isCommentSection
  } = props;

  const USERS = useStoreUsers(state => state.USERS)
  const commenter = USERS[USERS.findIndex(el => el.id === commenterId)]

  return (
    <>
    {commenter &&
      <div className="comment-container">
        {isCommentSection &&
          <div className={`user-icon`}>
            <ProfileIcon
              userId={commenterId}
              iconSize="small"
            />
          </div>
        }

        <div className="user">
          <strong className="user-name">
            {commenter.firstName}.{commenter.lastName}
          </strong>
            {!isCommentSection && comment.length > 70
              ? `${comment.toString().substring(0, 70)}...more`
              : comment
            }
          <div className="comment-controls">
            {isCommentSection &&
              <p>{commentDate} hrs ago</p>
            }
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
    }
    </>
  );
}
