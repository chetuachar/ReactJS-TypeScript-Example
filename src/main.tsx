import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { Theme } from '@radix-ui/themes';
import './index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme grayColor="sand">
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </Theme>
  </StrictMode>
);
