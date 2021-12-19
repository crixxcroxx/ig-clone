import { useContext } from "react";

import Comment from "../Comment";

import getRandomInt from "../../utils/getRandomInt";

import UsersContext from "../../context/UsersContext";

import "./commentSection.scss";

export default function CommentSection(props) {
  const { posterIndex } = props

  const { database } = useContext(UsersContext)

  //temp number of comments
  const reducedComments = [1121, 1131, 1141, 1242, 6458, 2487, 2132, 6548]

  return (
    <div className="comment-section">
      <div className="user-post-body">
        <Comment
          commenterIndex={posterIndex}
          isPoster={true}
          isCommentSection={true}
        />
      </div>
      {
        reducedComments.map(cmnt =>
          <Comment
            key={`ran${cmnt}dom`}
            commenterIndex={getRandomInt(1, (database.results.length - 1))}
            isCommentSection={true}
          />
        )
      }
    </div>
  );
}