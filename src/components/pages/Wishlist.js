import { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodListContext } from "../../context/FoodListContext";
import { AddToWishList } from "../AddToWishList";
import { AddToCart } from "../AddToCart";
import emptyWishlist from "../../images/empty-wishlist1.gif";
import { ToastContainer } from "react-toastify";

export const WishList = () => {
  const { state } = useContext(FoodListContext);

  return (
    <>
      <ToastContainer />
      {state.wishList.length === 0 ? (
        <div className="topToBody empty-wishlist">
          <img src={emptyWishlist} alt="" />
          <h1>Your Wishlist is empty</h1>
        </div>
      ) : (
        <div className="topToBody wishlist-card">
          {state.wishList.map((product) => {
            const { _id, title, description, price, url } = product;
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
      )}
    </>
  );
};
