import React, { useContext } from "react";
import { FoodListContext } from "../context/FoodListContext";
import { Link } from "react-router-dom";

export const FoodContent = () => {
  const { state, dispatch } = useContext(FoodListContext);

  return (
    <div className="food-content">
      <div className="foodlist">
        {state.foodList.map(({ _id, title, description, price, url }) => (
          <div className="content">
            <Link>
              <img src={url} alt="indian_cuisine" />
              <p>{title}</p>
              <p>{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
