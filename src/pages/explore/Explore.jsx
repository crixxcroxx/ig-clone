import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";
import getRandomInt from "../../utils/getRandomInt";
import "./explore.scss";

const getSrc = () => {
  let rand = getRandomInt(3, 5);
  let src = `https://unsplash.it/${rand}00/${rand}00`;

  return src;
};

//temp number of images
let counts = [`11`, `22`, `33`, `44`, `55`, `66`, `77`, `88`, `99`, `101`];

export default function Explore() {
  return (
    <div className="explore-wrapper">
      <ImgGallery className="gallery">
        {counts.map((count) => (
          <Img styledHover src={getSrc()} key={count} />
        ))}
      </ImgGallery>
    </div>
  );
}
