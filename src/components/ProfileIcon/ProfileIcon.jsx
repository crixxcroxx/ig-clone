import "./profileIcon.scss";

export default function ProfileIcon(props) {
  const { image, iconSize, hasStoryBorder } = props;

  return (
    <div className={hasStoryBorder && "story-border"}>
      <img
        className={`profile-icon ${iconSize}`}
        src={image}
        alt="User Profile"
      />
    </div>
  );
}
