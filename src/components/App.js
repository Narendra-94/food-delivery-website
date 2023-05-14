import React from "react";
import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { WishList } from "./pages/Wishlist";
import { Header } from "../components/Header";

import "../components/style.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </>
  );
};
