import { useDispatch, useSelector } from "react-redux";
import { Card } from "../card";
import { add } from "../../redux/todo";
import React from "react";

export const CardList = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const input = React.useRef(null);

  const submit = (e) => {
    e.preventDefault();

    if (input.current.value.trim() == "") {
        input.current.value = "";
        return
    }

    dispatch(add({ id: Date.now(), name: input.current.value }));
    input.current.value = "";
  };

  return (
    <>
      <div className="container">
      <form className="border-2 border-blue-500  flex justify-center items-center flex-wrap my-5 gap-5 p-5 rounded-lg" onSubmit={submit}>
        <input className="border-2 text-center border-blue-500 max-w-lg w-full py-3 px-3 bg-[#252525]" placeholder="enter todo" ref={input} type="text" name="name" />
        <button className="py-3 px-6 rounded-lg border-2  bg-blue-700 text-white" type="submit">Add To</button>
      </form>
      <div className="grid grid-cols-1 gap-5">
      {todoList.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      </div>
      </div>
    </>
  );
}
