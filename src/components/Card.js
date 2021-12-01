import Profile from './Profile';
import CardMenu from './CardMenu';
import Comment from './Comment';
import getRandomInt from '../helpers/getRandomInt';
import { ReactComponent as EllipsisIcon } from '../images/ellipsis.svg';
import { ReactComponent as EmojiIcon } from '../images/emoji.svg';
import '../styles/card.scss';

export default function Card(props) {
  const {
    accountName,
    post,
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
        <Profile username={accountName} storyBorder={storyBorder} iconSize="medium" />
        <EllipsisIcon className="ellipsis-icon" />
      </header>

      <img className="card-image" src={image} alt="Card Content" />

      <div className="card-desc">
        <CardMenu />

        <div className="liked-by">
          <Profile hideAccountName={true} iconSize="small" />
          <span>Liked by
            <strong> {likedByText}</strong> and
            <strong> {likedByNumber}</strong> others
          </span>
        </div>

        <div className="user-post-desc">
          <span>
            <strong className="username">{accountName} </strong>
            { post.body.length > 45 &&
              <>
                { post.body.substring(0, 45) }
                <i>...more</i>
              </>
            }
          </span>
        </div>

        <div className="view-all-comments">{`View all ${getRandomInt(0, 50)} comments`}</div>

        <div className="comments">
          <Comment
            key={comments[getRandomInt(0, 500)].id}
            accountName={comments[getRandomInt(0, 500)].email.split("@")[0]}
            comment={comments[getRandomInt(0, 500)].body.substring(0, 50) + "..."}
          />
          <Comment
            key={comments[getRandomInt(0, 500)].id}
            accountName={comments[getRandomInt(0, 500)].email.split("@")[0]}
            comment={comments[getRandomInt(0, 500)].body.substring(0, 50) + "..."}
          />
        </div>

        <div className="time-posted">{hours} HOURS AGO</div>
      </div>

      <div className="card-footer">
        <div className="add-comment">
          <div className="comment-label">
            <EmojiIcon />
            <div className="comment-text">Add a comment</div>
          </div>
          <div className="post-text">Post</div>
        </div>
      </div>
    </div>
  );
}
