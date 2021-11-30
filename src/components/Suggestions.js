import Profile from './Profile';
import '../styles/suggestions.scss';

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="title-container">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <>
        <Profile
          username="crixx.croxx"
          caption="Followed by u-name + 3 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={true}
        />
        <Profile
          username="cdsax"
          caption="Followed by sss + 3 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={true}
        />
        <Profile
          username="sasas"
          caption="Followed by asde + 1 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
      </>
    </div>
  );
}
