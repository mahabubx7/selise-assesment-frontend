import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <main>
        <h1>Calendar is coming!</h1>
        <div id="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
