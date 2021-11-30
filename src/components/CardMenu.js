//import Profile from './Profile';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as CommentIcon } from '../images/comment.svg';
import { ReactComponent as PlaneIcon } from '../images/plane.svg';
import { ReactComponent as BookmarkIcon } from '../images/bookmark.svg';
import '../styles/cardMenu.scss';

export default function CardMenu() {
  return (
    <div className="card-menu">
      <div className="interactions">
        <HeartIcon className="icon" />
        <CommentIcon className="icon" />
        <PlaneIcon className="icon" />
      </div>
      <BookmarkIcon className="icon" />
    </div>
  );
}
