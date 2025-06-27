import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/contact"}>Contact Page</Link>
        <Link to={"/about"}>About Page</Link>
      </div>
      <Outlet />
      <div>
        <p>Copyright chetuachar.com 2025</p>
      </div>
    </React.Fragment>
  );
}
