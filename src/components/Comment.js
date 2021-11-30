import '../styles/comment.scss';

export default function Comment(props) {
  const { accountName, comment } = props

  return (
    <div className="comment-container">
      <span className="user">
        <strong>{accountName} </strong>{comment}
      </span>
    </div>
  );
}
