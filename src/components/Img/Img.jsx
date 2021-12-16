import { useState } from "react";
import Modal from "react-modal";

import { AiFillHeart } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";
import getRandomInt from "../../utils/getRandomInt";
import "./img.scss";

Modal.setAppElement(document.getElementById("root"));

export default function Img(props) {
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
      <img src={props.src} alt="modal-img" />
      <div className="post-info">
        asasasas
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
