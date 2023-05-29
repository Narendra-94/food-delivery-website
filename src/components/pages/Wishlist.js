import { useContext } from "react";
import { FoodListContext } from "../../context/FoodListContext";

export const WishList = () => {
  const { state } = useContext(FoodListContext);
  console.log(state.wishList);
  return <div className="topToBody cart-container">wishList</div>;
};
