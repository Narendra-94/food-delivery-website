import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FoodListContext } from "../context/FoodListContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const AddToWishList = ({ product }) => {
  const { state, dispatch } = useContext(FoodListContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToWishList = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ product }),
      });

      const data = await response.json();

      dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRemoveFromWishList = async () => {
    const response = await fetch("/api/user/wishlist/:productId", {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ product }),
    });

    const data = await response.json();

    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.wishlist });
  };

  const isInWishList = state.wishList.some((item) => item._id === product._id);

  return (
    <div>
      {isInWishList ? (
        <button
          className="food-content-wishlist"
          style={{ color: "red" }}
          onClick={handleRemoveFromWishList}
        >
          <FontAwesomeIcon className="cart-wishlist-btn" icon={faHeart} />
        </button>
      ) : (
        <button className="food-content-wishlist" onClick={handleAddToWishList}>
          <FontAwesomeIcon className="cart-wishlist-btn" icon={faHeart} />
        </button>
      )}
    </div>
  );
};
