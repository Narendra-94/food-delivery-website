import React, { useContext } from "react";

import { Footer } from "../Footer";
import { Categories } from "../Categories";

import { SearchContext } from "../../context/SearchContext";
import { PageInformation } from "../PageInformation";

export const Home = () => {
  const { state } = useContext(SearchContext);
  console.log(state.food);
  return (
    <div className="content">
      <PageInformation />
      <Categories />
      <Footer />
    </div>
  );
};
