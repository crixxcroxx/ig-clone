import { useState, useEffect } from "react";

import FlexBox from "../../components/FlexBox";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";

import { BsChevronDown } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";
import getRandomInt from "../../utils/getRandomInt";
import users from "../../data/users";

import "./messages.scss";

export default function Messages() {
  /* i'll be getting messages from posts endpoint */
  const { isLoading, data } = useFetch("posts");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(data);
  }, [data]);

  return (
    <FlexBox className="messages-wrapper" content_sidebar aliItem="normal">
      <div className="sidebar">
        <FlexBox as="header">
          <FlexBox>
            <span>crixx.croxx &nbsp;</span>
            <BsChevronDown className="icon" />
          </FlexBox>
          <BsPencilSquare className="icon write-icon" />
        </FlexBox>

        <FlexBox className="messages" aliItem="normal">
          {
            !isLoading &&
              users.map((user) => (
                <div className="message">
                  <ProfileCard
                    key={user.id}
                    caption={
                      message[getRandomInt(0, 100)].body.substring(0, 35) +
                      "..."
                    }
                    captionSize="small"
                    iconSize="big"
                  />
                </div>
              )) /*
          <ProfileCard
            caption={message[getRandomInt(0, 100)].body.substring(0, 24) + "..."}
            captionSize="small"
            iconSize="big"
          />*/
          }
        </FlexBox>
      </div>

      <FlexBox className="content">
        <IoPaperPlaneOutline className="icon" />
        <h2>Your messages</h2>
        <p>Send private photos and messages to a friend or group.</p>
        <Button primary>Send Message</Button>
      </FlexBox>
    </FlexBox>
  );
}
