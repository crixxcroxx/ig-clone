import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";

import { useStorePosts } from "../../zustand/store/store";

import "./explore.scss";

export default function Explore() {
  const POSTS = useStorePosts(state => state.POSTS);

  return (
    <div className="explore-wrapper">
      <ImgGallery className="gallery">
        {POSTS.map(post =>
          <Img
            key={post.id}
            styledHover
            posterId={post.owner.id}
            postId={post.id}
            postText={post.text}
            comments={post.comments}
            postDate={post.publishDate}
            likes={post.likes}
            src={post.image}
          />
        )}
      </ImgGallery>
    </div>
  );
}
