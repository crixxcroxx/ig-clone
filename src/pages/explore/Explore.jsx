import { useContext } from "react";

import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";

import getRandomInt from "../../utils/getRandomInt";
import getRandomPostImg from "../../utils/getRandomPostImg";

import UsersContext from "../../context/UsersContext";

import "./explore.scss";

//temp number of images
let counts = [`11`, `22`, `33`, `44`, `55`, `66`, `77`, `88`, `99`, `101`];

export default function Explore() {
  const { database } = useContext(UsersContext)

  return (
    <div className="explore-wrapper">
      <ImgGallery className="gallery">
        {counts.map((count) => (
          <Img
            key={count}
            styledHover
            posterIndex={getRandomInt(1, database.results.length)}
            src={getRandomPostImg(3, 5)}
          />
        ))}
      </ImgGallery>
    </div>
  );
}
