import { useEffect } from "react";

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

import { useStoreUsers, useStorePosts } from "../../zustand/store/store";

import "./profile.scss";

//grid layouts
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

export default function Profile({ userId }) {

  const { USERS, USER_ID } = useStoreUsers(state => state);
  const {
    LOGGED_USER_POSTS,
    fetchPosts,
    isLoadingUP
  } = useStorePosts(state => state);

  let uId = userId ? userId : USER_ID
  const user = USERS[USERS.findIndex(el => el.id === uId)]

  useEffect(() => {
    fetchPosts(uId)
  }, [uId, fetchPosts]);

  return (
    <div className="profile-wrapper">
      <GridBox
        as="header"
        mdAreas={mdLayout}
        smAreas={smLayout}
      >
        <GridItem className="profile-icon-container" area="img">
          <div className="hide-sm">
            <ProfileIcon userId={uId} iconSize="huge" />
          </div>
          <div className="hide-md">
            <ProfileIcon userId={uId} iconSize="large" />
          </div>
        </GridItem>

        <GridItem className="username" area="username">
          {user.firstName}.{user.lastName}
        </GridItem>

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

        <GridItem className="name" area="name">
          {`${user.firstName} ${user.lastName}`}
        </GridItem>
      </GridBox>

      <div className="activities">
        <nav>
          <p className="link"><span><BsGrid3X3 /></span> POSTS</p>
          <p className="link"><span><BsBookmark /></span> SAVED</p>
          <p className="link"><span><RiUserAddLine /></span> TAGGED</p>
        </nav>

        <>
        {isLoadingUP
          ? <div>Loading</div>
          : <ImgGallery className="gallery">
              {LOGGED_USER_POSTS.map(post =>
                <Img
                  key={post.id}
                  styledHover
                  posterId={uId}
                  postId={post.id}
                  postText={post.text}
                  comments={post.comments}
                  postDate={post.publishDate}
                  likes={post.likes}
                  src={post.image}
                />
              )}
            </ImgGallery>
        }
        </>
      </div>

      <div className="footer">
        <Footer center />
      </div>
    </div>
  );
}
