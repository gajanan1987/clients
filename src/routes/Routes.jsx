import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import { Home } from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import { Userlisting } from "../components/Userlisting.jsx";
import ProtectedRotes from "./ProtectedRotes.jsx";
import Register from "../pages/Register.jsx";

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<ProtectedRotes />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/userlist" element={<Userlisting />}></Route>
      </Routes>
    </>
  );
};

export default Approutes;
