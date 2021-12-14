import ProfileIcon from "../ProfileIcon";
import "./story.scss";

export default function Story({ user }) {
  let accntName = user;
  if (accntName.length > 10) accntName = accntName.substring(0, 10) + "...";

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="account-name">{accntName}</span>
    </div>
  );
}
