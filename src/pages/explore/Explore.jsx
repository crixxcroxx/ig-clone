import Img from "../../components/Img";
import ImgGallery from "../../components/ImgGallery";

import useFetch from "../../hooks/useFetch";

import "./explore.scss";

export default function Explore() {
  const {
    data: posts,
    loading,
    error
  } = useFetch(false, "post", false, 10);

  return (
    <>
      {loading && <div>Loading</div>}
      {error && <div>Something went wrong</div>}
      {!loading && !error &&
        <div className="explore-wrapper">
          <ImgGallery className="gallery">
            {posts.data.map(post =>
              <Img
                key={post.id}
                styledHover
                posterId={post.owner.id}
                postId={post.id}
                postText={post.text}
                postDate={post.publishDate}
                likes={post.likes}
                src={post.image}
              />
            )}
          </ImgGallery>
        </div>
      }
    </>
  );
}
