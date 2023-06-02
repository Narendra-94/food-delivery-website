import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const { state, dispatch } = useContext(FoodListContext);
  const { profile, setProfile, setToken, signUpData, setSignUpData } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleInput = (e, fieldName) => {
    const { value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSignUp = async () => {
    if (signUpData.password === signUpData.confirmPassword) {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({
            firstName: signUpData.name,
            lastName: signUpData.name,
            email: signUpData.email,
            password: signUpData.password,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        setToken(data.encodedToken);
        navigate("/");
        setProfile({
          ...profile,
          firstName: data.createdUser.firstName,
          lastName: data.createdUser.lastName,
          email: data.createdUser.email,
        });
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-details">
          <h1>Sign Up</h1>
          <label>Name</label>
          <input
            value={signUpData.name}
            type="text"
            placeholder="Mr. Foodie"
            onChange={(e) => handleInput(e, "name")}
          />
          <label>Email address</label>
          <input
            value={signUpData.email}
            type="text"
            placeholder="xyz@goResto@gmail.com"
            onChange={(e) => handleInput(e, "email")}
          />
          <div className="login-password">
            <label>Password</label>
            <div className="signup-password-input-container">
              <input
                value={signUpData.password}
                type={state.showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => handleInput(e, "password")}
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
                value={signUpData.confirmPassword}
                type={state.showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                id="confirm-password-input"
                onChange={(e) => handleInput(e, "confirmPassword")}
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
            <button onClick={handleSignUp}>Create New Account</button>
          </div>
          <div>
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
