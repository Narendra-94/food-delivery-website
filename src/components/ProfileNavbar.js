import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const ProfileNavbar = () => {
  const [color, setColor] = useState({
    profileInfo: true,
    address: false,
  });

  return (
    <div className="profile-navbar">
      <NavLink
        style={color.profileInfo ? { backgroundColor: "#b468fa" } : {}}
        className="profile-nav-item nav-link-item"
        to="/profile/profile-information"
        onClick={() => setColor({ profileInfo: true, address: false })}
      >
        Profile Information
      </NavLink>

      <NavLink
        style={color.address ? { backgroundColor: "#b468fa" } : {}}
        className="profile-nav-item nav-link-item"
        to="/profile/address"
        onClick={() => setColor({ profileInfo: false, address: true })}
      >
        Addresses
      </NavLink>
    </div>
  );
};
