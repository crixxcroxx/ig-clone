import Posts from '../../components/Posts';
import Stories from '../../components/Stories';
import Sidebar from '../../components/Sidebar';
import './home.scss';

export default function Home() {

  return (
    <main>
      <div className="container">
        <div className="content">
          <Stories />
          <Posts />
        </div>

        <div className="sticky">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

