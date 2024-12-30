import React, { useEffect, useState } from "react";
import "./LoadMoreData.css";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();

      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products?.length && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) return <div className="loading">Loading Data...</div>;
  if (errorMsg) return <div className="loading">Error occured: {errorMsg}</div>;

  return (
    <div className="load-more-data">
      <div className="product-container">
        {products &&
          products.length &&
          products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton && <p>You have reached to 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMoreData;
