import React, { useContext } from "react";
import { FoodListContext } from "../../context/FoodListContext";

export const Checkout = () => {
  const { state } = useContext(FoodListContext);

  console.log(state.cart, "cart in checkout");
  return <div>Checkout</div>;
};
