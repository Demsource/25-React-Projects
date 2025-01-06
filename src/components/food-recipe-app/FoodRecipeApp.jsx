import React from "react";
import "./FoodRecipeApp.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
import GlobalState from "./context/Context";

const FoodRecipeApp = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <div>
          <div className="min-h-screen p-6 bg-white text-grey-600 text-lg">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favourites" element={<Favorites />} />
              <Route path="/recipe/:id" element={<Details />} />
            </Routes>
          </div>
        </div>
      </GlobalState>
    </BrowserRouter>
  );
};

export default FoodRecipeApp;
