import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    // if not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }
  return children; // else render the protected component
}

export default ProtectedRoute;
