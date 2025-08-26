import { Link,Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <Link to="/home">Home</Link> <br />
    <Link to="/service">Service</Link> <br />
    <Link to="/Administartion">Administration</Link>< br />
    <Link to="/User/age=12">Anil</Link>
    </div>
  );
}

export default NavBar;
