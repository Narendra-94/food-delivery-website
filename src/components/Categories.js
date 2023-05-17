import React, { useContext } from "react";
import indianCuisine from "../images/indian-cuisine.jpg";
import chineseCuisine from "../images/chinese-cuisine.jpg";
import italianCuisine from "../images/italian-cuisine.jpg";
import { Link } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";

export const Categories = () => {
  const { state } = useContext(HomeContext);
  return (
    <div className="food-categories">
      {state.foodHome.map(({ id, categoryName, url }) => (
        <div className="cuisines">
          <Link>
            <img src={url} alt="categoryName" />
            <div>
              <h1>{categoryName}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
