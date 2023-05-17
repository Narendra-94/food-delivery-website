import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./components/App";

import { makeServer } from "./server";
import { HomeProvider } from "./context/HomeContext";
import { FoodListProvider } from "./context/FoodListContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <HomeProvider>
        <FoodListProvider>
          <App />
        </FoodListProvider>
      </HomeProvider>
    </Router>
  </React.StrictMode>
);
