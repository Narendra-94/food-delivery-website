import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { FoodListContext } from "../../context/FoodListContext";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { state, dispatch } = useContext(FoodListContext);
  const { setToken, profile, setProfile, signUpData } = useContext(AuthContext);

  console.log(signUpData, "signUpData");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginGuest = async () => {
    const creds = {
      email: "narenchordiya07@gmail.com",
      password: "Naren@goResto",
    };
    const response = await fetch("/api/auth/login", {
      method: "POST",

      body: JSON.stringify(creds),
    });
    const data = await response?.json();

    if (data.encodedToken) {
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate(location?.state?.from?.pathname || "/");
      setToken(data.encodedToken);
      setProfile({
        ...profile,
        firstName: data.foundUser.firstName,
        lastName: data.foundUser.lastName,
        email: data.foundUser.email,
      });
    }
  };

  const handleLogin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    localStorage.setItem("token", data.encodedToken);
    localStorage.setItem("user", JSON.stringify(data.foundUser));
    navigate(location?.state?.from?.pathname || "/");
    setToken(data.encodedToken);
    setProfile({
      ...profile,
      firstName: data.foundUser.firstName,
      lastName: data.foundUser.lastName,
      email: data.foundUser.email,
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-details">
          <h1>Sign In</h1>

          <label>Email address</label>
          <input
            type="email"
            placeholder="xyz@goResto@gmail.com"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <label>Password</label>
          <div className="password-input-container">
            <input
              type={state.showPassword ? "text" : "password"}
              placeholder="xyz1234"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <span
              className="login-eye"
              onClick={() => dispatch({ type: "ON_CLICKING_SHOW_PASSWORD" })}
            >
              <FontAwesomeIcon
                icon={state.showPassword ? faEyeSlash : faEye}
                style={{ color: "#000000" }}
              />
            </span>
          </div>

          <div className="login-btn">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoginGuest}>Be My Guest</button>
          </div>
          <div>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
