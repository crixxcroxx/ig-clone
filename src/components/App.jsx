import Nav from './Nav';
import Posts from './Posts';
import Stories from './Stories';
import Sidebar from './Sidebar';
import '../styles/App.scss';

export default function App() {

  return (
    <div className="App">
      <Nav />
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
    </div>
  );
}
