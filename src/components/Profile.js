import ProfileIcon from './ProfileIcon';
import users from '../data/users';
import '../styles/profile.scss';

export default function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image
  } = props

  const accntName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        image={image}
        storyBorder={storyBorder}
      />
      {(accntName || caption) && !hideAccountName && (
        <div className="text-container">
          <span className="account-name">{accntName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}
