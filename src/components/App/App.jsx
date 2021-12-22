import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout";
// import Home from "../../pages/home";
import Messages from "../../pages/messages";
import Explore from "../../pages/explore";
import Profile from "../../pages/profile";
import Settings from "../../pages/settings";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*<Route index element={<Home />} />*/}
        <Route path="messages" element={<Messages />} />
        <Route path="explore" element={<Explore />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

// <Route index path=":id" element={<Profile />} />
