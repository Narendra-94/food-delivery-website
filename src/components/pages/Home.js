import React, { useState, useEffect } from "react";
import { Footer } from "../Footer";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";
import { Loader } from "../Loader";

const Home = () => {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoader && <Loader />}
      <div className="content">
        <PageInformation />
        <Categories />
        <Footer />
      </div>
    </>
  );
};

export default Home;
