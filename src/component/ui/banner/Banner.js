import React from "react";

export default function Banner({ movie }) {
  return (
    <div
      className="w-full h-[400px] rounded-md flex items-end"
      style={{
        background: ` url(${`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`})  no-repeat center/cover`,
        position: "relative",
      }}
    >
      <div
        className="flex flex-col justify-end pb-3 pt-[100px] px-3 gap-2 absolute h-full w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0) 19.79%, #0F2940 96.6%)",
        }}
      >
        <h4 className="text-white text-4xl">{movie.title}</h4>
        <span className="text-white">{movie.overview?.slice(0, 150)} ...</span>
        <button className="py-2 px-5 max-w-[400px] bg-[#26567E] hover:bg-[#1d4260] text-white rounded-sm">
          Whatch now
        </button>
      </div>
    </div>
  );
}
