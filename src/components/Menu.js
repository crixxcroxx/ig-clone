import { useState } from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from './ProfileIcon';
import profileImage from '../images/profile.jpg';
import Modal from 'react-modal';

import { HiHome } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineCompass } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

//upload modal img
import { BsCloudUpload } from 'react-icons/bs';

//notif icon when no notif
import { IoHeartCircleOutline } from 'react-icons/io5';

//profile menu
import { CgProfile } from 'react-icons/cg';
import { BsBookmark } from 'react-icons/bs';
import { BsGearWide } from 'react-icons/bs';
import { AiOutlineSync } from 'react-icons/ai';

import '../styles/menu.scss';

Modal.setAppElement(document.getElementById("root"));

export default function Menu() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const [isNotifBubbleOpen, setIsNotifBubbleOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  const openPostModal = (event) => {
    if (event.type === 'keydown' && (event.key !== 'Enter' && event.key !== ' ')) {
        return;
    }

    setIsNotifBubbleOpen(false)
    setIsProfileMenuOpen(false)
    setIsPostModalOpen(!isPostModalOpen)
  }

  const openNotifModal = (event) => {
    if (event.type === 'keydown' && (event.key !== 'Enter' && event.key !== ' ')) {
        return;
    }

    setIsPostModalOpen(false)
    setIsProfileMenuOpen(false)
    setIsNotifBubbleOpen(!isNotifBubbleOpen)
  }

  const openProfileMenu = (event) => {
    if (event.type === 'keydown' && (event.key !== 'Enter' && event.key !== ' ')) {
        return;
    }

    setIsPostModalOpen(false)
    setIsNotifBubbleOpen(false)
    setIsProfileMenuOpen(!isNotifBubbleOpen)
  }

  const closeModal = () => {
    setIsPostModalOpen(false)
    setIsNotifBubbleOpen(false)
    setIsProfileMenuOpen(false)
  }

  return (
    <div className="menu" id="menu">
      {/* Create new Post modal */}
      <Modal
        isOpen={isPostModalOpen}
        onRequestClose={closeModal}
        className="post-modal"
        overlayClassName="post-overlay"
        contentLabel={"Create New Post"}
      >
        <div className="modal-header">Create new post</div>
        <div className="modal-content">
          <BsCloudUpload className="icon" />
          <p>Drag photos and videos here</p>
          <button>Select from computer</button>
        </div>
      </Modal>

      {/* View notifs modal */}
      <Modal
        isOpen={isNotifBubbleOpen}
        onRequestClose={closeModal}
        className="notif-modal"
        overlayClassName="notif-overlay"
        contentLabel={"View Notifs"}
      >

        <div className="modal-content">
          <IoHeartCircleOutline className="icon" />
          <p>Activity On Your Posts</p>
          <p>When someone likes or comments on one of your posts, you'll see it here.</p>
        </div>
      </Modal>

      {/* profile menu modal */}
      <Modal
        isOpen={isProfileMenuOpen}
        onRequestClose={closeModal}
        className="profile-modal"
        overlayClassName="profile-overlay"
        contentLabel={"Profile Menu"}
      >
        <div className="modal-content">
          <p><span><CgProfile className="icon" /></span> Profile</p>
          <p><span><BsBookmark className="icon" /></span> Saved</p>
          <p><span><BsGearWide className="icon" /></span> Settings</p>
          <p><span><AiOutlineSync className="icon" /></span> Switch Account</p>
          <hr />
          <p>Logout</p>
        </div>
      </Modal>

      {/*Links*/}

      <Link to="/">
        <HiHome className="icon" />
      </Link>

      <Link to="/messages">
        <RiMessengerLine className="icon" />
      </Link>

      <i
        role="button"
        tabIndex="0"
        onKeyDown={e => openPostModal(e)}
        onClick={e => openPostModal(e)}
      >
        <BiMessageSquareAdd  className="icon" />
      </i>

      <Link to="/explore">
        <AiOutlineCompass className="icon" />
      </Link>

      <i
        role="button"
        tabIndex="0"
        onKeyDown={e => openNotifModal(e)}
        onClick={e => openNotifModal(e)}
      >
        <AiOutlineHeart className="icon" />
      </i>

      <i
        role="button"
        tabIndex="0"
        onKeyDown={e => openProfileMenu(e)}
        onClick={e => openProfileMenu(e)}
      >
        <ProfileIcon
          iconSize="small"
          image={profileImage}
          storyBorder={false}
        />
      </i>
    </div>
  );
}
