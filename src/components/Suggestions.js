import Profile from './Profile';
import '../styles/suggestions.scss';

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="title-container">
        <div className="title"><strong>Suggestions For You</strong></div>
        <a href="/"><strong>See All</strong></a>
      </div>

      <div className="suggestions-list">
        <Profile
          username="crixx.croxx"
          caption="Followed by u-name + 3 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
        <Profile
          username="cdsax"
          caption="Followed by sss + 3 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
        <Profile
          username="sasas"
          caption="Followed by asde + 1 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
        <Profile
          username="xcz"
          caption="Followed by dd"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
        <Profile
          username="fdhg"
          caption="Followed by sad + 1 more"
          captionSize="small"
          urlText="Follow"
          iconSize="medium"
          storyBorder={false}
        />
      </div>
    </div>
  );
}
