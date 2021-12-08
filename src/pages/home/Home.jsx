import FlexBox from '../../components/FlexBox';
import Posts from '../../components/Posts';
import Stories from '../../components/Stories';
import Sidebar from '../../components/Sidebar';
import './home.scss';

export default function Home() {

  return (
    <FlexBox
      className="home-wrapper"
      content_sidebar
      sideHide="1000px"
      aliItem="flex-start"
    >
      <FlexBox className="content">
        <Stories />
        <Posts />
      </FlexBox>

      <div className="sidebar">
        <Sidebar />
      </div>
    </FlexBox>
  );
}

