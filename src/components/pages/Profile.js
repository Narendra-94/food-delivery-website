import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ProfileNavbar } from "../ProfileNavbar";
import { ProfileContent } from "./ProfileContent";

export const Profile = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setToken("");
  };

  return (
    <div className="topToBody profile-outer-container">
      <div className="profile-container">
        <ProfileNavbar />

        <div>
          <ProfileContent />
        </div>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
