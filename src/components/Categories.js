import React from "react";
import indianCuisine from "../images/indian-cuisine.jpg";
import chineseCuisine from "../images/chinese-cuisine.jpg";
import italianCuisine from "../images/italian-cuisine.jpg";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="food-categories">
      <div className="cuisines">
        <Link>
          <img src={indianCuisine} alt="" />
          <div>
            <h1>Indian Cuisine</h1>
          </div>
        </Link>

        <Link>
          <img src={chineseCuisine} alt="" />
          <div>
            <h1>Chinese Cuisine</h1>
          </div>
        </Link>

        <Link>
          <img src={italianCuisine} alt="" />
          <div>
            <h1>Italian Cuisine</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
