import { useContext } from "react";

import FlexBox from "../../components/FlexBox";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";

import { BsChevronDown } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";
import getRandomInt from "../../utils/getRandomInt";

import UsersContext from "../../context/UsersContext";

import "./messages.scss";

export default function Messages() {
  const { data: message, loading, error } = useFetch();

  const { database, loggedUserIndex } = useContext(UsersContext)

  return (
    <FlexBox className="messages-wrapper" content_sidebar>
      <FlexBox className="sidebar">
        <FlexBox as="header">
          <FlexBox>
            <span>
              {database.results[loggedUserIndex].login.username}
              &nbsp;
            </span>
            <BsChevronDown className="icon" />
          </FlexBox>
          <BsPencilSquare className="icon write-icon" />
        </FlexBox>

        <div className="messages">
          {loading && <div>Loading</div>}
          {error && <div>Something went wrong!</div>}
          {!loading && !error &&
            database.results.map(user => (
              <div className="message">
                <ProfileCard
                  key={user.id.value}
                  userIndex={getRandomInt(1, (database.results.length - 1))}
                  iconSize="medium"
                  caption={message}
                  captionSize="small"
                />
              </div>
            ))
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
