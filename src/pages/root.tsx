import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <main>
        <div id="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
