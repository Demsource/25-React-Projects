import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./Header";
import "./ShoppingCartApp.css";
import { Provider } from "react-redux";
import store from "./store/store";

const ShoppingCartApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default ShoppingCartApp;
