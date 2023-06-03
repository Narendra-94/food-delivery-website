import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProfileInfo = () => {
  const { profile, setToken } = useContext(AuthContext);
  console.log(profile, "profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setToken("");
  };

  return (
    <div className="profile-details-container">
      <div className="profile-details-item">
        <p className="profile-details-item-label">Name</p>
        <p>
          {profile.firstName} {profile.lastName}
        </p>
      </div>

      <div className="profile-details-item">
        <p className="profile-details-item-label">Email</p>
        <p>{profile.email}</p>
      </div>
      <div className="profile-details-footer">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
