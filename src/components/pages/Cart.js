import React, { useContext } from "react";
import { FoodListContext } from "../../context/FoodListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AddToWishList } from "../AddToWishList";
import { RemoveFromCart } from "./RemoveFromCart";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { state, dispatch } = useContext(FoodListContext);

  console.log(state.cart);

  const totalPrice = state.cart.reduce(
    (acc, curr) => acc + Number(curr.price * curr.qty),
    0
  );

  return (
    <div className="topToBody cart-container">
      <div className="cart-container-header">
        <h3>MY CART ({state.cart.length})</h3>
      </div>
      <div className="all-cart-cards">
        <div className="cart-card">
          {state.cart.map((product) => {
            const { _id, title, price, url, quantity, qty } = product;
            return (
              <div className="cart-content" key={_id}>
                <div className="image-container">
                  <img src={url} alt="imageCart" />
                  <div className="wishlist-container">
                    <AddToWishList product={product} />
                  </div>
                </div>
                <div className="cart-item-information">
                  <div className="cart-item-information-container">
                    <h3>{title}</h3>
                    <p className="price">{price}</p>
                    <p>40% OFF</p>
                    <div className="quantity">
                      <p>Quantity: </p>
                      <div className="quantity-btn">
                        <button
                          disabled={qty === 1}
                          className={qty === 1 && "decrement-button"}
                          onClick={() =>
                            dispatch({
                              type: "DECREMENT_QUANTITY",
                              payload: _id,
                            })
                          }
                        >
                          -
                        </button>
                        <p className="cart-quantity-number">{qty}</p>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "INCREMENT_QUANTITY",
                              payload: _id,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <RemoveFromCart product={product} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-price-details">
          <h4>CART PRICE DETAILS</h4>
          <hr className="cart-price-details-hr" />
          {state.cart.map(({ _id, title, price, quantity, qty }) => (
            <div className="cart-price-item" key={_id}>
              <p>
                {title} ({qty})
              </p>
              <p className="price">{price * qty}</p>
            </div>
          ))}

          <div className="cart-price-item">
            <p>Total Price:</p>
            <p className="price">{totalPrice}</p>
          </div>
          <div className="checkout-button">
            <Link to="/checkout">
              <button>CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
