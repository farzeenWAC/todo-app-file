import React, { useState } from "react";
import ToDoList from "./ToDoList";

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    showText: false,
    bgColor: "",
    message: "",
  });
  const [list, setList] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
    if (item.name) {
      item.name &&
        setItem({
          name: "",
          showText: true,
          bgColor: "green",
          message: "Item Added Succesfullay",
        });
      setList((prevState) => {
        return [...prevState, { name: item.name, id: Math.random() }];
      });
    }

    if (!item.name) {
      setItem({
        showText: true,
        message: "Item field cannot be null",
        bgColor: "red",
      });
    }
    setTimeout(() => {
      setItem({ showText: false });
    }, 2000);
  };

  const deleteItemHandler = (id) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
  };
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
          onChange={(e) =>
            setItem({
              name: e.target.value,
              showText: true,
              message: "typing.....",
            })
          }
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
