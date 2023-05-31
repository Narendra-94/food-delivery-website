import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";
import { FoodListContext } from "../context/FoodListContext";

export const Categories = () => {
  const { state, dispatch } = useContext(FoodListContext);

  const handleClickCategory = (categoryName) => {
    dispatch({
      type: "ON_CLICKING_CATEGORY",
      payload: categoryName,
    });
  };
  return (
    <div className="food-categories">
      {state.foodHome.map(({ _id, categoryName, url }) => (
        <Link
          to={"/foodItems"}
          key={_id}
          className="cuisines"
          onClick={() => handleClickCategory(categoryName)}
        >
          <img src={url} alt={categoryName} />
          <div>
            <h1>{categoryName}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};
