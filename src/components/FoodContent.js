import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodListContext } from "../context/FoodListContext";
import { AddToCart } from "./AddToCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AddToWishList } from "./AddToWishList";

export const FoodContent = () => {
  const { state, dispatch } = useContext(FoodListContext);

  // console.log(state, "state.category");
  const selectedCategory =
    state.category === ""
      ? state.foodList
      : state.foodList.filter(
          ({ categoryName }) => categoryName === state.category
        );

  const filterPrice = selectedCategory.filter(
    ({ price }) => Number(price) <= state.initialPrice
  );
  const filterCategory = filterPrice.filter(({ isVegetarian }) => {
    if (state.showVeg && state.showNonVeg) {
      return filterPrice;
    } else if (state.showVeg) {
      return isVegetarian;
    } else if (state.showNonVeg) {
      return !isVegetarian;
    } else return true;
  });

  const filterRating = state.selectedRating
    ? filterCategory.filter(({ rating }) => rating >= state.selectedRating)
    : filterCategory;

  return (
    <div className="food-content">
      {filterRating.length === 0 ? (
        <h1 className="no-products">
          No products found within the selected price range.
        </h1>
      ) : (
        <>
          <h1 className="count">Total Food Items: {filterRating.length}</h1>
          <div className="foodlist">
            {filterRating.map((product) => {
              const { _id, title, description, price, url, isVegetarian } =
                product;
              return (
                <div className="food-card" key={_id}>
                  <Link to={`/foodItems/${_id}`} className="food-items">
                    <img src={url} alt="indian_cuisine" />
                    <div className="details">
                      <div className="description">
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                      <div className="price-container">
                        <h3 className="price">{price}</h3>
                      </div>
                    </div>
                  </Link>
                  <AddToWishList product={product} />
                  <AddToCart product={product} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
