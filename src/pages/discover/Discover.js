import React from "react";
import Button from "../../component/ui/button/Button";
import { useSearchParams } from "react-router-dom";
import SearchBlock from "../../component/searchBlock/SearchBlock";
import Home from "../home/Home";

export default function Discover() {
  let [searchParams, setSearchParams] = useSearchParams();

  function searchMovies(value) {
    setSearchParams(`search=${value}`);
  }

  const searchValue = searchParams.get("search");

  return (
    <div className="w-full">
      <div className="w-full px-2 pt-3 flex gap-2">
        <input
          type="search"
          placeholder="Найти фильм, сериал, персону......"
          className="w-full px-3 py-3 border-2 border-solid border-red-[#A2AEBB] outline-none rounded-md"
          onChange={(e) => searchMovies(e.target.value)}
          value={searchValue}
        />
        <Button>Искать</Button>
      </div>

      {searchValue ? <SearchBlock /> : <Home />}
    </div>
  );
}
