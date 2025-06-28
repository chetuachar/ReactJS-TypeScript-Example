import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
