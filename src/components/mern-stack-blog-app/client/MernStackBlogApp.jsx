import React from "react";
import GlobalState from "./context";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddBlog from "./pages/add-blog";

const MernStackBlogApp = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-blog" element={<AddBlog />} />
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
};

export default MernStackBlogApp;
