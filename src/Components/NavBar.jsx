import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="about">Home</NavLink>
      <NavLink to="/">Contact us</NavLink>
      <NavLink to="users">Users</NavLink>
    </div>
  );
};

export default Navbar;
