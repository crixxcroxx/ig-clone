import ProfileIcon from "../ProfileIcon";
import "./story.scss";

export default function Story(props) {
  const { userId, userName } = props

  let accntName = userName;
  if (accntName.length > 10) accntName = accntName.substring(0, 10) + "...";

  return (
    <div className="story">
      <ProfileIcon userId={userId} iconSize="medium" />
      <span className="account-name">{accntName}</span>
    </div>
  );
}
