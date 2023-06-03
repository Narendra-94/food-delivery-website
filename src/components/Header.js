import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import logo from "../images/theme_logo.png";
import { Search } from "./Search";

import { FoodListContext } from "../context/FoodListContext";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const { state, dispatch } = useContext(FoodListContext);
  const { token } = useContext(AuthContext);

  return (
    <div className="header">
      <FontAwesomeIcon
        onClick={() => dispatch({ type: "SIDEBAR_ACTIVE" })}
        icon={faBars}
        style={{ color: "white", cursor: "pointer" }}
        size="xl"
      />
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <Search />

      <div className="user-auth">
        {token ? (
          <Link to="/profile/profile-information">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart" className="cart-icon-wrapper">
          {state?.cart?.length > 0 && token && (
            <div className="cart-length">{state.cart.length}</div>
          )}
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </Link>

        <Link to="/wishList" className="cart-icon-wrapper">
          {state.wishList.length > 0 && token && (
            <div className="cart-length">{state.wishList.length}</div>
          )}
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </Link>
      </div>
    </div>
  );
};
