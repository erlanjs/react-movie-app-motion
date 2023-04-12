import axios from "axios";
import React, { useEffect, useState } from "react";
import Spiner from "../../svg/Spiner";
import Pagination from "../ui/pagination/Pagination";
import Card from "../ui/card/Card";
import TvShow from "../tvShow/TvShow";
import { useSearchParams } from "react-router-dom";

export default function SearchBlock() {
  let [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const search = searchParams.get("search");

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [search, page]);

  function getMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f42c53f4f985e0480ab807c5d464b681&query=${search}&page=${page}&language=ru-RU`
      )
      .then(({ data }) => {
        setMovies(data);
        setLoading(false);
      });
  }

  return (
    <div>
      <>
        <div className="flex flex-wrap gap-3  mt-9">
          {loading ? (
            <Spiner />
          ) : (
            movies?.results
              .filter((el) => el?.poster_path)
              ?.map((movie) => <Card movie={movie} />)
          )}
        </div>
        <Pagination
          currentPage={page}
          allPages={movies.total_pages}
          onChangePage={(page) => setPage(page)}
        />
      </>
    </div>
  );
}
