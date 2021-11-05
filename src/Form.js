import React from "react";
import ToDoList from "./ToDoList";
import { useForm } from "./useForm";

const Form = () => {
  const { item, list, addItemHandler, deleteItemHandler, itemHandler } =
    useForm();
  return (
    <div>
      <form onSubmit={addItemHandler} className="form">
        {item.showText && (
          <div className="alert-text" style={{ color: item.bgColor }}>
            {item.message}
          </div>
        )}
        <input
          className="form-text"
          type="text"
          placeholder="Add a todo item"
          value={item.name}
          onChange={itemHandler}
        />
        <button className="form-button" type="submit">
          Add Todo
        </button>
      </form>
      <ToDoList list={list} deleteItemHandler={deleteItemHandler} />
    </div>
  );
};

export default Form;
