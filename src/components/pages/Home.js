import React, { useContext } from "react";
import { Footer } from "../Footer";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";
import { FoodListContext } from "../../context/FoodListContext";

export const Home = () => {
  const { state } = useContext(FoodListContext);
  return (
    <div className="content">
      <PageInformation />
      <Categories />
      <Footer />
    </div>
  );
};
