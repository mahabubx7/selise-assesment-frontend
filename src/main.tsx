import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
import { CalenderPage, ErrorPage, Root } from '@/pages';

// Route registry <Global / Main>
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <CalenderPage />,
        index: true,
      },
      {
        path: '/year/:year/month/:month',
        element: <CalenderPage />,
        // index: true,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
