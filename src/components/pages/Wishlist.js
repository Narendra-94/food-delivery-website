import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";
import { AddToWishList } from "../AddToWishList";
import { AddToCart } from "../AddToCart";

export const WishList = () => {
  const { state } = useContext(FoodListContext);
  console.log(state.wishList, "state.wishList");

  return (
    <div className="topToBody cart-container">
      {state.wishList.map((product) => {
        const { _id, title, description, price, url, isVegetarian } = product;
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
  );
};
