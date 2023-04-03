import React from "react";

export default function Card({ movie }) {
  return (
    <div
      className="w-[180px] h-[270px] bg-[red] p-2 flex items-end"
      style={{
        background: `url(${`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}) no-repeat center/contain`,
      }}
    >
      <button className="p-1 w-full bg-[#26567E] hover:bg-[#2c628e] text-white rounded-sm">
        Whatch now
      </button>
    </div>
  );
}
