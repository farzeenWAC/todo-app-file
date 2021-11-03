import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";

const SingleItem = ({ name, index, id, deleteItemHandler }) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    name && (
      <div>
        {showAlert && (
          <Popup
            alert={setShowAlert}
            id={id}
            deleteItemHandler={deleteItemHandler}
          />
        )}
        <div className="single-item">
          <div>
            {index + 1}. {name}
          </div>
          <FontAwesomeIcon
            className="single-item_trash"
            onClick={() => setShowAlert(true)}
            icon={faTrash}
          />
        </div>
      </div>
    )
  );
};

export default SingleItem;
