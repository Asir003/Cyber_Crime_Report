import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function ProtectedRoute({ children, role }) {
  const userRole = getUserRole();
  if (!userRole) return <Navigate to="/auth/login" />;
  if (role && userRole !== role) return <Navigate to="/unauthorized" />;
  return children;
} 