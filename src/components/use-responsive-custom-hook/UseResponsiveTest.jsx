import React from "react";
import useResponsive from "./useResponsive";

const UseResponsiveTest = () => {
  const windowSize = useResponsive();
  const { width, height } = windowSize;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Window Resize / Use Responsive Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseResponsiveTest;
