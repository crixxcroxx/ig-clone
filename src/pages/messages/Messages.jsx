import { useContext } from "react";

import FlexBox from "../../components/FlexBox";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";

import { BsChevronDown } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";

import UsersContext from "../../context/UsersContext";

import "./messages.scss";

export default function Messages() {
  const { USERS_DB, USER_ID } = useContext(UsersContext)
  const user = USERS_DB[USERS_DB.findIndex(el => el.id === USER_ID)]

  //get random ID
  //then create fake messages from comments
  const id = "60d21af267d0d8992e610b8d"

  const {
    data: messages,
    loading,
    error
  } = useFetch(id, "post", "comment", 10);

  return (
    <FlexBox className="messages-wrapper" content_sidebar>
      <FlexBox className="sidebar">
        <FlexBox as="header">
          <FlexBox>
            <span>
              {user.firstName}.{user.lastName}&nbsp;
            </span>
            <BsChevronDown className="icon" />
          </FlexBox>
          <BsPencilSquare className="icon write-icon" />
        </FlexBox>

        <div className="messages">
          {loading && <div>Loading</div>}
          {error && <div>Something went wrong!</div>}
          {!loading && !error &&
            <>
            {messages.length > 0
              ? messages.map(message =>
                  <div className="message">
                    <ProfileCard
                      key={message.id}
                      userId={message.owner.id}
                      iconSize="medium"
                      caption={message}
                      captionSize="small"
                    />
                  </div>
                )
              : <div>No messages</div>
            }
            </>
          }
        </div>
      </FlexBox>

      <FlexBox className="content">
        <IoPaperPlaneOutline className="icon" />
        <h2>Your messages</h2>
        <p>Send private photos and messages to a friend or group.</p>
        <Button primary>Send Message</Button>
      </FlexBox>
    </FlexBox>
  );
}
