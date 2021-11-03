import React from "react";
import SingleItem from "./SingleItem";

const ToDoList = ({ list, deleteItemHandler }) => {
  return (
    <div className="todolist">
      {list.map((item, index) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            index={index}
            deleteItemHandler={deleteItemHandler}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
