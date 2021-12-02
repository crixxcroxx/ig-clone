import ProfileIcon from './ProfileIcon';
import { HiHome } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { ImCompass2 } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import profileImage from '../images/profile.jpg';
import '../styles/menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <HiHome className="icon" />
      <RiMessengerLine className="icon" />
      <BiMessageSquareAdd className="icon" />
      <ImCompass2 className="icon" />
      <AiOutlineHeart className="icon" />
      <ProfileIcon
        iconSize="small"
        image={profileImage}
        storyBorder={false}
      />
    </div>
  );
}
