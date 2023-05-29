import React, { useContext } from "react";
import { FoodListContext } from "../../context/FoodListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const Cart = () => {
  const { state } = useContext(FoodListContext);
  console.log(state.cart);
  return (
    <div className="topToBody cart-container">
      <div className="cart-container-header">
        <h3>MY CART ({state.cart.length})</h3>
      </div>
      <div className="all-cart-cards">
        <div className="cart-card">
          {state.cart.map(({ _id, title, price, url }) => (
            <div className="cart-content" key={_id}>
              <div className="image-container">
                <img src={url} alt="imageCart" />
                <button className="card-image-tag-btn">
                  <FontAwesomeIcon
                    className="cart-wishlist-btn"
                    icon={faHeart}
                  />
                </button>
              </div>
              <div className="cart-item-information">
                <div className="cart-item-information-container">
                  <h3>{title}</h3>

                  <p class="price">{price}</p>
                  <p>40% OFF</p>
                  <div className="quantity">
                    <p>Quantity: </p>
                    <div className="quantity-btn">
                      <button>-</button>
                      <p className="cart-quantity-number">1</p>
                      <button>+</button>
                    </div>
                  </div>
                </div>

                <button className="remove-cart">Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-price-details">
          <h4>CART PRICE DETAILS</h4>
          <hr className="cart-price-details-hr" />
          {state.cart.map(({ _id, title, price }) => (
            <div className="cart-price-item" key={_id}>
              <p>{title}</p>
              <p className="price">{price}</p>
            </div>
          ))}

          <div className="cart-price-item ">
            <p>Total Price:</p>
            <p className="price">1234</p>
          </div>

          <button className="checkout-button">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};
