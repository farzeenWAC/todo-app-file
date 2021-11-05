import React, { useState } from "react";

export const useForm = () => {
  const [item, setItem] = useState({
    name: "",
    showText: false,
    bgColor: "",
    message: "",
  });
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const itemHandler = (e) => {
    setItem({
      name: e.target.value,
    });
  };

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
  return {
    item,
    setItem,
    list,
    setList,
    itemHandler,
    addItemHandler,
    deleteItemHandler,
    showAlert,
    setShowAlert,
  };
};
