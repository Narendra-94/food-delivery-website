import React, { useContext } from "react";
import { FoodListContext } from "../../context/FoodListContext";

export const Cart = () => {
  const { state } = useContext(FoodListContext);
  console.log(state.cart);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
    </div>
  );
};
