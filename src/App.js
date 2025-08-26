import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Administartion from "./Administartion";
import NavBar from "./NavBar";
import User from "./User";
import Company from "./Company";
import Channel from "./Channel";
import Login from "./Login"; // create a login page
import ProtectedRoute from "./ProtectedRoute";

function App() {
  // fake auth variable (replace with real auth logic)
  const isAuth = true; // change to true after login

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Service" element={<Service />} />

          <Route path="/Administartion/*" element={<ProtectedRoute isAuth={isAuth}><Administartion /></ProtectedRoute>}>
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          </Route>

          <Route path="/User/:name" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
