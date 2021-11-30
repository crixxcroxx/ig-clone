import Card from './Card';
import '../styles/posts.scss';

export default function Posts() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="posts">
      <Card
        accountName="asasa"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="axxxa"
        likedByNumber={3}
        hours={8}
      />

      <Card
        accountName="asasa"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="xasa"
        likedByNumber={9}
        hours={8}
      />

      <Card
        accountName="sdsds"
        storyBorder={true}
        image="https://picsum.photos/400/900"
        comments={commentsThree}
        likedByText="sdfsa"
        likedByNumber={4}
        hours={3}
      />
    </div>
  );
}

