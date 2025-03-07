import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({ children }) {
  const  user  = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;