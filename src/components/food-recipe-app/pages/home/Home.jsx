import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Recipe from "../../recipe/Recipe";

const Home = () => {
  const { loading, errorMsg, recipeList } = useContext(GlobalContext);

  if (loading) return <div>Loading...</div>;
  if (errorMsg) return <div>Error occured: {errorMsg}</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList?.length ? (
        recipeList.map((recipeItem, index) => (
          <Recipe key={index} item={recipeItem} />
        ))
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show. Please search something
        </p>
      )}
    </div>
  );
};

export default Home;
