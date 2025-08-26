import { Link, Outlet } from 'react-router-dom';

function Administartion() {
  return (
    <div>
      <h1>Hello from Administartion</h1>
      <Link to="company">Company</Link> |{" "}
      <Link to="channel">Channel</Link>

      <Outlet />
    </div>
  );
}

export default Administartion;
