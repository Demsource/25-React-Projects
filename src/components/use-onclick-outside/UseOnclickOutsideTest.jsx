import React, { useRef } from "react";
import { useState } from "react";
import "./UseOnclickOutsideTest.css";
import useOnclickOutside from "./useOnclickOutside";

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setShowContent(false));

  return (
    <div ref={ref} className="use-onclick-outside-test">
      {showContent ? (
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Please click outside in order to close it</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;
