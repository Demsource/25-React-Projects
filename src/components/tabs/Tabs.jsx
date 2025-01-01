import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="tabs">
      <div className="heading">
        {tabsContent?.map((tab, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tab.label}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "green" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
