import Card from './Card';
import useFetch from '../hooks/useFetch';
import getRandomInt from '../utils/getRandomInt';
import '../styles/posts.scss';

export default function Posts() {
  const { isLoading:isLoadingUsers, data:users } = useFetch('users')
  const { isLoading:isLoadingPosts, data:posts } = useFetch('posts')
  const { isLoading:isLoadingComments, data:comments } = useFetch('comments')

  function getPost(uId) {
    let rand = getRandomInt(0, 9)
    let idx = posts.findIndex(post => post.userId === uId)

    return posts[idx + rand]
  }

  const getSrc = () => {
    let rand = getRandomInt(5, 10)
    let src = `https://unsplash.it/${rand}00/${rand}00`

    return src
  }

  return (
    <div className="posts">{
      !isLoadingUsers && !isLoadingPosts && !isLoadingComments &&
      users.map(user =>
        <Card
          key={user.id}
          accountName={user.username}
          post={getPost(user.id)}
          storyBorder={true}
          image={getSrc()}
          comments={comments}
          likedByText={users[getRandomInt(0, 9)].name}
          likedByNumber={getRandomInt(0, 100)}
          hours={getRandomInt(0, 12)}
        />
      )
    }</div>
  );
}

