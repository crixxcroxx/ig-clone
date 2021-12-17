import FlexBox from "../FlexBox";
import ProfileCard from "../ProfileCard";
import CardMenu from "../CardMenu";
import Comment from "../Comment";
import CommentSection from "../CommentSection";

import getRandomInt from "../../utils/getRandomInt";
import useFetch from "../../hooks/useFetch";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

import "./card.scss";

export default function Card(props) {
  const { data: comments, loading, error } = useFetch("comments");

  const {
    accountName,
    accountImage,
    post,
    storyBorder,
    postImage,
    commentSection,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className={`card ${commentSection && "no-border"}`}>
      <header>
        <ProfileCard
          username={accountName}
          image={accountImage}
          storyBorder={storyBorder}
          iconSize="medium"
        />
        <IoEllipsisHorizontalSharp className="ellipsis-icon" />
      </header>

      <div className="card-body">
        {/* display image when image is passed as prop
            else display the comment section */}

        {postImage && <img src={postImage} alt="Card Content" />}
        {commentSection &&
          <div className="csection-container">
            <CommentSection
              username={accountName}
              accountImage={accountImage}
              post={post.body}
              isCommentSection={true}
            />
          </div>
        }
      </div>

      <div className="card-desc">
        <CardMenu />

        <div className="liked-by">
          <ProfileCard hideAccountName={true} iconSize="small" />
          <span>
            Liked by
            <strong className="username">{likedByText}</strong> and
            <strong> {likedByNumber} others</strong>
          </span>
        </div>

        {!commentSection &&
          <div className="user-post-desc">
            <strong className="username">{accountName}</strong>
            {post.body.length > 45 && (
              <>
                {post.body.substring(0, 45)}
                <span className="more-text">...more</span>
              </>
            )}
          </div>
        }

        {/* display preview comment when postImage is passed as prop */}
        {postImage &&
          <>
          <div className="view-all-comments">{
            `View all ${getRandomInt(3, 50)} comments`
          }</div>

          <FlexBox className="comments" aliItem="normal">
            {loading && <div>Loading</div>}
            {error && <div>Something went wrong!</div>}
            {!loading && !error &&
              <Comment
                key={comments[getRandomInt(0, 500)].id}
                accountName={comments[getRandomInt(0, 500)].email.split("@")[0]}
                comment={
                  comments[getRandomInt(0, 500)].body.substring(0, 50) + "..."
                }
              />
            }
          </FlexBox>
          </>
        }

        <div className="time-posted">{hours} HOURS AGO</div>
      </div>

      <div className="card-footer">
        <div className="add-comment">
          <div className="comment-input">
            <AiOutlineSmile className="emoji-icon" />
            <textarea
              className="comment-text"
              placeholder="Add a comment…"
              cols={commentSection ? "28" : "51"}
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
