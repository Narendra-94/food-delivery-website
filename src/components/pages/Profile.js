import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";
import { AuthContext } from "../../context/AuthContext";

export const Profile = () => {
  const { dispatch } = useContext(FoodListContext);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setToken("");
  };

  return (
    <div className="topToBody">
      <h1>This is the Profile page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
