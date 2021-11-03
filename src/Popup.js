import React from "react";

const Popup = ({ alert, id, deleteItemHandler }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <p>Delete this item?</p>
        <h4 onClick={() => alert(false)}>No</h4>
        <h4 onClick={() => deleteItemHandler(id)}>Yes</h4>
      </div>
    </div>
  );
};

export default Popup;
