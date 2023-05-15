import React from "react";

import { Footer } from "../Footer";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";

export const Home = () => {
  return (
    <div className="content">
      <PageInformation />
      <Categories />
      <Footer />
    </div>
  );
};
