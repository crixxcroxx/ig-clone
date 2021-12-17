import useFetch from "../../hooks/useFetch";
import Comment from "../Comment";
import getRandomInt from "../../utils/getRandomInt";
import users from "../../data/users";
import "./commentSection.scss";

export default function CommentSection(props) {
  const { data: comments, loading, error } = useFetch("comments");

  //temp number of comments
  const reducedComments = [1121, 1131, 1141, 1242, 6458, 2487, 2132, 6548]

  return (
    <div className="comment-section">
      <div>
        <Comment
          accountName={props.username}
          comment={props.post}
          accountImage={props.accountImage}
          poster={true}
          isCommentSection={props.isCommentSection}
        />
      </div>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {!loading && !error &&
        reducedComments.map((comment) =>
          <Comment
            accountName={users[getRandomInt(0, (users.length - 1))].username}
            accountImage={props.accountImage}
            comment={comments[getRandomInt(0, 500)].name}
            isCommentSection={props.isCommentSection}
          />
        )
      }
    </div>
  );
}