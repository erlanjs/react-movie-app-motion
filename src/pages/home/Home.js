import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../component/ui/card/Card";
import Banner from "../../component/ui/banner/Banner";
import Pagination from "../../component/ui/pagination/Pagination";
import Spiner from "../../svg/Spiner";
import TvShow from "../../component/tvShow/TvShow";
import Popup from "../../component/ui/popap/Popup";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [oneMovie, setOneMovie] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPopularMovies();
  }, [page]);

  function getPopularMovies() {
    const randomNumber = Math.floor(Math.random() * 20);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=${page}`
      )
      .then(({ data }) => {
        setMovies(data);
        setOneMovie(data.results[randomNumber]);
        setLoading(false);
      });
  }

  const tabItems = ["Movie", "Tv Show", "Anime"];

  function selectTabs(index) {
    setSelectedTab(index);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mt-4 ml-3">
        {tabItems.map((tabItem, index) => (
          <sapn
            className="cursor-pointer text-lg"
            style={{ color: index === selectedTab ? "black" : "#A0ADBA" }}
            onClick={() => selectTabs(index)}
          >
            {tabItem}
          </sapn>
        ))}
      </div>
      {selectedTab === 0 && (
        <>
          <div className="mt-9">
            <Banner movie={oneMovie} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            {loading ? (
              <Spiner />
            ) : (
              movies?.results?.map((movie) => <Card movie={movie} />)
            )}
          </div>
          <Pagination
            currentPage={page}
            allPages={movies.total_pages}
            onChangePage={(page) => setPage(page)}
          />
        </>
      )}
      {selectedTab === 2 && <TvShow />}
    </div>
  );
}
