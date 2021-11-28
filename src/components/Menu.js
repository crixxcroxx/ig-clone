import '../styles/menu.scss';
import ProfileIcon from './ProfileIcon';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as DmIcon } from '../images/dm.svg';
import { ReactComponent as NewPostIcon } from '../images/plus.svg';
import { ReactComponent as ExploreIcon } from '../images/explore.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import profileImage from '../images/profile.jpg';

export default function Menu() {
  return (
    <div className="menu">
      <HomeIcon className="icon" />
      <DmIcon className="icon" />
      <NewPostIcon className="icon" />
      <ExploreIcon className="icon" />
      <HeartIcon className="icon" />
      <ProfileIcon iconSize="small" image={profileImage} storyBorder={true}/>
    </div>
  );
}
