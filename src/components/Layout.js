import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export function Layout() {

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}