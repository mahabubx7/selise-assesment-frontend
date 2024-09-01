import '@mantine/core/styles.css'; // Mantine UI framework, not custom css !!!
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
import { CalenderPage, ErrorPage, Root } from '@/pages';
import { store } from '@/store/redux';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={routes} />
      </MantineProvider>
    </Provider>
  </StrictMode>,
);
