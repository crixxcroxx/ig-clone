import FlexBox from "../FlexBox";
import ProfileCard from "../ProfileCard";
import ProfileIcon from "../ProfileIcon";
import CardMenu from "../CardMenu";
import Comment from "../Comment";
import CommentSection from "../CommentSection";

import getRandomInt from "../../utils/getRandomInt";
import { useStoreUsers } from "../../zustand/store/store";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

import "./card.scss";

export default function Card(props) {
  const {
    posterId,
    postImg,
    postText,
    comments,
    likedByNumber,
    postDate,
    postImageAsBody,
    commentSectionAsBody
  } = props;

  const USERS = useStoreUsers(state => state.USERS)
  const likedBy = USERS[getRandomInt(1, (USERS.length - 1))]

  return (
    <div className={`card ${commentSectionAsBody && "no-border"}`}>
      <header>
        <ProfileCard
          userId={posterId}
          iconSize="small"
        />
        <IoEllipsisHorizontalSharp className="ellipsis-icon" />
      </header>

      <div className="card-body">
        {postImageAsBody && <img src={postImg} alt="Card Content" />}
        {commentSectionAsBody &&
          <div className="csection-container">
            <CommentSection
              posterId={posterId}
              postText={postText}
              postDate={postDate}
              comments={comments}
            />
          </div>
        }
      </div>

      <div className="card-desc">
        <CardMenu />

        <div className="liked-by">
          <ProfileIcon
            userId={likedBy.id}
            iconSize="xSmall"
          />
          <span>
            Liked by
            <strong className="username">
              {likedBy.firstName}.{likedBy.lastName}
            </strong> and
            <strong> {likedByNumber} others</strong>
          </span>
        </div>

        {postImageAsBody &&
          <div className="user-post-desc">
            <Comment
              commenterId={posterId}
              comment={postText}
              commentDate={postDate}
              isPoster={true}
            />
          </div>
        }

        {postImageAsBody && comments.length > 0 &&
          <>
            <div className="view-all-comments">
              View all {comments.length} comments
            </div>

            <FlexBox className="comments" aliItem="normal">
              <Comment
                commenterId={comments[0].owner.id}
                comment={comments[0].message}
                commentDate={comments[0].publishDate}
              />
            </FlexBox>
          </>
        }

        <div className="time-posted">{postDate} HOURS AGO</div>
      </div>

      <div className="card-footer">
        <div className="add-comment">
          <div className="comment-input">
            <AiOutlineSmile className="emoji-icon" />
            <textarea
              className="comment-text"
              placeholder="Add a comment…"
              cols={commentSectionAsBody ? "28" : "51"}
              rows="1"
              autoComplete="off"
              autoCorrect="off"
            ></textarea>
          </div>
          <strong className="post-text">Post</strong>
        </div>
      </div>
    </div>
  );
}

