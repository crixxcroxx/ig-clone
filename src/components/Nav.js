import '../styles/nav.scss';
import Menu from './Menu';
import igIcon from '../images/instagramLogo.png';
import { ReactComponent as SearchIcon } from '../images/search.svg';

export default function Nav() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={igIcon} alt="Instagram" />

        <div className="search">
          <SearchIcon className="search-icon" />
          <span className="search-text">Search</span>
        </div>

        <Menu />
      </div>
    </div>
  );
}
