import React from "react";
import { useDispatch } from "react-redux";
import { editItem, deleteTodo } from "../../redux/todo";

export const Card = ({ name, id }) => {
  const dispatch = useDispatch();

  const changeName = () => {
    const newName = prompt("Enter new Todo");
    dispatch(editItem({ id, name: newName }));
  };
  return (
    <div className="border-2 border-blue-500 flex items-center justify-between flex-wrap gap-5 w-full p-5 rounded-lg">
      <h1 className="text-2xl font-semibold">{name === "" ? "...." : name}</h1>
      <div className="flex justify-end items-center gap-5">
      <button
          className="p-3 text-xs md:text-lg md:py-3 md:px-6 text-center bg-yellow-500 rounded-lg font-bold"
          onClick={changeName}
        >
          edit
        </button>
        
        <button
          className="p-3 text-xs md:text-lg md:py-3 md:px-6  text-center bg-red-500 rounded-lg font-bold"
          onClick={() => dispatch(deleteTodo(id))}
        >
          delete
        </button>
        
      </div>
    </div>
  );
};
