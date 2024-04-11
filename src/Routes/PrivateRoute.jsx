import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if(loading){
    return <progress className="progress w-56"></progress>
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to = '/login' replace></Navigate>;
}