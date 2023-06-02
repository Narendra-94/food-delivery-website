import React from "react";
import { NavLink } from "react-router-dom";

export const ProfileNavbar = () => {
  return (
    <div className="profile-navbar">
      <NavLink
        className="profile-nav-item nav-link-item"
        to="/profile/profile-information"
      >
        Profile Information
      </NavLink>

      <NavLink className="profile-nav-item nav-link-item" to="/profile/address">
        Addresses
      </NavLink>
    </div>
  );
};
