import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    // <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
      {/* <Link to="/" className="text-xl font-bold text-blue-600"> */}
      <Link to="/" className="text-3xl font-light tracking-tight text-blue-900">
        Marketplace
      </Link>
      <div className="flex gap-4 items-center text-sm">
        {!user ? (
          <>
            <Link className="hover:text-blue-500" to="/login">Login</Link>
            <Link className="hover:text-blue-500" to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">Home</Link>
            {user.role === "user" && (
              <>
              <Link to="/bookings" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">My Bookings</Link>
              <Link to="/services" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">Services</Link>
              </>
            )}
            {user.role === "provider" && (
              <>
                <Link to="/provider" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">Dashboard</Link>
                <Link to="/my-services" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">My Services</Link>
                <Link to="/add-service" className="py-2 p-3 text-xl text-gray-800 transition-colors hover:bg-blue-600 hover:text-white">Add</Link>
              </>
            )}
            <button
              onClick={logout}
              className="bg-red-500 text-md text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}