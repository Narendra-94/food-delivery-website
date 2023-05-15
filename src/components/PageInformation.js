import React from "react";
import deliverySlider from "../images/delivery-slider.png";
import { Link } from "react-router-dom";

export const PageInformation = () => {
  return (
    <div className="home-page">
      <img src={deliverySlider} alt="" />
      <div className="landing-page-content">
        <h1>"Delivering deliciousness to your doorstep!!!" </h1>
        <p>
          Hungry? Don't worry, we've got you covered. With FoodEase, the
          ultimate food delivery app, your taste buds are in for a treat.
        </p>
        <button>
          <Link to="/foodItems" style={{ textDecoration: "none" }}>
            I'm Hungry
          </Link>
        </button>
      </div>
    </div>
  );
};
