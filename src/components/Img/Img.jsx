import { AiFillHeart } from "react-icons/ai";
import { IoChatbubbleSharp } from "react-icons/io5";
import getRandomInt from "../../utils/getRandomInt";
import "./img.scss";

export default function Img(props) {
  return (
    <div className="img-container">
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
  );
}
