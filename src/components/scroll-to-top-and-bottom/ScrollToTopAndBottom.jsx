import React, { useRef } from "react";
import useFetch from "./useFetch";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }


  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error occured: {error}</h1>;

  return (
    <div className="scroll-to-top-and-bottom" style={{ textAlign: "center" }}>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyleType: "none" }}>
        {data?.products?.length &&
          data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>Page Bottom</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
