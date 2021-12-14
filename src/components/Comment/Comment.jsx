import { AiOutlineHeart } from "react-icons/ai";
import "./comment.scss";

export default function Comment(props) {
  const { accountName, comment } = props;

  return (
    <div className="comment-container">
      <span className="user">
        <strong className="user-name">{accountName}</strong>
        {comment}
      </span>
      <AiOutlineHeart className="heart-icon" />
    </div>
  );
}
