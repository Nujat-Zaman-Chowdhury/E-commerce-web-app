import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default ProtectedRoute;
