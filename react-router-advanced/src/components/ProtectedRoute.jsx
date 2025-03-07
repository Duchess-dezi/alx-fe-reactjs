import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import authentication context

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ Check authentication state

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
