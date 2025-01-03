import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contex/Contex.jsx";
const ProtectedRotes = () => {
  // const { Component } = props;
  // const token = localStorage.getItem("token");
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {/* <Component /> */}
      <Outlet />
    </div>
  );
};

export default ProtectedRotes;
