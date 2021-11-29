import Nav from './Nav';
import Card from './Card';
import Sidebar from './Sidebar';
import '../styles/App.scss';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="container">
          <Card />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
