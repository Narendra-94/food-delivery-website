import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const SignUp = () => {
  const { state, dispatch } = useContext(FoodListContext);

  console.log(state.showPassword);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-details">
          <h1>Sign Up</h1>
          <label>Name</label>
          <input type="text" placeholder="Mr. Foodie" />
          <label>Email address</label>
          <input type="text" placeholder="xyz@goResto@gmail.com" />
          <div className="login-password">
            <label>Password</label>
            <div className="signup-password-input-container">
              <input
                type={state.showPassword ? "text" : "password"}
                placeholder="Enter password"
              />

              <span
                className="eye-show-password"
                onClick={() => dispatch({ type: "ON_CLICKING_SHOW_PASSWORD" })}
              >
                <FontAwesomeIcon
                  icon={state.showPassword ? faEyeSlash : faEye}
                  style={{ color: "#000000" }}
                />
              </span>
              <label>Confirm Password</label>
              <input
                type={state.showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                id="confirm-password-input"
              />
              <span
                className="eye-show-confirm-password"
                onClick={() =>
                  dispatch({ type: "ON_CLICKING_SHOW_CONFIRM_PASSWORD" })
                }
              >
                <FontAwesomeIcon
                  icon={state.showConfirmPassword ? faEyeSlash : faEye}
                  style={{ color: "#000000" }}
                />
              </span>
            </div>
          </div>

          <div className="login-btn">
            <button>Create New Account</button>
          </div>
          <div>
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
