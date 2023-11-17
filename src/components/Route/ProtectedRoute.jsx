import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({isAdmin , children}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && isAdmin && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;

};

export default ProtectedRoute;
