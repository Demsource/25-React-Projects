import React, { useContext } from "react";
import "../FoodRecipeApp.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink className="text-black" to={"/"}>Food Recipe</NavLink>
      </h2>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          name="search"
          placeholder="Enter Items... e.g: Apple, Banana, Mango"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-green-100 focus:shadow-green-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
