import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // If user is already logged in block access
  if (user) {
    if (user.role === "provider") {
      return <Navigate to="/provider" replace />;
    }
    return <Navigate to="/bookings" replace />;
  }

  return children;
}