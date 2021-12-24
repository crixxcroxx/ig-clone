import FlexBox from "../../components/FlexBox";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";

import { BsChevronDown } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

import { useStoreUsers } from "../../zustand/store/store";

import "./messages.scss";

export default function Messages() {
  const USERS = useStoreUsers(state => state.USERS)
  let messages = []

  return (
    <FlexBox className="messages-wrapper" content_sidebar>
      <FlexBox className="sidebar">
        <FlexBox as="header">
          <FlexBox>
            <span>
              {USERS.firstName}.{USERS.lastName}&nbsp;
            </span>
            <BsChevronDown className="icon" />
          </FlexBox>
          <BsPencilSquare className="icon write-icon" />
        </FlexBox>

        <div className="messages">
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
