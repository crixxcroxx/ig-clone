import { useState } from "react";
import Modal from "react-modal";

import Card from "../Card";

import { AiFillHeart } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";
import getRandomInt from "../../utils/getRandomInt";
import users from "../../data/users";
import "./img.scss";

Modal.setAppElement(document.getElementById("root"));

export default function Img(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: posts, loading, error } = useFetch("posts");
  /* rand user image */
  const randomId = getRandomInt(1, 70);
  const avatarImgUrl = `https://i.pravatar.cc/150?img=${randomId}`;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }


  return (
    <>

    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="post-img-modal"
      overlayClassName="post-img-modal-overlay"
      contentLabel="Image Modal"
    >
    <div className="modal-content">
      <img className="post-img" src={props.src} alt="modal-img" />
      <div className="post-info">
        {loading && <div>Loading</div>}
        {error && <div>Something went wrong!</div>}
        {!loading && !error &&
          <Card
            key={users[getRandomInt(0, (users.length - 1))].id}
            accountName={users[getRandomInt(0, (users.length - 1))].username}
            accountImage={avatarImgUrl}
            likedByText={users[getRandomInt(0, (users.length - 1))].name}
            likedByNumber={getRandomInt(0, 100)}
            hours={getRandomInt(0, 12)}
            commentSection={true}
            post={
              props.posts
                ? props.posts
                : posts[getRandomInt(0, (posts.length - 1))]
            }
          />
        }
      </div>
    </div>
    </Modal>

    <div className="img-container" onClick={openModal}>
      <img src={props.src} alt="user-img" />

      {props.styledHover && (
        <div className="img-hover">
          <div className="img-hover-inf">
            <AiFillHeart className="icon" />
            <span>{getRandomInt(1, 500)}</span>
          </div>
          <div className="img-hover-inf">
            <IoChatbubbleSharp className="icon" />
            <span>{getRandomInt(1, 500)}</span>
          </div>
        </div>
      )}
    </div>

    </>
  );
}
