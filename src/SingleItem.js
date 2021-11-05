import React, { useState } from "react";
import Popup from "./Popup";
import { useForm } from "./useForm";

const SingleItem = ({ name, index, id, deleteItemHandler }) => {
  const { showAlert, setShowAlert } = useForm();
  return (
    name && (
      <div>
        {showAlert && (
          <Popup
            name={name}
            alert={setShowAlert}
            id={id}
            deleteItemHandler={deleteItemHandler}
          />
        )}
        <div className="single-item">
          <div>
            {index + 1}. {name}
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={() => setShowAlert(true)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default SingleItem;
