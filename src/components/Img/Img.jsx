import { useState, useContext } from "react";
import Modal from "react-modal";

import Card from "../Card";

import { AiFillHeart } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";

import getRandomInt from "../../utils/getRandomInt";
import UsersContext from "../../context/UsersContext";

import "./img.scss";

Modal.setAppElement(document.getElementById("root"));

export default function Img(props) {
  const {
    styledHover,
    posterIndex,
    src
  } = props;

  const { database } = useContext(UsersContext)

  const likedByIndex = getRandomInt(1, (database.results.length - 1))
  const likedByNumber = getRandomInt(1, 100)
  const hrsPosted = getRandomInt(1, 24)
  const heartReacts = getRandomInt(1, 500)
  const numComments = getRandomInt(1, 500)

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
          posterIndex={posterIndex}
          likedByIndex={likedByIndex}
          likedByNumber={likedByNumber}
          hrsPosted={hrsPosted}
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
            <span>{heartReacts}</span>
          </div>
          <div className="img-hover-inf">
            <IoChatbubbleSharp className="icon" />
            <span>{numComments}</span>
          </div>
        </div>
      )}
    </div>

    </>
  );
}

