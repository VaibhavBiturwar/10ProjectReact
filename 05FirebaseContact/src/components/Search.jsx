import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function Search({ onSetShow, onChange }) {
  return (
    <div className="flex flex-row justify-between mt-4 mx-4 gap-3">
      <input
        type="text"
        className="flex flex-grow rounded-md bg-transparent border-white border-2 max-h-12 "
        onChange={onChange}
      />
      <IoIosAddCircle className="text-5xl text-white" onClick={onSetShow} />
    </div>
  );
}
