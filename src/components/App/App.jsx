import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "../Nav";
import Home from "../../pages/home";
import Messages from "../../pages/messages";
import Explore from "../../pages/explore";
import Profile from "../../pages/profile";
import Settings from "../../pages/settings";

import useFetch from "../../hooks/useFetch";
import UsersContext from "../../context/UsersContext";

export default function App() {
  const { data: database, loading, error } = useFetch(10);
  const loggedUserIndex = 0

  return (
    <>
    {loading && <div>Loading</div>}
    {error && <div>Something went wrong</div>}
    {!loading && !error &&
      <UsersContext.Provider
        value={{ database, loggedUserIndex }}
      >
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UsersContext.Provider>
    }
    </>
  );
}
