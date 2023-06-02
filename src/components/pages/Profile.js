import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { ProfileNavbar } from "../ProfileNavbar";
import { ProfileInfo } from "../ProfileInfo";
import { Address } from "../Address";

export const Profile = () => {
  const location = useLocation();
  return (
    <div className="topToBody profile-outer-container">
      <div className="profile-container">
        <ProfileNavbar />
        <Routes>
          <Route path="profile-information" element={<ProfileInfo />} />
        </Routes>
        <Routes>
          <Route path="address" element={<Address />} />
        </Routes>
      </div>
    </div>
  );
};
