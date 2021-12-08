import FlexBox from './FlexBox';
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
    <FlexBox className="profile">
      <ProfileIcon
        iconSize={iconSize}
        image={image}
        storyBorder={storyBorder}
      />
      {(accntName || caption) && !hideAccountName && (
        <FlexBox className={`text-container ${captionSize}`}>
          <span className="account-name">{accntName}</span>
          { caption &&
            <span className={`caption ${captionSize}`}>{caption}</span>
          }
        </FlexBox>
      )}
      <a href="/">{urlText}</a>
    </FlexBox>
  );
}
