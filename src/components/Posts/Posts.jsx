import { useEffect } from "react";

import FlexBox from "../FlexBox";
import Card from "../Card";

import { useStorePosts } from "../../zustand/store/store";

import "./posts.scss";

export default function Posts() {
  const { POSTS, fetchPosts, isLoadingP } = useStorePosts(state => state);

  useEffect(() => {
    fetchPosts(20)
  }, [fetchPosts]);

  return (
    <>
    {isLoadingP
      ? <div>Loading</div>
      : <FlexBox className="posts">
          {POSTS.map(post => (
            <Card
              key={post.id}
              posterId={post.owner.id}
              postImg={post.image}
              postText={post.text}
              comments={post.comments}
              likedByNumber={post.likes}
              postDate={post.publishDate}
              postImageAsBody={true}
            />
          ))}
        </FlexBox>
    }
    </>
  );
}
