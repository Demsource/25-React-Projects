import React, { useRef } from "react";
import "./ScrollToSection.css";

const ScrollToSection = () => {
  const ref = useRef(null);

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#9999c3",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#06bcc1",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#c5d8d1",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#BB999C",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#f4d1ae",
      },
    },
  ];

  function handleScrollToSection() {
    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((item, i) => (
        <div ref={i === 3 ? ref : null} style={item.style} key={i}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
