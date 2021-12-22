import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./components/App";

import UsersProvider from "./context/UsersProvider";

import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
