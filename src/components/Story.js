import ProfileIcon from './ProfileIcon';
import users from '../data/users';
import '../styles/story.scss';

export default function Story() {
  let accntName = users[Math.floor(Math.random() * users.length)].username

  if(accntName.length > 7) accntName = accntName.substring(0, 7) + "..."

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="account-name">{accntName}</span>
    </div>
  );
}
