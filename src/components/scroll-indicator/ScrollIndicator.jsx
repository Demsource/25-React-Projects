import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getURL) {
    try {
      setLoading(true);

      const response = await fetch(getURL);
      const result = await response.json();

      if (result?.products?.length) {
        setData(result.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (loading) return <h1>Loading data...</h1>;
  if (errorMsg) return <h1>Error occured: {errorMsg}</h1>;

  return (
    <div className="scroll-indicator">
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length &&
          data.map((item, index) => <p key={index}>{item.title}</p>)}
      </div>
    </div>
  );
};

export default ScrollIndicator;
