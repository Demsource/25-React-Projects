import React from "react";
import useFetch from "./useFetch";
import "./UseFetchHookTest.css";

const UseFetchHookTest = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="use-fetch-hook-test">
      <div>
        <h1>Use Fetch Hook</h1>
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {data?.products?.length &&
          data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))}
      </div>
    </div>
  );
};

export default UseFetchHookTest;
