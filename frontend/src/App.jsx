import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import ProviderDashboard from "./pages/ProviderDashboard";
import AddService from "./pages/AddService";
import MyServices from "./pages/MyServices";
import EditService from "./pages/EditService";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF2]">

    {/* // <div className="min-h-screen bg-[#fafafa]"> */}
      {/* Navbar */}
      <Navbar />
      <ScrollToTop/>
      {/* Main Content */}
      {/* <div className="max-w-6xl mx-auto p-4"> */}
        <div className="flex-grow max-w-6xl mx-auto p-4 w-full">
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="/services" element={<Services />} />
          {/* USER ROUTES */}
          <Route
            path="/bookings"
            element={
              <ProtectedRoute role="user">
                <Bookings />
              </ProtectedRoute>
            }
          />
          {/* PROVIDER ROUTES */}
          <Route
            path="/provider"
            element={
              <ProtectedRoute role="provider">
                <ProviderDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-service"
            element={
              <ProtectedRoute role="provider">
                <AddService />
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-services"
            element={
              <ProtectedRoute role="provider">
                <MyServices />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-service/:id"
            element={
              <ProtectedRoute role="provider">
                <EditService />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
       <Footer />
    </div>
  );
}

export default App;