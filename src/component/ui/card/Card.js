import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ movie }) {
  const navigate = useNavigate();

  function clickButton() {
    navigate(`/movies-details/${movie?.id}`);
  }

  return (
    <div
      className="w-[180px] h-[270px] bg-[red] p-2 flex items-end"
      style={{
        background: `url(${`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}) no-repeat center/contain`,
      }}
    >
      <button
        className="p-1 w-full bg-[#26567E] hover:bg-[#2c628e] text-white rounded-sm"
        onClick={clickButton}
      >
        Whatch now
      </button>
    </div>
  );
}
