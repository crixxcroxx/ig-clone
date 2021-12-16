import GridBox from "../../components/GridBox";
import GridItem from "../../components/GridItem";
import ProfileIcon from "../../components/ProfileIcon";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";

import { BsGearWide } from "react-icons/bs";
import { BsGrid3X3 } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { RiUserAddLine } from "react-icons/ri";
import profileImage from "../../images/profile.jpg";

import getRandomPostImg from "../../utils/getRandomPostImg";

import "./profile.scss";

//temp number of images
let counts = [`11`, `22`, `33`, `44`, `55`, `66`, `77`, `88`, `99`, `101`];

const mdLayout = [
  ["img", "username", "button", "icon"],
  ["img", "social", "social", "social"],
  ["img", "name", ".", "."],
];

const smLayout = [
  ["img", "username", "icon"],
  ["img", "button", "button"],
  ["name", ".", "."]
];

export default function Profile() {

  return (
    <div className="profile-wrapper">
      <GridBox
        as="header"
        mdAreas={mdLayout}
        smAreas={smLayout}
      >
        <GridItem className="profile-icon-container" area="img">
          <div className="hide-sm">
            <ProfileIcon iconSize="huge" image={profileImage} />
          </div>
          <div className="hide-md">
            <ProfileIcon iconSize="xtra-L" image={profileImage} />
          </div>
        </GridItem>

        <GridItem className="username" area="username">jun.nujj</GridItem>

        <GridItem area="button">
          <Button className="edit-btn" width="100%" white>Edit Profile</Button>
        </GridItem>

        <GridItem area="icon">
          <BsGearWide className="icon" />
        </GridItem>

        <GridItem area="social" hide="sm">
          <div className="social">
            <p><span className="count">12</span> posts</p>
            <p><span className="count">433</span> followers</p>
            <p><span className="count">44</span> following</p>
          </div>
        </GridItem>

        <GridItem className="name" area="name">Jun Nujj</GridItem>
      </GridBox>

      <div className="activities">
        <nav>
          <p className="link"><span><BsGrid3X3 /></span> POSTS</p>
          <p className="link"><span><BsBookmark /></span> SAVED</p>
          <p className="link"><span><RiUserAddLine /></span> TAGGED</p>
        </nav>

        <ImgGallery className="gallery">
          {counts.map(count => (
            <Img styledHover src={getRandomPostImg(3, 5)} key={count} />
          ))}
        </ImgGallery>
      </div>

      <div className="footer">
        <Footer center />
      </div>
    </div>
  );
}
