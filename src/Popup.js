import React from "react";

const Popup = ({ alert, id, deleteItemHandler, name }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <p>Delete {name} from list?</p>
        <h4 onClick={() => alert(false)}>No</h4>
        <h4 onClick={() => deleteItemHandler(id)}>Yes</h4>
      </div>
    </div>
  );
};

export default Popup;
