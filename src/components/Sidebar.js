import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const Sidebar = () => {
  const { state, dispatch } = useContext(SearchContext);
  console.log(state);
  return (
    <>
      {state.isSlide && (
        <aside className="sidebar-container">
          <div className="sidebar-header">
            <b>Filters</b>
            <span>Clear</span>
          </div>
          <div className="sidebar-slider-item">
            <h2>Price</h2>
            <div className="sidebar-slider-label">
              <p>0</p>
              <p>900</p>
              <p>1800</p>
            </div>
            <input type="range" min="0" max="1800" />
          </div>

          <div className="sidebar-category">
            <h2>Category</h2>
            <div className="sidebar-category-list">
              <li>
                <input type="checkbox" />
                <span>Veg</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Non-Veg</span>
              </li>
            </div>
          </div>

          <div className="sidebar-rating">
            <h2>Rating</h2>

            <div className="sidebar-rating-list">
              <li>
                <input type="radio" />4 stars and above
              </li>
              <li>
                <input type="radio" />3 stars and above
              </li>
              <li>
                <input type="radio" />2 stars and above
              </li>
              <li>
                <input type="radio" />1 stars and above
              </li>
            </div>
          </div>

          <div className="sidebar-sortby-price">
            <h2>Sort By</h2>
            <div className="sidebar-sortby-price-list">
              <li>
                <input type="radio" name="" id="" />
                Price- Low to High
              </li>
              <li>
                <input type="radio" name="" id="" />
                Price- High to Low
              </li>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
