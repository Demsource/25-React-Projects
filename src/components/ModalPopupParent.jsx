import React, { useState } from "react";
import ModalPopup from "./ModalPopup";

const ModalPopupParent = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      </div>
      {showModalPopup && (
        <ModalPopup
          onClose={onClose}
          header={<h1>Customized Header</h1>}
          body={<div>Customized body</div>}
          footer={<h1>Customized Footer</h1>}
        />
      )}
    </div>
  );
};

export default ModalPopupParent;
