import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "../Nav";
// import Home from "../../pages/home";
import Messages from "../../pages/messages";
import Explore from "../../pages/explore";
import Profile from "../../pages/profile";
import Settings from "../../pages/settings";

import UsersProvider from "../../context/UsersProvider";

const App = () => {

  return (
    <UsersProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            <Route path="/messages" element={<Messages />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
