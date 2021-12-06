import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from '../pages/home';
import Messages from '../pages/messages';
import Explore from '../pages/explore';
import '../styles/App.scss';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}