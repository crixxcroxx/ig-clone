import '../styles/comment.scss';

export default function Comment(props) {
  const { accountName, comment } = props

  return (
    <div className="comment-container">
      <div className="account-name">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );
}
