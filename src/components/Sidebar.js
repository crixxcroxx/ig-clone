import Sticky from 'react-sticky-el';
//import ProfileIcon from './ProfileIcon';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Footer';
import profileImage from '../images/profile.jpg';
import '../styles/sidebar.scss';

export default function Sidebar() {
  return (
    <Sticky>
      <div className="sidebar">
        <Profile
          username="crixx.croxx"
          caption="Cris Tajesawa"
          captionSize="small"
          urlText="Switch"
          iconSize="big"
          image={profileImage}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}