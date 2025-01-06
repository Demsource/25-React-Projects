import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Recipe from "../../recipe/Recipe";

const Favorites = () => {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList?.length ? (
        favouritesList.map((recipeItem, index) => (
          <Recipe key={index} item={recipeItem} />
        ))
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Your favourites list will be shown here
        </p>
      )}
    </div>
  );
};

export default Favorites;
