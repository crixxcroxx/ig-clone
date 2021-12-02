import '../styles/nav.scss';
import Menu from './Menu';
import igIcon from '../images/instagramLogo.png';
import { IoSearch } from 'react-icons/io5';

export default function Nav() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="logo">
          <img src={igIcon} alt="Instagram" />
        </div>

        <div className="search">
          <IoSearch className="search-icon" />
          <span className="search-text">Search</span>
        </div>

        <Menu />
      </div>
    </div>
  );
}
