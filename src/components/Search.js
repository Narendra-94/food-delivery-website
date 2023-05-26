import React, { useContext } from "react";
import { FoodListContext } from "../context/FoodListContext";

export const Search = () => {
  const { state, dispatch } = useContext(FoodListContext);

  const filteredFoodList = state.foodList.filter(({ title }) =>
    title.toLowerCase().includes(state.inputValue.toLowerCase())
  );

  return (
    <div className="input-search">
      <input
        onChange={(e) =>
          dispatch({ type: "SEARCH_DATA", payload: e.target.value })
        }
        type="search"
        placeholder="type here..."
      />

      {(state.isSearchOpen || state.inputValue) && (
        <div type="text" className="search-output-container">
          {filteredFoodList.length === 0 ? (
            <p className="no-data-found">No data found</p>
          ) : (
            filteredFoodList.map(({ _id, title, url, price, description }) => (
              <div className="search-output-item" key={_id}>
                <img src={url} alt="" className="search-output-item-image" />
                <div className="search-output-item-details">
                  <div className="search-output-item-upper">
                    <h3>{title}</h3>
                    <div className="search-output-price-details">
                      <h3>₹ {price}</h3>
                    </div>
                  </div>
                  <div className="search-output-item-desc">
                    <p className="text-md">{description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
