import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import logo from "../images/theme_logo.png";
import { Search } from "./Search";

import { FoodListContext } from "../context/FoodListContext";

export const Header = () => {
  const { state, dispatch } = useContext(FoodListContext);

  return (
    <div className="header">
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "SIDEBAR_ACTIVE" })}
        icon={faBars}
        style={{ color: "#0f0f0f" }}
        size="xl"
      />
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <Search />
      <div className="user-auth">
        <Link to="/login">Login</Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </Link>

        <Link to="/wishList">
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </Link>
      </div>
    </div>
  );
};
