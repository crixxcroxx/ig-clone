import Profile from './Profile';
import CardMenu from './CardMenu';
import Comment from './Comment';
import { ReactComponent as EllipsisIcon } from '../images/ellipsis.svg';
import '../styles/card.scss';

export default function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours
  } = props

  return (
    <div className="card">
      <header>
        <Profile storyBorder={storyBorder} iconSize="big" />
        <EllipsisIcon className="ellipsis-icon" />
      </header>
      <img className="card-image" src={image} alt="Card Content" />
      <CardMenu />
      <div className="liked-by">
        <Profile hideAccountName={true} iconSize="small" />

        <span>Liked by
          <strong> {likedByText}</strong> and
          <strong> {likedByNumber}</strong> others
        </span>

        <div className="comments">
          {comments.map(comment =>
            <>
              <Comment
                key={comment.id}
                accountName={comment.user}
                comment={comment.text}
              />
            </>
          )}
        </div>

        <div className="time-posted">{hours} hours ago</div>

        <div className="add-comment">
          <div className="comment-text">Add a comment</div>
          <div className="post-text">Post</div>
        </div>
      </div>
    </div>
  );
}
