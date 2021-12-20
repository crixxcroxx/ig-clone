import Comment from "../Comment";

import "./commentSection.scss";

export default function CommentSection(props) {
  const {
    posterId,
    postText,
    postDate,
    comments
  } = props

  return (
    <div className="comment-section">
      <div className="user-post-body">
        <Comment
          commenterId={posterId}
          comment={postText}
          commentDate={postDate}
          isPoster={true}
          isCommentSection={true}
        />
      </div>
      {
        comments.data.map(comment =>
          <Comment
            key={comment.id}
            commenterId={comment.owner.id}
            comment={comment.message}
            commentDate={comment.publishDate}
            isCommentSection={true}
          />
        )
      }
    </div>
  );
}

