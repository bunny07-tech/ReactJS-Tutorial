import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    padding: "10px 20px",
    margin: "0 10px",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  const navBarStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#333",
  };

  return (
    <div>
      <nav style={navBarStyle}>
        <Link to="/home" style={linkStyle}>
          Home
        </Link>
        <Link to="/ReactRedux1" style={linkStyle}>
          Service
        </Link>
        <Link to="/Administartion" style={linkStyle}>
          Administration
        </Link>
        <Link to="/MethodApi" style={linkStyle}>
          API Call
        </Link>
        <Link to="/PostmanApi" style={linkStyle}>
          Postman API
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
