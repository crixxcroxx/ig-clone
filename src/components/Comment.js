import { ReactComponent as HeartIcon } from '../images/heart.svg';
import '../styles/comment.scss';

export default function Comment(props) {
  const { accountName, comment } = props

  return (
    <div className="comment-container">
      <span className="user">
        <strong className="user-name">{accountName} </strong>{comment}
      </span>
      <div className="icon-container">
        <HeartIcon />
      </div>
    </div>
  );
}
