import React, { createContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();

      dispatch({
        type: "FETCH_SUCCESSFUL_HOME_DATA",
        payload: data.categories,
      });
    };
    getData();
  }, []);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};
