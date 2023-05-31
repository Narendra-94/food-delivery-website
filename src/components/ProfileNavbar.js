import React from "react";
import { Link } from "react-router-dom";

export const ProfileNavbar = () => {
  return (
    <div className="profile-navbar">
      <Link>Profile Information</Link>
      <Link>Addresses</Link>
    </div>
  );
};
