import { useContext } from "react";

import FlexBox from "../FlexBox";
import ProfileCard from "../ProfileCard";
import ProfileIcon from "../ProfileIcon";
import CardMenu from "../CardMenu";
import Comment from "../Comment";
import CommentSection from "../CommentSection";

import getRandomInt from "../../utils/getRandomInt";
import UsersContext from "../../context/UsersContext";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

import "./card.scss";

export default function Card(props) {
  const {
    posterIndex,
    likedByIndex,
    likedByNumber,
    hrsPosted,
    postImageAsBody,
    commentSectionAsBody
  } = props;

  const { database } = useContext(UsersContext)

  const likedBy = database.results[likedByIndex]

  return (
    <div className={`card ${commentSectionAsBody && "no-border"}`}>
      <header>
        <ProfileCard
          userIndex={posterIndex}
          iconSize="small"
        />
        <IoEllipsisHorizontalSharp className="ellipsis-icon" />
      </header>

      <div className="card-body">
        {postImageAsBody && <img src={postImageAsBody} alt="Card Content" />}
        {commentSectionAsBody &&
          <div className="csection-container">
            <CommentSection posterIndex={posterIndex} />
          </div>
        }
      </div>

      <div className="card-desc">
        <CardMenu />

        <div className="liked-by">
          <ProfileIcon
            image={likedBy.picture.thumbnail}
            iconSize="xSmall"
          />
          <span>
            Liked by
            <strong className="username">{likedBy.login.username}</strong> and
            <strong> {likedByNumber} others</strong>
          </span>
        </div>

        {!commentSectionAsBody &&
          <div className="user-post-desc">
            <Comment
              commenterIndex={getRandomInt(1, (database.results.length - 1))}
              isCommentSection={false}
            />
          </div>
        }

        {postImageAsBody &&
          <>
          <div className="view-all-comments">{
            `View all ${getRandomInt(3, 50)} comments`
          }</div>

          <FlexBox className="comments" aliItem="normal">
            <Comment
              commenterIndex={getRandomInt(1, (database.results.length - 1))}
            />
          </FlexBox>
          </>
        }

        <div className="time-posted">{hrsPosted} HOURS AGO</div>
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
