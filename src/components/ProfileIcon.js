import getRandomInt from '../helpers/getRandomInt';
import '../styles/profileIcon.scss';

export default function ProfileIcon(props) {
  const { iconSize, storyBorder, image } = props
  const randomId = getRandomInt(1, 70)
  const avatarImgUrl = `https://i.pravatar.cc/150?img=${randomId}`
  let profileImage = image ? image : avatarImgUrl

  return (
    <div className={storyBorder ? "story-border" : ""}>
      <img
        className={`profile-icon ${iconSize}`}
        src={profileImage}
        alt="Profile"
      />
    </div>
  );
}
