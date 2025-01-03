import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data?.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))
        : ""}
    </ul>
  );
};

export default Suggestions;
