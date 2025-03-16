/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useUser } from "./hooks/auth/useUser";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles.includes(user.role)) {
    return children;
  }
}

export default ProtectedRoute;
