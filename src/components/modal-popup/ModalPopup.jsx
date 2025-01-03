import React from "react";
import "./ModalPopup.css";

const ModalPopup = ({ header, body, footer, onClose }) => {
  return (
    <div className="modal-popup">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : <h2>Header</h2>}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default ModalPopup;
