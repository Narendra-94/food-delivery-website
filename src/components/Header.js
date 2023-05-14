import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import logo from "../images/theme_logo.png";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="header">
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
