import '../styles/nav.scss';
import FlexBox from './FlexBox';
import Menu from './Menu';
import igIcon from '../images/instagramLogo.png';
import { IoSearch } from 'react-icons/io5';

export default function Nav() {
  return (
    <FlexBox jusCont="center" className="nav-wrapper">
      <FlexBox as="nav">
        <div className="logo">
          <img src={igIcon} alt="Instagram" />
        </div>

        <FlexBox className="search" hide="sm">
          <IoSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
          />
        </FlexBox>

        <Menu />
      </FlexBox>
    </FlexBox>
  );
}
