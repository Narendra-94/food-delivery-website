import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const FoodInformation = () => {
  const { state, dispatch } = useContext(FoodListContext);

  const { id } = useParams();

  const foodInformation = state.foodList.find(({ _id }) => id === _id);
  console.log(foodInformation.url);

  return (
    <main className="topToBody product-details-main">
      <h1>Movie</h1>
      <div className="product-details-img-container">
        <img
          className=" prod-details-img"
          alt="food-img"
          src={foodInformation.url}
        />

        <button className="card-img-tag-btn productlist-card-img-tag-btn-container prod-details-img-tag">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div>
          <i class="fas fa-star"></i>
          <p>{foodInformation.rating}</p>
        </div>
      </div>
      <div className="product-details-text-container">
        <h2 className="product-details-header">{foodInformation.title}</h2>
        <div class="product-price-container">
          <p class="text-xl font-wt-semibold product-price">
            {foodInformation.price}
          </p>
          <p class="text-xl font-wt-semibold product-original-price">₹699</p>
          <p class="product-card-discount text-lg font-wt-semibold">45% OFF</p>
        </div>
      </div>
      <hr />
      <p>
        <span>Description</span>
        <span> {foodInformation.description}</span>
      </p>
      <div class="product-details-footer">
        <button class="btn btn-primary brd-rd-semi-sq outlined-primary">
          Add to cart
        </button>
      </div>
    </main>
  );
};
