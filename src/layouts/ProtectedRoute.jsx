import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";

const ProtectedRoute = () => {
  const userEmail = localStorage.getItem("userEmail");
  const data = JSON.parse(localStorage.getItem("userData"));
  const isAuthenticated = userEmail === data?.email;

  return isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
