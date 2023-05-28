import React, { useContext } from "react";
import { FoodListContext } from "../context/FoodListContext";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const AddToCart = ({ product }) => {
  const { state, dispatch } = useContext(FoodListContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(state.cart, "cart");

  const handleAddToCart = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ product }),
      });

      const data = await response.json();

      dispatch({ type: "ADD_TO_CART", payload: data.cart });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isInCart = state.cart.some((item) => item._id === product._id);

  return (
    <div className="add-to-cart-btn">
      {isInCart ? (
        <Link to="/cart">
          <button style={{ backgroundColor: "green" }}>Go to Cart</button>
        </Link>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};
