import React from "react";

export default function Button({ onClick, className = "", style, children }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={
        "px-5 py-3 border-2 rounded-md border-none text-white bg-[#26567E] " +
        className
      }
    >
      {children}
    </button>
  );
}
