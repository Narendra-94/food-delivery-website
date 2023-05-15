import React from "react";
import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { WishList } from "./pages/Wishlist";
import { Header } from "../components/Header";
import { FoodItems } from "./pages/FoodItems";

import "../components/style.css";
import "../components/FoodItems.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/foodItems" element={<FoodItems />} />
      </Routes>
    </>
  );
};
