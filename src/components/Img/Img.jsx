import { useState } from "react";
import Modal from "react-modal";

import Card from "../Card";

import { AiFillHeart } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";

import "./img.scss";

Modal.setAppElement(document.getElementById("root"));

export default function Img(props) {
  const {
    styledHover,
    posterId,
    postText,
    comments,
    postDate,
    likes,
    src
  } = props;

  /*modals*/
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <img className="post-img" src={src} alt="modal-img" />
            <div className="post-info">
              <Card
                posterId={posterId}
                postText={postText}
                comments={comments}
                likedByNumber={likes}
                postDate={postDate}
                commentSectionAsBody={true}
              />
            </div>
          </div>
        </Modal>

        <div className="img-container" onClick={openModal}>
          <img src={src} alt="user-img" />

          {styledHover && (
            <div className="img-hover">
              <div className="img-hover-inf">
                <AiFillHeart className="icon" />
                <span>{likes}</span>
              </div>

              <div className="img-hover-inf">
                <IoChatbubbleSharp className="icon" />
                <span>{comments.length}</span>
              </div>
            </div>
          )}
        </div>
    </>
  );
}