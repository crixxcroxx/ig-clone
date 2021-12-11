import FlexBox from "./FlexBox";
import ProfileCard from "./ProfileCard";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

import getRandomInt from "../utils/getRandomInt";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

import "../styles/card.scss";

export default function Card(props) {
  const {
    accountName,
    post,
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="card">
      <FlexBox as="header">
        <ProfileCard
          username={accountName}
          storyBorder={storyBorder}
          iconSize="medium"
        />
        <IoEllipsisHorizontalSharp className="ellipsis-icon" />
      </FlexBox>

      <img className="card-image" src={image} alt="Card Content" />

      <FlexBox className="card-desc" aliItem="normal">
        <CardMenu />

        <FlexBox className="liked-by">
          <ProfileCard hideAccountName={true} iconSize="small" />
          <span>
            Liked by
            <strong className="username">{likedByText}</strong> and
            <strong> {likedByNumber} others</strong>
          </span>
        </FlexBox>

        <div className="user-post-desc">
          <strong className="username">{accountName}</strong>
          {post.body.length > 45 && (
            <>
              {post.body.substring(0, 45)}
              <span className="more-text">...more</span>
            </>
          )}
        </div>

        <div className="view-all-comments">{`View all ${getRandomInt(
          3,
          50
        )} comments`}</div>

        <FlexBox className="comments" aliItem="normal">
          <Comment
            key={comments[getRandomInt(0, 500)].id}
            accountName={comments[getRandomInt(0, 500)].email.split("@")[0]}
            comment={
              comments[getRandomInt(0, 500)].body.substring(0, 50) + "..."
            }
          />
          <Comment
            key={comments[getRandomInt(0, 500)].id}
            accountName={comments[getRandomInt(0, 500)].email.split("@")[0]}
            comment={
              comments[getRandomInt(0, 500)].body.substring(0, 50) + "..."
            }
          />
        </FlexBox>

        <div className="time-posted">{hours} HOURS AGO</div>
      </FlexBox>

      <FlexBox className="card-footer">
        <FlexBox className="add-comment">
          <FlexBox className="comment-input">
            <AiOutlineSmile className="emoji-icon" />
            <textarea
              className="comment-text"
              placeholder="Add a comment…"
              cols="51"
              rows="1"
              autoComplete="off"
              autoCorrect="off"
            ></textarea>
          </FlexBox>
          <strong className="post-text">Post</strong>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
