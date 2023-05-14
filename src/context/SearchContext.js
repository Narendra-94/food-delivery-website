import React, { createContext, useEffect, useReducer } from "react";
import { foodItems } from "../components/data";
import { reducer, initialState } from "../reducer/reducer";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_SUCCESSFULL", payload: foodItems.categories });
  }, []);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
