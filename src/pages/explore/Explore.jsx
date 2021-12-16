import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";
import getRandomPostImg from "../../utils/getRandomPostImg";
import "./explore.scss";

//temp number of images
let counts = [`11`, `22`, `33`, `44`, `55`, `66`, `77`, `88`, `99`, `101`];

export default function Explore() {

  return (
    <div className="explore-wrapper">
      <ImgGallery className="gallery">
        {counts.map((count) => (
          <Img styledHover src={getRandomPostImg(3, 5)} key={count} />
        ))}
      </ImgGallery>
    </div>
  );
}
